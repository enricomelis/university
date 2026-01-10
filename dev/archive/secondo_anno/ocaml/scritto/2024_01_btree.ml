type btree = 
    | Node of int * btree * btree
    | Leaf of int
;;

let bt1 = 
    Node(
        3, 
        Leaf(5), 
        Node(
            -4,
            Leaf(6),
            Leaf(5)
        )
    )
;;

let bt2 = 
    Leaf(12)
;;

let bt3 = 
    Node(
        1,
        Node(
            7,
            Leaf(6),
            Leaf(1)
        ),
        Leaf(-2)
    )
;;

let btlist = [bt1; bt2; bt3];;

let rec depth tree = 
    match tree with 
    | Leaf(_) -> 0
    | Node(_, left, right) -> 1 + max (depth left) (depth right)
;;

let rec max_depth btlis =
    match btlis with
    | [] -> 0
    | elem::rest -> max (depth elem) (max_depth rest)
;;

let count_max btlis = 
    let m = max_depth btlist in
    let btlist_filtered = List.filter (fun x -> (depth x) = m) btlis in
    let len = List.length btlist_filtered in
    (m, len)
;;

count_max btlist;;
