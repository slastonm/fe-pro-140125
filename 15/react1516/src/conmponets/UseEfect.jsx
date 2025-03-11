import React, { useState, useEffect } from 'react';

const UseEffectComponent = () => {
    const [count, setCount] = useState(0);
    // const [state2, setState2] = useState(null);
    // const [state3, setState3] = useState(null);

    // useEffect(() => {
    //     // Effect після кожного рендеру
    //     console.log('Effect for state1')
    //     document.title = `Count ${count}`
       
    // })

    // useEffect(() => {
    //     // Effect виконується після mount
    //     document.title = `Count ${count}`
    //     return ()=>{
    //         console.log('Компонент приховано або видалено з відобраеження');
    //     }


    // }, []);

    useEffect(() => {
        // Effect Виконується також при зміні значень в масиві що отримує
        document.title = `Count ${count}`
    }, [count]);
    function addCount(){
        setCount(count=>count+1)
    }

    return (
        <div>
            Hello
            {/* <p>{state1}</p>
            <p>{state2}</p>
            <p>{state3}</p> */}
            <button onClick={addCount} className='btn btn-primary'>
                +1
            </button>
        </div>
    );
};

export default UseEffectComponent;