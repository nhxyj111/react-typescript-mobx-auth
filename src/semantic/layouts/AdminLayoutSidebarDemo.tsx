import React, { useState } from 'react'
import {
  Segment,
  Menu,
  Container,
  Button,
  // Grid,
  Header,
  // Divider,
  Sidebar,
  Image,
} from 'semantic-ui-react'

interface IProps {}

const AdminLayout: React.FC<IProps> = () => {
  return <DesktopContainer />
}

export default AdminLayout

// for desktop
const DesktopContainer: React.SFC<{}> = () => {
  const [visible, setVisible] = useState<boolean>(true)
  return (
    <Segment basic style={{ height: '100vh' }}>
      <TopHeader />
      <br />
      <Segment basic style={{ height: '95vh' }}>
        <Sidebar.Pushable>
          <SidebarMenu visible={visible} />
          <Sidebar.Pusher>
            <Segment basic>
              <Button secondary onClick={() => setVisible(prev => !prev)}>
                toggle
              </Button>
              <Header as="h3">Application Content</Header>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
                repellendus earum libero ut modi enim impedit distinctio
                dignissimos ad recusandae rem saepe labore doloremque corrupti,
                quibusdam non mollitia voluptatibus facilis? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Temporibus asperiores,
                architecto quae earum sint, veniam culpa quo perspiciatis est
                dolores tempore optio ipsam quod excepturi ipsum obcaecati,
                corrupti impedit vel? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Doloremque repudiandae labore fugit temporibus
                repellat cupiditate, iure nesciunt officiis cumque neque atque
                aut officia quasi totam eos inventore? Facere, ea labore?
              </p>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Segment>
    </Segment>
  )
}

const TopHeader: React.SFC<{}> = () => (
  <Menu
    // fixed={fixed ? 'top' : undefined}
    // inverted={!fixed}
    // pointing={!fixed}
    // secondary={!fixed}
    size="large"
    fixed="top"
    style={{ height: '5vh' }}
  >
    <Container>
      <Menu.Item as="a" active>
        Home
      </Menu.Item>
      <Menu.Item as="a">Work</Menu.Item>
      <Menu.Item as="a">Company</Menu.Item>
      <Menu.Item as="a">Careers</Menu.Item>
      <Menu.Item position="right">
        <Button as="a">Log in</Button>
        <Button
          as="a"
          // inverted={!fixed}
          // primary={fixed}
          style={{ marginLeft: '0.5em' }}
        >
          Sign Up
        </Button>
      </Menu.Item>
    </Container>
  </Menu>
)

const SidebarMenu: React.FC<{ visible: boolean }> = ({ visible }) => (
  <Sidebar
    as={Menu}
    animation="slide along"
    // icon="labeled"
    vertical
    visible={visible}
    width="thin"
    secondary
  >
    <Menu.Item as="a">Home</Menu.Item>
    <Menu.Item as="a">Games</Menu.Item>
    <Menu.Item as="a">Channels</Menu.Item>
    <Menu.Item as="a">Home</Menu.Item>
    <Menu.Item as="a">Games</Menu.Item>
  </Sidebar>
)
