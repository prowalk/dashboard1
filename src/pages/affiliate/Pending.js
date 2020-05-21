import React, {useState} from 'react'
import NavBar from "../../components/navbar"
import Footer from '../../components/footer'
import Table from '../../components/table'
import InputSearch from '../../components/inputSeach'

const AffiliatePending = () => {
    const [search, setSearch] = useState('')
    const titles = ["ID","Name", "Address", "Unit", "City", "State", "ZipCode", "Email", "Phone-Number", "Profile Picture VIDEO", "Profile Picture", 'Legal']
    const datas = [
        {id: 200, name: 'Juan Perez', addres:'3 Street', unnit: 'unit', city: 'New York',state: 'Yk',zipcode:  '58001', email: 'juanperez@mail.com', phone: '587738821', profile_video : '', profile: '',
        legal: (
            <div className='row w-100'>
                <div className='col-6 pt-1 pb-1'>
                    <button className='btn btn-table'>ID</button>
                </div>
                <div className='col-6 pt-1 pb-1'>
                    <button className='btn btn-table'>Application form</button>
                </div>
                <div className='col-6 pt-1 pb-1'>
                    <button className='btn btn-table'>Insurance</button>
                </div>
                <div className='col-6 pt-1 pb-1'>
                    <button className='btn btn-table-two'>Reject</button>
                </div>
                <div className='col-6 pt-1 pb-1'>
                    <button className='btn btn-table'>Certificates</button>
                </div>
                <div className='col-6 pt-1 pb-1'>
                    <button className='btn btn-table'>Approve</button>
                </div>
                <div className='col-6 pt-1 pb-1'>
                    <button className='btn btn-table'>CIA</button>
                </div>
            </div>
        )}
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

export default AffiliatePending;