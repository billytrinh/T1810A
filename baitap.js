<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title> baitap </title>
		<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="vendor/fontawesome/css/all.css">
		<link rel="stylesheet" type="text/css" href="css/Style.css">
		<script type="text/javascript" src="vendor/jquery/jquery-3.3.1.js"></script>
		<script type="text/javascript" src="vendor/bootstrap/js/bootstrap.js"></script>
		<script type="text/javascript" src="vendor/bootstrap/js/validator.js"></script>
	</head>
	<body>
		<section class="section_1">
			<div class="container">
				<div class="col-lg-2">
					<a href="#"><i class="far fa-envelope"></i> <span>info@shopy.com</span></a></label>
				</div>
				<div class="col-lg-2">
					<a href="#"><i class="far fa-address-book"></i> <span>453-5553-996</span></a>
				</div>
				<div class="col-lg-5"></div>
				<div class="col-lg-3">
					<div style="float:right">
						<a href="#"><i class="fab fa-facebook-f"></i></a>
						<a href="#"><i class="fab fa-twitter"></i></a>
						<a href="#"><i class="fab fa-google-plus-g"></i></a>
						<a href="#"><i class="fab fa-instagram"></i></a>
					</div>
				</div>
			</div>
		</section>
		<section class="section_2">
			<div class="container">
				<div class="col-lg-2">
					<a href="#"><img src="images/Logo.png"></a>
				</div>
				<div class="col-lg-5" style="padding-top: 8px;">
					<a href="#" class="col-lg-2 text-center">Home</a>
					<a href="#" class="col-lg-2 text-center">Products</a>
					<a href="#" class="col-lg-3 text-center">Hot Deals</a>
					<a href="#" class="col-lg-2 text-center">About</a>
					<a href="#" class="col-lg-2 text-center">Contact</a>
				</div>
				<div class="col-lg-2"></div>
				<div class="col-lg-3">
					<div style="float: right; letter-spacing: 10px; padding-top: 5px;">
						<a href="#"><i class="fas fa-search"></i></a>
						<a href="#"><i class="far fa-user"></i></a>
						<a href="#"><i class="fas fa-shopping-cart"></i></a>
					</div>
				</div>
			</div>
		</section>
		<section class="section_3">
			<div class="container">	
					<div class="col-lg-12 text-center">
						<i class="far fa-user-circle"></i>
					</div>
					<div class="col-lg-2"></div>
					<form class="col-lg-8" data-toggle="validator" role="form">
						<div class="form-group">
							<label for="email_input" class="control-label">Email</label>
							<input type="email" class="form-control" id="email_input" placeholder="Nhap email" required>
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group">		
							<label for="name_input" class="control-label">Họ và tên</label>
							<input type="text" class="form-control" id="name_input" placeholder="Nhap ten" required>
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group">	
							<label for="phone_input" class="control-label">Số điện thoại</label>
							<input type="text" class="form-control" id="phone_input" placeholder="Nhap so dien thoai" required>
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group">
							<label for="password_input" class="control-label">Mật khẩu</label>
							<input type="password" class="form-control" id="password_input" placeholder="Nhap mat khau" required>
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group">		
							<label for="password_input_2" class="control-label">Nhập lại Mật khẩu</label>
							<input type="password" class="form-control" id="password_input_2" placeholder="Nhap lai mat khau" data-match="#password_input" match-date-error="Mat khau chua giong nhau." required>
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group">		
							<label for="magt_input_input" class="control-label">Mã giới thiệu</label>
							<input type="text" class="form-control" id="magt_input" placeholder="Nhap ma gioi thieu" required>
							<div class="help-block with-errors"></div>	
						</div>
					</form>	
					<div class="col-lg-12 text-center">
						<div class="col-lg-3"></div>
						<div class="col-lg-6">
							<input id="radio_dk" type="radio" name="radio_input"><label for="radio_dk">Đồng ý về chính sách bảo mật và điều khoản sử dụng</label>
						</div>
					</div>	
					<div class="col-lg-12 text-center">
						<button type="submit" class="btn btn-primary">Đăng ký</button><br>
						<a href="#">Trở lại đăng nhập</a>	
					</div>
				</div>
			</div>	
		</section>
		<section class="section_4">
			<div class="container">
				<div class="col-lg-4">
					<p><a href="#"><img src="images/Logo.png"></a></p>
					<span>shopy c 2015 . your copy right here</span>
				</div>
				<div class="col-lg-6">
					<div class="col-lg-3">
						<a href="#"><li>About us</li></a>
						<a href="#"><li>Contact us</li></a>
						<a href="#"><li>Support</li></a>
					</div>
					<div class="col-lg-4">	
						<a href="#"><li>Our feed</li></a>
						<a href="#"><li>Terms & Conditions</li></a>
						<a href="#"><li>Out privacy</li></a>
					</div>
					<div class="col-lg-3">	
						<a href="#"><li>Join us</li></a>
						<a href="#"><li>Live support</li></a>
					</div>
				</div>	
				<div class="col-lg-2">
					<span>Payment Methods</span>
					<img src="images/Icon-Payment.png">
				</div>	
			</div>	
		</section>
		<script type="text/javascript">
		
		</script>
	</body>
</html>