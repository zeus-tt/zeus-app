import React, { useEffect, useState } from 'react'
import { SwapVertIcon, Flex, Heading, Button, Text, Card } from '@pancakeswap-libs/uikit'
import { Tooltip, XAxis, AreaChart, Area, ResponsiveContainer } from 'recharts'
// import { TranslateString } from 'utils/translateTextHelpers'
import styled from 'styled-components'
import Row from 'components/Row'

const data = [
  { name: 'Page A', uv: 4000, time: '1:30 AM', pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, time: '5:30 AM', pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, time: '8:30 AM', pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, time: '11:30 AM', pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, time: '2:30 AM', pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, time: '5:36 AM', pv: 3800, amt: 2500 },
]

export const StyledViewButton = styled(Button)`
  background: #081f45;
  padding: 0.375em 0.75em;
  border-radius: 3px;
  font-weight: 500;

  &:disabled {
    background: #081f45;
  }
`

const StyledGraphCard = styled(Card)`
  display: flex;
  width: 100%;
  max-width: 575px;
  padding: 2.375em 1.9375em;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledTextIBM = styled(Text)`
  font-family: 'IBM Plex Mono';
`

export const StyledTextPoppins = styled(Text)`
  font-family: 'Poppins';
`

const StyledText = styled(Text)`
  font-family: 'Poppins';
  background-size: 100%;
  background: ${({ theme }) => theme.colors.gradients.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

function Graph() {
  const [pair, setpair] = useState({ coin1: 'BNB', coin2: 'CAKE' });

  const currDateTime = (new Date().toUTCString().split(" ").splice(1)).join(",");

  useEffect(() => {
    // setpair();
  }, [])

  const swapCoinsHandler = () => {
    setpair(() => {
      return {
        coin1: pair.coin2,
        coin2: pair.coin1
      }
    })
  }

  return (
    <StyledGraphCard>
      <Flex flexDirection="column">
        {/* heading */}
        <Heading size="md">
          <Row>
            {/* <DoubleCurrencyLogo currency0='TT' currency1='TT' size={16} margin /> */}
            <Text ml="1em" bold>
              {pair.coin1.toUpperCase()}/{pair.coin2.toUpperCase()}
            </Text>
            <SwapVertIcon onClick={swapCoinsHandler} mx="1em" width="32px" transform="rotate(90)" />
            <StyledViewButton disabled>Basic</StyledViewButton>
          </Row>
        </Heading>
        {/* details */}
        {/* Price  */}
        <StyledText bold color="primary" fontSize="1.75em">
          74.08
        </StyledText>
        {/* row > pair name; +APR | time zone  */}

        <Flex flexDirection="row" alignItems="center" justifyContent="space-between">
          <Flex>
            <Text bold color="primary">
              {pair.coin1}/{pair.coin2} +0.323 (0.44%)
            </Text>
          </Flex>
          <Flex>
            <StyledViewButton variant="md">
              <StyledTextIBM color='#FFFFFF' fontSize="1em">24H</StyledTextIBM>
            </StyledViewButton>
            <StyledViewButton variant="md">
              <StyledTextIBM color='#FFFFFF' fontSize="1em">1D</StyledTextIBM>
            </StyledViewButton>
            <StyledViewButton variant="md">
              <StyledTextIBM color="#FFFFFF" fontSize="1em">1M</StyledTextIBM>
            </StyledViewButton>
            <StyledViewButton variant="md">
              <StyledTextIBM color="#FFFFFF" margin="0px" padding="0px" fontSize="1em">1Y</StyledTextIBM>
            </StyledViewButton>
          </Flex>
        </Flex>
        <StyledTextIBM>{currDateTime}</StyledTextIBM>
      </Flex>

      {/* time  */}
      {/* Chart */}
      <Flex>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="-37.42%" stopColor="#7EE0FF" />
                <stop offset="98.39%" stopColor="rgba(0, 156, 177, 0)" />
              </linearGradient>
            </defs>
            <Area
              name="{TITLE}"
              // label={{ fill: 'currentColor', fontSize: 20 }}
              dataKey="pv"
              stroke="#24A9D2"
              strokeWidth={1}
              dot={false}
              activeDot={false}
              fill="url(#colorUv)"
            />
            {/* <Tooltip
                wrapperStyle={{ fontFamily: "sans-serif" }}
                labelStyle={{ color: "green" }}
                itemStyle={{ color: "red" }}
                separator=": "
                isAnimationActive={false}
              /> */}
            <XAxis
              tickCount={2}
              style={{ fontFamily: 'IBM Plex Mono' }}
              axisLine={false}
              tickLine={false}
              stroke="currentColor"
              xAxisId="0"
              dataKey="time"
            />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </Flex>
    </StyledGraphCard>
  )
}

export default Graph
