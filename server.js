var express= require("express");
var app = express();

app.use(express.static('public'));

app.listen("3003",function(){
	console.log("server is running");
});

app.get('/list_products',function(req,res){
	var data = {
			status:1,
			message:'success',
			data:[
			{
				image: 'images/3.png',
				name: 'Reebok asds Jacket asdasd',
				price: '$100'
			},
		
			{
				image: 'images/3.png',
				name: 'Yasuoo',
				price: '$100'
			},

			{
				image: 'images/3.png',
				name: 'Reebok Track Jacket',
				price: '$100'
			}
		]
	}
		res.send(data);
});
