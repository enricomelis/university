type ntree = Node of int * ntree list | Leaf of int;;

(* la funzione compact prende un albero e restituisce l'albero modificato *)
let rec compact tree =
  match tree with
  | Leaf n -> Leaf n  (* caso base: una foglia resta invariata *)
  
  | Node (n, children) ->
      (* Step 1: compatta ricorsivamente tutti i figli *)
      let compacted_children = List.map compact children in
      
      (* Funzione ausiliaria: verifica se un elemento è una Leaf *)
      let is_leaf t = match t with
        | Leaf _ -> true
        | Node _ -> false
      in
      
      (* Funzione ausiliaria: estrae il valore intero da una Leaf *)
      let get_value t = match t with
        | Leaf v -> v
        | Node _ -> 0  (* caso che non si verifica se usato dopo is_leaf *)
      in
      
      (* Step 2: se tutti i figli sono Leaf, compatta in un'unica Leaf *)
      if List.for_all is_leaf compacted_children then
        let sum = List.fold_left (fun acc t -> acc + get_value t) 0 compacted_children in
        Node (n, [Leaf sum])
      else
        Node (n, compacted_children)
;;

let test_tree = 
  Node (1, [
      Node (2, [Leaf 10; Leaf 20; Leaf 30]);      (* tutti Leaf → compatta *)
      Leaf 5;                                      (* foglia singola → invariata *)
      Node (3, [
          Leaf 100;
          Node (4, [Leaf 1; Leaf 2]);               (* tutti Leaf → compatta *)
          Leaf 200
        ])                                          (* misto → NON compatta, ma ricorre *)
    ])
;;

compact test_tree;; 
