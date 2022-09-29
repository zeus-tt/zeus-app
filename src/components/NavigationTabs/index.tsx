import React from 'react'
import styled from 'styled-components'
import { Link as HistoryLink } from 'react-router-dom'
import { ArrowLeft } from 'react-feather'
import { RowBetween } from 'components/Row'
import QuestionHelper from 'components/QuestionHelper'
import useI18n from 'hooks/useI18n'
import { CogIcon, HistoryIcon, IconButton, Text } from '@pancakeswap-libs/uikit'
import { Flex } from 'rebass'

const Tabs = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`

const StyledArrowLeft = styled(ArrowLeft)`
  color: ${({ theme }) => theme.colors.text};
`

export function FindPoolTabs() {
  const TranslateString = useI18n()
  return (
    <Tabs>
      <RowBetween style={{ padding: '1rem' }}>
        <HistoryLink to="/pool">
          <StyledArrowLeft />
        </HistoryLink>
        <Text fontSize='1.25em' bold>Import Pool</Text>
        <QuestionHelper
          text={TranslateString(256, 'Use this tool to find pairs that do not automatically appear in the interface.')}
        />
      </RowBetween>
    </Tabs>
  )
}

export function AddRemoveTabs({ adding }: { adding: boolean }) {
  const TranslateString = useI18n()
  return (
    <Tabs>
      <RowBetween style={{ padding: '1rem' }}>
        <HistoryLink to="/pool">
          <StyledArrowLeft />
        </HistoryLink>
        <Flex p="0.2em" flexDirection="column">
          <Text fontSize='1.25em' bold>{adding ? TranslateString(258, 'Add') : TranslateString(260, 'Remove')} Liquidity</Text>
          <Text fontSize='0.9375em'><QuestionHelper
          text={
            adding
              ? TranslateString(
                  264,
                  'When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.'
                )
              : TranslateString(
                  266,
                  'Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive.'
                )
          }
        />Receive LP tokens and earn 0.17% trading fees</Text>
        </Flex>
        
        <Flex>
          <IconButton
            variant="text"
            // onClick={onPresentSettings}
            title={TranslateString(1202, 'Recent transactions')}
          >
            <CogIcon width="24px" color="currentColor" />
          </IconButton>
          <IconButton
            variant="text"
            // onClick={onPresentRecentTransactions}
            title={TranslateString(1202, 'Recent transactions')}
          >
            <HistoryIcon width="24px" color="currentColor" />
          </IconButton>
        </Flex>
      </RowBetween>
    </Tabs>
  )
}
