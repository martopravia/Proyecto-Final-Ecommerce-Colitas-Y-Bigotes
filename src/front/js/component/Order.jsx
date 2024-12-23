import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {
    return (
        <div className="container-fluid">
            <div className=' row w-50 text-center m-auto mt-5 p-5 border border-3 border-dark'>
                <div className="col-12">
                    <h2 className='pb-5'>
                        Tu orden n° 101010
                    </h2>
                </div>
                <div className="col-12">
                    <h2 className='pt-5'>
                        Fue aceptada
                    </h2>
                </div>
            </div>
            <div className='row w-50 text-center m-auto p-5'>
                <div className="col-12">
                <Link to="/"><button className='btn btn-outline-dark m-auto fs-5 px-4'>  Inicio <i class="fa-solid fa-house"></i> </button> </Link>
                </div>
            </div>

        </div>
    )
}

export default Order