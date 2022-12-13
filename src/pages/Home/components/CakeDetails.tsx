import { Button, Flex, Image, Text, useMatchBreakpoints } from '@pancakeswap-libs/uikit'
import React from 'react'
import Row from 'components/Row'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { ExternalLink } from 'components/Shared'
import StyledHomeCard from '../elements/Card'
import orangeQuotationImg from '../../../assets/Home/orangeQuotation.png'
import blueQuotationImg from '../../../assets/Home/blueQuotation.png'
import purpleQuotationImg from '../../../assets/Home/purpleQuotation.png'
import Zeus from '../../../assets/Home/zeus.png'

import '../../../assets/css/fonts.css' 

const StyledTradeButton = styled(Button)`
  margin-left: 1em;
  padding: 0.1em;
  border: 0;
 
  // background: linear-gradient(116.19deg, #2c6ab8 15.05%, #0e89d0 40.66%, #48d1ed 79.41%, #c9f9fd 99.14%);
`

const TradeButton = styled.button`
--background-color: linear-gradient(263.24deg, #FF8947 3.94%, #F0951F 51.7%, #FFB802 102.53%);;
--border-color: #FBD300;
--border-width: 0.11em;
--edge-size: 1.5em;
width:fit-content;
cursor: pointer;
background: var(--background-color);
padding: 0.7em 2.5em;
font-weight:600;
font-family:GT Sectra Display Bold;
border: 0;
font-size:1.5rem;
position: relative;
// isolation: isolate;
display: inline-grid;
place-content: center;
clip-path: polygon(
  var(--edge-size) 0%,
  100% 0,
  100% calc(100% - var(--edge-size)),
  calc(100% - var(--edge-size)) 100%,
  0 100%,
  0% var(--edge-size)
);
transition: color 250ms;
}
::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--border-color);
  z-index: -2;
}

::after {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--background-color);
  z-index: -1;
  clip-path: polygon(
    // top left 1
    var(--border-width) calc(var(--edge-size) + var(--border-width) * 0.5),
    // top left 2
    calc(var(--edge-size) + var(--border-width) * 0.5) var(--border-width),
    // top right
    calc(100% - var(--border-width)) var(--border-width),
    //bottom right - 1
    calc(100% - var(--border-width))
      calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)),
    // bottom right - 2
    calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5))
      calc(100% - var(--border-width)),
    // bottom left
    calc(var(--border-width)) calc(100% - var(--border-width))
  );
  transition: clip-path 500ms;
}

:hover {
  color: white;
}

:hover::after {
  // clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);

  clip-path: polygon(
    // top left 1
    calc(100% - var(--border-width))
      calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)),
    // top left 2
    calc(100% - var(--border-width)) var(--border-width),
    // top right
    calc(100% - var(--border-width)) var(--border-width),
    //bottom right - 1
    calc(100% - var(--border-width))
      calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)),
    // bottom right - 2
    calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5))
      calc(100% - var(--border-width)),
    // bottom left
    calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5))
      calc(100% - var(--border-width))
  );
}
`

const StyledBackground = styled.div`
  width: 100%;
  // background: linear-gradient(180deg, #021d35 -11.08%, rgba(2, 29, 53, 0) 91.97%);
  background:#1B0F01;
  // background: cover;
  
`

const StyledCard = styled(StyledHomeCard)`
  padding-top: 0em;
  position:relative;
  background:#1B0F01;
  // max-width:90%;
  padding-bottom:0;
  padding-right:0;
  padding:0;
`

const StyledFillColor = styled.div`
  width: 100%;
  // height: 100%;
  // padding-top: 0.4em;
  // padding-left: 1em;
  // padding-right: 1em;
  text-align: center;
  background: transparent;
`

const StyledPrimaryTextBlue =  styled.button`
  background-size: 100%;
  font-size: 1em;
  font-family: 'GT Sectra Display Light';
  color: #FBD300;
  --background-color: #1B0F01;
  --border-color: #FBD300;
  --border-width: 0.11em;
  --edge-size: 1.5em;
  width:fit-content;
  cursor: pointer;
  background: var(--background-color);
  padding: 0.7em 2.5em;
  border: 0;
  font-size:1.5rem;
  position: relative;
  underline:non
  display: inline-grid;
  place-content: center;
  clip-path: polygon(
    var(--edge-size) 0%,
    100% 0,
    100% calc(100% - var(--edge-size)),
    calc(100% - var(--edge-size)) 100%,
    0 100%,
    0% var(--edge-size)
  );
  transition: color 250ms;
  }
  ::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--border-color);
    z-index: -2;
  }
  
  
  ::after {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--background-color);
    z-index: -1;
    clip-path: polygon(
      // top left 1
      var(--border-width) calc(var(--edge-size) + var(--border-width) * 0.5),
      // top left 2
      calc(var(--edge-size) + var(--border-width) * 0.5) var(--border-width),
      // top right
      calc(100% - var(--border-width)) var(--border-width),
      //bottom right - 1
      calc(100% - var(--border-width))
        calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)),
      // bottom right - 2
      calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width)),
      // bottom left
      calc(var(--border-width)) calc(100% - var(--border-width))
    );
    transition: clip-path 500ms;
  }
  
  :hover {
    color: white;
    underline:none;
  }
  
  :hover::after {
    // clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
  
    clip-path: polygon(
      // top left 1
      calc(100% - var(--border-width))
        calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)),
      // top left 2
      calc(100% - var(--border-width)) var(--border-width),
      // top right
      calc(100% - var(--border-width)) var(--border-width),
      //bottom right - 1
      calc(100% - var(--border-width))
        calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)),
      // bottom right - 2
      calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width)),
      // bottom left
      calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width))
    );
  }
`

const StyledFlexDiv = styled(Flex)`
  border-left: 1px dashed #2c6ab8;
  padding: 1em;
`

function CakeDetails() {
  const mobileBreakpoints = useMatchBreakpoints();
  return (

    <StyledBackground >
    <StyledCard flexDirection="column">
      <Flex flexWrap="wrap-reverse" flexDirection="row" flex={1}>
        <Flex  flex="1 1 600px" flexDirection="column" justifyContent="center">
          <Text color='#FFB802' style={{
textShadow: "2px 6px 6px rgba(0, 0, 0, 0.66)"}} m="0 auto" lineHeight='2em' fontFamily="GT Sectra Display Medium"  fontSize={mobileBreakpoints.isXl ? "2.375em" : "1.8em"} >
          Even the Gods want $Zeus
          </Text>
          <Text fontFamily='Urbanist' px="1rem"  textAlign={mobileBreakpoints.isxl ? "center" :"left"} m="0 auto" fontSize="1.4em" fontWeight="300">

          Zeus Token ($ZEUS) is the most valuable resource during the Age of DeFi, and the main currency of exchange.    
          </Text>
          <Flex  justifyContent={mobileBreakpoints.isXl ? "flex-start" : "center"}
              
          flexWrap='wrap' alignItems='center' style={{  gap:"10px"}} my="3em">
            <TradeButton to="/swap" as={Link}>Trade Now</TradeButton>
            <ExternalLink href="https://docs.zeusswap.fi/get-started/introduction-to-zeusswap">
                <StyledFillColor>
                  <StyledPrimaryTextBlue>Learn More</StyledPrimaryTextBlue>
                </StyledFillColor>
            </ExternalLink>
          </Flex>
        </Flex>
        <Flex  flex="1 1 250px"  alignItems="flex-end" justifyContent="flex-end">
          <Image src={Zeus} alt="atom background" width={500}  height={500} />
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
    </StyledBackground>
  )
}

export default CakeDetails
