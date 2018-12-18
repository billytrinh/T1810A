--CREATE DATABASE db1312;

--ALTER DATABASE db1312 MODIFY NAME = db13122018
--DROP DATABASE db1312;
/* comment */

--SELECT <column_1>,<column_2>,....<column_n> FROM <table_name>;
--SELECT * FROM <table_name>;

CREATE TABLE lophoc(
	lop_id int IDENTITY(1,1) PRIMARY KEY,
	ten_lop varchar(255) NOT NULL,
	phong_hoc varchar(255)
);

CREATE TABLE sinhvien(
	sv_id int IDENTITY(1,1) PRIMARY KEY,
	ten_sv Nvarchar(255) NOT NULL,
	ngay_sinh date NOT NULL,
	diem_thi tinyInt NOT NULL CHECK (diem_thi >= 0 AND diem_thi <=10),
	lop_id int NOT NULL FOREIGN KEY REFERENCES lophoc(lop_id)
);

INSERT INTO lophoc (ten_lop,phong_hoc) VALUES ('T1808M1','208');

INSERT INTO sinhvien(ten_sv,ngay_sinh,diem_thi,lop_id) VALUES ('Nguyen van C','1999-03-12',2,1);




INSERT INTO sinhvien (ten_sv,ngay_sinh,diem_thi) VALUES (N'Nguyễn Duy A','2000-2-13',7);


SELECT ten_sv,ngay_sinh,diem_thi as diemthi FROM sinhvien;

--SELECT <column_name>... FROM <table_name> WHERE <condition>

SELECT TOP 1 * FROM sinhvien ORDER BY diem_thi DESC; -- ASC
SELECT TOP 50 PERCENT * FROM sinhvien ORDER  BY diem_thi DESC; -- ASC

SELECT * FROM sinhvien WHERE diem_thi >= 5 ORDER BY diem_thi DESC; -- AND ngay_sinh >= '2000-05-01';
SELECT * FROM sinhvien WHERE diem_thi IN (5,6,7);

SELECT COUNT(ten_sv) as total,AVG(diem_thi) as diem_trung_binh FROM sinhvien;
SELECT AVG(diem_thi) FROM sinhvien;

-- SELECT <column_name>.. FROM <table_name> WHERE <condition> GROUP BY <column_name> HAVING <condition_for_group>

SELECT diem_thi,COUNT(ten_sv) as so_luong FROM sinhvien GROUP BY diem_thi HAVING diem_thi > 4 ;

SELECT * FROM lophoc;
SELECT * FROM sinhvien;


-- GIA SU chi co ma T1808M1
SELECT * FROM sinhvien WHERE lop_id IN ( SELECT lop_id FROM lophoc WHERE ten_lop LIKE 'T1808M1');

DECLARE @ma_lop int ;
IF NOT EXISTS (SELECT TOP 1 * FROM lophoc WHERE ten_lop LIKE 'T1808M2')
	SET @ma_lop = 1;
ELSE
  SET @ma_lop = (SELECT TOP 1 lop_id FROM lophoc WHERE ten_lop LIKE 'T1808M2');
SELECT * FROM sinhvien WHERE lop_id =  @ma_lop;

SELECT sinhvien.*, lophoc.ten_lop,lophoc.phong_hoc 
FROM sinhvien INNER JOIN lophoc ON sinhvien.lop_id = lophoc.lop_id


-- CREATE INDEX <index_name> ON  <table_name> (<column_name>...);

CREATE INDEX index_diem_thi ON sinhvien (diem_thi);

DROP INDEX sinhvien.index_diem_thi;

-- UNIQUE
ALTER TABLE sinhvien ADD CONSTRAINT sv_unique UNIQUE (ten_sv);






