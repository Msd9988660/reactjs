import React, { useState } from "react";


function Clock(){
    let time= new Date().toLocaleTimeString();

    const [ currentTime, setcurrentTime]=useState(time)

    const update = () =>{
        time= new Date().toLocaleTimeString();
        setcurrentTime(time)

    }
    setInterval(update,1000);
return(
    <div>
        <h1>{currentTime}</h1>

</div>
    )
}
export default Clock