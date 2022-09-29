import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Heading, IconButton, Text, Flex, useModal, HistoryIcon, CogIcon, RefreshIcon, GraphOpenIcon, GraphCloseIcon } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import SettingsModal from './SettingsModal'
import RecentTransactionsModal from './RecentTransactionsModal';

interface PageHeaderProps {
  title: ReactNode
  description?: ReactNode
  children?: ReactNode,
  graph?: {
    visible: boolean,
    graphToggle: () => void
  },
  redu?: boolean,
}

const StyledPageHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 1.9375em;
`

const Details = styled.div`
  flex: 1;
`

const PageHeader = ({ title, description, children, graph, redu }: PageHeaderProps) => {
  const TranslateString = useI18n()
  const [onPresentSettings] = useModal(<SettingsModal translateString={TranslateString} />)
  const [onPresentRecentTransactions] = useModal(<RecentTransactionsModal translateString={TranslateString} />)


  return (
    <StyledPageHeader >
      <Flex alignItems="center">
        {/* {graph &&
          !graph?.visible ? <IconButton
            variant="text"
            color='currentColor'
            onClick={graph?.graphToggle}
            title={TranslateString(1202, 'Show Graph')}
          >
          <GraphOpenIcon />
        </IconButton> : graph?.visible && <IconButton
          variant="text"
          color='currentColor'
          onClick={graph?.graphToggle}
          title={TranslateString(1202, 'Close Graph')}
        >
          <GraphCloseIcon />
        </IconButton>
        } */}

        <Details style={{ textAlign: graph ? 'center' : 'left' }}>
          <Heading size="md" mb="8px">{title}</Heading>
          {description && (
            <Text color="textSubtle" fontSize="1em">
              {description}
            </Text>
          )}
        </Details>

        <IconButton
          variant="text"
          onClick={onPresentSettings}
          title={TranslateString(1202, 'Recent transactions')}
        >
          <CogIcon width="24px" color="currentColor" />
        </IconButton>
        <IconButton
          variant="text"
          onClick={onPresentRecentTransactions}
          title={TranslateString(1202, 'Recent transactions')}
        >
          <HistoryIcon width="24px" color="currentColor" />
        </IconButton>

        {
          redu && <IconButton
            variant="text"
            onClick={onPresentRecentTransactions}
            title={TranslateString(1202, 'Recent transactions')}
          >
            <RefreshIcon onClick={onPresentRecentTransactions} width="24px" color="currentColor" />
          </IconButton>
        }

      </Flex>
      {children && <Text mt="16px">{children}</Text>}
    </StyledPageHeader >
  )
}

export default PageHeader
