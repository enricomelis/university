type ntree =
    | Node of int * ntree list;;

let test_tree = 
    Node (1, [
        Node (2, []);
        Node (3, [
            Node (4, []);
            Node (5, []);
        ]);
        Node (6, []);
    ]);;

let rec sum t = 
    match t with
    | Node(x, lst) -> x + List.fold_left (fun x -> fun t -> sum t + x) 0 lst;;

sum test_tree;;

let rec flat t =
    match t with
    | Node(n,[]) -> [n]
    | Node(n,t1::lis) -> (flat t1)@(flat(Node (n,lis)));;

flat test_tree;;
