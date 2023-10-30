import Modal from "../modal/Modal"
import * as S from "./MenuModal.styles"

interface MenuModalProps {
  title: string
  isOpen: boolean
  isLoading?: boolean
  confirmText: string
  cancelText: string
  handleConfirm: () => void
  handleCancel: () => void
}

const MenuModal = ({
  isLoading,
  title,
  isOpen,
  confirmText,
  cancelText,
  handleConfirm,
  handleCancel,
  children,
}: MenuModalProps) => {
  return (
    <Modal isOpenModal={isOpen} closeModalHandler={handleCancel}>
      <S.ModalContainer
        style={{ transform: `translateX(${isOpen ? "0%" : "100%"})` }}
      >
        {/* <S.ModalTitle>{title}</S.ModalTitle>
        <S.ButtonRow>
          <button onClick={handleConfirm} disabled={isLoading}>
            {confirmText}
          </button>
          <button onClick={handleCancel} disabled={isLoading}>
            {cancelText}
          </button>
        </S.ButtonRow> */}
        {children}
      </S.ModalContainer>
    </Modal>
  )
}

export default MenuModal
