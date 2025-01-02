import React from 'react'

const AdminForm = () => {
    return (

        <div className="container">

            <form action="#" method="post">
                <div className='my-3'>
                    <label for="nameofphoto" className="form-label">Name</label>
                    <input type="text" className="form-control" id="nameofphoto" />
                </div>

                <div className='my-3'> 
                    <label for="descriptionProduct" className="form-label">Description</label>
                    <input type='text' className='form-control' id="descriptionProduct" />
                </div>

                <div className='my-3'>
                    <label for="formFile" className="form-label">Subir archivo</label>
                    <input className="form-control" type="file" id="formFile"></input>
                </div>


                <div className='my-3'>
                    <input className="form-check-input me-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" for="flexSwitchCheckDefault">foto activa?</label>
                </div>

                <div className='my-3'>
                    <label for="posición" className="form-label">Orden de foto</label>
                    <input type="text" className="form-control" id="posición " />
                </div>


                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AdminForm