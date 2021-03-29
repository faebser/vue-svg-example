const NUM_POINTS = 60;

export function getPoints () {
    // returns an iterator
    return generatePoints();
}

export function getAmountPoints () {
    return NUM_POINTS;
}

// streaming api stub
async function * generatePoints() {
    for (let index = 0; index < NUM_POINTS; index++) {
         // Wow, can use await!
        await new Promise(resolve => setTimeout( resolve,  Math.random() * 1000 ));
        // Math.random is inclusive of 0, but not 1
        // in production a better PRNG is needed
        yield [ Math.random(), Math.random() ];
    }
}