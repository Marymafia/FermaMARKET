import React from 'react';

export default function CardCategory({ el }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <h5 className="card-title">
        {el.name}
      </h5>
      <img src={el.photo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {el.title}
        </h5>
      </div>
    </div>
  );
}
