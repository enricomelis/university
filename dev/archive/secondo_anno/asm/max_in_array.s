.text 
.global _start

_start:
    ldr r1, =arr                        @ r1 = arr
    ldr r0, [r1]                        @ r0 = arr[0]
    mov r5, r0                          @ max = arr[0]
    mov r6, #1
loop:
    cmp r6, #6
    moveq r0, r5
    beq end
    
    ldr r0, [r1, r6, lsl #2]              

    cmp r0, r5                 
    movgt r5, r0
    add r6, r6, #1
    b loop


    
    

end:
    mov r5, #4
    

.data
arr: .word 10, 4, 95, 22, 7, 91
