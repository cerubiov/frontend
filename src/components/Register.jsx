import React, { useState } from "react";
import apiClient from "../api/axiosConfig";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post("/usuarios/register", { name, email, password });
      console.log("Usuario registrado:", response.data);
    } catch (error) {
      console.error("Error al registrarse:", error.response.data);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Registrarse</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ margin: "10px 0", padding: "10px", width: "80%" }}
        />
        <br />
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
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
