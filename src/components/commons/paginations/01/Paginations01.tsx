import { useState } from "react"

export default function Paginations01(props): JSX.Element {
  const [startPage, setStartPage] = useState(1)
  const [activedPage, setActivedPage] = useState(1)
  const lastPage = Math.ceil((props.count ?? 10) / 10)

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
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

  // styles

  return (
    <div>
      <span onClick={onClickPrevPage}>{`<`}</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              id={String(index + startPage)}
              onClick={onClickPage}
              key={index + startPage}
              style={{ margin: "5px" }}
            >
              {index + startPage}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>{`>`}</span>
    </div>
  )
}