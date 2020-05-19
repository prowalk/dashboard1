import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const InputSearch = ({value, handleChange, name}) => {

    return(
        <form className='form-inline mb-3'>
           <div className='ml-auto mr-3'>
           <FontAwesomeIcon icon={faSearch} size='lg'  className='mr-2'/> <input type='search' name={name} value={value} onChange={handleChange} className='form-control input-search'/>
           </div>
        </form>
    )
}

export default InputSearch