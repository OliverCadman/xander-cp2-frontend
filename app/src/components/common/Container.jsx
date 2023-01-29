import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = ({children}) => {
  return (
    <StyledContainer>
        {children}
    </StyledContainer>
  )
}

export default Container