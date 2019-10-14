import React from 'react'
import { Container, Header, Progress, Segment } from 'semantic-ui-react'

interface IProps {}

const ProgressDemo: React.FC<IProps> = () => {
  return (
    <Container>
      <Header>Standard</Header>
      <Progress percent={11} />
      <Header>Indicating</Header>
      <Progress percent={90} indicating />
      <Header>
        A progress bar can contain a text value indicating current progress.
      </Header>
      <Progress percent={44} progress />
      <Header>Label</Header>
      <Progress percent={55} label="Label" />
      <Header>A progress element display progress as a percent.</Header>
      <Progress value="4" total="5" progress="percent" />
      <Progress value="3" total="5" progress="ratio" />
      <Progress progress="value" value={35} />
      <Header>
        A progress element display progress as a value, with the width
        determined as a % of total.
      </Header>
      <Progress progress="value" value={35} total={50} />
      <Header>Active</Header>
      <Progress percent={60} active />

      <Header>Success</Header>
      <Progress percent={100} success>
        The progress was successful
      </Progress>

      <Progress percent={100} warning>
        I am warning you
      </Progress>

      <Progress percent={15} error>
        There was an error
      </Progress>

      <Header>A progress bar can show progress of an element. </Header>
      <Segment>
        <Progress percent={50} attached="top" />
        La la la la
        <Progress percent={50} attached="bottom" />
      </Segment>

      <Progress percent={10} size="tiny">
        tiny
      </Progress>

      <Progress percent={47} color="purple" />
    </Container>
  )
}

export default ProgressDemo
