var http=require('http');

var getRanking=function(url){
	var promise= new Promise(function(resolve,reject){
	var req=http.get(url,function(response){
            if(response.statusCode < 200 || response.statusCode > 299){
            	reject(new Error('ErrorCode '+response.statusCode))
            }
            var result="";
            response.on('data',function(chunk){result +=chunk;} )
            response.on('end',function(){resolve(result);} )
		});

	req.on('error',function(err){
      console.error('Error with the request:', err.message); 
      reject(err.message); 
     });

    req.end();

	});
	return promise;
}

getRanking('http://localhost:3000/olympic/2016/ranking/10')
      .then(function(data){
         console.log("Response "+data)
      })
      .catch(function(err){
         console.log(err)
      });
