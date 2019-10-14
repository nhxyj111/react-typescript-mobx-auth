import React from 'react'
import { Divider, Segment, Dimmer, Loader, Image } from 'semantic-ui-react'

const SHORT_PARAGRAPH =
  'https://react.semantic-ui.com/images/wireframe/short-paragraph.png'
interface IProps {}

const LoaderDemo: React.FC<IProps> = () => {
  return (
    <div>
      <Divider />
      <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>

        <Image src={SHORT_PARAGRAPH} />
      </Segment>
      <Divider />
      <Segment>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>

        <Image src={SHORT_PARAGRAPH} />
      </Segment>
      <Segment>
        <Dimmer active inverted>
          <Loader inverted content="Loading" />
        </Dimmer>

        <Image src={SHORT_PARAGRAPH} />
      </Segment>
      <Divider />
      <Segment>
        <Dimmer active>
          <Loader indeterminate>Preparing Files</Loader>
        </Dimmer>

        <Image src={SHORT_PARAGRAPH} />
      </Segment>
      <Divider />
      <Segment>
        <Loader active />

        <Image src={SHORT_PARAGRAPH} />
      </Segment>
      <Divider />
      <Loader active inline /> Loading...
      <Divider />
      <Loader active inline="centered" />
      <Divider />
      <Segment>
        <Dimmer active>
          <Loader size="mini">Loading</Loader>
        </Dimmer>

        <Image src={SHORT_PARAGRAPH} />
      </Segment>
      <Divider />
    </div>
  )
}

export default LoaderDemo
