import React from 'react'
import { Container, Header, Tab, Menu, Label } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  {
    menuItem: 'Tab 3',
    render: () => <Tab.Pane loading>Tab 3 Content</Tab.Pane>,
  },
]

const attachedPanes = [
  {
    menuItem: 'Tab 1',
    render: () => <Tab.Pane attached="top">Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 2',
    render: () => <Tab.Pane attached="top">Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 3',
    render: () => <Tab.Pane attached="top">Tab 3 Content</Tab.Pane>,
  },
]

const customPanes = [
  {
    menuItem: { key: 'users', icon: 'users', content: 'Users' },
    render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: (
      <Menu.Item key="messages">
        Messages<Label color="red">15</Label>
      </Menu.Item>
    ),
    render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
  },
]

interface IProps {}

const TabDemo: React.FC<IProps> = () => {
  return (
    <Container>
      <Header>Basic</Header>
      <Tab panes={panes} />

      <br />
      <br />
      <Tab menu={{ pointing: true }} panes={panes} />

      <br />
      <br />
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />

      <br />
      <br />
      <Tab menu={{ secondary: true }} panes={panes} />

      <br />
      <br />
      <Tab menu={{ text: true }} panes={panes} />

      <Header>Attached</Header>
      <Tab menu={{ attached: 'bottom', color: 'red' }} panes={attachedPanes} />

      <Header>Vertical</Header>
      <Tab
        menu={{ fluid: true, vertical: true, tabular: true }}
        panes={panes}
      />

      <Header>Custom Menu Items</Header>
      <Tab panes={customPanes} />
      <br />
      <br />
    </Container>
  )
}

export default TabDemo
