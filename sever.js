var express = require("express");
var app = express(); //bien app thanh 1 doi tuong luu tru exxpress

app.use(express.static("public"));

app.listen("3004",function(){
	console.log("server is running");
});

app.get("/list_products",function(req,res){
	var data = {
			status: 1,
			message: 'success',
			data: [
				{
					image: 'images/ao_do.png',
					name: 'Reebok Track Jacket 22222',
					price: '1000$'
				},
				{
					image: 'images/ao_do.png',
					name: 'Reebok Track Jacket',
					price: '100$'
				},
				{
					image: 'images/ao_do.png',
					name: 'Reebok Track Jacket',
					price: '100$'
				}
			]
		}
	res.send(data);
});
app.get("/list_sv",function(req,res){
	var data = {
			status:1,
			message: 'success',
			data: [
			{
				no: '#1',
				name: 'Nguyen Van A',
				mssv: '1001'
			},
			{
				no: '#2',
				name: 'Nguyen Van B',
				mssv: '1002'
			},
			{
				no: '#3',
				name: 'Nguyen Van C',
				mssv: '1003'
			},
			{
				no: '#4',
				name: 'Nguyen Van D',
				mssv: '1004'
			},
			{
				no: '#5',
				name: 'Nguyen Anh H',
				mssv: '1005'
			},
			{
				no: '#6',
				name: 'Nguyen Le G',
				mssv: '1006'
			},
			{
				no: '#7',
				name: 'Nguyen Duy F',
				mssv: '1007'
			},
			{
				no: '#8',
				name: 'Tran Van A',
				mssv: '1008'
			},
			{
				no: '#9',
				name: 'Tran Van V',
				mssv: '1009'
			},
			{
				no: '#10',
				name: 'Nguyen Van K',
				mssv: '1010'
			}
			]
		}
		res.send(data);
});