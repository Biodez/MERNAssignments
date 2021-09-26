function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        // your code here!
        let headCount = 0;
        let attempts = 0;

        while (headCount < 5 && attempts <= 100) {
            attempts++;
            console.log(`${tossCoin()} was flipped`);
            if (tossCoin() === "heads") {
                headCount++;
            } else {
                headCount = 0;
            }
        }
        if (attempts <= 100) {
            resolve(`it took ${attempts} attempts to flip head 5 times`)
        } else {
            reject("Attempts have exceeded 100")
        }
     
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );
