'use strict';

const sorting = (initialArray, sortKeys) => {
    if (sortKeys == undefined) {
        return sortKeys; 
    }
    if (initialArray == undefined) {
        return initialArray;
    }
    for (let value of sortKeys.reverse()) {
        initialArray.sort((a,b) => {
            return ((a[value] < b[value]) ? -1 : 0);
        })
    }
    return initialArray;
}

