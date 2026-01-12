type valuta = 
    | Euro of float
    | Dollari of float;;

let inEuro t x =
    match x with
    | Euro(x) -> x
    | Dollari(x) -> t *. x
;;

inEuro 0.93 (Dollari 2.0);;

let rec somma_valute t lst =
    match lst with 
    | [] -> 0.
    | elem::rest -> (inEuro t) elem +. (somma_valute t rest)
;;

let lis = [Euro 1.5; Dollari (-1.0); Dollari 2.6; Euro (-2.0);];;

somma_valute 0.93 lis;;

let separa_valute lst =
    let isEuro x = match x with
        | Euro(_) -> true
        | _ -> false
    in 
    let isDollari x = match x with
        | Dollari(_) -> true
        | _ -> false
    in

    ( (List.filter isEuro lst), (List.filter isDollari lst) )
;;

separa_valute lis;;
