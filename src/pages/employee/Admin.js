import React, {useState} from 'react'
import NavBar from "../../components/navbar"
import Footer from '../../components/footer'
import Table from '../../components/table'
import InputSearch from '../../components/inputSeach'

const EmployeeAdmin = () => {
    const [search, setSearch] = useState('')
    const titles = ["ID","Name", "Address", "Unit", "City", "State", "ZipCode", "Email", "Personal Email", "Phone-Number", "Departament", "Job Title",' Rate/hr', 'Bonus', 'Begin Date', "Legal"]
    const datas = [
        {id: 200, name: 'Juan Perez', addres:'3 Street', unnit: 'unit', city: 'New York',state: 'Yk',zipcode:  '58001', email: 'juanperez@mail.com', email_per: 'juanperez@mail.com', phone: '587738821', departament: '', job_title : '', rate: '', bonus:'', begin_date: '',legal: ''}
    ]

    const handleChange = ({target: {value}}) => {
        setSearch(
            value
        )
    }

    return(
        <>
            <NavBar/>
            <div className='main container-fluid w-100'>
                <InputSearch value={search} handleChange={handleChange} />
                <Table title={titles} values={datas} />
            </div>
            <Footer/>
        </>
    )
}

export default EmployeeAdmin;