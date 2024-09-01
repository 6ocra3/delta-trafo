import "./Modal.scss";
import ReactDOM from 'react-dom';

interface ModalProps{
    show: boolean | (()=>void);
    onCloseButtonClick: (() => void);
    children: JSX.Element;
}

const Modal: React.FC<ModalProps> = ({ show, onCloseButtonClick, children }) => {
    if (!show) {
      return null;
    }
  
    return ReactDOM.createPortal(
        <div onClick={() => {onCloseButtonClick()}} className="modal-wrapper">
          <div onClick={(e) => {e.stopPropagation()}} className="modal">
            <div className="body">
              {children}
            </div>
            {/* <div className="footer">
              <button onClick={onCloseButtonClick}>Close Modal</button>
            </div> */}
          </div>
        </div>
        , document.body
      );
  };
  
  export default Modal;