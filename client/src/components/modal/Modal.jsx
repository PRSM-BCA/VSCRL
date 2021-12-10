import React, { useEffect } from "react";
import "./ModalStyles.scss";
import reactDOM from "react-dom"
// requires npm install react-transition-group --save
import { CSSTransition } from "react-transition-group";



const Modal = (props) => {
 

  return reactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            {/* <button onClick={props.onSubmit} className="button">Sign Up</button> */}
            <button onClick={props.onClose} className="modal-button">Close</button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById('portal')
    
  );
};

export default Modal;
