#include <stdio.h>
#include <stdlib.h>

typedef struct ll_node{
    int val;
    struct ll_node* next;
} Node;

void print_rec(Node* head){
    if(head == NULL){
        return ;
    }
    printf("%d ", head->val);
    print_rec(head->next);
}

int length_rec(Node* head){
    if(head == NULL){
        return 0;
    }
    return 1 + length_rec(head->next);
}

void push(Node** head, int x){
    Node* nuovo = (Node*)malloc(sizeof(Node));
    if(nuovo == NULL){
        printf("Errore di allocazione.");
        return ;
    }

    nuovo->val = x;
    nuovo->next = *head;
    *head = nuovo;
}

int pop(Node** head){
    if(*head == NULL) return 0;

    // salvo il valore del nodo in cima
    int res = (*head)->val;

    // salvo il puntatore alla testa precedente
    Node* old_head = *head;

    // sposto la testa per riflettere la pop() 
    *head = (*head)->next;

    // libero la memoria del nodo rimosso
    free(old_head);

    return res;
}

int peek(Node* head){
    if(head == NULL){
        return 0;
    }
    return head->val;
}

int main(){
    // testa della pila
    Node* pila = NULL;

    // zt = zeri trovati
    int val, zt = 0;

    do{
        scanf("%d", &val);
        if(val == 0){
            zt++;
            if( peek(pila)%2 == 1 || length_rec(pila) > 3 ){
                pop(&pila);
            }
        } 
        else {
            zt = 0;
            if(val%3 == 0){
                push(&pila, val/3);
            }
            else {
                push(&pila, val);
            }
        }
    } while(zt < 3);

    print_rec(pila);
    printf("%d\n", length_rec(pila));

    return 0;
}
