# CheatSheet - Paradigmi di Programmazione
## Esercizi 3 e 4

---

# PARTE 1: Funzioni di Libreria OCaml (Esercizio 3)

## 1. `List.map`

**Segnatura:**
```ocaml
List.map : ('a -> 'b) -> 'a list -> 'b list
```

**Descrizione:** Applica una funzione `f` a ogni elemento della lista, restituendo una nuova lista con i risultati.

**Esempio dagli esami:**
```ocaml
(* Da settembre 2024 - swap_colors *)
let swap_colors lis =
  let swap elem = match elem with
    | Black n -> Red n
    | Red n -> Black n
  in List.map swap lis;;

(* Da gennaio 2024 - conta_max usa map per ottenere le profondità *)
let proflis = List.map profondita btlis
```

**Schema mentale:**
```
[a1; a2; a3]  →  map f  →  [f(a1); f(a2); f(a3)]
```

---

## 2. `List.filter`

**Segnatura:**
```ocaml
List.filter : ('a -> bool) -> 'a list -> 'a list
```

**Descrizione:** Restituisce una nuova lista contenente solo gli elementi che soddisfano il predicato `p`.

**Esempio dagli esami:**
```ocaml
(* Da gennaio 2024 - conta_max *)
let maxlis = List.filter (fun n -> n = max_prof) proflis

(* Da giugno 2024 - separa_valute *)
let separa_valute lis =
  let isEuro x = match x with | Euro _ -> true | _ -> false
  in let isDollari x = not (isEuro x)
  in (List.filter isEuro lis, List.filter isDollari lis);;
```

**Schema mentale:**
```
[a1; a2; a3; a4]  →  filter p  →  [ai | p(ai) = true]
```

---

## 3. `List.fold_left`

**Segnatura:**
```ocaml
List.fold_left : ('acc -> 'a -> 'acc) -> 'acc -> 'a list -> 'acc
```

**Descrizione:** Riduce la lista da sinistra a destra, accumulando un risultato. La funzione `f` prende l'accumulatore e l'elemento corrente.

**Esempio dagli esami:**
```ocaml
(* Da giugno 2024 - somma_valute *)
let somma_valute tasso lis =
  let f s v = match v with
    | Euro e -> s +. e
    | Dollari d -> s +. (tasso *. d)
  in Euro (List.fold_left f 0. lis);;

(* Da gennaio 2024 - conta_max alternativa *)
let conta_max btlis =
  let f (mp,n) bt =
    if (profondita bt) = mp then (mp, n+1) else (mp, n)
  in List.fold_left f (max_profondita btlis, 0) btlis;;

(* Da settembre 2024 - seq_len con accumulatore tripla *)
let f (prev_black, cont, max) elem = ...
in List.fold_left f (true, 1, 1) lis'
```

**Schema mentale:**
```
fold_left f acc [a1; a2; a3]
= f (f (f acc a1) a2) a3

        acc
         │
    f────┴────a1
         │
    f────┴────a2
         │
    f────┴────a3
         │
      result
```

---

## 4. `List.fold_right`

**Segnatura:**
```ocaml
List.fold_right : ('a -> 'acc -> 'acc) -> 'a list -> 'acc -> 'acc
```

**Descrizione:** Riduce la lista da destra a sinistra. Nota: l'ordine dei parametri è diverso da `fold_left`.

**Esempio dagli esami:**
```ocaml
(* Da novembre 2024 - espandi *)
let espandi lis =
  let rec elem_espandi (elem, n) =
    if n > 0 then elem::(elem_espandi (elem, (n-1))) else []
  in List.fold_right (fun (e,n) l -> (elem_espandi (e,n))::l) lis [];;
```

**Schema mentale:**
```
fold_right f [a1; a2; a3] acc
= f a1 (f a2 (f a3 acc))

    a1────f
           │
    a2────f
           │
    a3────f
           │
          acc
```

---

## 5. `List.exists`

**Segnatura:**
```ocaml
List.exists : ('a -> bool) -> 'a list -> bool
```

**Descrizione:** Restituisce `true` se almeno un elemento della lista soddisfa il predicato.

**Esempio dagli esami:**
```ocaml
(* Da maggio 2024 - contains per alberi n-ari *)
let rec contains n t =
  match t with
  | Node (x, tlist) -> n = x || List.exists (contains n) tlist;;
```

**Schema mentale:**
```
exists p [a1; a2; a3] = p(a1) || p(a2) || p(a3)
```

---

## 6. `List.length`

**Segnatura:**
```ocaml
List.length : 'a list -> int
```

**Descrizione:** Restituisce il numero di elementi nella lista.

**Esempio dagli esami:**
```ocaml
(* Da gennaio 2024 - conta_max *)
let conta_max btlis =
  let max_prof = max_profondita btlis in
  let proflis = List.map profondita btlis in
  let maxlis = List.filter (fun n -> n = max_prof) proflis in
  (max_prof, List.length maxlis);;
```

---

## Tabella Riassuntiva

| Funzione | Input | Output | Uso tipico |
|----------|-------|--------|------------|
| `map` | `f`, lista | lista trasformata | Trasformare ogni elemento |
| `filter` | predicato, lista | lista filtrata | Selezionare elementi |
| `fold_left` | `f`, acc, lista | valore singolo | Aggregare/accumulare (→) |
| `fold_right` | `f`, lista, acc | valore singolo | Costruire strutture (←) |
| `exists` | predicato, lista | bool | Verificare esistenza |
| `length` | lista | int | Contare elementi |

---

## Pattern Ricorrenti negli Esercizi 3

### Pattern 1: Ricorsione su alberi binari
```ocaml
type btree = Node of int * btree * btree | Leaf of int

let rec funzione bt =
  match bt with
  | Leaf n -> (* caso base *)
  | Node (n, bt1, bt2) -> 
      let (r1, r2) = (funzione bt1, funzione bt2)
      in (* combina r1 e r2 *)
```

### Pattern 2: Ricorsione su alberi n-ari
```ocaml
type ntree = Node of int * ntree list

let rec funzione t =
  match t with
  | Node (x, tlist) -> 
      (* usa List.map/exists/fold su tlist *)
```

### Pattern 3: Separare elementi in due liste
```ocaml
let separa lis =
  let pred1 x = (* condizione 1 *) in
  let pred2 x = (* condizione 2 *) in
  (List.filter pred1 lis, List.filter pred2 lis)
```

### Pattern 4: Costruire coppie da lista
```ocaml
let rec pairs lis =
  match lis with
  | [] -> []
  | x::[] -> []
  | x::y::lis' -> (x,y)::(pairs lis')
```

### Pattern 5: Split di lista di coppie/triple
```ocaml
let rec split lis =
  match lis with
  | [] -> ([], [])
  | (x,y)::lis' -> 
      let (l1, l2) = split lis' 
      in (x::l1, y::l2)
```

---

# PARTE 2: CheatSheet Interprete MiniCaml (Esercizio 4)

## Struttura Base da Memorizzare

### 1. Tipo `exp` (Sintassi Astratta)
```ocaml
type ide = string;;

type exp = 
  | EInt of int
  | CstTrue | CstFalse
  | EString of string
  | Den of ide                      (* variabile *)
  | Sum of exp * exp                (* operazioni *)
  | Diff of exp * exp
  | Prod of exp * exp
  | Div of exp * exp
  | IsZero of exp
  | Eq of exp * exp
  | LessThan of exp * exp
  | GreaterThan of exp * exp
  | And of exp * exp
  | Or of exp * exp
  | Not of exp
  | IfThenElse of exp * exp * exp
  | Let of ide * exp * exp          (* let x = e1 in e2 *)
  | Letrec of ide * ide * exp * exp (* letrec f arg = body in e *)
  | Fun of ide * exp                (* fun arg -> body *)
  | Apply of exp * exp              (* f arg *)
```

### 2. Tipo `evT` (Valori Esprimibili)
```ocaml
type evT = 
  | Int of int 
  | Bool of bool 
  | String of string 
  | Closure of ide * exp * evT env 
  | RecClosure of ide * ide * exp * evT env
  | UnBound
```

### 3. Ambiente
```ocaml
type 't env = ide -> 't

let emptyenv = function x -> UnBound

let bind (s: evT env) (x: ide) (v: evT) = 
  function (i: ide) -> if (i = x) then v else (s i)
```

### 4. Funzione `eval` (CORE)
```ocaml
let rec eval (e: exp) (s: evT env) : evT = 
  match e with
  | EInt(n) -> Int(n)
  | CstTrue -> Bool(true)
  | CstFalse -> Bool(false)
  | Den(i) -> (s i)
  
  | Sum(e1, e2) -> int_plus((eval e1 s), (eval e2 s))
  (* ... altre operazioni ... *)
  
  | IfThenElse(e1, e2, e3) -> 
      let g = eval e1 s in 
      (match g with
       | Bool(true) -> eval e2 s
       | Bool(false) -> eval e3 s
       | _ -> failwith "type error")
  
  | Let(i, e, ebody) -> 
      eval ebody (bind s i (eval e s))
  
  | Fun(arg, ebody) -> 
      Closure(arg, ebody, s)
  
  | Apply(eF, eArg) ->
      let fclosure = eval eF s in 
      (match fclosure with 
       | Closure(arg, fbody, fDecEnv) -> 
           let aVal = eval eArg s in 
           let aenv = bind fDecEnv arg aVal in 
           eval fbody aenv 
       | RecClosure(f, arg, fbody, fDecEnv) -> 
           let aVal = eval eArg s in
           let rEnv = bind fDecEnv f fclosure in
           let aenv = bind rEnv arg aVal in 
           eval fbody aenv
       | _ -> failwith "type error")
```

---

## Schema per Estendere MiniCaml

### STEP 1: Estendere `type exp`
```ocaml
type exp = 
  ... (* costrutti esistenti *)
  | NuovoCostrutto of exp * exp * ...
```

### STEP 2: Estendere `type evT` (se serve nuovo tipo di valore)
```ocaml
type evT = 
  ... (* valori esistenti *)
  | NuovoValore of evT * ...
```

### STEP 3: Aggiungere caso in `eval`
```ocaml
| NuovoCostrutto(e1, e2, ...) ->
    let v1 = eval e1 s in
    let v2 = eval e2 s in
    (* logica di valutazione *)
```

---

## Pattern Ricorrenti negli Esami

### Pattern A: Collezioni/Multi-insiemi (Gen 2024, Lug 2024)

**Struttura:**
```ocaml
(* type exp *)
| Empty
| Add of exp * exp
| Remove of exp * exp
| Exists of exp * exp    (* o HowMany *)

(* type evT *)
| Coll of evT list       (* o MSet *)
```

**Implementazione tipo:**
```ocaml
| Empty -> Coll []

| Add (e1, e2) ->
    let elem = eval e1 s in
    let coll = eval e2 s in
    (match (elem, coll) with
     | (Int n, Coll lst) -> Coll (elem::lst)
     | _ -> failwith "type error")

| Remove (e1, e2) ->
    let elem = eval e1 s in
    let coll = eval e2 s in
    (match (elem, coll) with
     | (Int n, Coll lst) -> 
         Coll (List.filter (fun x -> x <> elem) lst)
     | _ -> failwith "type error")

| Exists (e1, e2) ->
    let pred = eval e1 s in
    let coll = eval e2 s in
    (match (pred, coll) with
     | (Closure(arg, body, fdeclenv), Coll lst) ->
         let check x =
           let newenv = bind fdeclenv arg x in
           let result = eval body newenv in
           (match result with
            | Bool b -> b
            | _ -> failwith "type error")
         in Bool (List.exists check lst)
     | _ -> failwith "type error")
```

---

### Pattern B: Coppie/Pair (Mag 2024, Nov 2024)

**Struttura:**
```ocaml
(* type exp *)
| Pair of exp * exp
| First of exp
| Second of exp
| ComposeApply of exp * exp

(* type evT *)
| PairVal of evT * evT
```

**Implementazione:**
```ocaml
| Pair(e1, e2) -> 
    PairVal (eval e1 s, eval e2 s)

| First e -> 
    (match (eval e s) with
     | PairVal (v1, v2) -> v1
     | _ -> failwith "Error")

| Second e -> 
    (match (eval e s) with
     | PairVal (v1, v2) -> v2
     | _ -> failwith "Error")

| ComposeApply (ep, earg) ->
    let pairclosure = eval ep s in
    (match pairclosure with
     | PairVal (Closure(arg1, body1, env1), 
                Closure(arg2, body2, env2)) ->
         let aval = eval earg s in
         let aenv1 = bind env1 arg1 aval in
         let ris1 = eval body1 aenv1 in
         let aenv2 = bind env2 arg2 ris1 in
         eval body2 aenv2
     | _ -> failwith "Error")
```

---

### Pattern C: Funzioni a Dominio Limitato (Giu 2024)

**Struttura:**
```ocaml
(* type exp *)
| LimFun of ide * exp * exp * exp  (* arg, min, max, body *)

(* type evT *)
| LimClosure of ide * int * int * exp * evT env
```

**Implementazione:**
```ocaml
| LimFun (arg, lim1, lim2, body) ->
    (match eval lim1 s, eval lim2 s with
     | Int l1, Int l2 -> LimClosure (arg, l1, l2, body, s)
     | _ -> failwith "Error")

(* In Apply, aggiungere caso: *)
| LimClosure (arg, l1, l2, fbody, fDecEnv) ->
    let aVal = eval eArg s in
    (match aVal with
     | Int n -> 
         if n >= l1 && n <= l2 then
           let aenv = bind fDecEnv arg aVal in
           eval fbody aenv
         else failwith "Interval Error"
     | _ -> failwith "Type Error")
```

---

### Pattern D: Test Condizionale (Set 2024)

**Struttura:**
```ocaml
(* type exp *)
| Test of exp * exp * exp * exp  (* f, g, x, y *)
```

**Implementazione:**
```ocaml
| Test (f, g, x, y) -> 
    (match (eval f s) with
     | Closure (i, body_f, env_f) ->
         let x_val = eval x s in
         let y_val = eval y s in
         let y_res = eval body_f (bind env_f i x_val) in
         if y_val = y_res then y_res
         else (match (eval g s) with
               | Closure (j, body_g, env_g) ->
                   eval body_g (bind env_g j x_val)
               | _ -> failwith "Error")
     | _ -> failwith "Error")
```

---

## Checklist Pre-Esame

### Per Esercizio 3 (OCaml puro):
- [ ] Saper usare `List.map`, `List.filter`, `List.fold_left`
- [ ] Pattern ricorsivo su alberi binari/n-ari
- [ ] Pattern per separare/dividere liste
- [ ] Accumulatori con tuple in `fold_left`

### Per Esercizio 4 (MiniCaml):
- [ ] Struttura base: `type exp`, `type evT`, `eval`
- [ ] Come si crea una `Closure`: `Closure(arg, body, env)`
- [ ] Come si applica una closure in `eval`:
  1. Valuta la funzione → ottieni `Closure`
  2. Valuta l'argomento → ottieni valore
  3. Estendi l'ambiente: `bind env arg valore`
  4. Valuta il body nel nuovo ambiente
- [ ] Quando serve un nuovo `evT` (es. `Coll`, `PairVal`)
- [ ] Uso di `List.filter`, `List.exists`, `List.fold_left` dentro `eval`

### Errori Comuni da Evitare:
1. Dimenticare di valutare le sotto-espressioni con `eval`
2. Usare `s` invece di `fDecEnv` nell'applicazione (scoping statico!)
3. Dimenticare il type checking con match
4. Non gestire tutti i casi nel pattern matching

---

## Quick Reference: Applicazione Funzione

```
┌─────────────────────────────────────────────────────────┐
│  Apply(eF, eArg)                                        │
│                                                         │
│  1. fclosure = eval eF s                                │
│     └─→ Closure(arg, body, fDecEnv)                     │
│                                                         │
│  2. aVal = eval eArg s                                  │
│     └─→ valore dell'argomento                           │
│                                                         │
│  3. aenv = bind fDecEnv arg aVal                        │
│     └─→ ambiente esteso con (arg → aVal)                │
│                                                         │
│  4. eval body aenv                                      │
│     └─→ valuta il corpo nel nuovo ambiente              │
└─────────────────────────────────────────────────────────┘

NOTA: Si usa fDecEnv (ambiente di DICHIARAZIONE),
      NON s (ambiente di CHIAMATA) → SCOPING STATICO
```
