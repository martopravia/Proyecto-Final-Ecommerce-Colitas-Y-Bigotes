import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, isLogged, admin, adminrequired = false }) => {

    if (!isLogged) return <Navigate to="/access" replace />

    if (adminrequired)
        if (!admin) return <h4>Necesita ser administrador para el ingreso</h4>

    return children



}

export default ProtectedRoute