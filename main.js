function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    };
    
    let left = arr.slice(0,((arr.length/2)));
    let right = arr.slice((arr.length/2),arr.length);
    
    left = mergeSort(left);
    right = mergeSort(right);

    function merge(arr1, arr2) {
        let result = [];

        if (arr1 == undefined) {
            return arr2;
        } else if (arr2 == undefined) {
            return arr1;
        }

        let i=0, j=0, k=0;
        while (k < (arr1.length + arr2.length)) {
            if (arr1[i] < arr2[j] || arr2[j] == undefined) {
                result[k++] = arr1[i++]
            } else if (arr2[j] < arr1[i] || arr1[i] == undefined) {
                result[k++] = arr2[j++]
            }
        }
        return result;
    }  
    
    return merge(left, right);    
}