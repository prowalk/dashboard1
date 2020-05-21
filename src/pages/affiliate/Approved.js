import React, {useState} from 'react'
import NavBar from "../../components/navbar"
import Footer from '../../components/footer'
import Table from '../../components/table'
import InputSearch from '../../components/inputSeach'

const AffiliateApproved = () => {
    const [search, setSearch] = useState('')
    const titles = ["ID","Name", "Address", "Unit", "City", "State", "ZipCode", "Email", "Phone-Number", "Profile Picture VIDEO", "Past Services", "Invoice", 'Payouts', "Total", "Pending Services", "User", 'Legal', "Block User"]
    const datas = [
        {id: 200, name: 'Juan Perez', addres:'3 Street', unnit: 'unit', city: 'New York',state: 'Yk',zipcode:  '58001', email: 'juanperez@mail.com', phone: '587738821', profile : '', past_services: '', invoice: '', payout:'', total: 5302, peding_serv: '',user: '',
        legal: (<div className='pt-1 pb-1'>
        <button className='btn btn-table'>ID</button>
        <button className='btn btn-table'>Insurance</button>
        <button className='btn btn-table'>Certificates</button>
        <button className='btn btn-table'>ICA</button>
        <button className='btn btn-table'>Services</button>
        <button className='btn btn-table'>Avaibility</button>
        </div>), 
        block_user: (
            <div>
                <p className='label-table'>Rejections</p>
                <input className='form-control input-table' value={7}/>
                <p className='label-table'>Active Hrs/Week</p>
                <input className='form-control input-table' value={45}/>
                <button className='btn btn-table-two'>Block</button>
                <button className='btn btn-table'>Unblock</button>
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

export default AffiliateApproved;