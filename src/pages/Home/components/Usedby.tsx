import { Card, CardBody, Flex, Image, Text, useMatchBreakpoints } from '@pancakeswap-libs/uikit'
import React from 'react'
import styled from 'styled-components'
import StyledHomeCard from '../elements/Card'
import textureBg from '../../../assets/Home/texture.png'

import purpleQuotationImg from '../../../assets/Home/purpleQuotation.png'
import orangeQuotationImg from '../../../assets/Home/orangeQuotation.png'
import blueQuotationImg from '../../../assets/Home/blueQuotation.png'

const StyledFullWidth = styled.div`
  width: 100%;
  background-image: url(${textureBg});
  background-position: bottom;
  background-repeat: repeat-x;
`

const StyledCard = styled(Card)`
  width: 100%;
  border: 0;
  box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.16), inset 0px 1px 2px rgba(255, 255, 255, 0.25);
`

const StyledPrimaryTextBlue = styled(Text)`
  background-size: 80px;
  font-family: 'Poppins';
  font-weight: 700;
  background-image: linear-gradient(116.19deg, #2c6ab8 15.05%, #0e89d0 40.66%, #48d1ed 79.41%, #c9f9fd 99.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

const StyledPrimaryTextPurple = styled(Text)`
  background-size: 130px;
  font-family: 'Poppins';
  font-weight: 700;
  background-image: linear-gradient(116.19deg, #490063 15.05%, #9e29d6 40.66%, #aa6ef6 79.41%, #f6c9fd 99.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

const StyledPrimaryTextOrange = styled(Text)`
  background-size: 130px;
  font-family: 'Poppins';
  font-weight: 700;
  background-image: linear-gradient(116.19deg, #d1550f 15.05%, #d05f0e 40.66%, #f6a171 79.41%, #fdd9c9 99.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

function Usedby() {
  const mobileBreakpoints = useMatchBreakpoints()

  return (
    <StyledFullWidth>
      <StyledHomeCard flexDirection="column">
        <Text textAlign="center" fontSize={mobileBreakpoints.isXl ? "3em" : "2em"} fontFamily="Poppins">
          A fantasy RPG like no other.
        </Text>
        <Text mt="0.5em" textAlign="center" fontSize={mobileBreakpoints.isXl ? "1.5em" : "1.2em"}>
          Go back to the ancient land of gods and heros. Use your business and tactical acumen to compete.
        </Text>
        <Text my="0.5em" fontSize="1.75em" textAlign="center">
          Will You Join Them?
        </Text>
        {/* <Flex flexWrap="wrap" flexDirection="row" flex={1}>
          <Flex flex="1 1 200px" padding="1em">
            <StyledCard>
              <CardBody>
                <Image mb="0.5em" src={blueQuotationImg} alt="purple quotation texture" width={70} height={60} />
                <Text bold fontFamily="Poppins" fontSize="1.75em">
                  2.3 Million
                </Text>
                <StyledPrimaryTextBlue fontFamily="Poppins" fontSize="1.75em">
                  users
                </StyledPrimaryTextBlue>
                <Text fontSize="1.125em">In last 30 Days</Text>
              </CardBody>
            </StyledCard>
          </Flex>
          <Flex flex="1 1 200px" padding="1em">
            <StyledCard>
              <CardBody>
                <Image mb="0.5em" src={purpleQuotationImg} alt="purple quotation texture" width={70} height={60} />
                <Text bold fontFamily="Poppins" fontSize="1.75em">
                  26 Million
                </Text>
                <StyledPrimaryTextPurple fontFamily="Poppins" fontSize="1.75em">
                  trades
                </StyledPrimaryTextPurple>
                <Text fontSize="1.125em">Made in last 30 Days</Text>
              </CardBody>
            </StyledCard>
          </Flex>
          <Flex flex="1 1 200px" padding="1em">
            <StyledCard>
              <CardBody>
                <Image mb="0.5em" src={orangeQuotationImg} alt="purple quotation texture" width={70} height={60} />
                <Text bold fontFamily="Poppins" fontSize="1.75em">
                  $4.3 Million
                </Text>
                <StyledPrimaryTextOrange fontFamily="Poppins" fontSize="1.75em">
                  staked
                </StyledPrimaryTextOrange>
                <Text fontSize="1.125em">Total Value Locked</Text>
              </CardBody>
            </StyledCard>
          </Flex>
        </Flex> */}
      </StyledHomeCard>
    </StyledFullWidth>
  )
}

export default Usedby
