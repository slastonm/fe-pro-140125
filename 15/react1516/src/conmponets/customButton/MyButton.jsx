import React from 'react';
import style from './MyButton.module.css'

const MyButton = () => {
    const inlineStyel = {
        color:'blue',
        fontSize:'30px',
        backgroundColor:'yellow',
        padding:'30px',
        margin:'50px'
    }
    const callAlert = ()=>{
        alert('!!!Hello!!!!')
    }
    const helloUser = (userName)=>{
        alert(`Hello user: ${userName}`)
    }
    const eventInfo = (e)=>{
        console.log(e);
    }
    return (
        <div>
            <button onClick={callAlert} style={inlineStyel}>
                Inline style call alert
            </button>
            <button onClick={()=>helloUser('John')} className={`btn-lg btn btn-primary`}>
                Test
            </button>
            <button onClick={(e)=>eventInfo(e)} className={`btn ms-3 ${style.custom}`}>
                Test module css event
            </button>
        </div>
    );
};

export default MyButton;