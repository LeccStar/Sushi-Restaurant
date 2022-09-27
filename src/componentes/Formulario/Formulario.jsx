import React from 'react'

const Formulario = () => {
  return (
<form className="row gy-2 gx-3 align-items-center">
  <div className="col-auto">
    <label className="visually-hidden" htmlFor="autoSizingInput">Nombre</label>
    <input type="text" className="form-control" id="autoSizingInput" placeholder="Nombre" />
  </div>
  <div className="col-auto">
    <label className="visually-hidden" htmlFor="autoSizingInputGroup">Correo</label>
    <div className="input-group">
      <input type="email" className="form-control" id="autoSizingInputGroup" placeholder="Correo Electrónico" />
    </div>
  </div>
  <div className="col-auto">
    <label className="visually-hidden" htmlFor="autoSizingInputGroup">Telefono</label>
    <div className="input-group">
      <input type="number" className="form-control" id="autoSizingInputGroup" placeholder="Teléfono a 10 dígitos" />
    </div>
  </div>
  <div className="col-auto">
    <label className="visually-hidden" htmlFor="autoSizingSelect">Personas</label>
    <select className="form-select" id="autoSizingSelect">
      <option selected>Personas</option>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      <option value={6}>6</option>
      <option value={7}>7</option>
      <option value={8}>8</option>
      <option value={9}>9+</option>
    </select>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>

  )
}

export default Formulario