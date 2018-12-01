#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct sv{
	char ten[30];
	int mssv;
	int diem_thi;
}sinhvien;

void nhap_sv(sinhvien*p){  //void la kieu du lieu ko tra ve gai tri nao 
	printf("nhap ten sv:\n");
	scanf("%s",p->ten);
	printf("nhap mssv:\n");
	scanf("%d",&(p->mssv));
	printf("nhap diem thi:\n");
	scanf("%d",&(p->diem_thi));
}
int main(){
	int n;
	printf("so luong sinh vien:\n");
	scanf("%d",&n);
	sinhvien *p;
	p=(sinhvien *)malloc(n*sizeof(sinhvien));
	for(int i=0; i<n; i++){
		nhap_sv(p+i);
	}
	for(int i=0; i<n; i++){
		printf(" %s - %d - %d\n",(p+i)->ten, (p+i)->mssv, (p+i)->diem_thi);
	}
	
	int a=0, b=0;
	for(int i=0; i<n; i++){
		if((p+i)->diem_thi <6){
			a++;
		}else{
			b++;
		}
	}
	
	printf("\nSo sinh vien truot mon: %d\n So sinh vien qua mon la: %d ", a,b);
	
	float A,B;
	A=((float)a/n)*100;
	B=100-A;
	printf("\n%% sinh vien truot la: %f%%\n",A);
	printf("%% sinh vien qua mon la: %f%%",B);
	
	
	return 0;
}
