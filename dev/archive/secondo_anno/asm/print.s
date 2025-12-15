.text
.global main
.type main, %function

main:
    ldr r0, =fmt
    mov r1, #12
    push {lr}
    bl printf
    pop {pc}


.data
fmt: .string "Esempio: %d\n"
