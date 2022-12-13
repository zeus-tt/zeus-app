import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import {
  Button,
  CogIcon,
  Flex,
  IconButton,
  Image,
  Text,
  GlobeIcon,
  MeatBallsMenuIcon,
  ButtonMenuItem,
  useMatchBreakpoints,
} from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { Link, NavLink, Router } from 'react-router-dom'
import UnlockButton from 'components/ConnectWalletButton'
import { TranslateString } from 'utils/translateTextHelpers'
import logo from '../../../assets/full-logo.svg'
import hamburgerMenuImg from '../../../assets/Home/hamburger_menu.svg'
import RightLineImg from '../../../assets/Home/RightLine.png'
import LiftLineImg from '../../../assets/Home/LiftLine.png'

const StyledNavbar = styled.nav`
  display: flex;
  width: 100%;
 z-index:2;
  padding-top: 1.0625em;
  padding-bottom: 1.0625em;
  padding-left: 3em;
  padding-right: 3em;
  // background-color: ${({ theme }) => theme.colors.backgroundAlt};
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.46); 
  backdrop-filter: blur(30px);
  position:absolute;




`

const StyledNavButton = styled(Button)`
  font-weight: 400;
  font-size: 1em;
  font-family: 'Raleway';
`

const StyledNavButtonLink = styled.a`
  font-weight: 700;
  font-size: 1em;
  font-family: 'Raleway';
  color: white;



`

const LeftLineImage = styled(Image)`
z-index:999;
`
const RightLineImage = styled(Image)`
z-index:999;
`

const StyledSideDiv = styled.div`
  position: absolute;
  top: 84px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
  flex-wrap: wrap;
  // height: 100%;
  width: 100%;
  z-index: 999;
  // background: linear-gradient(179.87deg, #010e1a -2.34%, rgba(1, 14, 26, 0.19) 101.22%);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%);
  border-radius: 14px;
  backdrop-filter: blur(58px);
  -webkit-backdrop-filter: blur(58px);
  padding: 2em;  
`

function mobileSideNav()  {
  // side nav for mobile screens
  return (
    <StyledSideDiv >
      <ButtonMenuItem>
        <StyledNavButton to="/swap" as={Link}>
          Swap
        </StyledNavButton>
      </ButtonMenuItem>
      <ButtonMenuItem>
        <StyledNavButton to="/pool" as={Link}>
          Pool
        </StyledNavButton>
      </ButtonMenuItem>
      <ButtonMenuItem>
        <StyledNavButtonLink href="https://docs.zeusswap.fi/" target="_blank">
          Docs
        </StyledNavButtonLink>
      </ButtonMenuItem>
      <ButtonMenuItem>
        <StyledNavButtonLink href="https://discord.gg/TEwDyb7d" target="_blank">
          Discord
        </StyledNavButtonLink>
      </ButtonMenuItem>
    </StyledSideDiv>
  )
}

function Navbar() {
  const mobileBreakpoints = useMatchBreakpoints()
  const [showMobileNav, setShowMobileNav] = useState(false)
  const { account } = useWeb3React()

  const showSideNavHandler = () => {
    setShowMobileNav(() => !showMobileNav)
  }

  useEffect(() => {
    // auto close side nav on XL screen
    if (mobileBreakpoints.isXl && showMobileNav) {
      setShowMobileNav(false)
    }
  }, [mobileBreakpoints, showMobileNav])

  return (
    <StyledNavbar>
      {/* <Image src={logo} width={92} height={50} /> */}
      {mobileBreakpoints.isXl && (
        <Flex style={{width:'80%', position:'relative'}} alignItems="center" justifyContent='center'>
          <LeftLineImage src={LiftLineImg} width={600} height={5} />
          <ButtonMenuItem id="swap-nav-link" to="/swap" as={NavLink}>
            Swap
          </ButtonMenuItem>
          <ButtonMenuItem id="pool-nav-link" to="pool" as={NavLink}>
            Pools
          </ButtonMenuItem>

          <ButtonMenuItem>
            <StyledNavButtonLink href="https://docs.zeusswap.fi/" target="_blank">
              Docs
            </StyledNavButtonLink>
          </ButtonMenuItem>

          <ButtonMenuItem>
            <StyledNavButtonLink href="https://discord.gg/TEwDyb7d" target="_blank">
              Discord
            </StyledNavButtonLink>
          </ButtonMenuItem>
         < RightLineImage src={RightLineImg}  width={600} height={5} />
         </Flex>
      )}




      



  

      {!mobileBreakpoints.isXl && (
        // hamburger menu on mobile
        <IconButton  variant="text" onClick={showSideNavHandler} title={TranslateString(1202, 'Recent transactions')}>
          <Image mt="0.7em" src={hamburgerMenuImg} alt="menu" width={24} height={24} />
        </IconButton>
      )}

      {showMobileNav && mobileSideNav()}
    </StyledNavbar>
  )
}

export default Navbar
