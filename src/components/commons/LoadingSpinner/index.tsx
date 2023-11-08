import * as S from "./style"

const LoadingSpinner = () => {
  return (
    <S.LoadingSpinner>
      <S.Spinner>
        <img src="/images/loading3.gif" alt="Loading" width="150px" />
      </S.Spinner>
    </S.LoadingSpinner>
  )
}

export default LoadingSpinner
