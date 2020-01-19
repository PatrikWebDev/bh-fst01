// Írjuk át a megjelölt function expressionöket
// arrow functionre! Ahol lehet, hagyjunk el amit
// csak lehet a szintaxisból!

doSomething = (f,x) => f(x);

//                              (1)

 const triple = () => doSomething(((x)=> 3*x), 5);
 console.log(triple())


const createIncrementerFunction = (inc) => {
    return (n)=>{
        return ()=>{
           return (n + inc)
        }

    }
};

const result = createIncrementerFunction(1)(2)()
console.log(result)  // 3
