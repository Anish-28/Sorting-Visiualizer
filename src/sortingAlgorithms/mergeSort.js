export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations, array.length - 1);
    return animations;
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
    size
) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations, size);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations, size);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations, size);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
    size
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, j, 0]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, j, 1]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            // We overwrite the value at index k in the original array with the
            // value at index i in the auxiliary array.
            animations.push([k, auxiliaryArray[i], 2]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            // We overwrite the value at index k in the original array with the
            // value at index j in the auxiliary array.
            animations.push([k, auxiliaryArray[j], 2]);
            mainArray[k++] = auxiliaryArray[j++];
        }

        if (middleIdx - startIdx + endIdx - middleIdx === size)
            animations.push([-1, k - 1, 3]);
    }
    while (i <= middleIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, i, 0]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, i, 1]);
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i], 2]);
        mainArray[k++] = auxiliaryArray[i++];
        if (middleIdx - startIdx + endIdx - middleIdx === size)
            animations.push([-1, k - 1, 3]);
    }
    while (j <= endIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([j, j, 0]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([j, j, 1]);
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j], 2]);
        mainArray[k++] = auxiliaryArray[j++];
        if (middleIdx - startIdx + endIdx - middleIdx === size)
            animations.push([-1, k - 1, 3]);
    }
}

