import { useState } from "react";

function Square ({value, onSquareClick}) {

  return <button className="text-[skyBlue] bg-square rounded-[10px] size-[80px] md:size-[100px] 2xl:size-[150px] text-3xl font-bold hover:bg-background transition-colors" onClick={onSquareClick}>
            {value}
          </button>;
}
// value is a prop passed from the parent (Board) to the child (Square)


export default function Board() {

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  // Note: State is private to a component that defines it, you cannot update the Board’s state directly from Square.

  function handleClick(i) {
    if (squares[i]){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = 'X';
    }else{
      nextSquares[i] = 'O';
    }    
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <> 
    <div id="wrapper" className="flex justify-center items-center min-h-screen bg-background">
      {/* why does the fragment opening tag needs to be in the same line as the return keyword for it to work?
      we need the fragment opening next to the return because js engine considers the return statement already ended and it doesn't
      read anything below it.
      we also need the fragment element itself because in react, we retuen only one element
      re can return in ( ) but we also need the fragment or any other element to swap the whole thing
      just to make sure we're returning one single element*/}
        <div className="board grid grid-cols-3 gap-[10px] bg-board px-[30px] py-[90px] rounded-[30px]">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
          <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
          <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
          <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
          <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
          <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
          <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
      </div>
    </>
  )
  ;
}


// Q: why do i need the 'default' keyword here to tell other files using this file that it's the main function?
//shouldn't using the 'export' keyword enough? i'm not exporting any other thing anyway
// and if i had other functions in here, they wouldn't have the 'export' keyword (i think)
// so why the 'default'?
// A: The 'default' keyword specifies the main function of the file, 
// so it gets exported automatically without needing to call it by its exact name when importing.
