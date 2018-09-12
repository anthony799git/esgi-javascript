
String.prototype.ucfirst = function() {
    return this.replace(/\b\w/, l => l.toUpperCase())
};

String.prototype.capitalize = function() {
    return this.replace(/\b\w/g, l => l.toUpperCase())
};

String.prototype.camelCase = function() {
    return this.capitalize(this).replace(/\s/g, "") 
};

String.prototype.snake_case = function() {
    return this.toLowerCase().replace(/\s/g, "-") 
};

String.prototype.leed = function() {
    return this.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/y/gi, "7").replace(/u/gi, "(_)").replace(/O/g, "o");
};

String.prototype.verlan = function() {
    return this.split("").reverse().join("").split(" ").reverse().join(" ");  
};

String.prototype.yoda = function() {
    return this.split(" ").reverse().join(" ");
};

String.prototype.vig = function(key) {
    var res = [];
    var letterCounter = 0;
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var rowIndex, colIndex;
    while (letterCounter < this.length) {
      for (var i = 0; i < key.length; i++) {

        rowIndex = alphabet.indexOf(key[i]);
        colIndex = alphabet.indexOf(this[letterCounter]);
        res.push(alphabet[(rowIndex + colIndex) % alphabet.length]); 
        letterCounter++;
        if (letterCounter >= this.length) 
            break;
      }
    }
    return res.join('');
};

Object.prototype.prop_access = function(key_value){
    var keys = key_value.split(".")
    object = this;
    for (var key of keys){
        if(typeof object[key] === "undefined")
            return key_value + " not exist"
        object = object[key]
    }
        
    return object;
}


  
prairie = {"animal" : {"type" : {"name" : "chien"}}};

console.log(prairie.prop_access("animal.type.name"));