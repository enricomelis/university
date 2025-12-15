#include <stdio.h>
#include <stdlib.h>

typedef struct Student {
    int id;
    int age;
    struct Student* next;
} Student;

Student* add_student(Student* head, int id, int age){
    // inserimento in code di un nuovo studente
    // ritorno la testa della lista
    
    Student* new_student = (Student*) malloc(sizeof(Student));
    if(new_student == NULL){
        printf("Errore di allocazione memoria.\n");
        return head;
    }

    new_student->id = id;
    new_student->age = age;
    new_student->next = NULL;

    if(head == NULL){
        return new_student;
    }

    Student* temp = head;
    while(temp->next != NULL){
        temp = temp->next;
    }
    temp->next = new_student;

    return head;
}

void free_list(Student* head){
    Student* temp;
    while(head != NULL){
        temp = head;
        head = head->next;
        free(temp);
        temp = NULL;
    }
}

void print_list(Student* head){
    if(head == NULL){
        printf("La lista e\' vuota. \n");
        return ;
    }

    Student* temp = head;
    int ctr = 0;
    while(temp != NULL){
        ctr++;
        printf("Studente n. %d: \n- ID: %d\n- Eta\': %d\n\n", ctr, temp->id, temp->age);
        temp = temp->next;
    }
}

void sort_list(Student* head){
    // ordino gli studenti per eta crescente, 
    // cambiando i valori e non i ptr

    if(head == NULL){
        return ;
    }

    int swaps_made;
    Student* current;

    do {
        // finche ho effettuato scambi
        current = head;
        swaps_made = 0;
        while(current->next != NULL){
            // finche la lista non e' finita
            if(current->age > current->next->age){
                // scambio dei valori
                int temp_age = current->age;
                int temp_id = current->id;

                current->age = current->next->age;
                current->id = current->next->id;

                current->next->age = temp_age;
                current->next->id = temp_id;

                swaps_made = 1;
            }

            current = current->next;
        }
    } while(swaps_made == 1);
}

Student* extract_from_age(Student* head, int age){
    Student* new_list = NULL;
    Student* temp = head;

    while(temp != NULL){
        if(temp->age == age){
            new_list = add_student(new_list, temp->id, temp->age);
        }
        temp = temp->next;
    }

    return new_list;
}

int main(){

    Student* lista = NULL;
    int id = 693626;
    lista = add_student(lista, id, 20);
    id++;
    lista = add_student(lista, id, 20);

    print_list(lista);

    id++;
    lista = add_student(lista, id, 12);
    sort_list(lista);
    print_list(lista);

    Student* lista_19 = extract_from_age(lista, 20);
    printf("=== Lista degli studenti di 19 anni ===\n");
    print_list(lista_19);
    free_list(lista_19);

    free_list(lista);


    return 0;
}

