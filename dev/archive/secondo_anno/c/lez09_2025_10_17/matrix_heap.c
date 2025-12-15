#include <stdio.h>
#include <stdlib.h>

int sum_submatrix(int** matrix, int n);

int main(){
    
    int dim = 0;
    printf("Inserire la dimensione della matrice MxM: ");
    scanf("%d", &dim);

    // dichiaro dinamicamente un array di puntatori per la prima riga della matrice.
    // la prima riga della matrice in realta' e' cio' che ci permettere di accedere alle colonne.
    int** matrix_row = malloc(dim * sizeof(int*));
    if(matrix_row == NULL){
        return -1;
    }

    for(int i = 0; i < dim; i++){
        matrix_row[i] = malloc(dim * sizeof(int));
        if(matrix_row[i] == NULL){
            return -1;
        }
        for(int j = 0; j < dim; j++){
            matrix_row[i][j] = i+j+1;
        }
    }

    
    for(int i = 0; i < dim; i++){
        for(int j = 0; j < dim; j++){
            printf("%d ", matrix_row[i][j]);
        }
        printf("\n");
    }
    
    int subdim = 0;
    do {
        printf("Inserire dimensione della sotto-matrice: ");
        scanf("%d", &subdim);
    } while (subdim > dim);


    int res = sum_submatrix(matrix_row, subdim);
    printf("La somma della sotto-matrice %dx%d e': %d\n", subdim, subdim, res);

    for(int i = 0; i < dim; i++){
        free(matrix_row[i]);
        matrix_row[i] = NULL;
    }
    free(matrix_row);
    matrix_row = NULL;

    return 0;
}

int sum_submatrix(int** matrix, int n){
    int sum = 0;

    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
            sum += matrix[i][j];
        }
    }

    return sum;
}
