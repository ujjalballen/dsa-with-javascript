function anotherLogN(n){
    if(n <= 1){
        console.log('done');
        return;
    };

    console.log('n: ', n);

    anotherLogN(n/2);
};


anotherLogN(8)