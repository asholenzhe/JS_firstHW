function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (map[char]) {
            if (stack.pop() !== map[char]) {
                return false;
            }
        } else {
            return false;
        }
    }
    return stack.length === 0;
}

