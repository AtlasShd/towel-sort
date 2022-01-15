'use strict';

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let result = [];
    let order = 0;
    matrix.forEach(arr => {
        if (++order % 2 == 1) {
            for (let i = 0; i < arr.length; i++) {
                result.push(arr[i]);
            }
        } else {
            for (let i = arr.length - 1; i >= 0; i--) {
                result.push(arr[i]);
            }
        }
    });
    return result;
};
