const characterCount = (characters) => {
    let charList = {};

    // console.log(characters)

    for (let i = 0; i < characters.length; i++) {
        let character = characters[i].toLowerCase()

        // console.log('character: ', character, i)

        if (charList[character] > 0) {
            charList[character]++ // charList keys value will increase
        } else {
            charList[character] = 1
        }
    }

    return charList;
};

const char = 'abacdefACca';
const result = characterCount(char);

console.log(result);


/* 
Time complexity = O(n)
space complexity = O(n)


*/