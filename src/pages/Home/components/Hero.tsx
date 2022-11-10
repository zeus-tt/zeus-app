import { Button, Flex, Image, Text, useMatchBreakpoints } from '@pancakeswap-libs/uikit'
import UnlockButton from 'components/ConnectWalletButton'
import Row from 'components/Row'
import React, { useCallback } from 'react'
import {useHistory} from 'react-router-dom';
import styled from 'styled-components'

import characterImg from '../../../assets/Home/character.png'
import thunderImg from '../../../assets/Home/thunder.png'
import thunder2Img from '../../../assets/Home/thunder2.png'
import thunderLogo from '../../../assets/Home/thunderLogo.svg'
import StyledHomeCard from '../elements/Card'

const StyledMainContainer = styled(StyledHomeCard)`
  padding-top: 0;
  padding-bottom: 0;
`

const StyledImageDiv = styled(Flex)`
  position: relative;
  height: 480px;
`

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
`

const Styled2Image = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
`

const Styled3Image = styled(Image)`
  position: absolute;
  top: 0;
  transform: translateX(20%);
  z-index: 1;
  left: 0;
`
const StyledPrimaryTextBlue = styled(Text)`
  background-size: 100%;
  font-family: 'Raleway';
  font-weight: 700;
  padding-top: 0.2em;
  background-image: linear-gradient(116.19deg, #2c6ab8 15.05%, #0e89d0 40.66%, #48d1ed 79.41%, #c9f9fd 99.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
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
  padding-top: 0.2em;
  padding-left: 1em;
  padding-right: 1em;
  text-align: center;
  background: #00101f;
`

function Hero() {
  const mobileBreakpoints = useMatchBreakpoints()

  const history = useHistory();
  const goToSwap = useCallback(() => history.push('/swap'), [history]);


  return (
    <StyledMainContainer>
      <Flex flexWrap="wrap-reverse">
        <Flex flex="1 1 500px" flexDirection="column" justifyContent="center">
          <Text fontWeight="700" fontSize={mobileBreakpoints.isXl ? "3em" : "2em"} fontFamily="Poppins">
            Upcoming GameFi Decentralized Exchange on ThunderCore
          </Text>
          <Text fontWeight="400" fontSize="1.125em">
            Our swap and liquidity pool features are live on the mainnet. Join our community to stay updated about upcoming GameFi!
          </Text>
          <Row mt="1em">
            <UnlockButton />{' '}
            {/*  to="/swap" as={Link} */}
            <StyledTradeButton variant="secondary" onClick={goToSwap}>
              <StyledFillColor>
                <StyledPrimaryTextBlue fontSize="1em">Trade Now</StyledPrimaryTextBlue>
              </StyledFillColor>
            </StyledTradeButton>
          </Row>
          <Flex flexDirection="row" my="1em">
            <StyledPrimaryTextBlue bold fontSize={mobileBreakpoints.isXl ? "1.5em" : "1.2em"} textAlign="start">
              Powered By ThunderCore
            </StyledPrimaryTextBlue>
            <Image ml="0.4em" src={thunderLogo} alt="thunder logo" width={30} height={30} />{' '}
          </Flex>
        </Flex>
        <StyledImageDiv flex="1 1 300px">
          <Styled3Image src={characterImg} alt="character image" width={384} height={455} />
          <StyledImage src={thunderImg} alt="thunder image" width={600} height={640} />
          <Styled2Image src={thunder2Img} alt="thunder2 image" width={634} height={455} />
        </StyledImageDiv>
      </Flex>
    </StyledMainContainer>
  )
}

export default Hero
