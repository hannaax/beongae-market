import { UploadButton, UploadFileHidden, UploadImage } from "./Uploads01.styles"

export default function Uploads01UI(props): JSX.Element {
  return (
    <>
      {props.fileUrl !== "" ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <p>+</p>
          <p>Upload</p>
        </UploadButton>
      )}

      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  )
}
