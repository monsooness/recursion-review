// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// inputs = num, null, undefined, strings, booleans, array, objects, function
// output = 'inputs'

//


var stringifyJSON = function(obj) {
  // your code goes here
  var newArr = []
  var str = '';
  if (obj === null || obj === undefined || obj.constructor === Function || obj.constructor === Symbol('')){
    return 'null';
  } else if (obj.constructor === Number || obj.constructor === Boolean) {
    return str += obj;
  } else if (obj.constructor === String) {
    return '"' + obj + '"';
  } else if (obj.constructor === Array) {
    if (obj.length) {
   obj.forEach(function(el) {
        return newArr.push(stringifyJSON(el));
      });
    return '[' + newArr.join(',') + ']';
    } else {
      return '[]';
      }
  } else if (obj.constructor === Object) {
    var keys = Object.keys(obj);
    var objStr = '';
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (key === undefined || key.constructor === Function || key === 'funcions') {
        return null;
      };
      if (obj[key] === undefined || obj[key] === Function) {
        return null;
      }
      if (i < keys.length - 1) {
        objStr += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      } else {
        objStr += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      }
    }
    return '{' + objStr + '}';     
  }

}