var http=require('http');

var getRanking=function(url){
	return new Promise(function(resolve,reject){
		http.get(url,function(response){
            if(response.statusCode < 200 || response.statusCode > 299){
            	reject(new Error('ErrorCode '+response.statusCode))
            }
            var result="";
            response.on('data',function(chunk){result +=chunk;} )
            response.on('end',function(){resolve(result);} )
		})
	});
}

getRanking('http://localhost:3000/olympic/2016/ranking/4')
      .then(function(data){
         console.log("Response "+data)
      })
      .catch(function(err){
         console.log(err)
      });
