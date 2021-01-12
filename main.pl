:- initialization(main).

:- include('diagram').
:- include('boundingBox').

main :-
    forall(rect(ID),print_bb(ID)),
    halt.

print_bb(ID) :-
    bb(ID,Left,Top,Right,Bottom),
    portray_clause(user_error,left(ID,Left)),
    portray_clause(user_error,top(ID,Top)),
    portray_clause(user_error,right(ID,Right)),
    portray_clause(user_error,bottom(ID,Bottom)).
