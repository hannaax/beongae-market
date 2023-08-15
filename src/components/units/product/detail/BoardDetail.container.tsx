import { useQuery, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import BoardDetailUI from "./BoardDetail.presenter"
import {
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  TOGGLE_USEDITEM_PICK,
} from "./BoardDetail.queries"
import { MouseEvent, useEffect, useState } from "react"

export default function BoardDetail(): JSX.Element {
  const router = useRouter()

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  })

  useEffect(() => {
    console.log(data)
    let recentlyViewedItems = JSON.parse(
      localStorage.getItem("recentlyViewedItems") ?? "[]"
    )

    console.log(recentlyViewedItems)

    // recentlyViewedItems = new Set(recentlyViewedItems)

    // recentlyViewedItems.add(JSON.stringify(data))

    if (data !== undefined) {
      recentlyViewedItems.push(data)
    }

    console.log(recentlyViewedItems)

    localStorage.setItem(
      "recentlyViewedItems",
      JSON.stringify(recentlyViewedItems)
    )
  }, [data])

  const [deleteUseditem] = useMutation(DELETE_USEDITEM)
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK)

  const onClickDeleteProduct = (event: MouseEvent): void => {
    console.log(event.currentTarget.id)
    void deleteUseditem({
      variables: { useditemId: event.currentTarget.id },
      refetchQueries: [
        {
          queries: FETCH_USEDITEM,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    })
  }

  const onClickMoveToEdit = (): void => {
    void router.push(`/product/${router.query.useditemId}/edit`)
  }

  const onClickTogglePickProduct = (event: MouseEvent): void => {
    void toggleUseditemPick({
      variables: { useditemId: event.currentTarget.id },
    })
  }

  const onClickMoveToPay = (): void => {
    // void router.push(`/payment`)
  }

  return (
    <BoardDetailUI
      data={data}
      onClickDeleteProduct={onClickDeleteProduct}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickTogglePickProduct={onClickTogglePickProduct}
      onClickMoveToPay={onClickMoveToPay}
    />
  )
}
