import React, {useState} from 'react'
import NavBar from "../../components/navbar"
import Footer from '../../components/footer'
import Table from '../../components/table'
import InputSearch from '../../components/inputSeach'

const PendingService = () => {
    const [search, setSearch] = useState('')
    const titles = ["ID","Name", "Address", "Unit", "City", "State", "ZipCode", "Email", "Phone-Number", "Profile Picture VIDEO", "Profile Picture",  "LEGAL"]
    const datas = [
        {id: 200, name: 'Juan Perez', addres:'3 Street', unnit: 'unit', city: 'New York',state: 'Yk',zipcode:  '58001', email: 'juanperez@mail.com', phone: '587738821', profile_video: '', profile : '', legal: ''}
    ]

    const handleChange = ({target: {value}}) => {
        setSearch(
            value
        )
    }

    return(
        <>
            <NavBar/>
            <div className='main container'>
                <InputSearch value={search} handleChange={handleChange} />
                <Table title={titles} values={datas} />
            </div>
            <Footer/>
        </>
    )
}

export default PendingService;