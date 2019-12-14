import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  fetchCollection as fetchCollectionAction,
} from '../../actions/collection';
import { addFilter as addFilterAction } from '../../actions/filters';
import {CatalogGallery} from '../../components/Catalog-gallery/Catalog-gallery';
import {CatalogSidebar} from '../../components/Catalog-sidebar/Catalog-sidebar';

import './Catalog.scss';

export class CatalogUI extends Component {
  componentDidMount() {
    const {fetchCollection} = this.props;
    fetchCollection();
  }

  render() {
    const {collectionList, filtersList, addFilter} = this.props;
    return (
      <div className="catalog d-flex">
        <CatalogSidebar addFilter={addFilter} filtersList={filtersList} />
        <CatalogGallery collectionList={collectionList} filtersList={filtersList} />
      </div>);
  }
}

const mapStateToProps = ({collection: {collectionList}, filters: {filtersList}}) => ({
  collectionList,
  filtersList,
});

const mapDispatchToProps = {
  fetchCollection: fetchCollectionAction,
  addFilter: addFilterAction,
}

export const Catalog = connect(mapStateToProps, mapDispatchToProps)(CatalogUI)