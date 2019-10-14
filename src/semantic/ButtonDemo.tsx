import React, { useRef } from 'react'
import {
  Button,
  Modal,
  Dropdown,
  Label,
  Icon,
  Segment,
  Divider,
  Grid,
} from 'semantic-ui-react'

interface IProps {}

const ButtonDemo: React.FC<IProps> = () => {
  const focusRef = useRef<Button>(null)

  // console.log()

  return (
    <>
      <div>shorthand</div>
      <div>
        <Button icon="like" />
        <Button content="Like" icon={{ color: 'red', name: 'like' }} />
        <Modal trigger={<Button>Show Modal</Button>}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <p>
                We've found the following gravatar image associated with your
                e-mail address.
              </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>

        <Modal trigger={<Button>Show</Button>} content={<div>Content</div>} />
        <Modal
          trigger={<Button>Show</Button>}
          content={{ content: 'Content' }}
        />
        <Modal trigger={<Button>Show</Button>} content="Content" />

        <Dropdown icon={{ name: 'like' }} />

        <Button
          content="Like"
          icon={(Component, componentProps) => <Label basic>+1</Label>}
        />

        <Button
          content="Like"
          icon={(Component, componentProps) => (
            <Component {...componentProps} color="red" name="like" />
          )}
        />
      </div>

      <div>Button</div>
      <div>
        <Button>Click Here</Button>
        <Button content="Click Here" />
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button content="Primary" primary />
        <Button content="Secondary" secondary />
        <br />
        <br />
        <Button animated>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
        <Button animated="vertical">
          <Button.Content hidden>Shop</Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
        <Button animated="fade">
          <Button.Content visible>Sign-up for a Pro account</Button.Content>
          <Button.Content hidden>$12.99 a month</Button.Content>
        </Button>
        <br />
        <br />
        <Button as="div" labelPosition="right">
          <Button icon>
            <Icon name="heart" />
            Like
          </Button>
          <Label as="a" basic pointing="left">
            2,048
          </Label>
        </Button>
        <Label as="a" basic pointing="right">
          2,048
        </Label>
        <Button as="div" labelPosition="left">
          <Label as="a" basic>
            2,048
          </Label>
          <Button icon>
            <Icon name="fork" />
          </Button>
        </Button>
        <br />
        <br />
        <Button
          content="Like"
          icon="heart"
          label={{ as: 'a', basic: true, content: '2,048' }}
          labelPosition="right"
        />
        <Button
          content="Like"
          icon="heart"
          label={{ as: 'a', basic: true, pointing: 'right', content: '2,048' }}
          labelPosition="left"
        />
        <Button
          icon="fork"
          label={{ as: 'a', basic: true, content: '2,048' }}
          labelPosition="left"
        />
        <br />
        <br />
        <Button
          basic
          color="red"
          content="Like"
          icon="heart"
          label={{
            basic: true,
            color: 'red',
            pointing: 'left',
            content: '2,048',
          }}
        />
        <Button
          // basic
          color="blue"
          content="Fork"
          icon="fork"
          label={{
            as: 'a',
            basic: true,
            color: 'blue',
            pointing: 'left',
            content: '2,048',
          }}
        />
        <br />
        <br />
        <Button icon="world" />
        <Button icon labelPosition="left">
          <Icon name="pause" />
          Pause
        </Button>
        <Button icon labelPosition="right">
          Next
          <Icon name="arrow right" />
        </Button>
        <Button content="Pause" icon="pause" labelPosition="left" />
        <Button content="Next" icon="right arrow" labelPosition="right" />
        <br />
        <br />
        <Button basic>Standard</Button>
        <Button basic color="red">
          Red
        </Button>
        <Button basic color="orange">
          Orange
        </Button>
        <Button basic color="yellow">
          Yellow
        </Button>
        <Button basic color="olive">
          Olive
        </Button>
        <Button basic color="green">
          Green
        </Button>
        <Button basic color="teal">
          Teal
        </Button>
        <Button basic color="blue">
          Blue
        </Button>
        <Button basic color="violet">
          Violet
        </Button>
        <Button basic color="purple">
          Purple
        </Button>
        <Button basic color="pink">
          Pink
        </Button>
        <Button basic color="brown">
          Brown
        </Button>
        <Button basic color="grey">
          Grey
        </Button>
        <Button basic color="black">
          Black
        </Button>
        <br />
        <br />
        <Button content="Standard" basic />
        <Button basic color="red" content="Red" />
        <Button basic color="orange" content="Orange" />
        <Button basic color="yellow" content="Yellow" />
        <Button basic color="olive" content="Olive" />
        <Button color="green" content="Green" />
        <Button basic color="teal" content="Teal" />
        <Button basic color="blue" content="Blue" />
        <Button basic color="violet" content="Violet" />
        <Button basic color="purple" content="Purple" />
        <Button basic color="pink" content="Pink" />
        <Button basic color="brown" content="Brown" />
        <Button basic color="grey" content="Grey" />
        <Button basic color="black" content="Black" />
        <br />
        <br />
        <Segment inverted>
          <Button inverted>Standard</Button>
          <Button inverted color="red">
            Red
          </Button>
          <Button inverted color="orange">
            Orange
          </Button>
          <Button inverted color="yellow">
            Yellow
          </Button>
          <Button inverted color="olive">
            Olive
          </Button>
          <Button basic inverted color="green">
            Green
          </Button>
          <Button inverted color="teal">
            Teal
          </Button>
          <Button inverted color="blue">
            Blue
          </Button>
          <Button inverted color="violet">
            Violet
          </Button>
          <Button inverted color="purple">
            Purple
          </Button>
          <Button inverted color="pink">
            Pink
          </Button>
          <Button inverted color="brown">
            Brown
          </Button>
          <Button inverted color="grey">
            Grey
          </Button>
          <Button inverted color="black">
            Black
          </Button>
        </Segment>
        <br />
        <br />
        <Button.Group>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </Button.Group>
        <Button.Group buttons={['One', 'Two', 'Three']} />
        <Button.Group>
          <Button icon>
            <Icon name="align left" />
          </Button>
          <Button icon>
            <Icon name="align center" />
          </Button>
          <Button icon>
            <Icon name="align right" />
          </Button>
          <Button icon>
            <Icon name="align justify" />
          </Button>
        </Button.Group>{' '}
        <Button.Group>
          <Button icon>
            <Icon name="bold" />
          </Button>
          <Button icon>
            <Icon name="underline" />
          </Button>
          <Button icon>
            <Icon name="text width" />
          </Button>
        </Button.Group>
        <Button.Group
          buttons={[
            { key: 'align left', icon: 'align left' },
            { key: 'align center', icon: 'align center' },
            { key: 'align right', icon: 'align right' },
            { key: 'align justify', icon: 'align justify' },
          ]}
        />{' '}
        <Button.Group
          buttons={[
            { key: 'bold', icon: 'bold' },
            { key: 'underline', icon: 'underline' },
            { key: 'text width', icon: 'text width' },
          ]}
        />
        <br />
        <br />
        <Button.Group>
          <Button>Cancel</Button>
          <Button.Or />
          <Button positive>Save</Button>
        </Button.Group>
        <Button.Group>
          <Button>un</Button>
          <Button.Or text="或" />
          <Button positive>deux</Button>
        </Button.Group>
        <br />
        <br />
        <Button active>Active</Button>
        <Button disabled>Disabled</Button>
        <br />
        <br />
        <Button loading>Loading</Button>
        <Button basic loading>
          Loading
        </Button>
        <Button loading primary>
          Loading
        </Button>
        <Button loading secondary>
          Loading
        </Button>
        <br />
        <br />
        <Button color="facebook">
          <Icon name="facebook" /> Facebook
        </Button>
        <Button color="twitter">
          <Icon name="twitter" /> Twitter
        </Button>
        <Button color="google plus">
          <Icon name="google plus" /> Google Plus
        </Button>
        <Button color="vk">
          <Icon name="vk" /> VK
        </Button>
        <Button color="linkedin">
          <Icon name="linkedin" /> LinkedIn
        </Button>
        <Button color="instagram">
          <Icon name="instagram" /> Instagram
        </Button>
        <Button color="youtube" size="mini">
          <Icon name="youtube" /> YouTube
        </Button>
        <br />
        <br />
        <Button size="mini">Mini</Button>
        <Button size="tiny">Tiny</Button>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button>Default</Button>
        <Button size="large">Large</Button>
        <Button size="big">Big</Button>
        <Button size="huge">Huge</Button>
        <Button size="massive">Massive</Button>
        <br />
        <br />
        <Button floated="right">Right Floated</Button>
        <Button floated="left">Left Floated</Button>
        <br />
        <br />
        <Button color="red">Red</Button>
        <Button color="orange">Orange</Button>
        <Button color="yellow">Yellow</Button>
        <Button color="olive">Olive</Button>
        <Button color="green">Green</Button>
        <Button color="teal">Teal</Button>
        <Button color="blue">Blue</Button>
        <Button color="violet">Violet</Button>
        <Button color="purple">Purple</Button>
        <Button color="pink">Pink</Button>
        <Button color="brown">Brown</Button>
        <Button color="grey">Grey</Button>
        <Button color="black">Black</Button>
        <br />
        <br />
        <Button compact>Compact</Button>
        <Button>Normal</Button>
        <Button size="mini" compact>
          Compact
        </Button>
        <Button size="mini">Normal</Button>
        <br />
        <br />
        <Button toggle active>
          Toggle
        </Button>
        <Button toggle active={false}>
          Toggle
        </Button>
        <Button positive>Positive Button</Button>
        <Button negative>Negative Button</Button>
        <br />
        <br />
        <Button fluid color="purple">
          Fits to Container
        </Button>
        <br />
        <br />
        <Button circular icon="settings" />
        <div>
          <Button attached="top">Top</Button>
          <Segment attached>
            <img
              src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
              alt=""
            />
          </Segment>
          <Button.Group attached="bottom">
            <Button>One</Button>
            <Button>Two</Button>
          </Button.Group>
        </div>
        <br />
        <br />
        <Button attached="left">Left</Button>
        <Button attached="right">Right</Button>
        <br />
        <br />
        <Button.Group floated="left">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </Button.Group>
        <Button.Group floated="right">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </Button.Group>
        <br />
        <br />
        <Button.Group vertical>
          <Button>Feed</Button>
          <Button>Messages</Button>
          <Button>Events</Button>
          <Button>Photos</Button>
        </Button.Group>
        <Button.Group icon>
          <Button>
            <Icon name="play" />
          </Button>
          <Button>
            <Icon name="pause" />
          </Button>
          <Button>
            <Icon name="shuffle" />
          </Button>
        </Button.Group>
        <Button.Group vertical labeled icon>
          <Button icon="play" content="Play" />
          <Button icon="pause" content="Pause" />
          <Button icon="shuffle" content="Shuffle" />
        </Button.Group>
        <br />
        <br />
        <Button.Group>
          <Button labelPosition="left" icon="left chevron" content="Back" />
          <Button icon="stop" content="Stop" />
          <Button
            labelPosition="right"
            icon="right chevron"
            content="Forward"
          />
        </Button.Group>
        <br />
        <br />
        <Button.Group widths="5">
          <Button>Overview</Button>
          <Button>Specs</Button>
          <Button>Warranty</Button>
          <Button>Reviews</Button>
          <Button>Support</Button>
        </Button.Group>
        <Divider />
        <Button.Group widths="3">
          <Button>Overview</Button>
          <Button>Specs</Button>
          <Button>Support</Button>
        </Button.Group>
        <br />
        <br />
        <Button.Group color="blue">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </Button.Group>
        {'  '}
        <Button.Group color="blue">
          <Button labelPosition="left" icon="left chevron" content="Back" />
          <Button icon="stop" content="Stop" />
          <Button
            labelPosition="right"
            icon="right chevron"
            content="Forward"
          />
        </Button.Group>
        <br />
        <br />
        <Button.Group size="mini">
          <Button basic color="red">
            One
          </Button>
          <Button basic color="green">
            Two
          </Button>
          <Button basic color="blue">
            Three
          </Button>
        </Button.Group>
        <br />
        <br />
        <Grid>
          <Grid.Column width={8}>
            <Button
              content="A button that can be focused"
              primary
              ref={focusRef}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Button
              content="Set focused"
              onClick={() => {
                if (focusRef && focusRef.current) focusRef.current.focus()
              }}
            />
          </Grid.Column>
        </Grid>
      </div>
    </>
  )
}
export default ButtonDemo
