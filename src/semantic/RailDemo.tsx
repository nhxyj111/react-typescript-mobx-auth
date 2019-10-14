import React from 'react'
import { Grid, Segment, Rail, Image } from 'semantic-ui-react'

interface IProps {}

const RailDemo: React.FC<IProps> = () => {
  return (
    <div>
      <br />
      <br />

      <Grid centered columns={3}>
        <Grid.Column>
          <Segment>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />

            <Rail position="left">
              <Segment>Left Rail Content</Segment>
            </Rail>

            <Rail position="right">
              <Segment>Right Rail Content</Segment>
            </Rail>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default RailDemo
