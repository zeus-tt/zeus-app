import React from 'react'
import Row from 'components/Row'
import { Link } from 'react-router-dom'
import { Button, Flex, Image, Text, useMatchBreakpoints } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { ExternalLink } from 'components/Shared'
import StyledHomeCard from '../elements/Card'
import learnmoreImg from '../../../assets/Home/Learn-more.png'

const StyledFullContainer = styled(Flex)`
  width: 100%;
  background: #010E18;
`

const StyledTradeButton = styled(Button)`
  margin-left: 1em;
  padding: 0.1em;
  border: 0;
  background: linear-gradient(116.19deg, #2c6ab8 15.05%, #0e89d0 40.66%, #48d1ed 79.41%, #c9f9fd 99.14%);
`

const StyledFillColor = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 0.4em;
  padding-left: 1em;
  padding-right: 1em;
  text-align: center;
  background: #00101f;
`

const StyledPrimaryTextBlue = styled(Text)`
  background-size: 100%;
  font-family: 'Raleway';
  font-weight: 700;
  background-image: linear-gradient(116.19deg, #2c6ab8 15.05%, #0e89d0 40.66%, #48d1ed 79.41%, #c9f9fd 99.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

function LearnMore() {
  const mobileBreakpoints = useMatchBreakpoints()

  return (
    <StyledFullContainer>
      <StyledHomeCard>
        <Flex flex={1} flexWrap="wrap-reverse" flexDirection="row">
          <Flex flexDirection="column" flex="1 1 350px">
            <Text fontSize={mobileBreakpoints.isXl ? '2.1875em' : '1.8em'} fontWeight={700} fontFamily="Poppins">
              TRADE ANYTHING. <br />
              NO REGISTRATION, NO HASSLE
            </Text>
            <Text my="1em" fontWeight={400}>
              Trade any token on ThunderCore in seconds, just by connecting your wallet.
            </Text>
            <Row mt="1em">
              <Button as={Link} to="/swap">Trade Now</Button>
              <ExternalLink href="https://docs.zeusswap.fi/get-started/introduction-to-zeusswap">
              <StyledTradeButton variant="secondary">
                <StyledFillColor>
                  <StyledPrimaryTextBlue>Learn More</StyledPrimaryTextBlue>
                </StyledFillColor>
              </StyledTradeButton>
              </ExternalLink>
            </Row>
          </Flex>
          <Flex flex="1 1 250px" alignItems="center" justifyContent="center">
            <Image mb="1em" src={learnmoreImg} width={200} height={200} />
          </Flex>
        </Flex>
      </StyledHomeCard>
    </StyledFullContainer>
  )
}

export default LearnMore
