function corresponding(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    };


    for (let i = 0; i < arr1.length; i++) {
        let currentIndex = arr2.indexOf(arr1[i] ** 2);

        console.log(currentIndex)

        if(currentIndex === -1){
            return false;
        }


        arr2.splice(currentIndex, 1)
    };

    return true;
}


console.log(corresponding([2, 4, 6], [4, 16, 6]))