#include <stdio.h>
#include <stdlib.h>
#include <errno.h>

// enumerate lines
// bonus: allocazione dinamica del buffer grande

#define BUF_SIZE 8192

int main(int argc, char* argv[]){
    
    if(argc != 3){
        printf("Invocazione invalida, usare %s <input> <output>. \n", argv[0]);
        return 1;
    }

    FILE* src = fopen(argv[1], "r");
    if(!src){
        perror("fopen, errore in apertura del file sorgente");
        return 1;
    }

    FILE* dst = fopen(argv[2], "w");
    if(!dst){
        perror("fopen, errore in apertura del file destinazione");
        fclose(src);
        return 1;
    }
    
    char* buf = (char*)malloc(BUF_SIZE);
    if(!buf){ 
        printf("malloc, errore di allocazione memoria"); 
        fclose(src);
        fclose(dst);
    }
    int i = 0;
    while(fgets(buf, BUF_SIZE, src)){
        int written = fprintf(dst, "%d: %s", ++i, buf);
        if(written < 0){
            perror("fprintf, errore in scrittura");
            fclose(src);
            fclose(dst);
            return 1;
        }
    }

    free(buf);
    fclose(src);
    fclose(dst);

    return 0;
}
