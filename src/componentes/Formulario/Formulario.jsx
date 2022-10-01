import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { db } from '../../firebase/firebase'
import "./Formulario.css"

const Formulario = () => {
  const onSave = async(values) => {
    await addDoc(collection(db,"reservaciones"),values)
  }
  const onSend = (e) => {
    e.preventDefault()
    const {nombre, correo, telefono, personas} = (e.target)
    console.log(telefono.value)
      onSave({
      nombre: nombre.value,
      correo: correo.value,
      telefono: telefono.value,
      personas: personas.value,
    })
    document.getElementById("form").reset()

  }
  



  return (
<form onSubmit={onSend} className="row gy-2 gx-3 align-items-right" id='form'>
  <div className="col-auto">
    <label className="visually-hidden" htmlFor="autoSizingInput">Nombre</label>
    <input type="text" className="form-control" id="autoSizingInput" placeholder="Nombre" name='nombre' />
  </div>
  <div className="col-auto">
    <label className="visually-hidden" htmlFor="autoSizingInputGroup">Correo</label>
    <div className="input-group">
      <input type="email" className="form-control" id="autoSizingInputGroup" placeholder="Correo Electrónico" name='correo' />
    </div>
  </div>
  <div className="col-auto">
    <label className="visually-hidden" htmlFor="autoSizingInputGroup">Telefono</label>
    <div className="input-group">
      <input type="number" className="form-control" id="autoSizingInputGroup" placeholder="Teléfono a 10 dígitos" name='telefono' />
    </div>
  </div>
  <div className="col-auto">
    <label className="visually-hidden" htmlFor="autoSizingSelect">Personas</label>
    <select className="form-select" id="autoSizingSelect" name='personas'>
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
    <button type="submit" className="btn btn-primary">Reservar</button>
  </div>
</form>

  )
}

export default Formulario