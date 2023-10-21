import Uploads01UI from "./Uploads01.presenter"
import { useRef } from "react"
import type { ChangeEvent } from "react"
import { checkValidationImage } from "./Uploads01.validation"
import { useMutation } from "@apollo/client"
import { UPLOAD_FILE } from "./Uploads01.queries"
import { Modal } from "antd"
import { UploadButton, UploadFileHidden, UploadImage } from "./Uploads01.styles"

export default function Uploads01(props): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null)
  const [uploadFile] = useMutation(UPLOAD_FILE)

  const onClickUpload = (): void => {
    fileRef.current?.click()
  }

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    // 파일 객체 가져오기
    console.log(event)
    const file = event.target.files?.[0]
    // validation
    const isValid = checkValidationImage(file)
    if (!isValid) return
    try {
      // upload api 요청
      const result = await uploadFile({ variables: { file } })
      // url state에 담기
      props.onChangeFileUrls(result.data.uploadFile.url, props.index)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }
  return (
    <>
      {props.fileUrl !== "" ? (
        <UploadImage
          onClick={onClickUpload}
          src={`https://storage.googleapis.com/${fileUrl}`}
        />
      ) : (
        <UploadButton onClick={onClickUpload}>
          <p>+</p>
          <p>Upload</p>
        </UploadButton>
      )}

      <UploadFileHidden type="file" ref={fileRef} onChange={onChangeFile} />
    </>
  )
}
