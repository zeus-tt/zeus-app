import { useCallback } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import { connectorLocalStorageKey, ConnectorNames } from '@pancakeswap-libs/uikit'
import { ChainId } from '@pancakeswap-libs/sdk'
import { hexlify } from 'ethers/lib/utils'
import useToast from 'hooks/useToast'
import { connectorsByName } from 'connectors'

const useAuth = () => {
  const { activate, deactivate } = useWeb3React()
  const { toastError } = useToast()

  const login = useCallback((connectorID: ConnectorNames) => {
    const connector = connectorsByName[connectorID]
    if (connector) {
      activate(connector, async (error: Error) => {
        window.localStorage.removeItem(connectorLocalStorageKey)
        if (error instanceof UnsupportedChainIdError) {
          toastError('Unsupported Chain Id', 'Changing it to ThunderCore');
          try {
            await window.ethereum?.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: hexlify(parseInt(process.env.REACT_APP_CHAIN_ID ?? '108')) }]
            });
          } catch (err) {
              // This error code indicates that the chain has not been added to MetaMask
            if (err.code === 4902) {
              // hexlify(parseInt(process.env.REACT_APP_CHAIN_ID ?? '18'))
              if (process.env.REACT_APP_CHAIN_ID === '18') {
                // thundercore testnet
                await window.ethereum?.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainName: 'ThunderCore Testnet',
                      chainId: hexlify(parseInt(process.env.REACT_APP_CHAIN_ID ?? '18')), // 18: testnet
                      nativeCurrency: { name: 'TST', decimals: 18, symbol: 'TST' },
                      rpcUrls: ['https://testnet-rpc.thundercore.com']
                    }
                  ]
                });
              } else {
                // thundercore mainnet
                await window.ethereum?.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainName: 'ThunderCore Mainnet',
                      chainId: hexlify(parseInt(process.env.REACT_APP_CHAIN_ID ?? '108')),
                      nativeCurrency: { name: 'TT', decimals: 18, symbol: 'TT' },
                      rpcUrls: ['https://mainnet-rpc.thundertoken.net', 'https://mainnet-rpc.thundercore.io']
                    }
                  ]
                });
              }
            }
          }
        } else if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
          toastError('Provider Error', 'No provider was found')
        } else if (
          error instanceof UserRejectedRequestErrorInjected ||
          error instanceof UserRejectedRequestErrorWalletConnect
        ) {
          if (connector instanceof WalletConnectConnector) {
            const walletConnector = connector as WalletConnectConnector
            walletConnector.walletConnectProvider = null
          }
          toastError('Authorization Error', 'Please authorize to access your account')
        } else {
          toastError(error.name, error.message)
        }
      })
    } else {
      toastError("Can't find connector", 'The connector config is wrong')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { login, logout: deactivate }
}

export default useAuth
