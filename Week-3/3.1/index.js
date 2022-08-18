function sum(...params){
    let sum = 0
    for (let i=0; i<params.length; i++) sum += params[i]
    return sum
}

function square(num){ // a time consuming function
    let result = 0;
    for (let i=0; i<num; i++)
        for (let j=0 ;j<num; j++)
            result++ ;

    return result;
}

function memoise( func ){//will take a functiona dn return a function
    
    //this is cache variable
    const cache = {};
    return function(...args){
        let startTime = new Date(); // just for checking how much time 
        const argsKey = JSON.stringify(args);
        console.log()
        console.log('checking : ', argsKey)

        if (!cache[argsKey]){
            console.log('data not in cache; cashing')
            cache[argsKey] = func(...args)
        }else{
            console.log('data found in cache')
        }
        console.log('time taken : ', new Date()-startTime)
        return cache[argsKey]

    }
}

const memoiseSum = memoise(sum);
const memoiseSquare = memoise(square);


// console.log ( memoiseSum(6) )
// console.log ( memoiseSum(8, 4) )
// console.log ( memoiseSum(6) )
// console.log ( memoiseSum(2, 4, 4) )
// console.log ( memoiseSum(8, 4) )

console.log( memoiseSquare(62351) );
console.log( memoiseSquare(63525) );
console.log( memoiseSquare(75125) );
console.log( memoiseSquare(62351) );
console.log( memoiseSquare(75125) );
console.log( memoiseSquare(63525) );