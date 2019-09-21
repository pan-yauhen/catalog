import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  fetchCollection as fetchCollectionAction,
} from '../../actions/collection';
import {CatalogGallery} from '../../components/Catalog-gallery/Catalog-gallery'
import {CatalogSidebar} from '../../components/Catalog-sidebar/Catalog-sidebar'

import {Button, Modal, ModalBody} from 'reactstrap';
import './Catalog.scss';

export class CatalogUI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggleModalWindowVisibility = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  componentDidMount() {
    const {fetchCollection} = this.props;
    fetchCollection();
  }

  render() {
    const {collectionList } = this.props;
    const {isOpen} = this.state
    return (
      <div className="catalog d-flex">
        <CatalogSidebar />
        <CatalogGallery collectionList={collectionList}  />
      </div>);
  }
}


const mapStateToProps = ({collection: {collectionList}}) => ({
  collectionList,
});

const mapDispatchToProps = {
  fetchCollection: fetchCollectionAction,
}


export const Catalog = connect(mapStateToProps, mapDispatchToProps)(CatalogUI)