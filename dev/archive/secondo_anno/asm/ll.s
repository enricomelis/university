.text
.global main
.type main, %function

@ structure of the linked list
@   r0 = nodo -> value
@   r1 = nodo -> next

main:

    ldr r0, =fmt
    ldr r1, =head                   @ r1 = indirizzo di head
    ldr r2, [r1]                    @ r3 = *head = head = head->value
    
    mov r1, r2
    push {lr}
    bl printf
    pop {pc}




.data

fmt: .string "%d\n"

@ linked list node structure: [data | next]
@ each node is 8 bytes (4 bytes data + 4 bytes pointer)
    
head:
    .word 10              @ data: first node value
    .word node2           @ next: pointer to second node

node2:
    .word 20              @ data: second node value  
    .word node3           @ next: pointer to third node

node3:
    .word 30              @ data: third node value
    .word 0               @ next: NULL (end of list)
