import React, { useState } from "react";
import apiClient from "../api/axiosConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Limpia errores anteriores
    try {
      const response = await apiClient.post("/usuarios/iniciarsesion", {
        correo: email,
        password,
      });
      console.log("Inicio de sesión exitoso:", response.data);
      alert(`Sesión iniciada: Token - ${response.data.token}`);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.mensaje || "Error al iniciar sesión");
      } else {
        setError("Error al conectar con el servidor");
      }
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: "10px 0", padding: "10px", width: "80%" }}
        />
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "10px 0", padding: "10px", width: "80%" }}
        />
        <br />
        <button type="submit" style={{ padding: "10px 20px", marginTop: "10px" }}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
