function removeDuplicates(array) {
    let uniqueIndex = 0;
    if (array.length === 0) {
        return 0;
    }
    array.forEach((value, i) => {
        if (i > 0 && value !== array[uniqueIndex]) {
            uniqueIndex++;
            array[uniqueIndex] = value;
        }
    });
    array.forEach((_, i) => {
        if (i > uniqueIndex) {
            array[i] = '_';
        }
    });
    return uniqueIndex + 1;
}

