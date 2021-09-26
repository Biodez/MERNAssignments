function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}


function fiveHeads() {
    return new Promise( (resolve, reject) => {
        // your code here!
        let headCount = 0;
        let attempts = 0;
        while (headCount < 5) {
            attempts++;
            if (tossCoin() === "heads") {
                resolve(`${tossCoin()} was flipped`)
            } else {
                if (attempts > 100) {
                    reject("The attempt is more than 100")
                }
            }
            headCount++;
        }
     
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );
