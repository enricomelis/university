#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int val;
    struct Node* next;
} Node;

void print_list(Node* head){
    if(head == NULL){
        printf("Lista vuota.\n\n");
        return ;
    }
    Node* current = head;
    printf("=== Inizio lista ===\n");
    while(current != NULL){
        printf("%d\n", current->val);
        current = current->next;
    }
    printf("=== Fine lista ===\n\n");
}

Node* insert(Node* head, int x){
    // alloco nuovo nodo, inserisco in coda, ritorno la testa

    Node* new_node = (Node*) malloc(sizeof(Node));

    if(new_node == NULL){
        printf("Errore di allocazione memoria.\n");
    }

    new_node->val = x;
    new_node->next = NULL;

    if(head == NULL){
        return new_node;
    }

    Node* current = head;
    while(current->next != NULL){
        current = current->next;
    }
    current->next = new_node;

    return head;
}

void insert_rec_helper(Node* head, int x){
    if(head == NULL){
        return ;
    }
    if(head->next == NULL){
        Node* new_node = (Node*) malloc(sizeof(Node));

        if(new_node == NULL){
            printf("Errore di allocazione memoria.\n");
        }

        new_node->val = x;
        new_node->next = NULL;

        head->next = new_node;
    }
    else {
        insert_rec_helper(head->next, x);
    }
}

Node* insert_rec(Node* head, int x){
    if(head == NULL){
        return head;
    }

    insert_rec_helper(head, x);

    return head;
}

void delete_last_element(Node* head){
    Node* current = head;
    while(current->next->next != NULL){
        current = current->next;
    }
    // adesso current = penultimo elemento
    free(current->next);
    current->next = NULL;
}

int main(){

    Node* lista = NULL;
    printf("Creo la lista vuota...\n");
    print_list(lista);

    printf("Inserisco due elementi nella lista...\n");
    lista = insert(lista, 3);
    lista = insert(lista, 4);
    print_list(lista);

    printf("Inserisco un elemento ricorsivamente...\n");
    lista = insert_rec(lista, 5);
    print_list(lista);

    printf("Rimuovo l\'ultimo elemento...\n");
    delete_last_element(lista);
    print_list(lista);
    
    // de-allocazione di memoria e null-ificazione dei ptr
    Node* temp;
    while(lista != NULL){
        temp = lista;
        lista = lista->next;
        free(temp);
        temp = NULL;
    }

    return 0;
}
