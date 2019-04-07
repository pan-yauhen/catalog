import React from 'react';
import './Home.scss';
import HomeItems from '../../mocks/HomeItems';
import Button from "reactstrap/es/Button";

export const Home = () =>
  <div className="home d-flex flex-column text-white w-100 text-center">
      {HomeItems.map(i => (
        <div className="px-5 page-section d-flex flex-column align-items-end" style={
            {backgroundImage: `url(${require("../../mocks/images/"+i.image)})`}
        }>
            <div className={
                `section-inner inner${i.id} d-flex flex-column justify-content-center h-100 w-25 px-3`
            }>
                <h3 className="font-weight-bold">
                    {i.productName}
                </h3>
                <span>
                    {i.description}
                </span>
                <Button
                    outline color={'info'}
                    className="align-self-center text-white border-white rounded-0 w-75 mt-5"
                >
                    Получить
                </Button>
            </div>
        </div>
      ))}
  </div>;