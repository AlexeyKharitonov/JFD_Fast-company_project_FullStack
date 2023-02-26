export function compareArrays(first, second) {
    const isEqual = JSON.stringify(first) === JSON.stringify(second);
    return isEqual;
}
