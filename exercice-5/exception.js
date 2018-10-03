Object.prototype.prop_access = function(key_value){
    var keys = key_value.split(".")
    object = this;
    path = "";
    for (var key of keys){
        if(typeof object[key] === "undefined"){
            throw new UndefinedPropertyError(path, key, object);
        }
        object = object[key]
    }

   return object;
}

Object.prototype.test = function(string){
    try{
        this.prop_access(string);
    }catch(error){
        return 'Exception Caught';
    }
}


function UndefinedPropertyError(path, property, object) {
    var instance = new Error("Property "+property+" not exist for path "+path +", expected one of : "+ JSON.stringify(Object.keys(object)));
    Object.setPrototypeOf(
        instance, Object.getPrototypeOf(this)
    );

    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, UndefinedPropertyError);
    }
    return instance;
}

prairie = {"animal":{"type":{"name": "chien"}}};
//console.log(prairie.prop_access("animale.type.test"));
console.log(prairie.test("animale.type.test"));