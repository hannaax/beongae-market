import type { ChangeEvent, MouseEvent } from "react"
import * as S from "./BoardWrite.styles"
import { Modal } from "antd"
import DaumPostcodeEmbed from "react-daum-postcode"

interface IBoardWriteUIProps {
  writerError: string
  passwordError: string
  titleError: string
  contentsError: string
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
  isActive: boolean
  isEdit: boolean
  data: any
  isOpen: boolean
  zipcode: string
  address: string
  addressDetail: string
}

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Title>게시글 {props.isEdit ? "수정" : "등록"}</S.Title>
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <S.Writer
            readOnly={props.data?.fetchBoard.writer}
            type="text"
            placeholder={
              props.isEdit ? props.data?.fetchBoard.writer : "이름을 적어주세요"
            }
            onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoard.writer}
          />
          <S.Error>{props.writerError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password
            type="password"
            placeholder="비밀번호를 작성해주세요."
            onChange={props.onChangePassword}
          />
          <S.Error>{props.passwordError}</S.Error>
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard?.title}
        />
        <S.Error>{props.titleError}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard?.contents}
        />
        <S.Error>{props.contentsError}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.ZipcodeWrapper>
          <S.Zipcode
            placeholder="07250"
            value={props.data?.fetchBoard?.boardAddress.zipcode}
          />
          <S.SearchButton onClick={props.showZipcodeModal}>
            우편번호 검색
          </S.SearchButton>
          {props.isOpen && (
            <Modal
              open={true}
              onOk={props.handleOk}
              onCancel={props.handleCancel}
            >
              <DaumPostcodeEmbed onComplete={props.handleComplete} />
            </Modal>
          )}
        </S.ZipcodeWrapper>
        <S.Address value={props.data?.fetchBoard?.boardAddress.address} />
        <S.Address onChange={props.onChangeAddressDetail} />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.Youtube
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeYoutubeUrl}
          defaultValue={props.data?.fetchBoard?.boardAddress.youtubeUrl}
        />
      </S.InputWrapper>
      <S.ImageWrapper>
        <S.Label>사진첨부</S.Label>
        <S.UploadButton>+</S.UploadButton>
        <S.UploadButton>+</S.UploadButton>
        <S.UploadButton>+</S.UploadButton>
      </S.ImageWrapper>
      <S.OptionWrapper>
        <S.Label>메인설정</S.Label>
        <S.RadioButton type="radio" id="youtube" name="radio-button" />
        <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
        <S.RadioButton type="radio" id="image" name="radio-button" />
        <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
      </S.OptionWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          isActive={props.isEdit ? true : props.isActive}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}
