import * as S from "./ConfirmModal.styles"
import Modal from "../modal/Modal"

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
      <S.ModalContainer>{children}</S.ModalContainer>
    </Modal>
  )
}

export default ConfirmModal
