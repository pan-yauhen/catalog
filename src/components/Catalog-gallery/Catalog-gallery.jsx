import React, {Component} from 'react';
import {ModalWindow} from '../ModalWindow/ModalWindow';
import * as R from 'ramda';
import {collectionImageUrl} from '../../constants';

import './Catalog-gallery.scss'

export class CatalogGallery extends Component {
    state = {
        isOpen: false,
    }

    toggleModal =()=> {
        this.setState(({isOpen})=>({isOpen: !isOpen}))
    };

    render(){
        const {collectionList} = this.props;
        const {isOpen} = this.state;
        return (
            <div className="gallery-container">
                <span className="gallery-title px-5 text-white text-center font-weight-bold text-uppercase">Зима 2019</span>
                {collectionList && collectionList.length && collectionList.map((item, index)=> (
                    <img
                        src={`${collectionImageUrl}${item.url[0]}.jpg`}
                        alt="gallery-image"
                        key={index}
                        className={`gallery-image${R.contains(index, [0, 13, 21]) ? ' large-image' : ''}`}
                        data-images={item.url} 
                        data-material={item.material} 
                        data-model={item.model}
                        onClick={this.toggleModal}
                    />
                ))}
                <ModalWindow isOpen={isOpen} toggle={this.toggleModal} />
            </div>
        )}}