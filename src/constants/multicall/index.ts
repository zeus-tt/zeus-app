import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x3017086DeEf56679e267F67F66c4415109b7A97f', // TODO
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
