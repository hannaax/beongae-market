import { useQuery } from "@apollo/client"
import useMoveToPage from "../../hooks/useMoveToPage"
import MypageUI from "./Mypage.presenter"
import { FETCH_USER_LOGGED_IN } from "./Mypage.queries"
import type { IQuery } from "../../../commons/types/generated/types"

export default function Mypage() {
  const { onClickMoveToPage } = useMoveToPage()

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)

  return <MypageUI onClickMoveToPage={onClickMoveToPage} data={data} />
}
