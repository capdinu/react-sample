import { useState } from "react";
function Ty() {
    const[type,setType] = useState([])
    const addFnn = () => setType();
    return(
      <>
      <div>
     <input type="text"  value={type} onChange={}/>
     <button onClick={addfnn}>Add</button>
        </div>
      </>
    )
  }
  export default Ty