import { ExceptionConverter, type Dictionary, type DriverException } from '@mikro-orm/core';
export declare class PostgreSqlExceptionConverter extends ExceptionConverter {
    /**
     * @link http://www.postgresql.org/docs/9.4/static/errcodes-appendix.html
     * @link https://github.com/doctrine/dbal/blob/master/src/Driver/AbstractPostgreSQLDriver.php
     */
    convertException(exception: Error & Dictionary): DriverException;
}
