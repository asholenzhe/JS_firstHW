function isPalindrome(x) {
    if(x < 0){
        return false;
    }
    let strX = x.toString();
    let strXReverse = strX.split('').reverse().join('');
    return strX === strXReverse;
}


