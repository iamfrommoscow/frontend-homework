'use strict';

const sorting = (initialArray, sortKeys) => {
    if (!Array.isArray(sortKeys) || !Array.isArray(initialArray)) {
        return; 
    }
    for (let value of sortKeys.reverse()) {
        initialArray.sort((a,b) => {
            if (a[value] < b[value]) {
                return -1;
            } else {
                return 0;
            }
        })
    }
    return initialArray;
}

