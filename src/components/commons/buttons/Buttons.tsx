import styled from "@emotion/styled"

const BigButton = styled.button`
  width: 50%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${(props) => props.backgroundcolor};
`

export const Button1 = ({ text, style, onclick, backgroundcolor, id }) => {
  return (
    <BigButton
      onClick={onclick}
      style={style}
      backgroundcolor={backgroundcolor}
      id={id}
    >
      {text}
    </BigButton>
  )
}

export const Button2 = ({ text, style, onclick, backgroundcolor }) => {
  return (
    <BigButton
      onClick={onclick}
      style={style}
      backgroundcolor={backgroundcolor}
    >
      {text}
    </BigButton>
  )
}
