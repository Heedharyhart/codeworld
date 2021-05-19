

function convertFahrToCelsius(F){
    "use strict"
    const celsius = (F - 32) * (5/9);
    let result;
    switch (true){
        case(typeof F === "number"):
        case(typeof F === "string"):
            result = celsius.toFixed(4)
            break;

       case (Array.isArray(F)):
           result = `${JSON.stringify(F)} is not a valid number but an array. `; 
           break; 
        
        case(typeof F === "object"):
            result = `${JSON.stringify(F)} is not a valid number but an Object`
            break;

        default:
            result = `${F} is not a valid number but a ${typeof F}`;
            break;

    }

    return result;


}
console.log(convertFahrToCelsius(0));
//consolle.log(convertFahrToCelsius("0"));
//console.log(convertFahrToCelsius([1,2,3]));
//console.log(convertFahrToCelsius({temp: 0}));
//console.log(convertFahrToCelsius(null));
//Console.log(convertFahrToCelsius(undefined));





