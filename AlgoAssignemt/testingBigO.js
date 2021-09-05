Number.prototype.isPrime = function() {
    let sqrt = Math.sqrt(this)
    for( let i=2; i<=sqrt; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e5 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// Fibonacci Series
// recursive (This took 18.581836700439453 milliseconds to run)
const start = performance.now();
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(20);
console.log(`This took ${performance.now() - start} milliseconds to run`);
// iterative (This took 0.044435977935791016 milliseconds to run)
const start = performance.now();
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);
console.log(`This took ${performance.now() - start} milliseconds to run`); 

// Reversing a string
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
                Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias \
                assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae \
                fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// const reversed1 = story.split("").reverse().join("");
// console.log(reversed1)

const reverseString = (arr) => {
    var newString = "";
    for (var i = arr.length - 1; i >= 0; i--) {
        newString += arr[i];
    }
    return newString;
}
console.log(reverseString(story))




