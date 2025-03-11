import React, {useState} from 'react';

function Counter() {
    // let counter = 0
    let [counterValue, setCounterValue] = useState(0);
    function upValue(){
        // counterValue++;
        setCounterValue(counterValue=>counterValue+1)
    }
    function downValue(){
        setCounterValue(counterValue-1)

    }
    let [showState, setShowState] = useState(false)
    function changeShowState(){
        setShowState(showState=>!showState)
    }

    let [userData, setUserData] = useState('')
    function changeUserData(e){
        setUserData(userData=>e.target.value)
    }
    return (
        <div className='row'>
            <div className="col-6 d-flex mx-auto text-center">
                <button onClick={upValue} className="btn btn-danger">
                    +
                </button>
                {/* {counterValue} */}
                {counterValue>0 ? counterValue : 'Too low value'}

                <button onClick={downValue} className="btn btn-danger">
                   -
                </button>

            </div>
            <div className="row">
                <div className="col-6 mx-auto text-center">
                    <button onClick={changeShowState} className="btn btn-primary">
                        {/* Show/Hide */}
                        {showState? 'Hide':'Show'}
                    </button>
                    {showState ? <div className='card'>Hello</div>:null}
                </div>                
            </div>
            <div className="row">
                <div className="col-6 mx-auto">
                    <form action="">
                        <input
                        onChange={(e)=>changeUserData(e)}
                        placeholder='Type your data'
                        type="text" 
                        className='form-control' />
                    </form>
                    <p>
                        Form data: {userData}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Counter;