/* eslint-disable jsx-a11y/media-has-caption */
import { Card, CardBody, Flex, Image, Button,Text, useMatchBreakpoints } from '@pancakeswap-libs/uikit'
import React,{useState} from 'react'
import styled from 'styled-components'
import StyledHomeCard from '../elements/Card'

// import textureBg from '../../../assets/Home/texture.png'
import '../../../assets/css/fonts.css'
// import purpleQuotationImg from '../../../assets/Home/purpleQuotation.png'
// import orangeQuotationImg from '../../../assets/Home/orangeQuotation.png'
// import blueQuotationImg from '../../../assets/Home/blueQuotation.png'
import zeusImg from '../../../assets/Home/zeusImage.png'
// import RightFog from '../../../assets/Home/RightFog.png'
import MapImage from '../../../assets/Home/flag-1.png'
// import Mapbackground from '../../../assets/Home/mapBackground.svg'
// import Flag from '../../../assets/Home/flag.svg'
import Dust from '../../../assets/Home/Dust.png'
import icon from '../../../assets/Home/watch-icon.svg'
import Border from '../../../assets/Home/BorderLine.svg'
import BrownBorder from '../../../assets/Home/BrownBorder.svg'
import TwoFog from '../../../assets/Home/TwoFog.svg'
import LeftSideFog from '../../../assets/Home/LeftFog.png'
import  MountanImage from '../../../assets/Home/Mountan.png'
import  backgroundShadow from '../../../assets/Home/backgroundShadow.png'
import videofile from '../../../assets/Home/AOD-assets-Video.mp4'

const StyledFullWidth = styled.div`
  width: 100%;
  background-color:#1B0F01;
  color:white;
  background-position: center;
  z-index:0;
  background-repeat: repeat-x;
`

const TextDiv =  styled(Flex)`
position:absolute;
padding:1rem;
border: 2px solid rgba(255, 184, 2, 0.52);
background: rgba(0, 0, 0, 0.25);
max-width: 850px;
right:0;
display:flex;
align-items: center;
justify-content:center;
height:100%;
z-index:-1;
@media only screen and (max-width:1200px){
// z-index:0;
position:relative;
  
}



`


const ImageContainer = styled.div`
display:flex;
align-items:center;
width:100%;

@media only screen and (max-width:1200px){
    justify-content:center;
    // z-index:0;
    
  }


`
const Fog = styled(Image)`
position:absolute;
z-index:999;
bottom:-15rem;
Right:10rem;
z-index:999;
`



const TextinnerDiv = styled.div`
display:flex;
align-items: center;
justify-content:center;
margin-left:10px;
margin-top:40px;
height:auto;

`


const ZeusContainer = styled.div`
// height:100vh;
position:relative;
display:flex;
align-items:center;
justify-content:center;

`

const ZeusInnerContainer = styled.div`
// height:55vh;
min-width:100%;
display:flex;
height:100%;
flex-wrap: wrap;
align-items:center;
justify-content:space-between;
position:relative;

@media only screen and (max-width:1200px){
justify-content:center;
  
}

`

const WatchButton =  styled(Button)`
--background-color: linear-gradient(263.24deg, #FF8947 3.94%, #F0951F 51.7%, #FFB802 102.53%);;
--border-color: #FBD300;
--border-width: 0.11em;
--edge-size: 1em;
// width:100%;
cursor: pointer;
color:#000000;
margin:0 auto;
font-family:GT Spectra Display super;
font-size:1.5rem;
display:inline-flex;
flex-direaction:row;
align-items:center;
background: var(--background-color);
padding: 0.8em 1.5em;
font-weight:bolder;
border: 0;
position: relative;
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

 ::hover {
  color: white;
  cursor:pointer;
  z-index:999;
  
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


const ImageDiv = styled.div`
z-index:0;
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

const MapContainer = styled.div`
background:url(${MapImage}) no-repeat;
background-position:center top;
background-size:contain ;
display:flex;
min-height:500px;
flex-direaction:flex;
flex-wrap:wrap;
width:100%;  
justify-content:center;
align-items:center;
z-index:999;

@media only screen and (max-width:1000px){
  min-height:400px;
}

@media only screen and (max-width:700px){
  min-height:300px;
}

@media only screen and (max-width:600px){
  min-height:250px;
}


`

const WatchContainer = styled.div`
z-index:999;
display:flex;
text-align:center;
flex-direction:column;
margin:4rem 0 ;

`
const WatchTile = styled.text`
color:#FFB802;
text-align:center;
font-family:GT Spactra Display Light;
z-index:99;
mix-blend-mode: color-dodge;
font-size:2rem;
`

const MapBigContainer = styled.div`
position:relative;
display:flex;
justify-content:center;
align-items:center;
flex-flow: column wrap;
padding:6rem 0;
// overflow: auto;
background-color:#1B0F01;

z-index:-99;
`

const BorderLine = styled(Image)`
position:absolute;
top:-12rem;
left:0;
right:0;
z-index:4;


@media only screen and (max-width:700px){
  top:-13rem;
}
`
const BrownBorderLine = styled(Image)`
position:absolute;
bottom:-7rem;
left:0;
right:0;
z-index:2; 

@media only screen and (max-width:700px){
  bottom:-6rem;
}

`
const TwoFogLine = styled(Image)`
position:absolute;
bottom:-10rem;
left:0;
right:0;
z-index:2;

`
const Dustbackground = styled.img` 
position:absolute;
top:0;
bottom:0;
right:0;
left:0;
z-index:-3;
height:100%; 
opacity:0.1;
mix-blend-mode:overlay;
`
const LeftFog = styled(Image)`
position:absolute;
z-index:999;
bottom:10rem;
left:0;
z-index:0;
`
const MoutanContainer = styled.div`
position:absolute;
bottom:0;
left:0rem;
right:0rem;
z-index:-1;
mix-blend-mode: revert-layer;

@media only screen and (max-width:600px){
  position:absolute;
  // bottom:0;
}



` 
const DustContainer =   styled.div` 
position:absolute;
top:0;
bottom:0;
right:0;
left:0;
width:100%;
overflow:hidden;

mix-blend-mode:color-dodge;
`
const Backgroundshadow = styled.img`
 position:absolute;
top:0;
bottom:0;
right:0;
left:0;   
z-index:-10;
width:100% ;
opacity:1;
height:99%;
mix-blend-mode:color-dodge;
`

const ModalContainer = styled.div`
width: 100vw;
height: 100vh;
// top: 0;
left: 0;
right: 0;
bottom: 0;
position: absolute;
z-index:9999999;

overflow: hidden;


`

const Overlay = styled.div`
width: 100vw;
height: 300vh;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index:999;
position: absolute;
// background: rgba(49,49,49,0.8);
filter: blur(10px);

background: rgba(0,0,0,0.8);
`

const ModaleContent = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius: 3px;
max-width: 100%;
min-width: 300px;
z-index:999;


`


function Usedby() {
  const [modal, setModal] = useState(false);
  const mobileBreakpoints = useMatchBreakpoints()
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <StyledFullWidth style={{   position: "relative" }}>

      <MapBigContainer>
        <MoutanContainer >
          <img alt="mountanImage"  src={MountanImage} width="100%" height="100%"/>
        </MoutanContainer>
        <BorderLine  src={Border} alt='borderline' width={12000}  height={400} />
        <BrownBorderLine  src={BrownBorder} alt='borderline' width={12000} height={200} />
        <TwoFogLine  src={TwoFog} alt='borderline' width={12000} height={400} />
        <LeftFog src={LeftSideFog} alt='alt="Left side fog icons"'  width={600} height={600}/>
        <Backgroundshadow src={backgroundShadow}   alt="backgroundImage"/>
        <DustContainer>
        <Dustbackground  src={Dust} alt='Dust'  />
        </DustContainer>
       
        <MapContainer style={{  height: '70%' }} >
          {/* <Flex style={{ height: 'fit-content'  }} flexDirection='column' >
            <Text style={{ color: '#AB5B13',  }} textAlign="center" fontSize={mobileBreakpoints.isXl ? "3em" : "2em"} fontFamily="GT Spactra Display Medium">
              A fantasy RPG like no other
            </Text>
            <Text fontFamily="Urbanist" style={{ width: "70%", color: '#000000', margin: '0 auto' }} mt="0.5em" textAlign="center" fontSize={mobileBreakpoints.isXl ? "1.2em" : "1em"}>
              Explore Athena, a wonderful world filled with a vibrant economy that ebbs, flows, and provides limitless earning potential        </Text>
            <Text my="0.5em" style={{ color: "#AB5B13" }} fontWeight='600' fontSize="1.25em" textAlign="center" fontFamily="Urbanist">
              Will You Join Them?
            </Text>
          </Flex> */}




        </MapContainer>
        <WatchContainer  >
          <WatchTile   >
            Immerse yourself into the world of gods
          </WatchTile>
          <Text  fontWeight='400' fontFamily="Urbanist" style={{ width: "60%", color: '#ffffff' }} m="1em auto" textAlign="center" fontSize={mobileBreakpoints.isXl ? "1.2em" : "1em"}>
            Age Of DeFi is a metaverse on ThunderCore, that fuses DeFi and GameFi to create a DeFi Suite inside a Greek Mythological world.

          </Text>
          <Text fontWeight='400' fontFamily="Urbanist" style={{ width: "50%", color: '#ffffff' }} m="1em auto" textAlign="center" fontSize={mobileBreakpoints.isXl ? "1.2em" : "1em"}>
            Join us as this world gets unleashed to provide you with opportunities to stake, farm and earn as you play!
          </Text>



     


        {modal ? (

          <ModalContainer>
            <Overlay  onClick={toggleModal}/>
            <ModaleContent>
              <video src={videofile}  width="100%" autoPlay muted/>
            </ModaleContent>
          </ModalContainer>
        ) : 
        
      (

        <WatchButton  onClick={toggleModal}>
             Watch <img src={icon} alt="watch icon" style={{marginLeft:'1rem'}} />
        </WatchButton>
      )
      
      }



        </WatchContainer>
      </MapBigContainer>

      <StyledHomeCard style={{ paddingBottom:"0",position: 'relative' }} flexDirection="column">




        <ZeusContainer  style={{ marginBottom:"0", }}>
          <ZeusInnerContainer  >
            <ImageContainer>
            <img  alt="zues-coin"  src={zeusImg}  width={400} height={400} />
            </ImageContainer>

            <TextDiv  >
              <TextinnerDiv>
                <Text style={{width: '80%' }} marginLeft="20px" mb="10px">
                  <Text fontFamily="GT Sectra Display Medium" fontSize='3rem' color='rgba(255, 184, 2, 1)' mb="10px">
                    The Power of $ZEUS
                  </Text>
                  <Text  fontFamily="Urbanist" fontWeight={400} >
                    <Text fontSize="1.3rem" mb="10px">
                      In the Age Of DeFi, $ZEUS reigns supreme. Holders of this legendary token earn the majority of rewards in the metaverse and get a say in all governance decisions of the platform.
                    </Text>
                    <Text fontSize="1.3rem" mb="10px">
                      Beyond this, you can stake and farm youe $ZEUS for almost limitless earning potential.
                    </Text>
                    <Text fontSize='1.3rem'>
                      What are you waiting for?
                    </Text>
                  </Text>
                </Text>
              </TextinnerDiv>
            </TextDiv>

          </ZeusInnerContainer> 

        </ZeusContainer>





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
      {/* <Fog src={RightFog} alt="Right side fog " width={600} height={600}/> */}
    </StyledFullWidth>
  )
}

export default Usedby
