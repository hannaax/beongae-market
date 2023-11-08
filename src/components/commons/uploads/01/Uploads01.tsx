import { useRef } from "react"
import type { ChangeEvent } from "react"
import { useMutation } from "@apollo/client"
import { AddPhotoAlternateOutlined } from "@mui/icons-material"
import { Modal } from "antd"
import { UPLOAD_FILE } from "./Uploads01.queries"
import { UploadButton, UploadFileHidden, UploadImage } from "./Uploads01.styles"
import { checkValidationImage } from "./Uploads01.validation"

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
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={onClickUpload}>
          <AddPhotoAlternateOutlined />
        </UploadButton>
      )}

      <UploadFileHidden type="file" ref={fileRef} onChange={onChangeFile} />
    </>
  )
}
