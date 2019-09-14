import React from 'react';
import {Link} from 'react-router-dom'
import './Home.scss';
import HomeItems from '../../mocks/HomeItems';

export const Home = () =>
  <div className="home d-flex flex-column text-white w-100 text-center">
    {HomeItems.map(i => (
      <div
        className="px-lg-5 page-section d-flex flex-column align-items-end"
        style={{backgroundImage: `url(${require("../../mocks/images/" + i.image)})`}}
      >
        <div className={`section-inner inner${i.id} d-flex flex-column justify-content-center h-100 px-3`}>
          <h3 className="font-weight-bold">{i.productName}</h3>
          <span>{i.description}</span>
          <Link
            to={'/catalog'}
            outline color={'info'}
            className="align-self-center text-white border-white rounded-0 w-75 mt-5"
          >
            ПОЛУЧИТЬ
          </Link>
        </div>
      </div>
    ))}
  </div>
