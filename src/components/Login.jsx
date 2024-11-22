import React, { useState } from "react"; // Asegúrate de importar useState
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación
import apiClient from "../api/axiosConfig"; // Asegúrate de importar correctamente apiClient

const Login = () => {
  // Declaración de estados
  const [email, setEmail] = useState(""); // Estado para el email
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [error, setError] = useState(""); // Estado para los errores
  const navigate = useNavigate(); // Hook para la navegación

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevenir comportamiento por defecto del formulario
    setError(""); // Limpiar errores previos
    try {
      const response = await apiClient.post("/usuarios/iniciarsesion", {
        correo: email, // Usar el estado del email
        password, // Usar el estado de la contraseña
      });
      localStorage.setItem("token", response.data.token); // Guardar el token
      localStorage.setItem(
        "usuario",
        JSON.stringify({ nombre: response.data.nombre }) // Guardar el nombre del usuario
      );
      navigate("/productos"); // Redirigir a la página de productos
    } catch (err) {
      if (err.response) {
        setError(err.response.data.mensaje || "Error al iniciar sesión");
      } else {
        setError("Error al conectar con el servidor");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Iniciar Sesión</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado de email
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de password
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
