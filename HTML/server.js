var express = require("express");
var app = express();

app.use(express.static("public"));

app.listen("3003",function(){
	console.log("server is running");
});

app.get("/list_sv",function(req,res){
    var data = {
			status: 1,
			message: 'success',
			data: [
				{
					no: '#1',
					name: 'NVA',
					mssv: '#1234'
				},
				{
					no: '#2',
					name: 'NVA',
					mssv: '#1234'
				},
				{
					no: '#3',
					name: 'NVA',
					mssv: '#1234'
				}
			]
		}
	res.send(data);
});