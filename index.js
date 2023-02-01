const arr = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11, 13, 12, 14, 15, 16, 17, 18, 19, 20]

for (let i = 0; i < arr.length; i++) {
    if (i < Math.floor(arr.length / 4)) {
        console.log(`${arr[i]} -> ${arr[arr.length / 2 - i -1]} -> ${arr[i]}`)
    } else if (i > Math.floor(arr.length / 4 - i) && i < arr.length / 2) {
        console.log(`${arr[Math.floor(arr.length / 4 ) + i]} -> ${arr[Math.floor(arr.length / 4) + arr.length - i - 1]} -> ${arr[Math.floor(arr.length / 4) + arr.length / 2 - i - 1]}`)
    }
}