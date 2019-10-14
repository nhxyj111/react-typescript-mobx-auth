import React from 'react'
import _ from 'lodash'
import {
  Label,
  Icon,
  Form,
  Divider,
  Grid,
  Image,
  Segment,
  Container,
  List,
  Menu,
} from 'semantic-ui-react'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
] as any

interface IProps {}

const LabelDemo: React.FC<IProps> = () => {
  return (
    <div>
      <br />
      <br />
      <Label>
        <Icon name="mail" /> 23
      </Label>
      <br />
      <br />
      <Label as="a">
        <img
          // src="https://react.semantic-ui.com/images/avatar/large/joe.jpg"
          src="https://react.semantic-ui.com/images/wireframe/image-text.png"
          alt=""
        />
        Joe
      </Label>
      <Label as="a" image>
        <img
          src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
          alt=""
        />
        Elliot
      </Label>
      <Label as="a" image>
        <img
          src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
          alt=""
        />
        Stevie
      </Label>

      <br />
      <br />
      <Label as="a" color="blue" image onClick={() => alert('aa')}>
        <img
          src="https://react.semantic-ui.com/images/avatar/small/veronika.jpg"
          alt=""
        />
        Veronika
        <Label.Detail>Friend</Label.Detail>
      </Label>
      <Label as="a" color="teal" image>
        <img
          src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
          alt=""
        />
        Veronika
        <Label.Detail>Friend</Label.Detail>
      </Label>
      <Label as="a" color="yellow" image>
        <img
          src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
          alt=""
        />
        Helen
        <Label.Detail>Co-worker</Label.Detail>
      </Label>

      <br />
      <br />
      <Label image>
        <img
          src="https://react.semantic-ui.com/images/avatar/small/ade.jpg"
          alt=""
        />
        Adrienne
        <Icon name="delete" color="red" />
      </Label>
      <Label image>
        <img
          src="https://react.semantic-ui.com/images/avatar/small/zoe.jpg"
          alt=""
        />
        Zoe
        <Icon name="delete" />
      </Label>
      <Label image>
        <img
          src="https://react.semantic-ui.com/images/avatar/small/nan.jpg"
          alt=""
        />
        Nan
        <Icon name="delete" />
      </Label>

      <br />
      <br />

      <Form>
        <Form.Field>
          <input type="text" placeholder="First name" />
          <Label basic color="red" pointing>
            Please enter a value
          </Label>
        </Form.Field>
        <Divider />

        <Form.Field>
          <Label pointing="below" prompt>
            Please enter a value
          </Label>
          <input type="text" placeholder="Last Name" />
        </Form.Field>
        <Divider />

        <Form.Field inline>
          <input type="text" placeholder="Username" size={69} />
          <Label pointing="left">That name is taken!</Label>
        </Form.Field>
        <Divider />

        <Form.Field inline>
          <Label pointing="right">
            Your password must be 6 characters or more
          </Label>
          <input type="password" placeholder="Password" />
        </Form.Field>
      </Form>

      <br />
      <br />

      <Grid columns={2}>
        <Grid.Column>
          <Image
            fluid
            label={{ as: 'a', corner: 'left', icon: 'heart' }}
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />
        </Grid.Column>

        <Grid.Column>
          <Image
            fluid
            label={{ as: 'a', color: 'red', corner: 'right', icon: 'save' }}
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />
        </Grid.Column>
      </Grid>

      <br />
      <br />

      <Image
        size="small"
        label={{
          as: 'a',
          color: 'red',
          corner: 'right',
          icon: 'save',
          size: 'mini',
        }}
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />

      <br />
      <br />
      <Label as="a" tag>
        New
      </Label>
      <Label as="a" color="red" tag>
        Upcoming
      </Label>
      <Label as="a" color="teal" tag>
        Featured
      </Label>

      <br />
      <br />
      <Container>
        <Grid columns={2}>
          <Grid.Column>
            <Segment raised>
              <Label as="a" color="red" ribbon>
                Overview
              </Label>
              <span>Account Details</span>

              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />

              <Label as="a" color="blue" ribbon>
                Community
              </Label>
              <span>User Reviews</span>

              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <Label as="a" color="orange" ribbon="right">
                Specs
              </Label>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />

              <Label as="a" color="teal" ribbon="right">
                Reviews
              </Label>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
      <br />
      <br />

      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Segment padded>
              <Label attached="top">HTML</Label>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment padded>
              <Label attached="bottom">CSS</Label>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment padded>
              <Label attached="top right">Code</Label>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Label attached="top left">View</Label>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat magnam, accusantium et consequuntur necessitatibus,
                tempora saepe laudantium eligendi cumque facere officia quos
                quaerat nesciunt sit similique ab, dicta maxime quia!
              </p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment padded>
              <Label attached="bottom left">User View</Label>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment padded>
              <Label attached="bottom right">Admin View</Label>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <br />
      <br />
      <List divided selection>
        <List.Item>
          <Label color="red" horizontal>
            Fruit
          </Label>
          Kumquats
        </List.Item>
        <List.Item>
          <Label color="purple" horizontal>
            Candy
          </Label>
          Ice Cream
        </List.Item>
        <List.Item>
          <Label color="red" horizontal>
            Fruit
          </Label>
          Orange
        </List.Item>
        <List.Item>
          <Label horizontal>Dog</Label>
          Poodle
        </List.Item>
      </List>

      <br />
      <br />

      <Menu compact size="mini">
        <Menu.Item as="a">
          <Icon name="mail" /> Messages
          <Label color="red" floating>
            22
          </Label>
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="users" /> Friends
          <Label color="teal" floating>
            22
          </Label>
        </Menu.Item>
      </Menu>

      <br />
      <br />

      <Label>
        Dogs
        <Label.Detail>214</Label.Detail>
      </Label>

      <Label as="a">
        <Icon name="mail" />
        Mail
      </Label>
      <Label as="a">
        Tag
        <Icon name="delete" />
      </Label>

      <Label as="a" content="Mail" icon="mail" />

      <br />
      <br />

      <Label as="a">
        <Image
          // avatar
          spaced="right"
          src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
        />
        Elliot
      </Label>
      <Label as="a" image>
        <Image
          avatar
          spaced="right"
          src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
        />
        Elliot
      </Label>
      <Label as="a">
        <img
          src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
          alt=""
        />
        Stevie
      </Label>

      <Label
        as="a"
        content="Elliot"
        image={{
          avatar: true,
          spaced: 'right',
          src: 'https://react.semantic-ui.com/images/avatar/small/stevie.jpg',
        }}
      />

      <Label>
        <Icon name="mail" />
        23
        <Label.Detail>View Mail</Label.Detail>
      </Label>

      <br />
      <br />

      {colors.map((color: any, index: number) => (
        <Label circular color={color} key={color}>
          {index * index * index}
        </Label>
      ))}

      <br />
      <br />

      {colors.map((color: any) => (
        <Label circular color={color} empty key={color} />
      ))}

      <br />
      <br />

      <Label as="a" basic>
        Basic
      </Label>
      <Label as="a" basic pointing>
        Pointing
      </Label>
      <Label as="a" basic image>
        <img
          src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
          alt=""
        />
        Elliot
      </Label>
      <Label as="a" basic color="red" pointing>
        Red Pointing
      </Label>
      <Label as="a" basic color="blue">
        Blue
      </Label>

      <br />
      <br />

      {colors.map((color: any) => (
        <Label color={color} key={color}>
          {_.capitalize(color)}
        </Label>
      ))}

      <br />
      <br />

      <Label.Group size="mini" color="teal">
        <Label>Fun</Label>
        <Label>Happy</Label>
        <Label>Smart</Label>
        <Label>Witty</Label>
      </Label.Group>

      <br />
      <br />

      <Label.Group tag color="purple">
        <Label as="a" color="red">
          $10.00
        </Label>
        <Label as="a">$19.99</Label>
        <Label as="a">$24.99</Label>
        <Label as="a">$30.99</Label>
        <Label as="a">$10.25</Label>
      </Label.Group>

      <br />
      <br />
    </div>
  )
}

export default LabelDemo
