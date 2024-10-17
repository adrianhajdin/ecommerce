export function isAsyncIterable(value) {
    return value?.[Symbol.asyncIterator] != null;
}
