export default function Square() {
  return <> 
  {/* why does the fragment opening tag need to be right next to the return keyword for it to work? */}
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
