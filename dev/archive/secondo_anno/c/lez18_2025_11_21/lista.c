#include <stdio.h>
#include <stdlib.h>

// heada concatenata

typedef struct _node {
    int value;
    struct _node* next;
} Node;

void free_list(Node* head){
    while(head){
        Node* tmp = head;
        head = head->next;
        free(tmp);
        tmp = NULL;
    }
}

void print(Node* head){
    while(head != NULL){
        printf("%d ", head->value);
        head = head -> next;
    }
    printf("\n");
}

void push_front(Node** head, int val){
    Node* new_node = malloc(sizeof(Node));
    if(!new_node){
        perror("malloc");
        return ;
    }

    new_node->value = val;
    new_node->next = *head;
    *head = new_node;
}

void reverse(Node** head){
    Node* prev = NULL;
    Node* curr = *head;

    while(curr){
        // while next node exists I:
        
        // save the current and the next node
        Node* tmp = curr;
        Node* tmp_next = curr->next;

        // reverse the direction of the current node
        tmp->next = prev;

        // update the prev (new next) node
        prev = curr;

        // go on
        curr = tmp_next;

    }
    *head = prev;
}

void remove_all(Node** head, int x){
    Node* curr = *head;
    while(curr && curr->next){
        if(curr->next->value == x){
            Node* tmp = curr->next;
            curr->next = curr->next->next;

            free(tmp);
            tmp = NULL;
        }
        curr = curr->next;
    }
}

int main(int argc, char* argv[]){

    if(argc != 2){
        fprintf(stderr, "Invocazione errata, usare: %s <x>\n", argv[0]);
    }

    int x = atoi(argv[1]);
    Node* head = NULL;
    int val;

    while( scanf("%d", &val) == 1 ){
        push_front(&head, val);
    }
    print(head);
    remove_all(&head, x);
    print(head);
    reverse(&head);
    print(head);

    return 0;
}
