#include<stdio.h>
#include<string.h>
#include<stdlib.h>
#include<math.h>


typedef struct sv{
	char ten[30];
	int mssv;
	float diem;
}sinhvien;

void nhap_dssv(sinhvien *P,int *n){
	for(int i=0;i<*n;i++){
		printf("***Nhap thong tin sv thu %d***\n", i+1);
		printf("-Nhap ho ten: ");
		scanf("%s", (P+i)->ten);
		printf("-Nhap mssv: ");
		scanf("%d", &((P+i)->mssv));
		printf("-Nhap diem thi: ");
		scanf("%f", &((P+i)->diem));
		printf("\n");
	}
}

void in_dssv(sinhvien *P,int *n){
	printf("Ten - MSSV - Diem Thi\n");
	for(int i=0;i<*n;i++){
		printf("%s - %3d - %.2f\n", (P+i)->ten,(P+i)->mssv,(P+i)->diem);
	}
}

void qua_truot(sinhvien *P,int *n,int *a,int *b){
	for(int i=0;i<*n;i++){
		if((P+i)->diem < 6){
			*b += 1;
		}else{
			*a += 1;
		}
	}
}

void phan_tram_qt(float *A,float *B,int *n,int *a,int *b){
	*A = ((float)*a/(*n))*100;
	*B = (100-*A);
}

main(void){
	int n;
	do{
		printf("***Co bao nhieu sinh vien tham gia ky thi?***\n");
		scanf("%d", &n);
	}while(n<1);
	
	sinhvien *P;
	P = (sinhvien *)malloc(n*sizeof(sinhvien));
	nhap_dssv(P,&n);
	printf("\n\n");
	in_dssv(P,&n);
	printf("\n\n");
	
	int a=0, b=0;
	float A,B;
	qua_truot(P,&n,&a,&b);
	phan_tram_qt(&A,&B,&n,&a,&b);
	printf("-So sinh vien qua mon: %2d\n-Ty le sinh vien qua mon: %.2f%%\n", a,A);
	printf("-So sinh vien truot mon: %2d\n-Ty le sinh vien truot mon: %.2f%%\n", b,B);
}


