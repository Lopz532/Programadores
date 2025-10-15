import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/productos/";
    console.log("Fetch ->", url);

    fetch(url)
      .then((res) => {
        console.log("Fetch status:", res.status, res.statusText);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("Fetch data raw:", data);
        // Manejar respuesta paginada de DRF u otras estructuras:
        if (Array.isArray(data)) {
          setProductos(data);
        } else if (data && Array.isArray(data.results)) {
          setProductos(data.results);
        } else {
          // si la API devuelve un objeto con campos distintos
          console.warn("Formato inesperado de la API:", Object.keys(data));
          setProductos([]);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ padding: 20 }}>Cargando productos...</p>;
  if (error)
    return (
      <div style={{ padding: 20 }}>
        <p>Error al cargar productos: {error}</p>
      </div>
    );

  if (productos.length === 0)
    return (
      <div className="home-container">
        <h1>Productos</h1>
        <p>No se encontraron productos (array vacío).</p>
      </div>
    );

  return (
    <div className="home-container">
      <h1>Productos</h1>
      <div className="productos-grid">
        {productos.map((p) => (
          <div key={p.id ?? Math.random()} className="producto-card">
            {p.imagen && (
              <img
                src={p.imagen}
                alt={p.nombre}
                className="producto-img"
                onError={(e) => (e.target.style.display = "none")}
              />
            )}
            <h2>{p.nombre ?? "Sin nombre"}</h2>
            <p>{p.descripcion ?? ""}</p>
            <p className="precio">${p.precio ?? "0.00"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
