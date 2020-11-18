// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    if(n = row){
        return
    }

    if (midpoint - row <= column && midpoint + row >= column) {
        level += '#'
    } else {
        level += ' '
    }

    const midpoint = Math.floor((2 * n-1) / 2)

    for(let row = 0; row < n; row++){
        let level = ''

        for(let column = 0; column < 2 * n - 1; column++){

        }
        console.log(level)
    }
}

module.exports = pyramid;

function steps(n, row = 0, stair = '') {
    if (n === row) {
        return
    }
    if (n === stair.length) {
        console.log(stair)
        return steps(n, row + 1)
    }
    if (stair.length <= row) {
        stair += '#'
    } else {
        stair += ' '
    }
    steps(n, row, stair)
}

// function pyramid(n) {
//     const midpoint = Math.floor((2 * n-1) / 2)

//     for(let row = 0; row < n; row++){
//         let level = ''

//         for(let column = 0; column < 2 * n - 1; column++){
//             if (midpoint - row <= column && midpoint + row >= column) {
//                 level += '#'
//             } else {
//                 level += ' '
//             }
//         }
//         console.log(level)
//     }
// }

