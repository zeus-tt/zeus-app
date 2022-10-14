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

const StyledNavbar = styled.nav`
  display: flex;
  width: 100%;
  padding-top: 1.0625em;
  padding-bottom: 1.0625em;
  padding-left: 3em;
  padding-right: 3em;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  flex-direction: row;
  justify-content: space-between;
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

const StyledSideDiv = styled.div`
  position: absolute;
  top: 84px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
  flex-wrap: wrap;
  height: 100%;
  width: 50%;
  z-index: 999;
  background: linear-gradient(179.87deg, #010e1a -2.34%, rgba(1, 14, 26, 0.19) 101.22%);
  border-radius: 14px;
  backdrop-filter: blur(58px);
  -webkit-backdrop-filter: blur(58px);
  padding: 2em;
`

function mobileSideNav() {
  // side nav for mobile screens
  return (
    <StyledSideDiv>
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
        <StyledNavButton to="/swap" as={Link}>
          Discord
        </StyledNavButton>
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
      <Image src={logo} width={92} height={50} />
      {mobileBreakpoints.isXl && (
        <Flex alignItems="center">
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

          <StyledNavButton variant="text">Discord </StyledNavButton>
        </Flex>
      )}

      {mobileBreakpoints.isXl && (
        <Flex alignItems="center">
          {/* <Text bold fontSize="1.125em" style={{ marginRight: '1em' }}>
            $0
          </Text> */}
          {/* <IconButton variant="text" title={TranslateString(1202, 'Recent transactions')}>
            <GlobeIcon width="24px" color="currentColor" />
          </IconButton>
          <IconButton variant="text" title={TranslateString(1202, 'Recent transactions')}>
            <CogIcon width="24px" color="currentColor" />
          </IconButton> */}
          {!account && <UnlockButton />}

          {account && (
            <Text bold fontSize="1.125em" style={{ marginRight: '1em' }}>
              {[account.substring(0, 4), account.substring(account.length - 4, account.length)].join('....')}
            </Text>
          )}
        </Flex>
      )}

      {!mobileBreakpoints.isXl && (
        // hamburger menu on mobile
        <IconButton variant="text" onClick={showSideNavHandler} title={TranslateString(1202, 'Recent transactions')}>
          <Image mt="0.7em" src={hamburgerMenuImg} alt="menu" width={24} height={24} />
        </IconButton>
      )}

      {showMobileNav && mobileSideNav()}
    </StyledNavbar>
  )
}

export default Navbar
