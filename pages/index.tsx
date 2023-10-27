import { useState } from "react"
import Banner from "../src/components/commons/layout/Banner"
import MenuModal from "../src/components/commons/menuModal/MenuModal"
import Home from "../src/components/units/home/Home"
import ConfirmModal from "../src/components/commons/confirmModal/ConfirmModal"

export default function HomePage(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const handleConfirm = () => {
    console.log("confirm", inputValue)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const onchangeValue = (e) => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  return (
    <div style={{ marginTop: "47px" }}>
      <Banner />
      <Home />
      {/* <ConfirmModal
        title="대회에 참가하시겠습니까?"
        confirmText="참가하기"
        cancelText="돌아가기"
        isOpen={isModalOpen}
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
        isLoading={isLoading}
      >
        비밀번호 확인
        <input
          type="text"
          placeholder="비밀번호"
          value={inputValue}
          onChange={onchangeValue}
        ></input>
        <button onClick={handleConfirm}>확인</button>
      </ConfirmModal> */}
    </div>
  )
}
