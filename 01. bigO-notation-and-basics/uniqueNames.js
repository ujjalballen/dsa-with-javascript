
// Outer loop runs n times (n = names.length).
// and allUniqueNames.includes() is itself a loop. it check every element of allUniqueNames
// so allUniqueNames becomes size n. If allUniqueNames has 100 elements, then it checks 100 times
// so now n * n = O(n²) time complexity

// AND Speace complexity is O(n)
// because it store only unique name, if there is 100 unique names, all wil be includes
// so in short it will store n items


function uniqueNames(names) {
    let allUniqueNames = [];

    for (let i = 0; i < names.length; i++) {
        const element = names[i];

        if (!allUniqueNames.includes(element)) {
            allUniqueNames.push(element);
        }
    };

    return allUniqueNames;
};


const allNames = ['a', 'b', 'c', 'a', 'c', 'd'];

console.log(uniqueNames(allNames))
