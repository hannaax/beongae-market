import { type ChangeEvent, type MouseEvent, useState } from "react"
import { useQuery, gql } from "@apollo/client"
import _ from "lodash"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import type {
  IQuery,
  IQueryFetchBoardsCountArgs,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types"
import BoardListUI from "./BoardList.presenter"

import { FETCH_USEDITEMS } from "./BoardList.queries"
import { cartState } from "../../../../commons/stores"

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`

export default function BoardList(): JSX.Element {
  const router = useRouter()
  const [keyword, setKeyword] = useState("")

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS)

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT)

  const [startPage, setStartPage] = useState(1)

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)

  const onClickMoveToBoardNew = (): void => {
    void router.push("/product/new")
  }

  const onClickMoveToBoardDetail = (event: MouseEvent): void => {
    void router.push(`/product/${event.currentTarget.id}`)
  }

  const onClickPage = (event: MouseEvent): void => {
    void refetch({ page: Number(event.currentTarget.id) })
  }

  const onClickPrevPage = (): void => {
    if (startPage === 1) return
    setStartPage((prev) => prev - 10)
    void refetch({ page: startPage - 10 })
  }

  const onClickNextPage = (): void => {
    if (startPage + 10 > lastPage) return
    setStartPage((prev) => prev + 10)
    void refetch({ page: startPage + 10 })
  }

  const searchDebounce = (value) => {
    // _.debounce(() => {
    //   value
    // }, 500)
  }

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    void refetch({ search: event.currentTarget.value, page: 1 })
    searchDebounce(event.currentTarget.value)
  }

  const onChangeKeyword = (value) => {
    setKeyword(value)
  }

  const onClickMoveToCart = (product) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") ?? "[]")

    const temp = baskets.filter((el) => el._id === product._id)
    if (temp.length >= 1) {
      alert("이미 담으신 물품입니다.")
      return
    }

    baskets.push(product)

    localStorage.setItem("baskets", JSON.stringify(baskets))
  }

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      refetchBoardsCount={refetchBoardsCount}
      onClickMoveToCart={onClickMoveToCart}
    />
  )
}
