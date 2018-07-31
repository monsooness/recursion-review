// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var output = [];
  var classSearch = function(node) {
    if (node.classList && node.classList.contains(className)) {
      output.push(node)
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        var kiddies = node.children[i];
        classSearch(kiddies);
      } 
    }
  }
  classSearch(document.body);
  return output;    

};
