import React, {useEffect, useState} from 'react';
import { Spinner } from 'reactstrap';
import {ModalWindow} from '../ModalWindow/ModalWindow';
import * as R from 'ramda';
import {collectionImageUrl} from '../../constants';

import './Catalog-gallery.scss'

export const CatalogGallery =({collectionList})=> {
    const [isOpen, setOpen] = useState(false);
    const [isInProgress, setProgress] = useState(true);

    useEffect(()=>{
        setProgress(false)
    }, [])

    function toggleModal () {
        setOpen(!isOpen);
    };
    return (
        (!isInProgress && collectionList && collectionList.length) ? <div className="gallery-container">
            <span className="gallery-title px-5 text-white text-center font-weight-bold text-uppercase">Зима 2019</span>
            {collectionList.map((item, index)=> (
                <img
                    src={`${collectionImageUrl}${item.url}.jpg`}
                    alt="gallery-image"
                    key={index}
                    className={`gallery-image${R.contains(index, [0, 13, 21]) ? ' large-image' : ''}`}
                    data-images={item.url} 
                    data-material={item.material} 
                    data-model={item.model}
                    onClick={toggleModal}
                />
            ))}
            {isOpen && <ModalWindow isOpen={isOpen} toggle={toggleModal} />}
        </div> 
        : <Spinner className='catalog-spinner m-auto' style={{ width: 170, height: 170 }} />)
}
