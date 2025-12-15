@ calcola |a-b|
.text
.global main
.type main, %function

main:
    mov r0, #5                  @ r0 = a
    mov r1, #15                  @ r1 = b

    sub r2, r0, r1              @ r2 = a - b
    mov r4, #-1
    mul r3, r2, r4              @ r3 = -(a - b)
    cmp r2, r3
                                @ abs(a) = max {a, -a}
    movgt r1, r2
    movle r1, r3                

    ldr r0, =fmt
    push {lr}
    bl printf
    pop {pc}

.data
fmt: .string "Risultato: %d\n"
