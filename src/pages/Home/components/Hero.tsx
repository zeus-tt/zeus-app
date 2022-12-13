import { Button, Flex, Image, Text, useMatchBreakpoints } from '@pancakeswap-libs/uikit'
import UnlockButton from 'components/ConnectWalletButton'
import Row from 'components/Row'
import React, { useCallback } from 'react'
import {useHistory} from 'react-router-dom';
import styled from 'styled-components'

import '../../../assets/css/fonts.css'
// import '../../../assets/css/button.css'
import characterImg from '../../../assets/Home/character.png'
import  palaceImg from '../../../assets/Home/palace.jpg'
import thunderImg from '../../../assets/Home/thunder.png'
import thunder2Img from '../../../assets/Home/thunder2.png'
import thunderLogo from '../../../assets/Home/thunderLogo.svg'
import StyledHomeCard from '../elements/Card'
import AgeofDefi from '../../../assets/Home/Age-Of-Defi.png'
import Border from '../../../assets/Home/BorderLine.svg'
import RightFog from '../../../assets/Home/RightFog.png'


const StyledMainContainer = styled(StyledHomeCard)`
  padding-top: 0;
  padding-bottom: 0;

  background: url(${palaceImg}) no-repeat ;
  background-position:top;
  background-size:cover;
  // margin-top:20px;
  z-index:1;
  position:relative;
  max-width:100%;
  height:100vh;
  display:flex;
  align-items:center;
  
  
`


// const PlayButton = styled.button`
// color:#000000;
// padding:0.5em 1.5em;
// background-color:
// width:fit-content;
// margin:0 auto;
// clip-path:polygon(
//   0%   0.5em, 
//   0.5em  0, 
//   100% 0, 
//   100%  calc(100% - 0.5em),
//   calc(100% - 0.5em) 100%, 
//   0 100%, 
//   );
// font-weight:bold;
// font-size:1rem;

// background: linear-gradient(263.24deg, #FF8947 3.94%, #F0951F 51.7%, #FFB802 102.53%);
// // border: #FBD300;

// `


const PlayButton = styled.button`
--background-color: linear-gradient(263.24deg, #FF8947 3.94%, #F0951F 51.7%, #FFB802 102.53%);;
--border-color: #FBD300;
--border-width: 0.11em;
--edge-size: 1.2em;
// width:;
cursor: pointer;
background: var(--background-color);
padding: 1rem 5.5rem;
font-weight:bolder;
border: 0;
font-family:GT Spectra Display Medium;
position: relative;
isolation: isolate;
font-size:1.5rem;
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



@media only screen and (max-width:600px){
 padding:.5rem 2.75rem;
    
  }

`


const LearnButton = styled.button`
background-size: 100%;
font-size: 1em;
font-family: 'GT Sectra Display Light';
// font-weight: 700;

color: #FBD300;




--background-color: #1B0F01;
--border-color: #FBD300;
--border-width: 0.11em;
--edge-size: 1.5em;
width:fit-content;
cursor: pointer;
background: var(--background-color);
padding: 0.7em 2.5em;
// font-weight:600;
// font-family:GT Sectra Display Bold;
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



@media only screen and (max-width:600px){
padding:0.5rem 2rem;
--edge-size:1.5rem;
   }

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

const BorderLine =  styled.img`
position:absolute;
bottom:-7rem;
left:0;
right:0;

@media only screen and (max-width:600px){
bottom:-2rem;
}

`
const RightFogImage =  styled.img`
position:absolute;
bottom:-20rem;
right:0;
z-index:-1;
`


function Hero() {
  const mobileBreakpoints = useMatchBreakpoints()

  const history = useHistory();
  const goToSwap = useCallback(() => history.push('/swap'), [history]);


  return (
    <StyledMainContainer>
      <Flex style={{ margin:"0 auto", height:'fit-content'}} alignItems='center' justifyContent='center' flexWrap="wrap-reverse">
        <Flex  style={{ width:'100%', marginTop:'120px'}} flexDirection="column" alignItems='center' justifyContent="center">
        <img    src={AgeofDefi} alt='ageofdefi icon' width={550} height={300} />
          
          <Flex  flexDirection="column"  justifyContent='center' my="1em">
            <Text style={{maxWidth:"600px"}} fontFamily='Urbanist' m={20} lineHeight={1} fontSize={mobileBreakpoints.isXl ? "1.5em" : "1.2em"} textAlign="center">
            Welcome to Acropolis of Athena, home of mighty gods, heroes and cutting-edge DeFi protocols. Join us in the adventure & start earning.  
            </Text>
            <Flex  style={{ width:"80%", margin:"0 auto"}} justifyContent="space-between" >

            <PlayButton>
              Play
            </PlayButton>
            <LearnButton>
              Learn More
            </LearnButton>
            </Flex>
           

          </Flex>
        </Flex>
        {/* <StyledImageDiv flex="1 1 300px">
          <Styled3Image src={characterImg} alt="character image" width={384} height={455} />
          <StyledImage src={thunderImg} alt="thunder image" width={600} height={640} />
          <Styled2Image src={thunder2Img} alt="thunder2 image" width={634} height={455} />
        </StyledImageDiv> */}
      </Flex>
      <BorderLine  src={Border} alt='borderline' width={12000} height={200} />
      <RightFogImage src={RightFog} width={600} height={600}/>
    </StyledMainContainer>
  )
}

export default Hero
