function isTarget(array, target) {
    let result;
    array.forEach((item, i )=> {
        array.forEach((item2, j )=> {
            if(i !== j && item + item2 === target){
                result = [j, i];
            }
        });
    });
    return result;
}




