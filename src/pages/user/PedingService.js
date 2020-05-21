import React, {useState} from 'react'
import NavBar from "../../components/navbar"
import Footer from '../../components/footer'
import Table from '../../components/table'
import InputSearch from '../../components/inputSeach'

const PendingService = () => {
    const [search, setSearch] = useState('')
    const titles = ["Service type","Service Date", "Affiliate", "Address", "Status", "Special Instructions", "$ Inovice", "Refund"]
    const datas = [
        {service_type: '', service_date: '',affiliate: '', addres:'3 Street', status: '',special_inst: '',invoice:  '', refund: (<p className='text-table-two'>Refund processed</p>)}
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

export default PendingService;