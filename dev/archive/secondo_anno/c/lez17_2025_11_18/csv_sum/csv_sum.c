#include <stdio.h>
#include <errno.h>
#include <string.h>

// somma per utente da un CSV

typedef struct {
    char user[32];
    int amount;
} Record;

#define BUF_SIZE 512
#define MAX_USERS 64

int main(int argc, char* argv[]){
    if(argc != 2){
        printf("Invocazione errata, usare %s <input>\n", argv[0]);
        return 1;
    }

    FILE* src = fopen(argv[1], "r");
    if(!src){
        printf("Errore in apertura del file sorgente \"%s\".", argv[1]);
        return 1;
    }

    FILE* dst = fopen("output.csv", "w");
    if(!dst){
        printf("Errore in apertura del file destinazione.");
        fclose(src);
        return 1;
    }
    
    Record users[MAX_USERS];
    int unique_counter = 0;
    char buf[BUF_SIZE];
    // 1) array di Record per non aggiungere duplicati
    /* 2) contatore, dato che alloco spazio > n_utenti, almeno non 
     * copio di valori nulli */
    // 3) creo un buffer per ogni Record, abbastanza per una riga

    while(fgets(buf, BUF_SIZE, src)){
        /* fin quando la fgets riesce a leggere la stringa 
         * dato che ritorna NULL appena finisce */
        char tmp_name[32];
        int tmp_amount;

        if(sscanf(buf, "%[^,], %d", tmp_name, &tmp_amount) == 2){
            // faccio una scanf con le RegExp per trovare le coppie
            int found = 0;
            int i = 0;
            while(!found && i < unique_counter){
                if(strcmp(users[i].user, tmp_name) == 0){
                    users[i].amount += tmp_amount;
                    found = 1;
                }
                i++;
            }

            if(!found && unique_counter < MAX_USERS){
                strcpy(users[unique_counter].user, tmp_name);
                users[unique_counter].amount = tmp_amount;
                unique_counter++;
            }
        }
    }

    for(int i = 0; i < unique_counter; i++){
        int written = fprintf(dst, "%s, %d\n", users[i].user, users[i].amount);
        if (written < 0){
            perror("Errore in scrittura su in scrittura.");
            fclose(src);
            fclose(dst);
            return 1;
        }
    }

    fclose(src);
    fclose(dst);

    return 0;
}
