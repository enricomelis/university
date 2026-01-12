type btree = 
    | Node of int * btree * btree
    | Leaf of int
