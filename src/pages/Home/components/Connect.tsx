import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Flex, Text } from '@pancakeswap-libs/uikit'
import UnlockButton from 'components/ConnectWalletButton'
import { Heading } from 'rebass'
import styled from 'styled-components'

import backgroundImg from '../../../assets/Home/startInSeconds.png'

const ConnectContainer = styled.div`
  background-image: url(${backgroundImg});
  padding: 5.5625em;
  width:100%;
  background-size: cover;
`

function Connect() {
  const { account } = useWeb3React()

  return (
    <ConnectContainer>
      <Flex flexDirection="column" alignItems="center" justifyItems="center">
        <Heading mb="0.75em" color="#FFFFFF" fontSize="1.75em" fontWeight="700" fontFamily="Poppins" >START IN SECONDS</Heading>
        <Text fontWeight="400" mb="0.375em" fontSize="1.125em">Connect your crypto wallet to start using the app in seconds.</Text>
        <Text mb="1.75em" fontSize="1.125em" bold>No Registration Needed.</Text>
        {/* <Text mb="2.25em" fontSize="1.125em" bold>Learn How to Start</Text> */}

        {
          !account && <UnlockButton />
        }

      </Flex>
    </ConnectContainer>
  )
}

export default Connect