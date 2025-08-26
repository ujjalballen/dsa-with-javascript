// it's O(n) time conplexity


function maxSlot(n){
    for(let i =0; i<= Math.max(5, n); i++){
        console.log(i)
    }
};

maxSlot(1)


// it's O(1) complexity

function minSlot(n){
    for(let i=0; i<= Math.min(5, n); i++){
        console.log(i);
    }
}


minSlot(1)