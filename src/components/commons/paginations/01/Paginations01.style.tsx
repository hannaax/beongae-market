import styled from "@emotion/styled"

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const Page = styled.div`
  margin: 0 8px;
  padding: 1px 3px;

  &.active {
    background-color: #090909;
    padding: 0px 7.5px;
    border-radius: 14px;
    color: #fff;
  }
`
