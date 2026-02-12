export default function Square() {
  return <> 
  {/* why does the fragment opening tag needs to be in the same line as the return keyword for it to work?
  we need the fragment opening next to the return because js engine considers the return statement already ended and it doesn't
  read anything below it.
  we also need the fragment element itself because in react, we retuen only one element
  re can return in ( ) but we also need the fragment or any other element to swap the whole thing
  just to make sure we're returning one single element*/}
    <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button>

  </>;
}

// why do i need the 'default' keyword here to tell other files using this file that it's the main function?
//shouldn't using the 'export' keyword enough? i'm not exporting any other thing anyway
// and if i had other functions in here, they wouldn't have the 'export' keyword (i think)
// so why the 'default'?
