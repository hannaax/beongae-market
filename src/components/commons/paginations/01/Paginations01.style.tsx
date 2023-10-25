import styled from "@emotion/styled"

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`
export const Page = styled.div`
  margin: 0 8px;
  padding: 1px 4px;

  &.active {
    background-color: #090909;
    padding: 1px 7px;
    border-radius: 14px;
    color: #fff;
  }
`
