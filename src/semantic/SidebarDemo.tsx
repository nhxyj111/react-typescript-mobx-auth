import React, { useState } from 'react'
import {
  Container,
  Header,
  Sidebar,
  Menu,
  Segment,
  Icon,
  Image,
  Button,
} from 'semantic-ui-react'

interface IProps {}

const SidebarDemo: React.FC<IProps> = () => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <Container>
      <br />
      <Button secondary onClick={() => setVisible(prev => !prev)}>
        toggle
      </Button>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={visible}>
          <Segment basic>
            <Header as="h3">Application Content</Header>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      // TODO:
    </Container>
  )
}

export default SidebarDemo
