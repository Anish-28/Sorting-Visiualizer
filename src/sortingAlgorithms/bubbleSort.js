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
){
    for(let i=0;i<=endIdx;i++){

        for(let j=i+1;j<=endIdx;j++){

            animations.push([i,j,0]);
            animations.push([i,j,1]);

            if(auxiliaryArray[i]>auxiliaryArray[j]){
                animations.push([i,j,2]);
                [auxiliaryArray[i],auxiliaryArray[j]]=[auxiliaryArray[j],auxiliaryArray[i]];
            }
        }
    }
    console.log(auxiliaryArray);
}