import React from 'react'
import Row from 'components/Row'
import { Link } from 'react-router-dom'
import { Button, Flex, Image, Text, useMatchBreakpoints , LinkExternal} from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { ExternalLink } from 'components/Shared'
import StyledHomeCard from '../elements/Card'
import learnmoreImg from '../../../assets/Home/Learn-more.png'

import borderImg from '../../../assets/Home/border.svg'
import DifiImg from '../../../assets/Home/Vector.svg'

import Swap from '../../../assets/Home/swap.svg'
import PoolsAndFarms from '../../../assets/Home/pools_and_farms.svg'
import Bank from '../../../assets/Home/bank.svg'
import LeftSideFog from '../../../assets/Home/LeftFog.png'
import RightSideFog from '../../../assets/Home/RightFog.png'

import '../../../assets/css/fonts.css'

const StyledFullContainer = styled(Flex)`
  width: 100%;
  background: #1B0F01;
  // height:100vh;
  position:relative;
  z-index:1;
`

const LeftFog = styled(Image)`
position:absolute;
z-index:999;
bottom:-5rem;
left:0;
z-index:-1;
`

const RightFog = styled(Image)`
position:absolute;
z-index:999;
Top:-30rem;
Right:0rem;
z-index:-1;
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


const StyledBox = styled.div`

backdrop-filter: blur(15px);
border-image: url(${borderImg})  ;
border-image-width:10%;
border-image-slice: 30;
border-width:10px;
width:270px;
border-style:solid;
border-color:transparent;
color:#ffffff;
height:300px;
padding:0;
display:flex;
flex-direction:column;
align-items:center;
position:relative;
border-image-outset:20px;
background:rgba(65, 32, 17, 0.25);
z-index:1;
`

const DefiBox = styled.div`
backdrop-filter: blur(15px);
border-image: url(${DifiImg})  ;
border-image-width:30px;
border-image-slice: 30;
border-width:10px;
border-image-outset:20px;
width:400px;
margin:0 auto;
border-style:solid;
border-color:transparent;
color:#ffffff;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:relative;
background:#240B00;
margin-bottom:4rem;


`

const StyledText = styled.div`
border:none;
background:rgba(0, 0, 0, 0.25);
position:absolute;
left:-.8em;
right:-.8em;
clip-path: polygon(0 0, 100% 0, 100% 20%, 100% 78%, 89% 100%, 11% 100%, 1% 78%, 0% 20%);
bottom:-1.2rem;
display:flex;
align-items:center;
justify-content:center;
height:30%;
margin-bottom:0.5rem;

`

const GoldText =  styled.div`
border:none;
background: linear-gradient(90deg, #E4B43E -0.63%, #F7EF8A 31.38%, #D2AC47 79.45%, #EDC967 99.21%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
font-family:GT spatra Display Medium;
font-size:1.6rem;
font-weight:500;
cursor:pointer;
z-index:0;


`

const StyledPrimaryTextBlue = styled(Text)`
  background-size: 100%;
  background-image: linear-gradient(116.19deg, #2c6ab8 15.05%, #0e89d0 40.66%, #48d1ed 79.41%, #c9f9fd 99.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

function LearnMore() {
  const mobileBreakpoints = useMatchBreakpoints()

  return (
    <StyledFullContainer >

      <LeftFog src={LeftSideFog} alt='alt="Left side fog icons"'  width={500} height={500}/>
      <RightFog src={RightSideFog} alt='alt="Left side fog icons"'  width={700} height={700}/>
     
       
      
      <StyledHomeCard  style={{ height:'auto',padding:"2rem"}}>
        <Flex    flex={1} flexWrap="wrap" flexDirection="row">
          <Flex  flexDirection="column" flex="1 1 350px">

          <DefiBox>
          <Text  style={{margin:'0 auto', color:'#FFB802'}} fontSize={mobileBreakpoints.isXl ? '2.1875em' : '1.8em'} fontWeight={500} fontFamily="GT Sectra Display Light">
              DeFi Experience
            </Text>
          </DefiBox>
           
            <Flex   zIndex={1} flexWrap="wrap" style={{marginTop:"4rem", gap:"4rem"}}  alignItems='center' justifyContent={mobileBreakpoints.isXl ? 'space-between' : 'center'}my="1em" >

              <StyledBox>
                <img src={PoolsAndFarms} alt="pools and farms" width={190} height={190} />
                <StyledText    >
                  <GoldText >
                    Pools and farms
                  </GoldText>
                </StyledText>
              </StyledBox>




              <StyledBox> 
              <Image src={Swap} alt="Swap icon" width={200} height={200} /> 
              <StyledText >
                  <GoldText     >
                    Swap
                  </GoldText>
                </StyledText>
              </StyledBox>



              <StyledBox>
                  <Image src={Bank} alt="Swap icon" width={200} height={200} /> 
              <StyledText >
                  <GoldText  >
                   Governance 
                  </GoldText>
                </StyledText>
                </StyledBox>
            </Flex>
            {/* <Row mt="1em">
              <Button as={Link} to="/swap">Tread Now</Button>
              <ExternalLink href="https://docs.zeusswap.fi/get-started/introduction-to-zeusswap">
              <StyledTradeButton variant="secondary">
                <StyledFillColor>
                  <StyledPrimaryTextBlue>Learn More</StyledPrimaryTextBlue>
                </StyledFillColor>
              </StyledTradeButton>
              </ExternalLink>
            </Row> */}
          </Flex>
          {/* <Flex style={{border:'1px solid red '}} flex="1 1 250px" alignItems="center" justifyContent="center">
            <Image mb="1em" src={learnmoreImg} width={200} height={200} />
          </Flex> */}
        </Flex>
      </StyledHomeCard>
    </StyledFullContainer>
  )
}

export default LearnMore
