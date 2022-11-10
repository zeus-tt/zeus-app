import { Button, Flex, Image, Text } from '@pancakeswap-libs/uikit'
import React from 'react'
import Row from 'components/Row'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { ExternalLink } from 'components/Shared'
import StyledHomeCard from '../elements/Card'
import orangeQuotationImg from '../../../assets/Home/orangeQuotation.png'
import blueQuotationImg from '../../../assets/Home/blueQuotation.png'
import purpleQuotationImg from '../../../assets/Home/purpleQuotation.png'

import atomBg from '../../../assets/Home/atom-bg.png'

const StyledTradeButton = styled(Button)`
  margin-left: 1em;
  padding: 0.1em;
  border: 0;
  background: linear-gradient(116.19deg, #2c6ab8 15.05%, #0e89d0 40.66%, #48d1ed 79.41%, #c9f9fd 99.14%);
`

const StyledCard = styled(StyledHomeCard)`
  padding-top: 0em;
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
  font-size: 1em;
  font-family: 'Raleway';
  font-weight: 700;
  background-image: linear-gradient(116.19deg, #2c6ab8 15.05%, #0e89d0 40.66%, #48d1ed 79.41%, #c9f9fd 99.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

const StyledFlexDiv = styled(Flex)`
  border-left: 1px dashed #2c6ab8;
  padding: 1em;
`

function CakeDetails() {
  return (
    <StyledCard flexDirection="column">
      <Flex flexWrap="wrap-reverse" flexDirection="row" flex={1}>
        <Flex flex="1 1 250px" flexDirection="column" justifyContent="center">
          <Text bold fontFamily="Poppins" fontSize="2.1875em">
            EVEN THE GODS FRIGHTEN $ZEUS
          </Text>
          <Text fontSize="1.125em" fontWeight="400">
            Zeus Token ($ZEUS) is the world`s main currency of exchange: use ZEUS to trade valuable resources and heroes between each other.
          </Text>
          <Row mt="1em">
            <Button to="/swap" as={Link}>Trade Now</Button>
            <ExternalLink href="https://docs.zeusswap.fi/get-started/introduction-to-zeusswap">
              <StyledTradeButton variant="secondary">
                <StyledFillColor>
                  <StyledPrimaryTextBlue>Learn More</StyledPrimaryTextBlue>
                </StyledFillColor>
              </StyledTradeButton>
            </ExternalLink>
          </Row>
        </Flex>
        <Flex flex="1 1 200px" alignItems="center" justifyContent="center">
          <Image src={atomBg} alt="atom background" width={300} height={300} />
        </Flex>
      </Flex>

      {/* Supply Info */}
      {/* <Flex flexWrap="wrap" flexDirection="row" flex={1} mt="1em">
        <StyledFlexDiv flexDirection="column" flex="1 1 150px">
          <Image src={blueQuotationImg} alt="blue quotation img" width={80} height={60} />
          <Text mt="0.4em" fontWeight={400}>
            Circulating Supply
          </Text>
          <Text mt="0.2em" bold fontSize="1.25em">
            140,850,152
          </Text>

          <Text mt="0.4em" fontWeight={400}>
            Market Cap
          </Text>
          <Text mt="0.2em" bold fontSize="1.25em">
            $630 Million
          </Text>
        </StyledFlexDiv>
        <StyledFlexDiv flexDirection="column" flex="1 1 150px">
          <Image src={purpleQuotationImg} alt="blue quotation img" width={80} height={60} />
          <Text mt="0.4em" fontWeight={400}>
            Total Supply
          </Text>
          <Text mt="0.2em" bold fontSize="1.25em">
            317,314,704
          </Text>

          <Text mt="0.4em" fontWeight={400}>
            Burned to date
          </Text>
          <Text mt="0.2em" bold fontSize="1.25em">
            543,391,368
          </Text>
        </StyledFlexDiv>
        <StyledFlexDiv flexDirection="column" flex="1 1 150px">
          <Image src={orangeQuotationImg} alt="blue quotation img" width={80} height={60} />
          <Text mt="0.4em" fontWeight={400}>
            Max Supply
          </Text>
          <Text mt="0.2em" bold fontSize="1.25em">
            750,000,000
          </Text>

          <Text mt="0.4em" fontWeight={400}>
            Current Emissions
          </Text>
          <Text mt="0.2em" bold fontSize="1.25em">
            13.75/Block
          </Text>
        </StyledFlexDiv>
      </Flex> */}
    </StyledCard>
  )
}

export default CakeDetails
