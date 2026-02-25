#include <stdio.h>
#include <stdlib.h>

int main() {
    printf("Hello, World!\n");
    int* x = malloc(sizeof(int));
    *x = 3;
    printf("%d\n", *x);
    return 0;
}