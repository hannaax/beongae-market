import Modal from "../modal/Modal"
import * as S from "./style"

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
}: MenuModalProps) => {
  return (
    <Modal isOpenModal={isOpen} closeModalHandler={handleCancel}>
      <S.ModalContainer>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ButtonRow>
          <S.Button onClick={handleConfirm} disabled={isLoading}>
            {confirmText}
          </S.Button>
          <S.button onClick={handleCancel} disabled={isLoading}>
            {cancelText}
          </S.button>
        </S.ButtonRow>
      </S.ModalContainer>
    </Modal>
  )
}

export default MenuModal
