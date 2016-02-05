//each


function each(collection, callback){     //callback is a function

  if(Array.isArray(collection) || typeof collection === "string"){   
      for(var i = 0; i<collection.length; i++) {
        callback(collection[i]);
      }
  } else {   
      for keys in collection {
        callback(collection[keys]);
      }     
     }
  }


//map


function map(collection, callback){
  var newArray = [];
  each(collection, function(s){
    newArray.push(callback(s));
  });
  return newArray;
}

var testArray = [1,2,3];
map(testArray, function(a){
  return a*5;
});


//filter

function isEven(a){
  return a%2 ===0;
}

function filter(collection, callback){
  var newArray = [];
  each(collection, function(v) {
      if(callback(v)) {
      newArray.push(v);   //[7]
      }
  });
  return newArray;
}

function reject(collection, callback){
  var newArray = [];
  each(collection, function(v) {
      if(!callback(v)) {
      newArray.push(v);
      }
  });
  return newArray;
}


//reject using filter
function reject(collection, callback){       //[2,4,6,7]    //function that checks to see if the values are even values //[7]   
  return filter(collection, function(item) {   //[2,4,6,7]   2
      return !callback(item);                             //callback(2)
  });
}
