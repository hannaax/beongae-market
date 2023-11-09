import styled from "@emotion/styled"

interface Button1Props {
  text: string
  style?: object
  onclick?: () => void
  backgroundcolor?: string
  id: string
}

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

export const Button1 = ({
  text,
  style,
  onclick,
  backgroundcolor,
  id,
}: Button1Props) => {
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

interface Button2Props {
  text: string
  style?: object
  onclick?: () => void
  backgroundcolor?: string
}

export const Button2 = ({
  text,
  style,
  onclick,
  backgroundcolor,
}: Button2Props) => {
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
