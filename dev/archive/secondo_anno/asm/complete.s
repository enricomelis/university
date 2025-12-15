.data
source: .word 3, 8, 15, 2, 9, 12, 5, 6
dest:   .space 32
size:   .word 8
fmt: .string "Length of new arr: %d\n"

.text
.global main

@ main is a function that copies even elements of an array
@   into a new pre-allocated array of size 32 bytes (hard-coded)
@   it prints the new lenght via printf and return the size
@ 
@ ```c
@   int copy_even(int* src, int* dest, int size_src)
@ ```
@ even if this isn't the actual blueprint for the C function, 
@   it is somewhat similar

main:
    push {r4, r5, r6, r7, lr}
    
    ldr r4, =source
    ldr r5, =dest
    ldr r6, =size
    ldr r6, [r6]
    mov r7, #0          @ counter for copied elements
    
copy_loop:
    ldr r0, [r4], #4    @ LINE A: load current element from source
    
    tst r0, #1          @ test if odd (check bit 0)
    bne skip            @ LINE B: skip if odd
    
    str r0, [r5], #4    @ LINE C: store to destination
    add r7, r7, #1      @ increment copy counter
    
skip:
    subs r6, r6, #1
    bne copy_loop
    
    mov r1, r7          
    ldr r0, =fmt

    bl printf

    mov r0, r1

    pop {r4, r5, r6, r7, pc}
