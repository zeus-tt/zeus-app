import { Card, CardBody, Button, Text } from '@pancakeswap-libs/uikit'
import React from 'react'
import { Link } from 'react-router-dom'
import { Heading } from 'rebass'
import styled from 'styled-components'
import StyledHomeCard from '../elements/Card'

const StyledCard = styled(Card)`
  width: 100%;
  border: 0;
  box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.16), inset 0px 1px 2px rgba(255, 255, 255, 0.25);
`

const StyledMainCard = styled(StyledHomeCard)`
  padding-bottom: 1em;
  padding-top: 2em;
`

const StyledPrimaryText = styled(Text)`
  background-size: 500px;
  font-family: 'Poppins';
  font-weight: 700;
  background-image: ${({ theme }) => theme.colors.gradients.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

function Reward() {
  return (
    <StyledMainCard>
      <StyledCard>
        <CardBody>
          {/* <Heading autoCapitalize="true" fontWeight="700" fontFamily="Poppins">
            HIGHEST REWARDS ON THUNDERCORE
          </Heading> */}
          <StyledPrimaryText my="0.2em" bold color="primary" fontSize="1.75em">
            Swap and Pools are live on Zeus!
          </StyledPrimaryText>
          <Button as={Link} to="/swap">Swap Now</Button>
        </CardBody>
      </StyledCard>
    </StyledMainCard>
  )
}

export default Reward
