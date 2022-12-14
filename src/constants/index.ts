import { ChainId, JSBI, Percent, Token, WETH } from '@pancakeswap-libs/sdk'
import { connectorLocalStorageKey } from '@pancakeswap-libs/uikit'

export const ROUTER_ADDRESS = '0xc1B9301E770761792F9879613Bf35e6F1844Aa7B'


// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const CAKE = new Token(
  ChainId.MAINNET,
  '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  18,
  'CAKE',
  'PancakeSwap Token'
)

export const WBNB = new Token(ChainId.MAINNET, '0x413cEFeA29F2d07B8F2acFA69d92466B9535f717', 18, 'WTT', 'Wrapped TT')
export const WBTC = new Token(ChainId.MAINNET, '0x18fB0A62f207A2a082cA60aA78F47a1af4985190', 18, 'WBTC', 'Wrapped BTC')
export const USDT = new Token(ChainId.MAINNET, '0x4f3c8e20942461e2c3bdd8311ac57b0c222f2b82', 18, 'USDT', 'Tether USD')
export const BUSD = new Token(
  ChainId.MAINNET,
  '0xBEB0131D95AC3F03fd15894D0aDE5DBf7451d171',
  18,
  'BUSD',
  'Binance USD'
)
export const ETH = new Token(
  ChainId.MAINNET,
  '0x6576Bb918709906DcbFDCeae4bB1e6df7C8a1077',
  18,
  'ETH',
  'ThunderToken-Peg Ethereum Token'
)

// const WETH_ONLY: ChainTokenList = {
//   [ChainId.MAINNET]: [WETH],
// }

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WBNB,
  [ChainId.MAINNET]: [WBNB, WBTC, USDT, BUSD, ETH],
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WBNB,
  [ChainId.MAINNET]: [WBNB, USDT],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WBNB,
  [ChainId.MAINNET]: [WBNB, WBTC, USDT],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [CAKE, WBNB],
  ],
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 80
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
