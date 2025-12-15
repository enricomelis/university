#include <stdio.h>      /* for I/O and files */
#include <errno.h>      /* for stderr and error handling */
#include <stdlib.h>     /* for dynamic memory allocation */
#include <string.h>     /* for string utilities */
#include <ctype.h>      /* for char utilities */

// random stuff to practice strings and file mgmt

int main(int argc, char* argv[]){

    if(argc != 1){
        fprintf(stderr, "Questo programma non accetta parametri da riga di comando.");
        return 1;
    }

    char* path = "input.txt";
    char* program = argv[0];

    FILE* fp = fopen(path, "w+");
    if(!fp) {
        fprintf(stderr, "Errore in %s, fopen su %s\n", program, path);
        return 1;
    }

    char* dst_path = "output.txt";
    FILE* dst = fopen(dst_path, "w");
    if(!dst) {
        fprintf(stderr, "Errore in %s, fopen su %s\n", program, dst_path);
        fclose(fp);
        return 1;
    }

    char* str = "CiaoSonoEnrico";
    int written = fputs(str, fp);
    if( written == 0 && (strlen(str)) != 0 ){
        fprintf(stderr, "Errore in scrittura, fputs su %s\n", path);
    }

    fprintf(dst, "=== FSEEK ===\n");

    long offset = 4;
    const int BUF_SIZE = 5;
    char buf[BUF_SIZE];
    fseek(fp, 0, SEEK_SET);            
    fgets(buf, BUF_SIZE, fp);
    printf("%s\n", buf);
    fprintf(dst, "%s\n", buf);

    fseek(fp, offset, SEEK_SET);            /* offset of 4 bytes */ 
    buf[0] = fgetc(fp);
    printf("%c\n", buf[0]);
    fprintf(dst, "%c\n", buf[0]);


    printf("\n=== FTELL ===\n");
    fprintf(dst, "\n=== FTELL ===\n");

    fseek(fp, -1, SEEK_CUR);            
    long told = ftell(fp);
    printf("Adesso il puntatore si trova ad un offset di %ld bytes.\n", told);
    fprintf(dst, "Adesso il puntatore si trova ad un offset di %ld bytes.\n", told);

    printf("Infatti se stampiamo il contenuto otteniamo \'%c\'\n", fgetc(fp));
    fprintf(dst, "Infatti se stampiamo il contenuto otteniamo \'%c\'\n", fgetc(fp));

    printf("\n=== REWIND ===\n");
    fprintf(dst, "\n=== REWIND ===\n");

    rewind(fp);
    printf("Adesso abbiamo riportato il puntatore all\'inizio, infatti\n");
    fprintf(dst, "Adesso abbiamo riportato il puntatore all\'inizio, infatti\n");

    printf("Stampiamo e otteniamo: \'%s\'\n", fgets(buf, BUF_SIZE, fp));
    fprintf(dst, "Stampiamo e otteniamo: \'%s\'\n", fgets(buf, BUF_SIZE, fp));

    printf("Con un buffer per una stringa di lunghezza %d\n", (int)strlen(buf));
    fprintf(dst, "Con un buffer per una stringa di lunghezza %d\n", (int)strlen(buf));
    
    fclose(fp);

    printf("\n\n");                       /* adesso provo un file_size */
    path = "main.c";

    fp = fopen(path, "r");
    fseek(fp, 0, SEEK_END);             /* secondo ptr alla fine del file */

    long end = ftell(fp);
    
    printf("La lunghezza in bytes di %s: %ld\n", path, end);
    

    return 0;
}
