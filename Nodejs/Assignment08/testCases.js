//write a simple functions for calculator and also write test cases

function add(a,b){

    if(a===undefined || b===undefined){
        throw new Error('arguments missing');
    }

    if(typeof a === 'string' || typeof b === 'string'){
        return NaN;
    }

    if(a===null || b===null){
        throw new Error('null arguments');
    }


    return a+b;
}

function sub(a,b){

    if(a===undefined || b===undefined){
        throw new Error('arguments missing');
    }

    if(typeof a === 'string' || typeof b === 'string'){
        return NaN;
    }

    if(a===null || b===null){
        throw new Error('null arguments');
    }

    return a-b;
}

function mul(a,b){

    if(a===undefined || b===undefined){
        throw new Error('arguments missing');
    }

    if(typeof a === 'string' || typeof b === 'string'){
        return NaN;
    }

    if(a===null || b===null){
        throw new Error('null arguments');
    }

    return a*b;
}

function div(a,b){

    if(a===undefined || b===undefined){
        throw new Error('arguments missing');
    }

    if(typeof a === 'string' || typeof b === 'string'){
        return NaN;
    }

    if(a===null || b===null){
        throw new Error('null arguments');
    }

    if(b===0){
        throw new Error('divide by zero');
    }

    return a/b;
}

module.exports = {
    add,
    sub,
    mul,
    div
}




