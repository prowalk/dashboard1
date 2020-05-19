import React, {useState} from 'react'
import NavBar from "../../components/navbar"
import Footer from '../../components/footer'
import Table from '../../components/table'
import InputSearch from '../../components/inputSeach'

const UserInfo = () => {
    const [search, setSearch] = useState('')
    const titles = ["ID","Name", "Address", "Unit", "City", "State", "ZipCode", "Email", "Phone-Number", "Profile Picture", "Past Services", "Messages History", "Total", "Pending Services", "Registry Info", "Block User"]
    const datas = [
        {id: 200, name: 'Juan Perez', addres:'3 Street', unnit: 'unit', city: 'New York',state: 'Yk',zipcode:  '58001', email: 'juanperez@mail.com', phone: '587738821', profile : '', past_services: '', messages_hist: '', total: 5302, peding_serv: '',reg_info: '', block_user: ''}
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

export default UserInfo;