import HeaderDash from './HeaderDash'
import React from 'react'

function page() {
    const user = {
        name: "Jose",
        lastName: "Rodriguez",
        Projects: [
            {
                idProy: 1,
                nameProy: "nameProy",
                colaborators: [
                    "Correo1", "Correo2", "Correo3"
                ]
            },
        ]
    }
  return (
    <>
        <HeaderDash />
        <div>Bienvenido, {user.name} {user.lastName} </div>
    </>
  )
}

export default page