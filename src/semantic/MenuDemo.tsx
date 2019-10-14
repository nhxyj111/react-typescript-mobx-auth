import React, { useState } from 'react'
import {
  Container,
  Menu,
  MenuItemProps,
  Input,
  Segment,
  Icon,
  Grid,
  Label,
  Header,
  Button,
  Dropdown,
} from 'semantic-ui-react'

const items = [
  { key: 'editorials', name: 'Editorials' },
  { key: 'review', name: 'Reviews' },
  { key: 'events', name: 'Upcoming Events' },
]

const colorsA = ['red', 'orange', 'yellow', 'olive', 'green', 'teal']

interface IProps {}

const MenuDemo: React.FC<IProps> = () => {
  const [activeItem, setActiveItem] = useState<string | undefined>('editorials')
  const [activeA, setActiveA] = useState<string | undefined>('red')

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    { name }: MenuItemProps
  ) => {
    console.log(name)
    setActiveItem(name)
  }

  const handleAClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    { name }: MenuItemProps
  ) => {
    setActiveA(name)
  }

  return (
    <Container>
      <Menu>
        <Menu.Item
          name="editorials"
          active={activeItem === 'editorials'}
          onClick={handleItemClick}
        >
          Editorials
        </Menu.Item>

        <Menu.Item
          name="reviews"
          active={activeItem === 'reviews'}
          onClick={handleItemClick}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name="upcomingEvents"
          active={activeItem === 'upcomingEvents'}
          onClick={handleItemClick}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>

      <Menu items={items} onItemClick={handleItemClick} />

      <Menu>
        <Menu.Item content="Editorials" />
        <Menu.Item content="Reviews" />
        <Menu.Item content="Upcoming Events" />
      </Menu>

      <div>
        <Menu pointing>
          <Menu.Item name="home" active />
          <Menu.Item name="message" />
          <Menu.Item name="friend" />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Segment>
          <img
            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
            alt=""
          />
        </Segment>
      </div>

      <Menu pointing secondary>
        <Menu.Item name="home" active />
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />
        <Menu.Menu position="right">
          <Menu.Item name="logout" />
        </Menu.Menu>
      </Menu>

      <Menu tabular color="olive">
        <Menu.Item name="bio" />
        <Menu.Item name="photos" active />
      </Menu>

      <div>
        <Segment attached="top">
          <img
            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
            alt=""
          />
        </Segment>
        <Menu attached="bottom" tabular>
          <Menu.Item name="active" active>
            Active Project
          </Menu.Item>
          <Menu.Item name="2">Project #2</Menu.Item>
          <Menu.Item name="3">Project #3</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item name="new-tab">
              <Icon name="add" />
              New Tab
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
      <br />

      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item name="bio" active />
            <Menu.Item name="pics" />
            <Menu.Item name="companies" />
            <Menu.Item name="links" />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the
            tab height
          </Segment>
        </Grid.Column>
      </Grid>

      <Grid>
        <Grid.Column width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the
            tab height
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular="right">
            <Menu.Item name="bio" active />
            <Menu.Item name="pics" />
            <Menu.Item name="companies" />
            <Menu.Item name="links" />
          </Menu>
        </Grid.Column>
      </Grid>
      <br />
      <Menu text>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item name="closest" active />
        <Menu.Item name="mostComments" />
        <Menu.Item name="mostPopular" />
      </Menu>

      <br />
      <Menu vertical>
        <Menu.Item name="inbox" active>
          <Label color="teal">1</Label>
          Inbox
        </Menu.Item>
        <Menu.Item name="spam">
          <Label>51</Label>
          Spam
        </Menu.Item>
        <Menu.Item name="updates">
          <Label>1</Label>
          Updates
        </Menu.Item>
        <Menu.Item>
          <Input icon="search" placeholder="Search mail..." />
        </Menu.Item>
      </Menu>

      <br />

      <Menu pagination>
        <Menu.Item name="1" active />
        <Menu.Item disabled>...</Menu.Item>
        <Menu.Item name="10" />
        <Menu.Item name="11" />
        <Menu.Item name="12" />
      </Menu>

      <br />

      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Products</Menu.Header>
          <Menu.Menu>
            <Menu.Item name="enterprise" active />
            <Menu.Item name="consumer" />
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>CMS Solutions</Menu.Header>
          <Menu.Menu>
            <Menu.Item name="rails" />
            <Menu.Item name="python" />
            <Menu.Item name="php" />
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>Hosting</Menu.Header>
          <Menu.Menu>
            <Menu.Item name="shared" />
            <Menu.Item name="dedicated" />
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>Support</Menu.Header>
          <Menu.Menu>
            <Menu.Item name="email">E-mail Support</Menu.Item>
            <Menu.Item name="faq">FAQs</Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>

      <br />

      <Menu vertical>
        <Menu.Item name="promotions" active>
          <Header as="h4">Promotions</Header>
          <p>Check out our new promotions</p>
        </Menu.Item>
        <Menu.Item name="coupons">
          <Header as="h4">Coupons</Header>
          <p>Check out our collection of coupons</p>
        </Menu.Item>
        <Menu.Item name="rebates">
          <Header as="h4">Rebates</Header>
          <p>Visit our rebate forum for information on claiming rebates</p>
        </Menu.Item>
      </Menu>

      <br />
      <Menu>
        <Menu.Item>
          <Input className="icon" icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item position="right">
          <Input
            action={{ type: 'submit', content: 'Go' }}
            placeholder="Navigate to..."
          />
        </Menu.Item>
      </Menu>

      <br />
      <Menu>
        <Menu.Item>
          <Button primary>Sign up</Button>
        </Menu.Item>
        <Menu.Item>
          <Button>Log-in</Button>
        </Menu.Item>
      </Menu>

      <br />

      <Menu vertical>
        <Menu.Item href="//google.com" target="_blank">
          Visit Google
        </Menu.Item>
        <Menu.Item link>Link via prop</Menu.Item>
      </Menu>

      <br />
      <Menu vertical>
        <Dropdown item text="Categories">
          <Dropdown.Menu>
            <Dropdown.Item>Electronics</Dropdown.Item>
            <Dropdown.Item>Automotive</Dropdown.Item>
            <Dropdown.Item>Home</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>

      <Menu compact>
        <Dropdown item text="Categories">
          <Dropdown.Menu>
            <Dropdown.Item>Electronics</Dropdown.Item>
            <Dropdown.Item>Automotive</Dropdown.Item>
            <Dropdown.Item>Home</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>

      <br />
      <Menu stackable>
        <Menu.Item>
          <img src="https://react.semantic-ui.com/logo.png" alt="" />
        </Menu.Item>
        <Menu.Item name="features" active>
          Features
        </Menu.Item>
        <Menu.Item name="testimonials">Testimonials</Menu.Item>
        <Menu.Item name="sign-in">Sign-in</Menu.Item>
      </Menu>

      <br />
      <Menu inverted>
        <Menu.Item name="home" active />
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />
      </Menu>

      <br />

      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item name="home" active />
          <Menu.Item name="messages" />
          <Menu.Item name="friends" />
        </Menu>
      </Segment>

      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name="home" active />
          <Menu.Item name="messages" />
          <Menu.Item name="friends" />
        </Menu>
      </Segment>

      <Menu>
        {colorsA.map(c => (
          <Menu.Item
            key={c}
            name={c}
            active={activeA === c}
            color={c as any}
            onClick={handleAClick}
          />
        ))}
      </Menu>

      <Menu inverted>
        {colorsA.map(c => (
          <Menu.Item
            key={c}
            name={c}
            active={activeA === c}
            color={c as any}
            onClick={handleAClick}
          />
        ))}
      </Menu>

      <br />
      <Menu color={activeA as any} inverted widths={3}>
        <Menu.Item name="home" active />
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />
      </Menu>

      <br />
      <Menu icon vertical>
        <Menu.Item name="gamepad" active>
          <Icon name="gamepad" />
        </Menu.Item>
        <Menu.Item name="video camera">
          <Icon name="video camera" />
        </Menu.Item>
        <Menu.Item name="video play">
          <Icon name="video play" />
        </Menu.Item>
      </Menu>

      <br />

      <Menu icon="labeled" size="tiny">
        <Menu.Item name="gamepad" active>
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item name="video camera">
          <Icon name="video camera" />
          Channels
        </Menu.Item>
        <Menu.Item name="video play">
          <Icon name="video play" />
          Videos
        </Menu.Item>
      </Menu>

      <Menu icon="labeled" size="tiny" compact>
        <Menu.Item name="gamepad" active>
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item name="video camera">
          <Icon name="video camera" />
          Channels
        </Menu.Item>
        <Menu.Item name="video play">
          <Icon name="video play" />
          Videos
        </Menu.Item>
      </Menu>

      <br />

      <Menu fluid vertical>
        <Menu.Item name="run" active />
        <Menu.Item name="walk" />
        <Menu.Item name="bike" />
      </Menu>

      <br />

      <Menu fluid widths={3}>
        <Menu.Item name="buy" active />
        <Menu.Item name="sell" />
        <Menu.Item name="rent" />
      </Menu>

      <br />
      <div>
        <Menu attached="top" tabular>
          <Menu.Item name="tab1" active />
          <Menu.Item name="tab2" />
        </Menu>
        <Segment attached="bottom">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </Segment>
      </div>

      <br />
      <Menu>
        <Menu.Item name="default" active fitted>
          No padding whatsoever
        </Menu.Item>
        <Menu.Item name="horizontally" fitted="horizontally">
          No horizontal padding
        </Menu.Item>
        <Menu.Item name="vertically" fitted="vertically">
          No vertical padding
        </Menu.Item>
      </Menu>

      <br />
      <Menu borderless>
        <Menu.Item name="1" active />
        <Menu.Item name="2" />
        <Menu.Item name="3" />
        <Menu.Item name="4" />
        <Menu.Item name="5" />
        <Menu.Item name="6" />
      </Menu>
      <br />
      <br />
    </Container>
  )
}

export default MenuDemo
