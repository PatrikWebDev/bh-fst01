
const dividables = (numbers, divisors) => {
    let result = numbers.filter(number => divisors.every(divisor => !(number % divisor)))
    return result
};
console.log(dividables([1, 5, 3, 8, 10], [2, 4]));

const legalStrings = (Strings, charStr) => {
    let selectedResult = []
    Strings.forEach(eachString => {
        return eachString.split('').forEach(letter => {
            if (letter === charStr && !(selectedResult.find(element => element == eachString))){
                selectedResult.push(eachString)
                }
        })
    });
    return selectedResult
}

console.log(legalStrings(["aaaa", "b", "ca"], "a"));

const nums = [1, 2, 3, 4, 5, -6, -7, -8, -9, 10]

const getMax = (numberArray) => {
    let supportVar = numberArray[0];
    numberArray.forEach(element => {
        if( element > supportVar) supportVar = element 
    })
    return supportVar
}

console.log(getMax([1,7,3,73,123,4,0,5]));

const isPermutation = (subject,base)=>{
    let a = subject.split('')
    let b = base.split('')
    if(!(a.length === b.length)) return false;
    let c = a.every(element =>b.includes(element))
    return c
};

console.log(isPermutation('ab', 'ba'))


const condition = (parameter) => parameter > 3;

const select = (arr,cond) =>{
    const conditionTrueArray = [];
    const conditionFalseArray = [];
    arr.forEach(element => {
        if(cond(element) === true ){
            conditionTrueArray.push(element)
        }else{
            conditionFalseArray.push(element)
        }
    })
    let result = [conditionFalseArray, conditionTrueArray];
    return result
};

console.log(select(nums, condition))