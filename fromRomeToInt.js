function fromRomeToInt(str) {
    return str.split('').map(letterToNumber).reduce((sum, current, i, arr) => {
        if (i < arr.length - 1 && current < arr[i + 1]) {
            return sum - current;
        } else {
            return sum + current;
        }
    }, 0);
}

function letterToNumber(letter){
    switch (letter) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}

