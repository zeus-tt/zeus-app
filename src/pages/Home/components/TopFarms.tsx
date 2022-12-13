import { Button, Flex, Image, Text, useMatchBreakpoints } from '@pancakeswap-libs/uikit'
import Row from 'components/Row'
import React from 'react'
import styled from 'styled-components'
import StyledHomeCard from '../elements/Card'
import TopFarmSortImg from '../../../assets/Home/top-farms-sort.svg'

const StyledBackground = styled.div`
  width: 100%;
  // background: linear-gradient(180deg, #021d35 -11.08%, rgba(2, 29, 53, 0) 91.97%);
  background:#1B0F01;
  // background: cover;
  
  
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

const StyledLeftDash = styled(Flex)`
  padding: 1em;
  border-left: 1px dashed #2c6ab8;
`

function TopFarms() {
  const mobileBreakpoints = useMatchBreakpoints()

  return (
    <StyledBackground >
      <StyledHomeCard style={{padding:"0"}} alignItems='center' flexDirection="column">
        <Flex flex={1} flexDirection="row" >
          <Flex style={{ textAlign:'center'}} p="0px"  flexDirection="column">
            <Text fontWeight='400' color='#FFB802' style={{textShadow:" 2px 6px 6px rgba(0, 0, 0, 0.66)"}} fontSize={mobileBreakpoints.isXl ? "3.1875em" : "1.8em"} bold fontFamily="GT Sectra Display Medium">
              Zeus Farms will launch in Q4 2022
            </Text>
            <Text fontStyle='Urbanist' fontWeight={400} fontSize="1.35em">
              Get ready for full GameFi experience native to ThunderCore
            </Text>
            {/* <Row mt="1em">
              <Button>Explore</Button>
              <StyledTradeButton variant="secondary">
                <StyledFillColor>
                  <StyledPrimaryTextBlue>Learn More</StyledPrimaryTextBlue>
                </StyledFillColor>
              </StyledTradeButton>
            </Row> */}
          </Flex>
          <Flex flex={1} />
        </Flex>

        {/* top farms section */}
        {/* <Row>
          <Text bold fontSize="1.5em">
            TOP FARMS
          </Text>
          <Image ml="1em" src={TopFarmSortImg} alt="top farms sort" width={24} height={24} />
        </Row>
        <Flex my="0.4em" flex={1} flexWrap="wrap" flexDirection="row">
          <Flex style={{ borderLeft: mobileBreakpoints.isXl ? "" : "1px dashed #2c6ab8", padding: mobileBreakpoints.isXl ? "" : "1em" }} py="1em" flexDirection="column" flex="1 1 150px">
            <Text bold>PEEL - BUSD LP</Text>
            <Text bold fontSize="1.25em">
              512.074%
            </Text>
            <Text fontSize="1.125em" fontWeight={400}>
              APR
            </Text>
          </Flex>
          <StyledLeftDash flexDirection="column" flex="1 1 150px">
            <Text bold>MHUNT - BNB LP</Text>
            <Text bold fontSize="1.25em">
              459.730%
            </Text>
            <Text fontSize="1.125em" fontWeight={400}>
              APR
            </Text>
          </StyledLeftDash>
          <StyledLeftDash flexDirection="column" flex="1 1 150px">
            <Text bold>AOG - CAKE LP</Text>
            <Text bold fontSize="1.25em">
              429.092%
            </Text>
            <Text fontSize="1.125em" fontWeight={400}>
              APR
            </Text>
          </StyledLeftDash>
          <StyledLeftDash flexDirection="column" flex="1 1 150px">
            <Text bold>WZRD - BUSD LP</Text>
            <Text bold fontSize="1.25em">
              410.974%
            </Text>
            <Text fontSize="1.125em" fontWeight={400}>
              APR
            </Text>
          </StyledLeftDash>
          <StyledLeftDash p="1em" flexDirection="column" flex="1 1 150px">
            <Text bold>SHELL - BUSD LP</Text>
            <Text bold fontSize="1.25em">
              186.166%
            </Text>
            <Text fontSize="1.125em" fontWeight={400}>
              APR
            </Text>
          </StyledLeftDash>
        </Flex> */}
      </StyledHomeCard>
    </StyledBackground>
  )
}

export default TopFarms
