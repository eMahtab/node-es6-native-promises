var promise = new Promise(function(resolve, reject) {
  if (true) {
    resolve("Some Message");
  }
  else {
    reject("Some error");
  }
});

promise
.then(function( message ) {
  console.log( message );
})
.catch(function( err ) {
  console.log( err );
});