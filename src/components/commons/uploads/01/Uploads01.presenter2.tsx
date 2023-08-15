import { yupResolver } from "@hookform/resolvers/yup"
import { UploadButton, UploadFileHidden, UploadImage } from "./Uploads01.styles"
import { useForm } from "react-hook-form"

export default function Uploads01UI(props): JSX.Element {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    // resolver: yupResolver(schema),
  })

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
        {...register("images")}
      />
    </>
  )
}
