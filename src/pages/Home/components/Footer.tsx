import React from 'react'
import { Flex, GlobeIcon, IconButton, Image, Text, TwitterIcon, TelegramIcon } from '@pancakeswap-libs/uikit'
import { TranslateString } from 'utils/translateTextHelpers'
import styled from 'styled-components'
import logo from '../../../assets/footerLogo.svg'
import StyledHomeCard from '../elements/Card'

import dribble from '../../../assets/Home/drible.svg'
import reddit from '../../../assets/Home/reddit.svg'
import twitter from '../../../assets/Home/twitter.svg'
import telegram from '../../../assets/Home/telegram.svg'
import github from '../../../assets/Home/github.svg'
import instagram from '../../../assets/Home/instagram.svg'
import discord from '../../../assets/Home/discord.svg'

const StyledFooterContainer = styled(Flex)`
  width: 100%;
  background: #010e18;
  flex-direction: row;
  gap: 20px;
`

const StyledHeading = styled(Text)`
  font-weight: 700;
  font-family: 'Raleway';
`

const StyledSubHeading = styled.a`
  font-weight: 400;
  font-family: 'Raleway';
  font-size: 0.875em;
  padding: 0.2em;
  min-width: 32px;
  color: white;
  text-decoration: none;
  line-height: 1.5;
`

function Footer() {
  return (
    <StyledFooterContainer>
      <StyledHomeCard>
        <Flex flex="1 1 200px" flexDirection="column">
          <Image mb="1em" src={logo} width={92} height={50} />
          <Flex flexWrap="wrap" flexDirection="row">
            {/* <Flex flex="1 1 60px">
              <Image src={dribble} alt="dribble" width={24} height={24} />
            </Flex>
            <Flex flex="1 1 60px">
              <Image src={reddit} alt="reddit" width={24} height={24} />
            </Flex> */}
            <Flex flex="1 1 60px">
              <StyledSubHeading target="_blank" href="https://twitter.com/ZeusExchange">
                <Image src={twitter} alt="twitter" width={24} height={24} />
              </StyledSubHeading>
              <StyledSubHeading target="_blank" href="https://discord.gg/TEwDyb7d">
                <Image src={discord} alt="discord" width={24} height={24} marginLeft="1em" />
              </StyledSubHeading>
            </Flex>
            {/* <Flex flex="1 1 60px">
              <Image src={telegram} alt="telegram" width={24} height={24} />
            </Flex>
            <Flex flex="1 1 60px">
              <Image src={github} alt="github" width={24} height={24} />
            </Flex>
            <Flex flex="1 1 60px">
              <Image src={instagram} alt="instagram" width={24} height={24} />
            </Flex> */}
          </Flex>
        </Flex>
        <Flex flex={1} flexDirection="column">
          <StyledHeading mb="1em" bold>
            Services
          </StyledHeading>
          <StyledSubHeading>Swap</StyledSubHeading>
          <StyledSubHeading>Liquidity Pools</StyledSubHeading>
        </Flex>
        <Flex flex={1} flexDirection="column">
          <StyledHeading mb="1em" bold>
            Developers
          </StyledHeading>
          <StyledSubHeading target="_blank" href="https://docs.zeusswap.fi/">Docs</StyledSubHeading>
        </Flex>
        <Flex flex={1} />
      </StyledHomeCard>
    </StyledFooterContainer>
  )
}

export default Footer
