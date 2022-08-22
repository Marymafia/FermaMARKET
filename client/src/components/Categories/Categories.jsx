import axios from 'axios';
import React, { useEffect } from 'react';

function Categories() {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <a href="/show-articals/{{this.id}}" className="btn btn-primary">Show articles</a>
      </div>
    </div>
  );
}

export default Categories;
