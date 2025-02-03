import { useState } from "react";
function Ct() {
    const[count,setCount] = useState(100)
    const addFn = () => setCount(count-1);
    return(
      <>
      <div>
        <h1> Count is: {count}</h1>
        <button onClick={addFn}>Minus here</button>
        </div>
      </>
    )
  }
  export default Ct