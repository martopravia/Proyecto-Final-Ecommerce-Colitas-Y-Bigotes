import React, { useContext, useEffect } from 'react'
import { Context } from '../../store/appContext'
import { useNavigate, useParams } from 'react-router-dom'

const ProductEdit = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    
    actions.getProductById(id)
    
  }, [id])

const handleSubmit = (e) => {
    e.preventDefault();
    actions.editProduct(e, id);
    navigate("/panel/products"); 
  };
  return (

    <div className="container">

      <form onSubmit={e => actions.editProduct(e, id)}>
        <div className='my-3'>
          <label htmlFor="nameofphoto" className="form-label">Name</label>
          <input type="text" className="form-control" id="nameofphoto" name='name' value={store.name} onChange={actions.handleChange} />
        </div>

        <div className='my-3'>
          <label htmlFor="descriptionProduct" className="form-label">Description</label>
          <input type='text' className='form-control' id="descriptionProduct" name='description' value={store.description} onChange={actions.handleChange} />
        </div>

        <div className='my-3'>
                    <label htmlFor="category_id" className="form-label">Category</label>
                    <select
                        className="form-select"
                        id="category_id"
                        name='category_id'
                        value={store.category_id}
                        onChange={actions.handleChange}
                    >
                        <option value="" disabled>Seleccione una categoria</option>
                        <option value="1">Perros</option>
                        <option value="2">Gatos</option>
                        <option value="3">Aves</option>
                        <option value="4">Roedores</option>
                    </select>
                </div>
                <div className='my-3'>
                    <label htmlFor="subcategory_id" className="form-label">Subcategory</label>
                    <select
                        className="form-select"
                        id="subcategory_id"
                        name='subcategory_id'
                        value={store.subcategory_id}
                        onChange={actions.handleChange}
                    >
                        <option value="" disabled>Seleccione una subcategoria</option>
                        <option value="1">Raciones</option>
                        <option value="2">Accesorios</option>
                        <option value="3">Juguetes</option>

                    </select>
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






        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    </div>
  )
}

export default ProductEdit