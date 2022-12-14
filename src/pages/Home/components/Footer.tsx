import React from 'react'
import { Flex,  Image, Text, useMatchBreakpoints,  } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import logo from '../../../assets/footerLogo.svg'
import StyledHomeCard from '../elements/Card'

// import dribble from '../../../assets/Home/drible.svg'
// import reddit from '../../../assets/Home/reddit.svg'
import twiter from '../../../assets/Home/twiter.svg'
// import telegram from '../../../assets/Home/telegram.svg'
// import github from '../../../assets/Home/github.svg'
// import instagram from '../../../assets/Home/instagram.svg'
import discord from '../../../assets/Home/discord-color.svg'
import FooterBg from '../../../assets/Home/Mountan.png'
import RightLineImg from '../../../assets/Home/RightLine.png'
import LiftLineImg from '../../../assets/Home/LiftLine.png'
import borderImg from '../../../assets/Home/border.svg'
import telegram from '../../../assets/Home/telegram.png'
import LeftFog from '../../../assets/Home/leftFog.svg'


// const LINKS = {
//   twitter: 'https://twitter.com/ZeusExchange',
//   telegram: 'https://t.me/ZeusOnTT',
//   discord: 'https://discord.gg/6ZU8nxGWVE'
// };

const StyledFooterContainer = styled.div`
  background:url(${FooterBg}) no-repeat bottom;
  background-size:cover;
  width: 100vw;
  background-color:#1B0F01;
  flex-direction: row;
  // gap: 20px;
  position:relative;
  // border:1px solid red;
`



const FooterBar = styled.div`
position:absolute;
bottom:0;
// width:100%;
left:0;
right:0;
display:flex;
font-size:1.35rem;
align-items:center;
justify-content:center;


 height:5rem;
background: linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%);
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.46);  z-index:1;
backdrop-filter: blur(15px);
color:white;
`

const FooterLinks = styled.div`
margin:1rem;
padding: .5rem 0.8rem;
width:100%;
display:flex;
justify-content:space-evenly;
gap:20%;
`


const FooterIcons =  styled.div`
display:flex;
align-items:center;
z-index:99;
width:90%;
justify-content:space-between;
// border:1px solid red;
text-:linear-gradient(90deg, #E4B43E -0.63%, #F7EF8A 31.38%, #D2AC47 79.45%, #EDC967 99.21%);
margin:1rem 2rem;
`

const BoxLinks = styled.div`
backdrop-filter: blur(10px);
// border:150px solid red;
// border-image-width:7rem;
border-width:5rem;
border-style:solid;
border-color:transparent;
padding:1rem 2rem;
// font-size:900px;
z-index:99;
color:#ffffff;
height:fit-content;
border-image: url(${borderImg}) ;
width:25rem;
border-image-width:25px;
border-image-slice: 30;
border-width:10px;
border-image-outset:10px;
// height:300px;
display:flex;
align-items:center;
flex-direction: column;


`

const LeftFogContainer =  styled.img`
position:absolute;
left:0;
top:-20rem;
z-index:1;
`


const LeftLineImage = styled(Image)`
z-index:999;
`
const RightLineImage = styled(Image)`
z-index:999;
`

const StyledHeading = styled(Text)`
  font-weight: 700;
  font-family: 'Raleway';
`

const StyledSubHeading = styled.a`
  font-weight: 400;
  font-family: 'Raleway';
  font-size: 0.875em;
  min-width: 32px;
  color: white;
  text-decoration: none;
  line-height: 1.5;
`

function Footer() {

  const mobileBreakpoints = useMatchBreakpoints();

  return (
    <StyledFooterContainer   >
      <StyledHomeCard  style={{paddingTop:"2rem",height:"100%"}}>
        {/* <Flex flex="1 1 200px" flexDirection="column">
          <Image mb="1em" src={logo} width={92} height={50} />
          <Flex flexWrap="wrap" flexDirection="row"> */}
        {/* <Flex flex="1 1 60px">
              <Image src={dribble} alt="dribble" width={24} height={24} />
            </Flex>
            <Flex flex="1 1 60px">
              <Image src={reddit} alt="reddit" width={24} height={24} />
            </Flex> */}
        {/* <Flex flex="1 1 60px">
              <StyledSubHeading target="_blank" href={LINKS.twitter}>
                <Image src={twitter} alt="twitter" width={24} height={24} />
              </StyledSubHeading>
              <StyledSubHeading target="_blank" href={LINKS.discord}>
                <Image src={discord} alt="discord" width={24} height={24} />
              </StyledSubHeading>
              <StyledSubHeading target="_blank" href={LINKS.telegram}>
                <Image src={telegram} alt="telegram" width={24} height={24} />
              </StyledSubHeading>
            </Flex> */}

        {/* 
            <Flex flex="1 1 60px">
              <Image src={telegram} alt="telegram" width={24} height={24} />
            </Flex>
            <Flex flex="1 1 60px">
              <Image src={github} alt="github" width={24} height={24} />
            </Flex>
            <Flex flex="1 1 60px">
              <Image src={instagram} alt="instagram" width={24} height={24} />
            </Flex> */}
        {/* </Flex>
        </Flex>
        <Flex flex={1} flexDirection="column">
          <StyledHeading mb="1em" bold>
            Services
          </StyledHeading>
          <StyledSubHeading href="https://olympiapad.com/" target="_blank">Olympia Launchpad</StyledSubHeading>
          <Link to="/swap">
            <StyledSubHeading>Swap</StyledSubHeading>
          </Link>
          <Link to="/pool">
            <StyledSubHeading>Liquidity Pools</StyledSubHeading>
          </Link>
        </Flex>
        <Flex flex={1} flexDirection="column">
          <StyledHeading mb="1em" bold>
            Developers
          </StyledHeading>
          <StyledSubHeading target="_blank" href="https://docs.zeusswap.fi/">Docs</StyledSubHeading>
        </Flex>
        <Flex flex={1} /> */}


        <Flex justifyContent='center' alignItems='flex-end'  zIndex={0} style={{ marginBottom:'3rem',width: "100%"}}>

          <BoxLinks>

            <Text  fontSize='1.7rem' fontFamily="GT Sectra Display Medium" style={{color:"#FFB802", margin:'1rem auto', mixBlendMode:'color-dodge'}}>
            Join our community
            </Text>


            <FooterIcons >
              <StyledSubHeading  href="https://discord.gg/6ZU8nxGWVE" target="_blank">

              <img src={discord} alt="discord" width={44} height={44}   />
              </StyledSubHeading>
              <StyledSubHeading href="https://twitter.com/ageofdefi_tt" target="_blank">
              <img src={twiter} alt="twitter" width={44} height={44}   />
              </StyledSubHeading>


              <StyledSubHeading href="https://t.me/ZeusOnTT" target="_blank">

              <img  src={telegram} alt="Telegram" width={44} height={44} />
              </StyledSubHeading>
          </FooterIcons>



          </BoxLinks>

          

        </Flex>





        <FooterBar>
          <LeftLineImage src={LiftLineImg} width={600} height={5} />

          <FooterLinks>
            <StyledSubHeading href='https://docs.zeusswap.fi/get-started/introduction-to-zeusswap' target='_blank'>
              <Text fontSize={mobileBreakpoints.isXl ? "1.5rem" : "1rem"}>

              Documentation
              </Text>
              
              </StyledSubHeading>
            <StyledSubHeading  href="https://docs.aod.fi/how-zeusswap-works/roadmap" target="_blank" >
             <Text fontSize={mobileBreakpoints.isXl ? "1.5rem" : "1rem"}>
             Roadmap
             </Text >
              </StyledSubHeading>
          </FooterLinks>

          < RightLineImage src={RightLineImg} width={600} height={5} />
        </FooterBar>

        <LeftFogContainer src={LeftFog} width={600} height={500} />
      </StyledHomeCard>
    </StyledFooterContainer>
  )
}

export default Footer
