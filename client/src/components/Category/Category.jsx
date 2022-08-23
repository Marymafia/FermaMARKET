import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCategoryFunc } from '../../redux/actions/CategoryAction';
import './Category.module.css';

export default function Category() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoryFunc());
  }, []);

  return (
    <div className="container-fluid mx-2 image">
      {categories.map((el) => (
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <img
              src={`http://localhost:3000/${el.img}`}
              className="card-img-top img rounded"
              alt={el.name}
            />
            <Link key={el.id} className="nav-link active" aria-current="page" to={`/${el.id}`}>{el.name}</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
