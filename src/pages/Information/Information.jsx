import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import './Information.scss';

export const Information = () =>
  <div className="catalog">
    <YMaps query={{
      apikey: '6aef28dd-a102-46fe-977a-3c29e1c62d3a',
    }}>
      <Map
        style={{
          margin: '20px auto',
          width: '80%',
          height: '600px'
        }}
        defaultState={{center: [53.9040707, 27.5518071], zoom: 14}}
      >
        <Placemark geometry={[53.9040707, 27.5518071]}/>
      </Map>
    </YMaps>
  </div>
