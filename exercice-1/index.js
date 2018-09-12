function ucfirst(string){
    var res = string.replace(/\b\w/, l => l.toUpperCase())
    return res
    
}

function capitalize(string){
    var res = string.replace(/\b\w/g, l => l.toUpperCase())
    return res;
    
}

function camelCase(string){
    var res = capitalize(string).replace(/\s/g, "") 
    return res;
    
}
function snakeCase(string){
    var res = string.toLowerCase().replace(/\s/g, "-") 
    return res;
    
}

function propAccess(object, key_value){
    var keys = key_value.split(".")

    for (var key of keys){
        if(typeof object[key] === "undefined")
            return key_value + " not exist"
        object = object[key]
    }
        
    return object;
    
}

function leed(string){
    var res = string.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/y/gi, "7").replace(/u/gi, "(_)").replace(/O/g, "o")   
    return res;
    
}

function verlan(string){
    var res = string.split("").reverse().join("").split(" ").reverse().join(" ");  
    
    return res;
    
}

function yoda(string){
    var res = string.split(" ").reverse().join(" ");  
    
    return res;
    
}


function vig(message, key) {  
    var result = [];
    var letterCounter = 0;
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var rowIndex, colIndex;
    while (letterCounter < message.length) {
      for (var i = 0; i < key.length; i++) {

        rowIndex = alphabet.indexOf(key[i]);
        colIndex = alphabet.indexOf(message[letterCounter]);
        result.push(alphabet[(rowIndex + colIndex) % alphabet.length]); 
        letterCounter++;
        if (letterCounter >= message.length) 
            break;
      }
    }
    return result.join('');
  }
  

prairie = {"animal" : {"type" : {"name" : "chien", "tete" : "oui"}}};

console.log(vig("wikipedia","crypto"));