import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProyectosTable.css';

const ProyectoItem = ({ proyecto }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="proyecto-item">
      <h2 onClick={toggleExpand}>{proyecto.title}</h2>
      {isExpanded && (
        <div className="proyecto-content">
          <p>{proyecto.description}</p>
          <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
            Ver en GitHub
          </a>
        </div>
      )}
    </div>
  );
};

const ProyectosTable = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/proyectos');
        setProyectos(response.data['hydra:member']);
      } catch (error) {
        console.error('Error al obtener los proyectos:', error);
      }
    };

    fetchProyectos();
  }, []);

  return (
    <div>
      <h1>Proyectos</h1>
      <div className="proyectos-container">
        {proyectos.map((proyecto) => (
          <ProyectoItem key={proyecto['@id']} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
};

export default ProyectosTable;
