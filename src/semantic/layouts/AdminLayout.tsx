import React from 'react'
import {
  Segment,
  Menu,
  Container,
  Button,
  Grid,
  Header,
  Divider,
  Sidebar,
  Image,
  Tab,
  Responsive,
} from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return (isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth) as number
}

interface IProps {}

const AdminLayout: React.FC<IProps> = () => {
  return (
    <div style={{ border: '2px solid teal' }}>
      <Menu
        // fixed={fixed ? 'top' : undefined}
        // inverted={!fixed}
        // pointing={!fixed}
        // secondary={!fixed}
        size="large"
        // fixed="top"
      >
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
      </Menu>

      {/* <br />
      <br />

      <Segment basic>
        <Tab
          menu={{ fluid: true, vertical: true }}
          // menuPosition="right"
          panes={panes}
          grid={{ paneWidth: 14, tabWidth: 2 }}
        />
      </Segment> */}
      <Grid as={Segment} basic>
        <Grid.Row
          style={{
            height: '90vh',
            // overflowY: 'none',
          }}
        >
          <Grid.Column
            width={2}
            style={{
              height: '100%',
              overflowY: 'auto',
            }}
          >
            <Menu secondary vertical size="small">
              <Menu.Item as="a">Home</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Channels</Menu.Item>
              <Menu.Item as="a">Home</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column
            width={14}
            style={{
              height: '100%',
              overflowY: 'auto',
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque tempore molestiae quidem dolores saepe cupiditate! Unde
              deleniti aliquid ullam quis obcaecati, consectetur atque excepturi
              similique totam distinctio vel quidem maxime.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque tempore molestiae quidem dolores saepe cupiditate! Unde
              deleniti aliquid ullam quis obcaecati, consectetur atque excepturi
              similique totam distinctio vel quidem maxime.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default AdminLayout
