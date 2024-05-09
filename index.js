function groupChar(arr) {
    let abjad = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i].length === 0) {
                abjad.push([arr[i], 0]);
            } else {
                let isNotInAbjad = true;
                for (let k = 0; k < abjad.length; k++) {
                    if (arr[i][j] === abjad[k][0]) {
                        abjad[k][1]++;
                        isNotInAbjad = false;
                        break;
                    }
                }
                if (isNotInAbjad) {
                    abjad.push([arr[i][j], 1]);
                }
            }
        }
    }

    // selection sort
    for (let i = 0; i < abjad.length - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < abjad.length; j++) {
            if (abjad[j][1] === abjad[maxIndex][1]) {
                if (abjad[j][0] < abjad[maxIndex][0]) {
                    maxIndex = j;
                }
            } else if (abjad[j][1] > abjad[maxIndex][1]) {
                maxIndex = j;
            }
        }
        let temp = abjad[i];
        abjad[i] = abjad[maxIndex];
        abjad[maxIndex] = temp;
    }

    // output
    let result ="";
    for (let i = 0; i < abjad.length; i++) {
        result+=abjad[i][0];
    }

    return result;
}

let data1 = ["Abc", "bCd"];
console.log(groupChar(data1));

let data2 = ["Oke", "One"];
console.log(groupChar(data2));

let data3 = ["Pendanaan", "Terproteksi", "Untuk", "Dampak", "Berarti"];
console.log(groupChar(data3));
