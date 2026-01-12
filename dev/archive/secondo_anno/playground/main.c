#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]) {
    int* ptr = malloc(16);
    printf("Hello, World from C! %p", ptr);
    return 1;
}
