function each(arr, callback){
  if(Array.isArray(arr) || typeof arr === "string"){
      for(var i=0; i<arr.length; i++){
     		 callback(arr[i]);
  		}		
   }  else{
    for(var values in arr){
   			callback(arr[values]);
       }
   } 
}


var cities = ["NY","LA"];

each(cities, function(c){
console.log(c);
  })



//Mozilla
Array.isArray(obj)
Array.isArray()
var obj= {
key: "value"
}

for(var Key in obj) {
   obj[key];
}

//Write a function called checkValue that searches an array for a value. It takes an array and a value and returns true if the value exists in the array, otherwise 
  //it returns false.
  
  
function checkValue(arr, val){
		var switchOn = false;
  	each(arr, function(v){
  
    if(v===val){
    switchOn = true;
      }
      
    });
    
    return switchOn;
}
  
  
  
