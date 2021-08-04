export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    bubbleSortHelper(array.length - 1, auxiliaryArray, animations);
    return animations;
}

function bubbleSortHelper(
    endIdx,
    auxiliaryArray,
    animations
) {
    for (let i = 0; i <= endIdx; i++) {

        for (let j = 0; j <= endIdx - i - 1; j++) {

            animations.push([j, j + 1, 0]);
            animations.push([j, j + 1, 1]);

            if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
                animations.push([j, j + 1, 2]);
                [auxiliaryArray[j], auxiliaryArray[j + 1]] = [auxiliaryArray[j + 1], auxiliaryArray[j]];
            }
        }

        animations.push([-1, endIdx - i, 3]);
    }
}