#include <stdio.h>
#include <errno.h>

int main(){
    char buffer[256];
    const char* path = "a.txt";

    FILE* fp = fopen(path, "r");

    if(!fp){
        perror("Error opening file");
        return 1;
    }

    if(fgets(buffer, sizeof buffer, fp)){
        printf("First line of content is: %s", buffer);
    }
    else {
        printf("File is empty.");
    }

    fclose(fp);

    fp = fopen(path, "a");

    if(!fp){
        perror("Error opening file");
        return 1;
    }

    fprintf(fp, "\nThis new line was appended correctly.\n");
    fprintf(fp, "This new line was appended correctly.\n");

    printf("Text appendend correctly.\n");

    fclose(fp);

    return 0;
}
