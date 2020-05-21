import React from 'react'
import NavBar from "../../components/navbar"
import Footer from '../../components/footer'
import Maps from '../../components/googleMap'

const Home = () => {
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

    const markerAffiliate = [
        {lat: 40.7834388, lng: -73.9662476},
        {lat: 40.7834202, lng: -73.9662476},
    ]

    return(
        <>
            <NavBar/>
            <div className='main container-fluid w-100'>
                <div className='row ml-sm-1 mr-sm-1  align-content-center w-100'>
                    <div className='col-md-6 pt-2 pb-2 col-lg-4 col-sm-12'>
                        <p className='text-title'>EMAIL IMBOX</p>
                    </div>
                    <div className='col-md-6 pt-2 pb-2 col-lg-4 col-sm-12' >
                        <p className='text-title'>CURRENT SERVICES</p>
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
                    <div className='col-md-6 pt-2 pb-2 col-lg-4 col-sm-12' >
                        <p className='text-title'>ACTIVE AFFILIATES</p>
                        <Maps center={center} marker={markerAffiliate} />
                        <div className='row w-100 mt-3'>
                            <div className='col-md-6 col-sm-6 mt-1 mb-1'>
                                <div className='text-description'>
                                    <div className='circle-active'></div> 357 ACTIVE
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-6 mt-1 mb-1'>
                                <div className='text-description'>
                                    <div className='circle-rejected'></div> 200 INACTIVE
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home;