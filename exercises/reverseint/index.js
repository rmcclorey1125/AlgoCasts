// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// 15 -> 51 


function reverseInt(n) {
    let sign = Math.sign(n)
    // console.log('sign', sign)
    n = parseInt(n.toString().split('').reverse().join(''))
    let ans = n * sign
    return ans
}

module.exports = reverseInt;


// let rev = 0
// rev = rev * 10
// let down = Math.floor(n/10)
// for(let i = 0; i < n.length; i++) 
