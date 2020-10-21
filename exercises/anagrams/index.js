// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let strA = {}
    let strB = {}

    let lettersA = stringA.replace(/[^\w]/g, "").toLowerCase()
    let lettersB = stringB.replace(/[^\w]/g, "").toLowerCase()

    for(let char of lettersA){
        if(strA[char]){
            strA[char]++
        }else{
            strA[char] = 1
        }
    }

    for(let char of lettersB){
        if(strB[char]){
            strB[char]++
        }else{
            strB[char] = 1
        }
    }

    if(Object.keys(strA).length !== Object.keys(strB).length){
        return false
    }

    for(let char in strA){
        if(strA[char] !== strB[char]){
            return false
        }
    }

    return true
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB)
// }

// function cleanString(str) {
//     return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')
// }
