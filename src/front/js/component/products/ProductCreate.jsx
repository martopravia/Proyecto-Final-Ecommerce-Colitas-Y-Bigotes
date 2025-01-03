import React, { useContext } from 'react'
import { Context } from '../../store/appContext'

const ProductCreate = () => {
    const { store, actions } = useContext(Context)


    return (

        <div className="container">

            <form onSubmit={actions.createProduct}>
                <div className='my-3'>
                    <label htmlFor="nameofphoto" className="form-label">Name</label>
                    <input type="text" className="form-control" id="nameofphoto" name='name' value={store.name} onChange={actions.handleChange} />
                </div>

                <div className='my-3'>
                    <label htmlFor="descriptionProduct" className="form-label">Description</label>
                    <input type='text' className='form-control' id="descriptionProduct" name='description' value={store.description} onChange={actions.handleChange} />
                </div>

                <div className='my-3'>
                    <label htmlFor="descriptionProduct" className="form-label">Category</label>
                    <input type='text' className='form-control' id="descriptionProduct" name='category_id' value={store.category_id} onChange={actions.handleChange} />
                </div>
                <div className='my-3'>
                    <label htmlFor="descriptionProduct" className="form-label">Subcategory</label>
                    <input type='text' className='form-control' id="descriptionProduct" name='subcategory_id' value={store.subcategory_id} onChange={actions.handleChange} />
                </div>
                <div className='my-3'>
                    <label htmlFor="formFile" className="form-label">Subir archivo</label>
                    <input className="form-control" type="file" id="formFile" name='photo' value={store.photo?.filename} onChange={actions.setPhoto} />
                </div>


                <div className='my-3'>
                    <input className="form-check-input me-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" name='active' value={store.active} onChange={actions.handleChange} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">foto activa?</label>
                </div>

                <div className='my-3'>
                    <label htmlFor="position" className="form-label">Orden de foto</label>
                    <input type="text" className="form-control" id="position" name='position' value={store.position} onChange={actions.handleChange} />
                </div>
                <div className='my-3'>
                    <label htmlFor="position" className="form-label">Stock amount</label>
                    <input type="text" className="form-control" id="position" name='amount' value={store.amount} onChange={actions.handleChange} />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">$</span>
                    <span className="input-group-text">0.00</span>
                    <input
                        type="number"
                        className="form-control"
                        aria-label="Dollar amount (with dot and two decimal places)"
                        onChange={actions.handleChange}
                        name="price"
                        id="price"
                        value={store.price}
                    />
                </div>






                <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default ProductCreate