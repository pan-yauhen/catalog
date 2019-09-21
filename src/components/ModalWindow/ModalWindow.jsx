import React from 'react';
import {Carousel} from "react-responsive-carousel";
import {Modal, ModalBody} from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ModalWindow.scss';

export const ModalWindow = ({isOpen, toggleModalWindowVisibility, id}) => (
  <Modal
    isOpen={isOpen}
    toggle={toggleModalWindowVisibility}
  >
    <ModalBody>
      <div className="modal-description__fade"/>
      <Carousel>
        <div>
          <img src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/5mJA/bRp8pHUmL/005.jpg" alt={id}/>
          {/*<p className="legend">Legend 1</p>*/}
        </div>
        <div>
          <img src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/5mJA/bRp8pHUmL/005.jpg" alt={id}/>
          {/*<p className="legend">Legend 2</p>*/}
        </div>
        <div>
          <img src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/5mJA/bRp8pHUmL/005.jpg" alt={id}/>
          {/*<p className="legend">Legend 3</p>*/}
        </div>
      </Carousel>
    </ModalBody>
  </Modal>
)
