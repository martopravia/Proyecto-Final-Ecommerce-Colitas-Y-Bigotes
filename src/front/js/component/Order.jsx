import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

const Order = () => {
    const {store, actions} = useContext(Context)
    return (
        <div className="container-fluid">
            <div className=' row w-50 text-center m-auto mt-5 p-5 border border-3 border-dark'>
                <div className="col-12">
                    <h2 className='pb-5'>
                       Tu orden fue aceptada
                    </h2>
                </div>
                <div className="col-12">
                    <h2 className='pt-5'>
                        Consultá las mismas desde tu usuario
                    </h2>
                </div>
            </div>
            <div className='row w-50 text-center m-auto p-5'>
                <div className="col-12">
                <Link to="/"><button className='btn btn-outline-dark m-auto fs-5 px-4'>  Inicio <i className="fa-solid fa-house"></i> </button> </Link>
                </div>
            </div>

        </div>
    )
}

export default Order