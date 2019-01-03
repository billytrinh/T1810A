#include<stdio.h>
#include<string.h>
#include<stdlib.h>

struct sinhvien{
	char ten[30];
	int mssv;
	int diemthi;
};

int main(){
	int n;
	printf("danh sach lop co: ");
	scanf("%d",&n);
	struct sinhvien sv[30];
	for(int i=0;i<n;i++){
		printf("nhap ten sv: ");
		scanf("%s",sv[i].ten);
		printf("nhap mssv: ");
		scanf("%d",&sv[i].mssv);
		printf("nhap diem thi: ");
		scanf("%d",&sv[i].diemthi);
	}
	int count=0;
	for(int i=0;i<n;i++){
		if(sv[i].diemthi>6){
			count++;
		}
	}
	printf("so sinh vien qua mon: %d\n",count);
	printf("so sinh vien truot: %d\n",n-count);
	printf("ti le sinh vien qua mon: %d%%\n",(count*100)/n);
	printf("ti le sinh vien truot mon: %d%%",100-(count*100)/n);
	return 0;
}
