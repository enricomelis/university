.text
.global _start
.global fact
.type fact, %function

_start:
    mov r0, #5
    bl fact
    b end

fact:
    cmp r0, #0

    @ caso base: ritorno 1
    moveq r0, #1
    moveq pc, lr

    @ caso ricorsivo
    push {r0, lr}
    sub r0, r0, #1
    bl fact
    pop {r1, lr}
    mul r2, r0, r1
    mov r0, r2
    mov pc, lr

end:
    mov r5, #7
