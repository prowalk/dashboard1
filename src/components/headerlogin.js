import React, {useState} from 'react';

function HeaderLogin() {
    const [state, setstate] = useState({user: '', password : ''}) // useState es una funcion de react para generar estado del componente
    // el state es donde esta almacenado los valores declarado en la funcion y el setstate ayuda para hacer el cambio  del valor del estado
   
   
   //funcion de eventos
   /* la funcion handleChange se utiliza cuando el evento onChange de los input detecta un cambio en su valor
        los parametros que necesitamos son name (nombre del input) y el valor
   */
    const handleChange = ({target: {name, value}}) => {
        //forma de cambiar el valor de un estado de react que tiene un objecto con react hoocks
        setstate({
            ...state,
            [name]: value
        })
    }

    // funcion que se utiliza al enviar la informacion del formulario al backend  se llama la ruta requerida
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <header className="pt-4 pb-4 header-login">
                <form onSubmit={handleSubmit} className='form-row  w-100 mt-sm-3'>
                    <div className='col-lg-1 col-md-1 col-sm-1 ml-auto mt-2 name-login'>
                    <label className=''>LOGIN</label>
                    </div>
                    <div className='col-lg-2 col-md-2'>
                        <input className='ml-1 mr-2 form-control input-login' type='text' value={state.user} name='user' placeholder='USER' onChange={handleChange} />
                    </div>
                    <div className='col-lg-2 col-md-2'> 
                        <input className='ml-1 mr-2 form-control input-login' type='password' value={state.password} name='user' placeholder='PASSWORD' onChange={handleChange} />
                    </div>
                    <div className='col-auto'>
                        <button className='btn btn-login' type='submit'>LOGIN</button>
                    </div>
                </form>
            </header>
        </div>
    );
}

export default HeaderLogin;
