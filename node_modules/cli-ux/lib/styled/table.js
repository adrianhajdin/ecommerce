"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const command_1 = require("@oclif/command");
const screen_1 = require("@oclif/screen");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const capitalize_1 = tslib_1.__importDefault(require("lodash/capitalize"));
const sumBy_1 = tslib_1.__importDefault(require("lodash/sumBy"));
const js_yaml_1 = require("js-yaml");
const util_1 = require("util");
const sw = require('string-width');
const { orderBy } = require('natural-orderby');
class Table {
    constructor(data, columns, options = {}) {
        this.data = data;
        // assign columns
        this.columns = Object.keys(columns).map((key) => {
            const col = columns[key];
            const extended = col.extended || false;
            const get = col.get || ((row) => row[key]);
            const header = typeof col.header === 'string' ? col.header : capitalize_1.default(key.replace(/_/g, ' '));
            const minWidth = Math.max(col.minWidth || 0, sw(header) + 1);
            return {
                extended,
                get,
                header,
                key,
                minWidth,
            };
        });
        // assign options
        const { columns: cols, filter, csv, output, extended, sort, title, printLine } = options;
        this.options = {
            columns: cols,
            output: csv ? 'csv' : output,
            extended,
            filter,
            'no-header': options['no-header'] || false,
            'no-truncate': options['no-truncate'] || false,
            printLine: printLine || ((s) => process.stdout.write(s + '\n')),
            rowStart: ' ',
            sort,
            title,
        };
    }
    display() {
        // build table rows from input array data
        let rows = this.data.map(d => {
            const row = {};
            for (const col of this.columns) {
                let val = col.get(d);
                if (typeof val !== 'string')
                    val = util_1.inspect(val, { breakLength: Infinity });
                row[col.key] = val;
            }
            return row;
        });
        // filter rows
        if (this.options.filter) {
            /* eslint-disable-next-line prefer-const */
            let [header, regex] = this.options.filter.split('=');
            const isNot = header[0] === '-';
            if (isNot)
                header = header.substr(1);
            const col = this.findColumnFromHeader(header);
            if (!col || !regex)
                throw new Error('Filter flag has an invalid value');
            rows = rows.filter((d) => {
                const re = new RegExp(regex);
                const val = d[col.key];
                const match = val.match(re);
                return isNot ? !match : match;
            });
        }
        // sort rows
        if (this.options.sort) {
            const sorters = this.options.sort.split(',');
            const sortHeaders = sorters.map(k => k[0] === '-' ? k.substr(1) : k);
            const sortKeys = this.filterColumnsFromHeaders(sortHeaders).map(c => {
                return ((v) => v[c.key]);
            });
            const sortKeysOrder = sorters.map(k => k[0] === '-' ? 'desc' : 'asc');
            rows = orderBy(rows, sortKeys, sortKeysOrder);
        }
        // and filter columns
        if (this.options.columns) {
            const filters = this.options.columns.split(',');
            this.columns = this.filterColumnsFromHeaders(filters);
        }
        else if (!this.options.extended) {
            // show extented columns/properties
            this.columns = this.columns.filter(c => !c.extended);
        }
        this.data = rows;
        switch (this.options.output) {
            case 'csv':
                this.outputCSV();
                break;
            case 'json':
                this.outputJSON();
                break;
            case 'yaml':
                this.outputYAML();
                break;
            default:
                this.outputTable();
        }
    }
    findColumnFromHeader(header) {
        return this.columns.find(c => c.header.toLowerCase() === header.toLowerCase());
    }
    filterColumnsFromHeaders(filters) {
        // unique
        filters = [...(new Set(filters))];
        const cols = [];
        filters.forEach(f => {
            const c = this.columns.find(c => c.header.toLowerCase() === f.toLowerCase());
            if (c)
                cols.push(c);
        });
        return cols;
    }
    getCSVRow(d) {
        const values = this.columns.map(col => d[col.key] || '');
        const needToBeEscapedForCsv = (e) => {
            // CSV entries containing line breaks, comma or double quotes
            // as specified in https://tools.ietf.org/html/rfc4180#section-2
            return e.includes('"') || e.includes('\n') || e.includes('\r\n') || e.includes('\r') || e.includes(',');
        };
        const lineToBeEscaped = values.find(needToBeEscapedForCsv);
        return values.map(e => lineToBeEscaped ? `"${e.replace('"', '""')}"` : e);
    }
    resolveColumnsToObjectArray() {
        // tslint:disable-next-line:no-this-assignment
        const { data, columns } = this;
        return data.map((d) => {
            return columns.reduce((obj, col) => {
                return Object.assign(Object.assign({}, obj), { [col.key]: d[col.key] || '' });
            }, {});
        });
    }
    outputJSON() {
        this.options.printLine(JSON.stringify(this.resolveColumnsToObjectArray(), undefined, 2));
    }
    outputYAML() {
        this.options.printLine(js_yaml_1.safeDump(this.resolveColumnsToObjectArray()));
    }
    outputCSV() {
        // tslint:disable-next-line:no-this-assignment
        const { data, columns, options } = this;
        if (!options['no-header']) {
            options.printLine(columns.map(c => c.header).join(','));
        }
        data.forEach((d) => {
            const row = this.getCSVRow(d);
            options.printLine(row.join(','));
        });
    }
    outputTable() {
        // tslint:disable-next-line:no-this-assignment
        const { data, columns, options } = this;
        // column truncation
        //
        // find max width for each column
        for (const col of columns) {
            // convert multi-line cell to single longest line
            // for width calculations
            const widthData = data.map((row) => {
                const d = row[col.key];
                const manyLines = d.split('\n');
                if (manyLines.length > 1) {
                    return '*'.repeat(Math.max(...manyLines.map((r) => sw(r))));
                }
                return d;
            });
            const widths = ['.'.padEnd(col.minWidth - 1), col.header, ...widthData.map((row) => row)].map(r => sw(r));
            col.maxWidth = Math.max(...widths) + 1;
            col.width = col.maxWidth;
        }
        // terminal width
        const maxWidth = screen_1.stdtermwidth - 2;
        // truncation logic
        const shouldShorten = () => {
            // don't shorten if full mode
            if (options['no-truncate'] || (!process.stdout.isTTY && !process.env.CLI_UX_SKIP_TTY_CHECK))
                return;
            // don't shorten if there is enough screen width
            const dataMaxWidth = sumBy_1.default(columns, c => c.width);
            const overWidth = dataMaxWidth - maxWidth;
            if (overWidth <= 0)
                return;
            // not enough room, short all columns to minWidth
            for (const col of columns) {
                col.width = col.minWidth;
            }
            // if sum(minWidth's) is greater than term width
            // nothing can be done so
            // display all as minWidth
            const dataMinWidth = sumBy_1.default(columns, c => c.minWidth);
            if (dataMinWidth >= maxWidth)
                return;
            // some wiggle room left, add it back to "needy" columns
            let wiggleRoom = maxWidth - dataMinWidth;
            const needyCols = columns.map(c => ({ key: c.key, needs: c.maxWidth - c.width })).sort((a, b) => a.needs - b.needs);
            for (const { key, needs } of needyCols) {
                if (!needs)
                    continue;
                const col = columns.find(c => key === c.key);
                if (!col)
                    continue;
                if (wiggleRoom > needs) {
                    col.width = col.width + needs;
                    wiggleRoom -= needs;
                }
                else if (wiggleRoom) {
                    col.width = col.width + wiggleRoom;
                    wiggleRoom = 0;
                }
            }
        };
        shouldShorten();
        // print table title
        if (options.title) {
            options.printLine(options.title);
            // print title divider
            options.printLine(''.padEnd(columns.reduce((sum, col) => sum + col.width, 1), '='));
            options.rowStart = '| ';
        }
        // print headers
        if (!options['no-header']) {
            let headers = options.rowStart;
            for (const col of columns) {
                const header = col.header;
                headers += header.padEnd(col.width);
            }
            options.printLine(chalk_1.default.bold(headers));
            // print header dividers
            let dividers = options.rowStart;
            for (const col of columns) {
                const divider = ''.padEnd(col.width - 1, '─') + ' ';
                dividers += divider.padEnd(col.width);
            }
            options.printLine(chalk_1.default.bold(dividers));
        }
        // print rows
        for (const row of data) {
            // find max number of lines
            // for all cells in a row
            // with multi-line strings
            let numOfLines = 1;
            for (const col of columns) {
                const d = row[col.key];
                const lines = d.split('\n').length;
                if (lines > numOfLines)
                    numOfLines = lines;
            }
            const linesIndexess = [...new Array(numOfLines).keys()];
            // print row
            // including multi-lines
            linesIndexess.forEach((i) => {
                let l = options.rowStart;
                for (const col of columns) {
                    const width = col.width;
                    let d = row[col.key];
                    d = d.split('\n')[i] || '';
                    const visualWidth = sw(d);
                    const colorWidth = (d.length - visualWidth);
                    let cell = d.padEnd(width + colorWidth);
                    if ((cell.length - colorWidth) > width || visualWidth === width) {
                        cell = cell.slice(0, width - 2) + '… ';
                    }
                    l += cell;
                }
                options.printLine(l);
            });
        }
    }
}
function table(data, columns, options = {}) {
    new Table(data, columns, options).display();
}
exports.table = table;
(function (table) {
    table.Flags = {
        columns: command_1.flags.string({ exclusive: ['extended'], description: 'only show provided columns (comma-separated)' }),
        sort: command_1.flags.string({ description: 'property to sort by (prepend \'-\' for descending)' }),
        filter: command_1.flags.string({ description: 'filter property by partial string matching, ex: name=foo' }),
        csv: command_1.flags.boolean({ exclusive: ['no-truncate'], description: 'output is csv format [alias: --output=csv]' }),
        output: command_1.flags.string({
            exclusive: ['no-truncate', 'csv'],
            description: 'output in a more machine friendly format',
            options: ['csv', 'json', 'yaml'],
        }),
        extended: command_1.flags.boolean({ exclusive: ['columns'], char: 'x', description: 'show extra columns' }),
        'no-truncate': command_1.flags.boolean({ exclusive: ['csv'], description: 'do not truncate output to fit screen' }),
        'no-header': command_1.flags.boolean({ exclusive: ['csv'], description: 'hide table header from output' }),
    };
    // eslint-disable-next-line no-inner-declarations
    function flags(opts) {
        if (opts) {
            const f = {};
            const o = (opts.only && typeof opts.only === 'string' ? [opts.only] : opts.only) || Object.keys(table.Flags);
            const e = (opts.except && typeof opts.except === 'string' ? [opts.except] : opts.except) || [];
            o.forEach((key) => {
                if (e.includes(key))
                    return;
                f[key] = table.Flags[key];
            });
            return f;
        }
        return table.Flags;
    }
    table.flags = flags;
})(table = exports.table || (exports.table = {}));
