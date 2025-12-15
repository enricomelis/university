.text
.global _start
.global fibo
.type fibo, %function

_start:
    mov r0, #6
    bl fibo
    b end

fibo:
    push {lr}

    @ casi base
    cmp r0, #0
    moveq r0, #0
    popeq {pc}

    cmp r0, #1
    moveq r0, #1
    popeq {pc}

    
    @ caso ricorsivo
    sub r0, r0, #1                @ calcolo n-1
    push {r0}                     @ salvo n-1 sullo stack
                                  @ STACK = [n-1]
    bl fibo                       @ r0 = fibo(n-1)
    pop {r1}                      @ r1 = n-1
                                  @ STACK = []
    push {r0}                     @ STACK = [fibo(n-1), ]
    sub r0, r1, #1                @ r0 = n-2
    push {r0}                     @ salvo n-2 sullo stack
                                  @ STACK = [fibo(n-1), n-2, ]
    bl fibo                       @ r0 = fibo(n-2)
    pop {r2}                      @ r2 = n-2
                                  @ STACK = [fibo(n-1), ]
    pop {r1}                      @ r1 = fibo(n-1)
                                  @ STACK = []
    add r0, r0, r1                @ r0 = fibo(n-1) + fibo(n-2)
    
    pop {pc}



end:
    mov r4, #10
