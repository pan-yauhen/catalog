import React, {Component} from 'react';
import {connect} from 'react-redux';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import {
  fetchCollection as fetchCollectionAction,
} from '../../actions/collection';
import {Button, Modal, ModalBody} from 'reactstrap';
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
    const {collectionList, fetchCollection} = this.props;
    const {isOpen} = this.state
    return (
      <div className="catalog d-flex">
        {console.log({collectionList, fetchCollection})}
        <aside className="catalog-sidebar flex-grow-1 d-flex flex-column w-100">
          {sidebarItems.map(
            (container, index) => (
              <div className="d-flex flex-column mx-5 mt-5" key={index}>
                {container.title}:
                {container.items.map(
                  (item, index) => (
                    <Label key={index}>
                      <Input className="position-relative ml-0" type="checkbox"/>{' '}
                      {item}
                    </Label>
                  )
                )}
              </div>
            )
          )}
        </aside>
        <div className="catalog-inner flex-grow-1">
          <Button
            onClick={this.toggleModalWindowVisibility}
            outline
            color={'info'}
          >Модалка</Button>
          <Modal
            isOpen={isOpen}
            toggle={this.toggleModalWindowVisibility}
            className={this.props.className}
          >
            <ModalBody>
              <div className="modal-gallery">
                <img src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/5mJA/bRp8pHUmL/005.jpg" alt=""/>
              </div>
              <div className="modal-description">
                <div className="modal-description__fade"/>
                <div className="modal-description__collage">
                  <img className="" src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/5mJA/bRp8pHUmL/005.jpg" alt=""/>
                  <img className="" src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/5mJA/bRp8pHUmL/005.jpg" alt=""/>
                  <img className="" src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/5mJA/bRp8pHUmL/005.jpg" alt=""/>
                </div>
                <div className="modal-description__content">
                  <p>
                    Чтобы узнать подробнее и примерить пару нажмите <a href=""> тут</a>
                  </p>
                </div>
              </div>
            </ModalBody>
          </Modal>
        </div>
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