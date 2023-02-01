const arr = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11, 13, 12, 14, 15, 16, 17, 18, 19, 20]

const quarto = Math.floor(arr.length / 4)
const half = arr.length / 2
const poin = 1

for (let i = 0; i < arr.length; i++) {
    if (i < quarto) {
        console.log(`${arr[i]} -> ${arr[half - i - poin]} -> ${arr[i]}`)
    } else if (i > quarto - i && i < half) {
        console.log(`${arr[quarto + i]} -> ${arr[quarto + arr.length - i - poin]} -> ${arr[quarto + half - i - poin]}`)
    }
}