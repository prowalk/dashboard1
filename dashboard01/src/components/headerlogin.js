import React from 'react';



function App() {
    return (
        <div>
            <header>
                <form className='form-inline'>
                    <div className='form-group' >
                        <label >Name </label>
                <input className='ml-2' type='text' />
                    </div>
                    <div className='form-group ml-2'> 
                        < label > Passcode </label>
                <input className='ml-2' type='password' />
                    </div>
                    <button className='btn btn-primary ml-2' type='submit'>Submit
                </button>
                </form>
            </header>
        </div>
    );
}

export default App;
