import React, { Component } from 'react';
import "./style.css";





class Modal extends Component {
    render () {
        let modal = (
            <div className="modal-container">
                {this.props.children}
            </div> 
        );

        if (! this.props.isOpen) {
            modal = null;
        }
        return (
            <div>
                {modal}
            </div>
        )
            
    
    }
}


// import React from "react";
// import "./style.css";


// function Modal() {
//     return (
//         <div className="modal">
//             <div className="modal-container">
//                 <Close />
//                 <Search />
//             </div>
//         </div>
//     );
// }



export default Modal;

