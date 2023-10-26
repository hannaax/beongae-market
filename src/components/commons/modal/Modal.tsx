import ReactDOM from "react-dom"
import * as S from "./Modal.styles"

interface Props {
  children: JSX.Element
  closeModalHandler: VoidFunction
  isOpenModal: boolean
}

const Modal = ({ children, isOpenModal, closeModalHandler }: Props) => {
  return (
    <>
      {isOpenModal ? (
        <>
          <S.Dimmer onClick={closeModalHandler} />
          {children}
        </>
      ) : null}
    </>
  )
}

export default Modal
