import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { async } from '@firebase/util'

const TablaReservaciones = () => {

    const [reservaciones, setReservaciones] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const obtenerReservaciones = async () => {
            const reservacionesCollection = collection(db, "reservaciones")
            const reservacionesSnapshot = getDocs(reservacionesCollection)
            const reservacionesLista = (await reservacionesSnapshot).docs.map((doc) => doc.data())
            setReservaciones(reservacionesLista)
            console.log(reservacionesSnapshot)
        }
        obtenerReservaciones()
    }, [])

    return (<>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Personas</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                </tr>
            </thead>
            <tbody>
                {reservaciones.map((reservation, index) => (
                    <tr key={index}>
                        <td>{reservation.nombre}</td>
                        <td>{reservation.personas}</td>
                        <td>{reservation.correo}</td>
                        <td>{reservation.telefono}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )
}

export default TablaReservaciones