var request=require('request');
var URL='http://localhost:3000';

var getPromise=function(url){
	var promise= new Promise(function(resolve,reject){
      request(url,function(error,response,body){
            if(error){
               reject(new Error("Error occurred while making request"+error))
            }
            else if(response.statusCode < 200 || response.statusCode > 299){
               reject(new Error('ErrorCode '+response.statusCode))
            }else{
               resolve(body)
            }   
      })
   });

   return promise;
}


getPromise(URL+'/olympic/2016/ranking/4')
      .then(function(data){
         console.log("Response 1 "+data);
         return getPromise(URL+'/iso/country/'+JSON.parse(data).Country);
      })
      .then(function(data){
         console.log("Response 2 "+data);
         return getPromise(URL+'/olympic/2016/medal/'+JSON.parse(data).iso);
      })
      .then(function(data){
         console.log("Response 3 "+data)
      })
      .catch(function(err){
         console.log(err)
      });
