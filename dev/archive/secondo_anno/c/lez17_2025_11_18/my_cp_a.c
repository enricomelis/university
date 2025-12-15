#include <stdio.h>
#include <errno.h>

// reimplementation of the cp command
// version A: byte-by-byte copy

int main(int argc, char* argv[]){
    if(argc != 3){
        printf("\nWrong invokation, must use %s <src> <dst>\n\n", argv[0]);
        return 1;
    }

    FILE* src = fopen(argv[1], "rb");
    if(!src){
        perror("Error while opening source file.");
        return 1;
    }

    FILE* dst = fopen(argv[2], "wb");
    if(!dst){
        perror("Error while opening destination file.");
        fclose(src);
        return 1;
    }
    
    // == CORE PART OF THE FUNCTION ==
    // at every iteration, the following happens:
    // buf becomes the result of fgetc()
    //     that returns the byte where 
    //     the the src is pointing 
    // if it isn't EOF, is runs the fputc 
    //     to write the buf into the dst
    //     (all this if there are 
    //     no errors while writing)
    // 
    // why does fputc/fgets return EOF on error?
    //     because EOF is -1 and these functions
    //     return always an unsigned char (0-255)
    //     so EOF is short for "End Of File" but
    //     also for "something went wrong"

    int buf;
    while((buf = fgetc(src)) != EOF){
        if(fputc(buf, dst) == EOF){
            perror("Error while writing.");
            fclose(src);
            fclose(dst);
            return 1;
        }
    }

    fclose(src);
    fclose(dst);

    return 0;
}
