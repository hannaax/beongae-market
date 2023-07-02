import { useQuery, gql } from "@apollo/client"
import BoardListUI2 from "./BoardList2.presenter"
import { useRouter } from "next/router"
import type { MouseEvent } from "react"
import { useState, useEffect } from "react"
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite"
import { firebaseApp } from "../../../../../src/components/commons/libraries/firebase"
import { DocumentData } from "firebase/firestore/lite"

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`

export default function BoardList2(): JSX.Element {
  const router = useRouter()
  const { data, refetch } = useQuery(FETCH_BOARDS)
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT)
  const [firebaseData, setFirebaseData] = useState<DocumentData>([])

  useEffect(() => {
    const onFetch = async () => {
      const board = collection(getFirestore(firebaseApp), "board")
      const result = await getDocs(board)
      const datas = result.docs.map((el) => el.data())
      console.log(datas)
      setFirebaseData(datas)
    }

    void onFetch()
  }, [])

  return (
    <BoardListUI2
      data={data}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
      firebaseData={firebaseData}
    />
  )
}
