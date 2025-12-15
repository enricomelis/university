#include <stdio.h>
#include <errno.h>

// reimplementation of the cp command
// version B: BLOCK_SIZE

#define BUF_SIZE 4096

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
    

    char buf[BUF_SIZE];
    size_t bytes_read;

    while(bytes_read = fread(buf, 1, BUF_SIZE, src) > 0) {
        // while I read more than 1 byte from src, written in buf
        if(fwrite(but, 1, bytes_read, dst) != bytes_read){
            // if I didn't write the same amount of bytes that i read
            perror("Error while writing.");
            fclose(src);
            fclose(dst);
            return 1;
        }

        // if I was able to write the bytes, I do nothing and go on
    }

    fclose(src);
    fclose(dst);

    return 0;
}
