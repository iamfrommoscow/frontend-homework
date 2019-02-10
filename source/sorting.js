'use strict';

const sorting = (initialArray, sortKeys) => {
    if (sortKeys == undefined) {
        return undefined; 
    }
    if (initialArray == undefined) {
        return undefined;
    }
    sortKeys.reverse()
    for (let value of sortKeys) {
        initialArray.sort((a,b) => {
            return ((a[value] < b[value]) ? -1 : ((a[value] > b[value]) ? 1 : 0));
        })
    }
    return initialArray;
}

