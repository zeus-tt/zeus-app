import React, { useEffect, useMemo } from 'react'
import { Pair } from '@pancakeswap-libs/sdk'
import { Button, CardBody, Text } from '@pancakeswap-libs/uikit'
import CardNav from 'components/CardNav'
import FullPositionCard from 'components/PositionCard'
import { useTokenBalancesWithLoadingIndicator } from 'state/wallet/hooks'
import { StyledInternalLink } from 'components/Shared'
import { LightCard } from 'components/Card'
import Container from 'components/Container'

import { useActiveWeb3React } from 'hooks'
import { usePairs } from 'data/Reserves'
import { toV2LiquidityToken, useTrackedTokenPairs } from 'state/user/hooks'
import { Dots } from 'components/swap/styleds'
import useI18n from 'hooks/useI18n'
import PageHeader from 'components/PageHeader'
import AppBody from '../AppBody'

export default function Pool() {
  // const theme = useContext(ThemeContext)
  const { account } = useActiveWeb3React()
  const TranslateString = useI18n()

  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs()
  const tokenPairsWithLiquidityTokens = useMemo(
    () => trackedTokenPairs.map((tokens) => ({ liquidityToken: toV2LiquidityToken(tokens), tokens })),
    [trackedTokenPairs]
  )
  const liquidityTokens = useMemo(() => tokenPairsWithLiquidityTokens.map((tpwlt) => tpwlt.liquidityToken), [
    tokenPairsWithLiquidityTokens,
  ])
  const [v2PairsBalances, fetchingV2PairBalances] = useTokenBalancesWithLoadingIndicator(
    account ?? undefined,
    liquidityTokens
  )

  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan('0')
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances]
  )

  const v2Pairs = usePairs(liquidityTokensWithBalances.map(({ tokens }) => tokens))
  const v2IsLoading =
    fetchingV2PairBalances || v2Pairs?.length < liquidityTokensWithBalances.length || v2Pairs?.some((V2Pair) => !V2Pair)

  const allV2PairsWithLiquidity = v2Pairs.map(([, pair]) => pair).filter((v2Pair): v2Pair is Pair => Boolean(v2Pair))

  return (
    <Container>
      <CardNav activeIndex={1} />
      <AppBody>
        <PageHeader
          title={TranslateString(8, 'Your Liquidity')}
          description={TranslateString(1192, 'Remove Liquidity to receive tokens back')}
        />
        {!account ? (
          <LightCard padding="40px">
            <Text bold color="textDisabled" textAlign="center">
              {TranslateString(156, 'Connect to a wallet to view your liquidity.')}
            </Text>
          </LightCard>
        ) : v2IsLoading ? (
          <LightCard padding="40px">
            <Text color="textDisabled" textAlign="center">
              <Dots>Loading</Dots>
            </Text>
          </LightCard>
        ) : allV2PairsWithLiquidity?.length > 0 ? (
          <>
            {allV2PairsWithLiquidity.map((v2Pair) => (
              <FullPositionCard key={v2Pair.liquidityToken.address} pair={v2Pair} />
            ))}
          </>
        ) : (
          <LightCard padding="40px">
            <Text color="textDisabled" textAlign="center">
              {TranslateString(104, 'No liquidity found.')}
            </Text>
          </LightCard>
        )}
        {/* <div>
                <Text fontSize="14px" style={{ padding: '.5rem 0 .5rem 0' }}>
                  {TranslateString(106, "Don't see a pool you joined?")}{' '}
                  <StyledInternalLink id="import-pool-link" to="/find">
                    {TranslateString(108, 'Import it.')}
                  </StyledInternalLink>
                </Text>
                <Text fontSize="14px" style={{ padding: '.5rem 0 .5rem 0' }}>
                  {TranslateString(1172, 'Or, if you staked your LP tokens in a farm, unstake them to see them here.')}
                </Text>
              </div> */}
        <CardBody>
          <StyledInternalLink to="/add">
            <Button style={{ width: '100%' }} id="join-pool-button" mb="16px" >
              {TranslateString(168, "Add liquidity")}
            </Button>
          </StyledInternalLink>
        </CardBody>
      </AppBody>
    </Container>
  )
}
