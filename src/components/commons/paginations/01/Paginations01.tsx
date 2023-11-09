import { useState } from "react"
import { PaginationWrapper } from "./Paginations01.style"
import * as S from "./Paginations01.style"

interface Paginations01Props {
  refetch: (page: { page: number }) => void
  count: number
}

export default function Paginations01(props: Paginations01Props): JSX.Element {
  const [startPage, setStartPage] = useState(1)
  const [activedPage, setActivedPage] = useState(1)
  const lastPage = Math.ceil((props.count ?? 10) / 10)

  const onClickPage = (event: MouseEvent): void => {
    const activedPage = Number(event.currentTarget.id)
    setActivedPage(activedPage) // 변수랑 state를 굳이 각각? , 같은 이름으로 지정 가능?
    void props.refetch({ page: activedPage })
  }

  const onClickPrevPage = (): void => {
    if (startPage === 1) return
    setStartPage(startPage - 10)
    setActivedPage(startPage - 10)
    void props.refetch({ page: startPage - 10 })
  }

  const onClickNextPage = (): void => {
    if (startPage + 10 > lastPage) return
    setStartPage(startPage + 10)
    setActivedPage(startPage + 10)
    void props.refetch({ page: startPage + 10 })
  }

  return (
    <PaginationWrapper>
      <span onClick={onClickPrevPage}>{`<`}</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <S.Page
              id={String(index + startPage)}
              onClick={onClickPage}
              key={index + startPage}
              className={index + startPage === activedPage ? "active" : ""}
            >
              {index + startPage}
            </S.Page>
          )
      )}
      <span onClick={onClickNextPage}>{`>`}</span>
    </PaginationWrapper>
  )
}
