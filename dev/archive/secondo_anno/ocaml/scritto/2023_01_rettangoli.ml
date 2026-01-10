type punto = {x: float; y: float};;
type rettangolo = {id: int; p1: punto; p2: punto} 
                  
let r1 = {id=123; p1={x=1.;y=1.}; p2={x=6.;y=2.}};;
let r2 = {id=44; p1={x=1.;y=2.}; p2={x=2.;y=3.}};;
let r3 = {id=332; p1={x=4.;y=2.}; p2={x=6.;y=4.}};;

let base r = r.p2.x -. r.p1.x;;
let altezza r = r.p2.y -. r.p1.y;;
let area r = base r *. altezza r;;

let list = [r1; r2; r3];;

let check_crescenti lst = 
  let rec aux = function
    | [] | [_] -> true
    | r1::r2::rest -> (
        if (area r1 < area r2) then true else false
      )
  in aux lst;;

check_crescenti list;;

let swap id_1 id_2 lst = 
  let rett_1 = 
    try List.find (fun r -> r.id = id_1) lst
    with Not_found -> failwith "Rettangolo 1 non trovato."
  in 
  let rett_2 = 
    try List.find (fun r -> r.id = id_2) lst
    with Not_found -> failwith "Rettangolo 2 non trovato."
  in 
  List.map (
    fun r -> if (r.id = rett_1.id) then rett_2
      else if (r.id = rett_2.id) then rett_1
      else r
  ) lst;;

swap 123 332 list
