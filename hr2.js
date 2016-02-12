var testArray = ["a","b","c"];

function each(collection, callback){
  if(Array.isArray(collection)||typeof collection==="string") { 
    for(var i=0; i<collection.length;i++) {
      callback(collection[i]);
    }
  } else {
  
     for (var key in collection){
       callback(collection[key]);
     }
    }
}
																				 
function reduce(collection, callback, memo){
debugger;
  if(memo===undefined){
    memo = collection.shift();
  }
  each(collection, function(s) {
  memo=callback(memo,s);
  });
  return memo;
}

function doubleNumber(memo,num){ return memo + num+2;}

function concatIt(memo, str){ return memo + str + "e";}

function returnArray(memo, str){
  memo.push(str);
  return ;
}
