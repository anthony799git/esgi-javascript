function type_check_v1(value,type){
    if(typeof value === type)
        return true;
    return false;
}

function type_check_v2(value,object){
    if(object.enum === undefined && typeof value === object.type && (object.value === undefined || object.value == value) 
    || object.enum !== undefined  && object.enum.indexOf(value))
        return true;
    return false;
}



function type_check(){

}

console.log(type_check_v2({prop:1},{type:"object"}))