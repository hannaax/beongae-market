import Modal from "../modal/Modal"
import * as S from "./ConfirmModal.styles"

interface ConfirmModalProps {
  title: string
  isOpen: boolean
  isLoading?: boolean
  confirmText: string
  cancelText: string
  handleConfirm: () => void
  handleCancel: () => void
}

const ConfirmModal = ({
  isLoading,
  title,
  isOpen,
  confirmText,
  cancelText,
  handleConfirm,
  handleCancel,
  children,
}: ConfirmModalProps) => {
  return (
    <Modal isOpenModal={isOpen} closeModalHandler={handleCancel}>
      <S.ModalContainer>
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

export default ConfirmModal
