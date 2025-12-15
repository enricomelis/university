.text
.global main
.type main, %function

@ equivalent in c
@ int main(){
@   int* arr = &...;
@   int* size_ptr = &...;
@   int size = *size;
@   int sum = 0;
@   for(int i = 0, i != size, i++){
@        sum = sum + *(arr + i);
@   }
@   printf("Sum: %d", sum);
@   return sum;
@ }

main:
    @ r0 address of the first elem
    @ r4 sum of values
    @ r5 idx for the loop
    @ r6 size of the arr

    ldr r0, =arr
    ldr r6, =size
    ldr r6, [r6]
    push {r4, r5, lr}    
    mov r4, #0
    mov r5, #0


loop:
    cmp r5, r6
    ldreq r0, =fmt
    moveq r1, r4
    beq end

    ldr r1, [r0, r5, lsl #2]
    add r4, r4, r1
    add r5, r5, #1
    b loop

end:
    bl printf
    mov r0, r1
    pop {r4, r5, pc}
    



.data
arr: .word 1, 2, 3, 4, 5, 6
size: .word 6
fmt: .string "Sum: %d\n"
