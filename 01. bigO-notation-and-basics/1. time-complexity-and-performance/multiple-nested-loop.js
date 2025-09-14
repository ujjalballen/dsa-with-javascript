function multiple(n) {
    console.log("n: ", n)

    for (let i = 0; i <= n; i++) {
        console.log('first i: ', i)

        for (let j = 0; j <= n; j++) {

            console.log('i: ', i, "j: ", j)
        }
    }
};



console.log(multiple(2))


// Outer loop runs 3 times (0,1,2)
// Inner loop runs 3 times for each outer loop iteration
// (n + 1) × (n + 1) = (n + 1)² = n² + 2n + 1
// here 2n + 1 drop
// because we only care about the fastest-growing term as n → ∞.
// so it will be O(n²)