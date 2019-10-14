import React from 'react'
import { Header, Divider, Icon, Image, Segment } from 'semantic-ui-react'

interface IProps {}

const HeaderDemo: React.FC<IProps> = () => {
  return (
    <div>
      <Header as="h1">First Header</Header>
      <Header as="h2">Second Header</Header>
      <Header as="h3">Third Header</Header>
      <Header as="h4">Fourth Header</Header>
      <Header as="h5">Fifth Header</Header>
      <Header as="h6">Sixth Header</Header>

      <Divider />

      <Header size="huge">Huge Header</Header>
      <Header size="large">Large Header</Header>
      <Header size="medium">Medium Header</Header>
      <Header size="small">Small Header</Header>
      <Header size="tiny">Tiny Header</Header>

      <Divider />

      <Header as="h2" icon>
        <Icon name="settings" />
        Account Settings
        <Header.Subheader>
          Manage your account settings and set e-mail preferences.
        </Header.Subheader>
      </Header>

      <Divider />

      <Header as="h2" icon textAlign="center">
        <Icon name="users" circular />
        <Header.Content>Friends</Header.Content>
      </Header>
      <Image
        centered
        size="large"
        src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png"
      />

      <Divider />

      <Header sub>Price</Header>
      <span>$10.99</span>

      <Divider />

      <Header as="h2">
        <Image
          circular
          src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
        />{' '}
        Patrick
      </Header>

      <Divider />

      <Header
        as="h2"
        image="https://react.semantic-ui.com/images/icons/school.png"
        content="Learn More"
      />

      <Divider />

      <Header as="h2">
        <Icon name="plug" />
        <Header.Content>Uptime Guarantee</Header.Content>
      </Header>

      <Divider />

      <Header as="h2">
        <Icon name="settings" />
        <Header.Content>
          Account Settings
          <Header.Subheader>Manage your preferences</Header.Subheader>
        </Header.Content>
      </Header>

      <Divider />

      <Header as="h2" icon="plug" content="Uptime Guarantee" />

      <Divider />

      <Header as="h2">
        Account Settings
        <Header.Subheader>
          Manage your account settings and set email preferences
        </Header.Subheader>
      </Header>

      <Divider />

      <Header
        as="h2"
        content="Account Settings"
        subheader="Manage your account settings and set email preferences"
      />

      <Divider />

      <Header as="h2" disabled>
        Disabled Header
      </Header>

      <Divider />

      <Header as="h3" dividing>
        Dividing Header
      </Header>

      <Header as="h3" block>
        Block Header
      </Header>

      <Divider />

      <Header as="h2" attached="top">
        Attached Header
      </Header>
      <Segment attached>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Segment>

      <Divider style={{ backgroundColor: 'red' }} />

      <Segment clearing>
        <Header as="h2" floated="right">
          Float Right
        </Header>
        <Header as="h2" floated="left">
          Float Left
        </Header>
      </Segment>

      <Divider />

      <Segment>
        <Header as="h3" textAlign="right">
          Float Right
        </Header>
        <Header
          as="h3"
          textAlign="left"
          style={{ backgroundColor: 'greenyellow' }}
        >
          Float Left
        </Header>
        <Header as="h3" textAlign="justified">
          This text takes up the full width of the container
        </Header>
        <Header as="h3" textAlign="center">
          Centered
        </Header>
      </Segment>

      <Divider />
      <Header as="h4" color="red">
        Red
      </Header>
      <Header as="h4" color="orange">
        Orange
      </Header>
      <Header as="h4" color="yellow">
        Yellow
      </Header>
      <Header as="h4" color="olive">
        Olive
      </Header>
      <Header as="h4" color="green">
        Green
      </Header>
      <Header as="h4" color="teal">
        Teal
      </Header>
      <Header as="h4" color="blue">
        Blue
      </Header>
      <Header as="h4" color="purple">
        Purple
      </Header>
      <Header as="h4" color="violet">
        Violet
      </Header>
      <Header as="h4" color="pink">
        Pink
      </Header>
      <Header as="h4" color="brown">
        Brown
      </Header>
      <Header as="h4" color="grey">
        Grey
      </Header>
    </div>
  )
}

export default HeaderDemo
