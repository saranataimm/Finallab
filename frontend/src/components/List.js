const number = [5, 2, 6, 8];
const text = ( 
  <>
  {number.length > 3 && (
      <h1 className="red" id="test">
        Hello World !!!
        </h1>
    )}
    {number[0] + number[1]}
  </>
);

//stateless
function missValue(){
    return "Missed !!";
}

function List() {
  return number.lenght > 3 ? text : missValue;
}

export default List;