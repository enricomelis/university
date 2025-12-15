#include <stdio.h>
#include <stdlib.h>

typedef struct bst_node{
    int id;
    int age;
    struct bst_node* left;
    struct bst_node* right;
    struct bst_node* parent;
} Node;

void print_bst(Node* node){
    if(node == NULL){ return ; }
    print_bst(node->left);
    printf("%d\n", node->age);
    print_bst(node->right);
}

void insert_bst(Node** node, Node** parent, int id, int age){
    if(*node == NULL){
        Node* nuovo = (Node*)malloc(sizeof(Node));
        if(nuovo == NULL){
            printf("Errore di allocazione memoria.\n");
            return ;
        }

        nuovo->id = id;
        nuovo->age = age;
        nuovo->left = NULL;
        nuovo->right = NULL;

        if(parent == NULL){
            // sto creando la radice
            nuovo->parent = NULL;
            *node = nuovo;
            return ;
        }

        nuovo->parent = *parent;
        int parent_age = (*parent)->age;
        if(age < parent_age){
            (*parent)->left = nuovo;
        }
        else {
            (*parent)->right = nuovo;
        }

        return ;
    }
    else {
        if(age < (*node)->age){
            insert_bst( &((*node)->left) , node, id, age);
        }
        else {
            insert_bst( &((*node)->right) , node, id, age);
        }
    }


    return ;
}

void free_bst(Node* node){
    if(node == NULL){ return ; }

    free_bst(node->left);
    free_bst(node->right);
    free(node);

    return ;
}

void extract_from_age(Node* node, int age){
    if(node == NULL){ return ; }
    if(age == node->age){
        printf("Matricola %d con eta %d\n", node->id, node->age);
    }
    if(age < node->age){
        extract_from_age(node->left, age);
    }
    else {
        extract_from_age(node->right, age);
    }

    return ;
}

int main(){
    Node* root = NULL;
    int mat, eta = 0;

    do {
        printf("Inserire numero di matricola (0: stop): ");
        scanf("%d", &mat);
        if(mat == 0){ break; }
        printf("Inserire eta: ");
        scanf("%d", &eta);


        if(mat > 0 && eta > 0){
            insert_bst(&root, NULL, mat, eta);
        }
        else {
            printf("Input invalido, riprovare.\n");
        }
    } while(mat != 0);

    printf("\n=== Albero in ordine ===\n");
    print_bst(root);


    eta = 15;
    printf("\n=== Studenti di eta %d ===\n", eta);
    extract_from_age(root, eta);

    free_bst(root);
    return 0;
}
