export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    selectionSortHelper(array.length - 1, auxiliaryArray, animations);
    return animations;
}

function selectionSortHelper(
    endIdx,
    auxiliaryArray,
    animations
) {
    for (let i = 0; i <= endIdx - 1; i++) {

        var min_idx = i;

        for (let j = i + 1; j <= endIdx; j++) {

            animations.push([j, min_idx, 0]);
            animations.push([j, min_idx, 1]);
            if (auxiliaryArray[j] < auxiliaryArray[min_idx]) {
                min_idx = j;
            }
        }
        animations.push([i, min_idx, 2]);
        animations.push([-1, i, 3]);

        [auxiliaryArray[i], auxiliaryArray[min_idx]] = [auxiliaryArray[min_idx], auxiliaryArray[i]];
    }
    animations.push([-1, endIdx, 3]);
}