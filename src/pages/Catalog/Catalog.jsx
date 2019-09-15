import React, { Component } from 'react';
import { connect } from 'react-redux';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import {
    fetchCollection as fetchCollectionAction,
} from '../../actions/collection';
import './Catalog.scss';

const sidebarItems = [
    {
        title: 'Модель',
        items: ['Sport', 'Casual', 'Классика'],
    },
    {
        title: 'Материалы',
        items: ['Кожа', 'Мех', 'Искусственная', 'Замша'],
    },
]

export class CatalogUI extends Component {
    componentDidMount () {
        const { fetchCollection } = this.props;
        fetchCollection();
    }
    render() {
        const { collectionList, fetchCollection } = this.props; 
        return (
        <div className="catalog d-flex">
        {console.log({collectionList, fetchCollection})}
        <aside className="catalog-sidebar flex-grow-1 d-flex flex-column w-100">
            {sidebarItems.map(
                (container, index) => (
                    <div className="d-flex flex-column mx-5 mt-5" key = {index}>
                        {container.title}:
                        {container.items.map(
                            (item, index) => (                 
                            <Label key = {index}>
                                <Input className="position-relative ml-0" type="checkbox" />{' '}
                                {item}
                            </Label>
                            )
                        )}
                    </div>
                    )
                )}
        </aside>
        <div className="catalog-inner flex-grow-1">inner</div>
        </div>);
    }
}


const mapStateToProps = ({ collection: { collectionList } }) => ({
        collectionList,
    });

const mapDispatchToProps = {
    fetchCollection: fetchCollectionAction,
}


export const Catalog = connect(mapStateToProps, mapDispatchToProps)(CatalogUI)