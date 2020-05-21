import React, {useState} from 'react'
import NavBar from "../../components/navbar"
import Footer from '../../components/footer'
import Table from '../../components/table'
import Maps from '../../components/googleMap'
import InputSearch from '../../components/inputSeach'

const CurrentService = () => {
    const [search, setSearch] = useState('')
    const titles = ["ID", "Date","Name & Last Name", "Email", "Phone", "Services Address", "Requested Affiliate", "Affiliate Phone", "Affiliate Email", "$ Invoice", "No. Service", "Status Service"]
    const datas = [
        {id: 200, date: '', name: 'Juan Perez',email:'',  phone: '587738821', addres:'3 Street', req_affiliate:  '',phone_affiliate: '587738821', email_affiliate: 'juanperez@mail.com',  invoice: '', n_service : '', status: ''}
    ]
    const center = {
        lat: 40.7834282,
        lng:  -73.9662476
    }
    const markerService = [
        {lat: 40.7834275, lng: -73.9662476},
        {lat: 40.7634282, lng: -73.9662476},
        {lat: 40.7834202, lng: -73.9562436},
        {lat: 40.9834282, lng: -73.9662476}
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
                <div className='row w-100'>
                    <div className='col-12'>
                    <InputSearch value={search} handleChange={handleChange} />
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4 pt-2 pb-2'>
                        <Maps center={center} marker={markerService} />
                        <div className='row w-100 mt-3'>
                            <div className='col-md-6 col-sm-6 mt-1 mb-1'>
                                <div className='text-description'>
                                    <div className='circle-active'></div> 357 ACTIVE
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-6 mt-1 mb-1'>
                                <div className='text-description'>
                                    <div className='circle-pending'></div> 300 PENDING
                                </div> 
                            </div>
                            <div className='col-md-6 col-sm-6 mt-1 mb-1'>
                                <div className='text-description'>
                                    <div className='circle-rejected'></div> 100 REJECTED
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-6 mt-1 mb-1'>
                                <div className='text-description'>
                                    <div className='circle-completed'></div> 560 COMPLETED
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-8 col-lg-8 pt-2 pb-2'>
                        
                        <Table title={titles} values={datas} />
                    </div>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default CurrentService;