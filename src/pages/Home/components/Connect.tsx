import React from 'react'
import '../../../assets/css/fonts.css'
import { useWeb3React } from '@web3-react/core'
import { Flex, Text, useMatchBreakpoints } from '@pancakeswap-libs/uikit'
import UnlockButton from 'components/ConnectWalletButton'
import { Heading } from 'rebass'
import styled from 'styled-components'


import backgroundImg from '../../../assets/Home/startInSeconds.png'

const ConnectContainer = styled.div`
  // background-image: url(${backgroundImg});
  // background:#1B0F01;
  width:100%;
  z-index:2;
  padding:5rem 1rem  ;
 
`

const ConnectButton = styled(UnlockButton)`

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
color:#000000;
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
  background: var(--background-color);
  opacity:1;

}

:hover::after {
  opacity:1;
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

function Connect() {
  const { account } = useWeb3React()
  const mobileBreakpoints = useMatchBreakpoints();

  return (
    <ConnectContainer >
      <Flex   flexDirection="column" alignItems="center" justifyItems="center">
        <Heading mb="0.75em" style={{textShadow:"2px 6px 6px rgba(0, 0, 0, 0.66)"}} color="#FFB802" fontSize="1.75em" fontWeight="400" fontFamily="GT Sectra Display Medium" >Start in Seconds</Heading>
        <Text fontFamily='Urbanist' fontWeight="400" mb="0.375em" fontSize="1.125em">Connect your crypto wallet to start using the app in seconds.</Text>
        <Text fontFamily='Urbanist' mb="1.75em" fontSize="1.125em" bold>No Registration Needed.</Text>
        {/* <Text mb="2.25em" fontSize="1.125em" bold>Learn How to Start</Text> */}

        {
          !account && <ConnectButton />
        }

      </Flex>
    </ConnectContainer>
  )
}

export default Connect