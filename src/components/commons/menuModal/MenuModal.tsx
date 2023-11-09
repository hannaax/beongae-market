import * as S from "./MenuModal.styles"
import Modal from "../modal/Modal"

interface MenuModalProps {
  title: string
  isOpen: boolean
  isLoading?: boolean
  confirmText: string
  cancelText: string
  handleConfirm: () => void
  handleCancel: () => void
  children: JSX.Element
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
        {children}
      </S.ModalContainer>
    </Modal>
  )
}

export default MenuModal
