import React, {useState} from 'react'
import NavBar from "../../components/navbar"
import Footer from '../../components/footer'
import InputSearch from '../../components/inputSeach'
import Table from '../../components/table'

const PetServices = () => {
    const [search, setSearch] = useState('')
    const titles = ["Service type","Service Date", "Affiliate", "Address", "Status", "Report", "$ Inovice", "Refund"]
    const datas = [
        {service_type: '', service_date: '',affiliate: '', addres:'3 Street', status: '',report: (<button className='btn btn-table-two'>Report</button>),invoice:  '', refund: (<p className='text-table'>Refund processed</p>)}
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
export default PetServices