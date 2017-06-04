var promise = new Promise(function(resolve, reject) {
  if (false) {
    resolve("Some Message");
  }
  else {
    reject("Some error");
  }
});


promise.then(function( message ) {
              console.log( message );
             },
             function( err ) {
              console.log( err );
            });


/*promise
.then(function( message ) {
  console.log( message );
})
.catch(function( err ) {
  console.log( err );
});*/



