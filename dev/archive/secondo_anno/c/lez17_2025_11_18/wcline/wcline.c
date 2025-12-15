#include <stdio.h>
#include <errno.h>
#include <ctype.h>

// conta parole
//     > wcline [file]
// output: n_lines, n_words, n_bytes

int main(int argc, char* argv[]){

    if(argc != 2){
        printf("\nWrong invokation, must use %s <src>\n\n", argv[0]);
        return 1;
    }

    FILE* src = fopen(argv[1], "r");
    if(!src){
        perror("Errore in apertura file.");
        return 1;
    }

    unsigned long long bytes = 0;
    unsigned long lines = 0;
    unsigned long words = 0;
    int in_word = 0;
    // 0 if I was not inside a word
    // 1 if I was inside a word

    // SPIEGAZIONE 
    // at every iteration we read a byte from the src
    //     we increment the bytes (it's our unit)
    //     we check for a newline character
    //     we find a space: we are no longer inside a word
    //     we find a letter: if we were not inside a word
    //         we increment the word counter
    //         and tell that we are inside a word

    int buf;
    while((buf = fgetc(src)) != EOF){
        bytes++;

        if(buf == '\n') { lines++; }
        if(isspace(buf)) { 
            // space found: reset the "inside word"
            in_word = 0; 
        }
        else {
            // no space, no newline
            if(!in_word){
                // not inside a word (but we now found a char)
                // increment word counter and update "in word" status
                words++;
                in_word = 1;
            }
        }
    }
    fclose(src);
    
    printf("== Lettura del file \"%s\" ==\n", argv[1]);
    printf("- Righe: %lu \n- Parole: %lu \n- Bytes: %llu\n\n", lines, words, bytes);

    return 0;
}
