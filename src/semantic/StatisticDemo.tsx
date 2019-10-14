import React from 'react'
import { Container, Header, Statistic } from 'semantic-ui-react'

interface IProps {}

const StatisticDemo: React.FC<IProps> = () => {
  return (
    <Container>
      <Header>Statistic</Header>
      <Statistic.Group>
        <Statistic>
          <Statistic.Value>5,550</Statistic.Value>
          <Statistic.Label>Downloads</Statistic.Label>
        </Statistic>

        <Statistic label="Downloads" value="5,550" />

        <Statistic>
          <Statistic.Label>Views</Statistic.Label>
          <Statistic.Value>40,509</Statistic.Value>
        </Statistic>
      </Statistic.Group>
    </Container>
  )
}

export default StatisticDemo
