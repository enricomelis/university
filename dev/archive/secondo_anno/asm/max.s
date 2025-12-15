.text
.global _start
.global max
.type max, %function

_start:
    mov r0, #4
    mov r1, #3
    bl max
    b end 

max:
    cmp r0, r1
    movgt r0, r0
    movle r0, r1
    mov pc, lr

end:
    add r2, r2, r2
