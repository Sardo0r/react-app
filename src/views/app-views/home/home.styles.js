import styled from 'styled-components'

export const StyledDiv = styled.div < { isRed: Boolean } > `
background-color: black ;
${({ isRed }) => isRed ? 'background-color: red ;' : ''}
`

export const MyDiv = styled(StyledDiv)`
  font-size: 18px;
`
