-- 1. Tao csdl
CREATE DATABASE ASS_03;

-- 2. Tao bang
CREATE TABLE nguoi(
	ten_nguoi Nvarchar(255) NOT NULL,
	cmt varchar(50) NOT NULL,
	dia_chi text NOT NULL,
	nguoi_id int IDENTITY(1,1) PRIMARY KEY
);

CREATE TABLE thuebao(
	so_tb varchar(20) NOT NULL,
	ngay_dk date NOT NULL,
	loai_tb Nvarchar(50) NOT NULL,
	tb_id int IDENTITY(1,1) PRIMARY KEY,
	nguoi_id int NOT NULL FOREIGN KEY REFERENCES nguoi(nguoi_id),
	CONSTRAINT uni_so_tb UNIQUE (so_tb)
);
-- 3. Them du lieu vao cac bang
INSERT INTO nguoi (ten_nguoi,cmt,dia_chi) VALUES(N'Nguyễn Nguyệt Nga','123456789','Ha noi');
INSERT INTO thuebao(so_tb,ngay_dk,loai_tb,nguoi_id) VALUES('0987654321','2018-12-20',N'trả trước',1);
-- 4. viet cac truy van
SELECT * FROM nguoi;
SELECT * FROM thuebao;
-- 5. viet cac cau lenh truy van
SELECT * FROM thuebao WHERE so_tb LIKE '0123456789';
SELECT * FROM nguoi WHERE cmt LIKE '123456789';
-- 5C cach 1
SELECT * FROM thuebao WHERE nguoi_id = (SELECT TOP 1 nguoi_id FROM nguoi WHERE cmt LIKE '123456789');
-- 5c cach 2
SELECT * FROM thuebao WHERE nguoi_id IN (SELECT nguoi_id FROM nguoi WHERE cmt LIKE '123456789');

SELECT * FROM thuebao WHERE ngay_dk LIKE '2018-12-20';
SELECT * FROM thuebao WHERE nguoi_id IN (SELECT nguoi_id FROM nguoi WHERE dia_chi LIKE 'Ha noi');
-- 6. viet cac lenh truy van thong ke
SELECT COUNT(*) AS tong_so_kh FROM nguoi
SELECT COUNT(*) AS tong_thue_bao FROM thuebao
SELECT COUNT(*) AS so_thue_bao FROM thuebao WHERE ngay_dk LIKE '2018-12-20';
SELECT thuebao.*, nguoi.ten_nguoi,nguoi.dia_chi, nguoi.cmt FROM thuebao INNER JOIN nguoi ON
thuebao.nguoi_id = nguoi.nguoi_id;
--7. Thay doi bang trong csdl
ALTER TABLE thuebao ALTER COLUMN ngay_dk date NOT NULL;
ALTER TABLE thuebao ADD CHECK(ngay_dk <= GETDATE());
ALTER TABLE thuebao ADD CHECK(so_tb LIKE '09%');
ALTER TABLE thuebao ADD diem_thuong int NOT NULL DEFAULT 0;
-- 8. THem chi muc, view, thu tuc
CREATE INDEX index_ten_kh ON nguoi(ten_nguoi);

CREATE VIEW View_KhachHang AS SELECT ten_nguoi, nguoi_id, dia_chi FROM nguoi;

CREATE VIEW View_KhachHang_ThueBao AS 
SELECT nguoi.nguoi_id,nguoi.ten_nguoi, thuebao.so_tb FROM thuebao INNER JOIN nguoi ON 
thuebao.nguoi_id = nguoi.nguoi_id


