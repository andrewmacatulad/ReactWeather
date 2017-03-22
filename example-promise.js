// Example of Callback
function getTempCallback(location, callback){
  callback(undefined, 60);
  callback('City and Temp not found')
}

getTempCallback("Manila", function (err, temp){
    if(err){
      console.log('error', err);
    } else {
      console.log('Success', temp)
    }
})

// Example of Promise just like the one above
// instead of passing 2 arguments only need one the location
// You return the callback via Promise
// If it goes well use resolve if not use reject
// And you can even pass a timeout for them
function getTempPromise(location){
  return new Promise(function (resolve, reject){
    setTimeout(function(){
      resolve(70);
      reject('City and Temp not found idiot')
    }, 3000);

  })
}

// To use the function above
// to wait for the data use the then method that is available in promise
// It will have two function the sucess and the error function
// the first one will be the success then the second one is the error function
getTempPromise("Manila").then(function(temp){
    console.log('promise success', temp)
}, function(err){
    console.log('promise error', err)
})

// Challenge Area
// This functions will check if a or b is a number if yes it will run resolve and a + b
// if not it will reject
function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    } else {
      reject('Please make it a number');
    }
  })
}

// To call it and set the numbers
addPromise(5, 12).then(function(sum){
  console.log(sum);
}, function(err){
  console.log('Promise error', err)
})
