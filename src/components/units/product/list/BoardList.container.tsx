import { useQuery, gql } from "@apollo/client"
import BoardListUI from "./BoardList.presenter"
import { useRouter } from "next/router"
import { ChangeEvent, MouseEvent, useEffect } from "react"
import { useState } from "react"
import _ from "lodash"
import type {
  IQuery,
  IQueryFetchBoardsCountArgs,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types"
import { FETCH_USEDITEMS, shoppingData } from "./BoardList.queries"
import { useRecoilState } from "recoil"
import { cartState } from "../../../../commons/stores"
import axios from "axios"

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`

export default function BoardList(): JSX.Element {
  const router = useRouter()
  const [keyword, setKeyword] = useState("")
  const [cart, setCart] = useRecoilState(cartState)

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS)

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT)

  // 네이버 쇼핑api 테스트

  // const [shoppingData, setShoppingData] = useState([])

  // const getShoppingData = async () => {
  //   const URL = "/v1/search/shop.json"
  //   const ClientID = "KJRLHXrhhBXPLMLRgqQP"
  //   const ClientSecret = "JU45Fb_oGj"

  //   // await axios
  //   //   .get(URL, {
  //   //     params: {
  //   //       query: "모자",
  //   //       display: 20,
  //   //     },
  //   //     headers: {
  //   //       "X-Naver-Client-Id": ClientID,
  //   //       "X-Naver-Client-Secret": ClientSecret,
  //   //     },
  //   //   })
  //   //   .then((res) => {
  //   //     setShoppingData(res.data.items)
  //   //   })
  //   // .catch((e) => {
  //   //   console.error(e);
  //   // })
  //   // }
  //   try {
  //     const res = await axios.get(URL, {
  //       params: {
  //         query: "모자",
  //         display: 10,
  //       },
  //       headers: {
  //         "X-Naver-Client-Id": ClientID,
  //         "X-Naver-Client-Secret": ClientSecret,
  //       },
  //     })
  //     setShoppingData(res.data.items)
  //     return res.data.items
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  // useEffect(() => {
  //   async function fetchShoppingData() {
  //     const result = await getShoppingData()
  //     console.log("naver", result)
  //   }
  //   void fetchShoppingData()
  //   // console.log("naver", result)
  // }, [])

  //   useEffect(() => {
  //     async function aaa(): Promise<void> {
  //       const { Modal } = await import("antd") // code-splitting(코드스플릿팅)
  //       Modal.success({ content: "게시글 등록에 성공했습니다" })
  //     }
  //     void aaa()
  //   }, [])

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
    // 디바운싱 최종 실행 후의 value 값을 저장하고,
    // title에 value 부분만 map에서 키워드 표시
    // '이것은 $$$$키워드$$$$입니다'
    // $$$$ 기준 split
  }

  const onChangeKeyword = (value) => {
    setKeyword(value)
  }

  const onClickMoveToCart = (product) => () => {
    // setCart([...cart, event.target.id])
    // console.log(cart)
    console.log(product, "test")

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
      // shoppingData={shoppingData}
    />
  )
}
