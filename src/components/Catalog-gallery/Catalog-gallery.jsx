import React, {useEffect, useState} from 'react';
import { Spinner } from 'reactstrap';
import {ModalWindow} from '../ModalWindow/ModalWindow';
import * as R from 'ramda';
import {collectionImageUrl} from '../../constants';

import './Catalog-gallery.scss';

export const CatalogGallery =({collectionList, filtersList})=> {
    const [isOpen, setOpen] = useState(false);
    const [isInProgress, setProgress] = useState(true);
    const [filteredCollection, setFilteredCollection] = useState([]);

    useEffect(()=>{
        setProgress(false)
    }, []);

    useEffect(()=>{
        if(filtersList.length) {
            const filteredList = R.uniq(R.flatten(
                filtersList.map(
                    (filter)=> R.concat(
                        R.filter(R.propEq('material', filter), collectionList),
                        R.filter(R.propEq('model', filter), collectionList)
                    )
                )
            ))
            setFilteredCollection(filteredList);
        } else {
            setFilteredCollection(collectionList);
        }
    }, [filtersList])

    function toggleModal () {
        setOpen(!isOpen);
    };

    const currentCollectionList = filteredCollection && filteredCollection.length 
        ? filteredCollection 
        : !!collectionList && !!collectionList.length && collectionList
    
    return (
        (!isInProgress && currentCollectionList) ? <div className="gallery-container">
            <span className="gallery-title px-5 text-white text-center font-weight-bold text-uppercase">Зима 2019</span>
            {currentCollectionList.map((item, index)=> (
                <img
                    src={`${collectionImageUrl}${item.url}.jpg`}
                    alt="gallery-item"
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
