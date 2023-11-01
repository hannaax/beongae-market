import * as S from "./style"

const LoadingSpinner = () => {
  return (
    <S.LoadingSpinner>
      <S.Spinner>
        {/* <img src="/images/Loading.gif" alt="Loading" width="40px" /> */}
        <img src="/images/loading3.gif" alt="Loading" width="150px" />
        {/* <S.DoubleBounce1></S.DoubleBounce1>
        <S.DoubleBounce2></S.DoubleBounce2> */}
      </S.Spinner>
    </S.LoadingSpinner>
  )
}

export default LoadingSpinner
