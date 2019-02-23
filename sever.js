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
					name: 'Reebok Track J',
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
				name: 'Nguyen Van An',
				mssv: '1001'
			},
			{
				no: '#2',
				name: 'Nguyen Van ve',
				mssv: '1002'
			},
			{
				no: '#3',
				name: 'Nguyen Van cong',
				mssv: '1003'
			},
			{
				no: '#4',
				name: 'Nguyen Van Duy',
				mssv: '1004'
			},
			{
				no: '#5',
				name: 'Nguyen huong',
				mssv: '1005'
			},
			{
				no: '#6',
				name: 'Nguyen quang hai',
				mssv: '1006'
			},
			{
				no: '#7',
				name: 'Nguyen cong phuong',
				mssv: '1007'
			},
			{
				no: '#8',
				name: 'truong Van siu',
				mssv: '1008'
			},
			{
				no: '#9',
				name: 'dang van lam',
				mssv: '1009'
			},
			{
				no: '#10',
				name: 'tran dinh trong',
				mssv: '1010'
			}
			]
		}
		res.send(data);
});