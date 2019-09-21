import React, {Fragment} from 'react';
import * as R from 'ramda';

import './Catalog-gallery.scss'

export const CatalogGallery =({collectionList})=> (
    <div className="gallery-container">
        <span className="gallery-title px-5 text-white text-center font-weight-bold text-uppercase">Зима 2019</span>
        {collectionList && collectionList.length && collectionList.map((item, index)=> (
            <img
                src={`https://thumb.cloud.mail.ru/weblink/thumb/xw1/5mJA/bRp8pHUmL/${item.url[0]}.jpg`}
                alt="gallery-image"
                key={index}
                className={`gallery-image${R.contains(index, [0, 13, 21]) ?  ' large-image' : ''}`}
                data-images={item.url} 
                data-material={item.material} 
                data-model={item.model} 
            />
        ))}
    </div>
    )