#include <ctype.h>
#include <stdio.h>
#include <string.h>

// char* normalize(char* s)

size_t normalize(char* str) {
    char* curr = str;
    unsigned int len = strlen(str);

    for (int i = 0; i < (int)len; i++) {
        // se ci sono spazi singoli in fondo, li levo e aggiorno len
        if (str[len - 1] == ' ') {
            str[len - 1] = '\0';
            len--;
        }
    }

    int spaces_ctr = 0;
    char* first_current_space = NULL;
    int i = 0;

    while (curr[i] != '\0') {
        if (curr[i] == ' ') {
            // ho trovato uno spazio

            spaces_ctr++;
            if ((curr[i - 1] != ' ') && first_current_space == NULL) {
                first_current_space = curr;
            }
        } else {

            if (spaces_ctr > 1) {
                // dopo aver trovato degli spazi, appena trovo un carattere
                // devo shiftare tutto a sinistra della diff fra i due ptr
                char* tmp = first_current_space + 1;
                while (*tmp != '\0') {
                    *tmp = *(tmp + spaces_ctr - 1);
                    tmp++;
                }

                len = len - spaces_ctr;
                spaces_ctr = 0;
                curr = first_current_space;
                first_current_space = NULL;
            }
            if (spaces_ctr == 1) {
                spaces_ctr = 0;
                first_current_space = NULL;
            }
        }

        if (curr[i] >= 65 && curr[i] <= 90) {
            curr[i] = curr[i] + 32;
        }

        curr++;
    }

    if (*str == ' ') {
        len--;
        char* tmp = str;
        while (*tmp != '\0') {
            *tmp = *(tmp + 1);
            tmp++;
        }
    }

    return len;
}

int main(void) {
    char str[] = "    vado   A   123  cAsA    stasERA    ";

    printf("Input: \'%s\'\n", str);

    normalize(str);
    // O: vado a 123 casa stasera
    // L: 23

    printf("Result: \'%s\'\n", str);
    printf("Length: %lu\n", strlen(str));

    return 0;
}
