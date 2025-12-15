// implementazione di una pila (stack)

let topIdx = -1;

function stackIsEmpty(stack){
  return (topIdx < 0) ? true : false; 
} 

function stackPush(stack, x){
  topIdx++;
  stack[topIdx] = x;
}

function stackPop(stack){
  if(!stackIsEmpty(stack)){
    let res = stack[topIdx];
    topIdx--;
    return res;
  }
}

function stackTop(stack){
  return stack[topIdx];
}

// implementazione di una lista (linked list)
// esempio: nodo = {val: 5, next: altro_nodo}, altro_nodo = {val: 3, next}

function creaLista(x){
  return {val: x, next: null};
}

function insertLista(testa, x){
  x.next = testa;
  testa = x;

  return x;
}

function deleteLista(testa, target) {
  if(!testa) return null;

  if(testa.val === target) return testa.next;

  let attuale = testa;
  let stop = false;
  while(!stop && attuale.next !== null){
    if(attuale.next.val === target){
      attuale.next = attuale.next.next;
      stop = true;
    }
    else {
      attuale = attuale.next
    }
  }
  return testa;

}


let list = creaLista(5);
list = insertLista(list, {val: 3});
list = insertLista(list, {val: 4});
list = insertLista(list, {val: 6});
list = insertLista(list, {val: 8});

console.log(list);
list = deleteLista(list, 6);
console.log(list);
