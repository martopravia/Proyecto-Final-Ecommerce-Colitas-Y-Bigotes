import React, { useContext, useState } from 'react'
import context from 'react-bootstrap/esm/AccordionContext'
import { Context } from '../store/appContext'

const AdminForm = () => {
    const { store, actions } = useContext(Context)


    return (

        <div className="container">

            <form >
                <div className='my-3'>
                    <label for="nameofphoto" className="form-label">Title</label>
                    <input type="text" className="form-control" id="nameofphoto" name='title' onChange={actions.handleChange} />
                </div>

                <div className='my-3'>
                    <label for="descriptionProduct" className="form-label">Description</label>
                    <input type='text' className='form-control' id="descriptionProduct" name='description' onChange={actions.handleChange} />
                </div>

                <div className='my-3'>
                    <label for="formFile" className="form-label">Subir archivo</label>
                    <input className="form-control" type="file" id="formFile" name='foto' onChange={actions.setPhoto} />
                </div>


                <div className='my-3'>
                    <input className="form-check-input me-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" name='active' onChange={actions.handleChange} />
                    <label className="form-check-label" for="flexSwitchCheckDefault">foto activa?</label>
                </div>

                <div className='my-3'>
                    <label for="position" className="form-label">Orden de foto</label>
                    <input type="text" className="form-control" id="position" name='position' onChange={actions.handleChange} />
                </div>


                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AdminForm