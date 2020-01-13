// Alakítsuk arrow functionökké a függvényeket!
// Ahol lehet, hagyjunk el amit csak lehet a szintaxisból!


double = (x) => 2*x; 

invert = (x) => -x;

hello = () => 'hello'


// Alakítsuk function expressionökké az arrow functionöket!

function helloPrefixer(s){
    return 'hello'+s;
}

function doNothing(){};

// Alakítsuk function declaractionné

let advice = function advice (raining){
    if(raining){
        return 'Take your umbrella'
    }
    return 'Take you sunglasses'
}

let isEmpty = function isEmpty(arr){
    return !arr.length
}

let tricky = function tricky(want){
    if(want == false){
        return
    }
}