% calculate_bounding_boxes :-
bb(ID,Left,Top,Right,Bottom) :-
    x(ID, X),
    y(ID, Y),
    width(ID,W),
    height(ID,H),
    Left is X,
    Top is Y,
    Right is X + W,
    Bottom is Y + H.
