#include <stdio.h>

int my_strlen(char* str);
char* my_strcat(char *str1, char *str2);

int main(){

    char stringa[] = "ciao";

    printf("Lunghezza della stringa %s: %d", stringa, my_strlen(stringa));

    return 0;
}

int my_strlen(char* str){
    int i = 0;
    int len = 0;
    while(str[i] != '\0'){
        len++;
        i++;
    }

    return len;
}

char* my_strcat(char *str1, char *str2);
