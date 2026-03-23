import { useState } from "react";

function Square ({value, onSquareClick}) {

  return <button className="square bg-square rounded-[10px] size-[80px] md:size-[100px] 2xl:size-[150px] border border-gray-400 text-3xl font-bold flex items-center justify-center hover:bg-gray-100 transition-colors" onClick={onSquareClick}>{value}</button>;
}
// value is a prop passed from the parent (Board) to the child (Square)


export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  // Note: State is private to a component that defines it, you cannot update the Board’s state directly from Square.

  return (
    <> 
    <div className="wrapper flex justify-center flex-col min-h-screen gap-3 md:gap-4 bg-background">
      {/* why does the fragment opening tag needs to be in the same line as the return keyword for it to work?
      we need the fragment opening next to the return because js engine considers the return statement already ended and it doesn't
      read anything below it.
      we also need the fragment element itself because in react, we retuen only one element
      re can return in ( ) but we also need the fragment or any other element to swap the whole thing
      just to make sure we're returning one single element*/}
        <div className="board-row flex justify-center gap-3 md:gap-4 bg-board">
          <Square value={squares[0]}/>
          <Square value={squares[1]}/>
          <Square value={squares[2]}/>
        </div>
        <div className="board-row flex justify-center gap-3 md:gap-4">
          <Square value={squares[3]}/>
          <Square value={squares[4]}/>
          <Square value={squares[5]}/>
        </div>
        <div className="board-row flex justify-center gap-3 md:gap-4">
          <Square value={squares[6]}/>
          <Square value={squares[7]}/>
          <Square value={squares[8]}/>
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
