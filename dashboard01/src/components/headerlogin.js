import React from 'react';

/* Explicacion:
los className que tienen pt (padding-top) y pb (padding-bottom) en el header es de bootstrap que trabaja con el padding,
mientras el ml-auto (margin-left) desplaza todo del margen izquierdo posicionando los elementos a la derecha,
otra clase fue agg al input proveniente del bootstrap que es form-control,
la clase header-login es creada por mi autoria para colocar el color del header se encuentra en el index.css,
la etiqueta de button le agg style especificando cuales va modificar como el color del border y la letra; 
mientras que el form solo cambia el color de las letras.
la funcion handleSubmit es para el evento de cuando se de click al button para enviar los datos del formulario,
debe recibir un parametro que es un evento y para que no recargue la pagina se utiliza e.preventDefault indicando que debe esperar que realice los siguientes comandos.
*/

function HeaderLogin() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <header className="pt-4 pb-4 header-login">
                <form onSubmit={handleSubmit} style={{color:'#ffffff'}} className='form-inline'>
                    <div className='form-group ml-auto mr-3'>
                    <label>Login:</label>
                    </div>
                    <div className='form-group mr-3' >
                        <label >Name </label>
                        <input className='ml-2 form-control' type='text' />
                    </div>
                    <div className='form-group mr-3'> 
                        < label > Passcode </label>
                        <input className='ml-2 form-control' type='password' />
                    </div>
                    <button className='btn mr-3' style={{borderColor: '#ffffff', color:'#ffffff'}} type='submit'>Submit</button>
                </form>
            </header>
        </div>
    );
}

export default HeaderLogin;
