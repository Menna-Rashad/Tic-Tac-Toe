import { useState } from "react";

function Square (){

  const [value, setValue] = useState(null);

  function handleClick(){
    console.log('clicked!');
  }

  return <button className="square" onClick={handleClick}>{value}</button>;
}
// value is a prop passed from the parent (Board) to the child (Square)


export default function Board() {
  return (
    <> 
      {/* why does the fragment opening tag needs to be in the same line as the return keyword for it to work?
      we need the fragment opening next to the return because js engine considers the return statement already ended and it doesn't
      read anything below it.
      we also need the fragment element itself because in react, we retuen only one element
      re can return in ( ) but we also need the fragment or any other element to swap the whole thing
      just to make sure we're returning one single element*/}
        <div className="board-row">
          <Square value= "1" />
          <Square value= "2" />
          <Square value= "3" />
        </div>
        <div className="board-row">
          <Square value= "4" />
          <Square value= "5" />
          <Square value= "6" />
        </div>
        <div className="board-row">
          <Square value= "7" />
          <Square value= "8" />
          <Square value= "9" />
        </div>
    </>
  )
  ;
}

// why do i need the 'default' keyword here to tell other files using this file that it's the main function?
//shouldn't using the 'export' keyword enough? i'm not exporting any other thing anyway
// and if i had other functions in here, they wouldn't have the 'export' keyword (i think)
// so why the 'default'?
