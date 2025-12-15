#include <stdio.h>

int main(){
    
    int arr[10];

    for(int i = 0; i < 10; i++){
        arr[i] = i;
    }

    for(int j = 0; j < 10/2; j++){
        int tmp = arr[j];
        arr[j] = arr[9-j];
        arr[9-j] = tmp;
    }

    for(int z = 0; z < 10; z++){
        printf("%d\n", arr[z]);
    }



    return 0;
}
