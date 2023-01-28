// point a
window.String = (param)=>{
    if (typeof param == 'object' && ! (param instanceof Array) ){
        return "This is an object";
    }
    else{
        return `${param}`;
    }
}

// point b

window.String = (param)=>{
    if (typeof param == 'object' && ! (param instanceof Array) ){
        if(param.message){
            return param.message;
        }
        return "This is an object";
    }
    return `${param}`;
}