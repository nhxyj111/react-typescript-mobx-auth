import React from 'react'
import {
  Divider,
  Segment,
  Grid,
  Image,
  Form,
  Button,
  Input,
  Header,
  Icon,
  Table,
} from 'semantic-ui-react'

interface IProps {}

const DividerDemo: React.FC<IProps> = () => {
  return (
    <div>
      <Divider />

      <br />
      <br />
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <p>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </p>
            <p>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </p>
            <p>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </p>
            <p>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </p>
          </Grid.Column>
          <Grid.Column>
            <p>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </p>
            <p>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </p>
            <p>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </p>
            <p>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </p>
          </Grid.Column>
        </Grid>

        <Divider vertical>And</Divider>
      </Segment>

      <br />
      <br />
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Username"
                placeholder="Username"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
              />

              <Button content="Login" primary />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Button content="Sign up" icon="signup" size="big" />
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>

      <br />
      <br />
      <Segment basic textAlign="center">
        <Input
          action={{ color: 'blue', content: 'Search' }}
          icon="search"
          iconPosition="left"
          placeholder="Order #"
        />

        <Divider horizontal>Or</Divider>

        <Button
          color="teal"
          content="Create New Order"
          icon="add"
          labelPosition="left"
        />
      </Segment>

      <br />
      <br />
      <Divider horizontal>
        <Header as="h4">
          <Icon name="tag" />
          Description
        </Header>
      </Divider>

      <p>
        Doggie treats are good for all times of the year. Proven to be eaten by
        99.9% of all dogs worldwide.
      </p>

      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={2}>Size</Table.Cell>
            <Table.Cell>1" x 2"</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Weight</Table.Cell>
            <Table.Cell>6 ounces</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Color</Table.Cell>
            <Table.Cell>Yellowish</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Odor</Table.Cell>
            <Table.Cell>Not Much Usually</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <br />
      <br />
      <Segment inverted>
        <Divider inverted />
        <Divider horizontal inverted>
          Horizontal
        </Divider>
      </Segment>

      <br />
      <br />
      <Segment>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
        Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        <Divider fitted />
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
        Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        <Divider />
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
        Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </Segment>

      <br />
      <br />
      <Segment>
        <Header as="h3">Section One</Header>
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />

        <Divider hidden />

        <Header as="h3">Section Two</Header>
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>

      <br />
      <br />
      <Segment>
        <Header as="h3">Section One</Header>
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />

        <Divider section />

        <Header as="h3">Section Two</Header>
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>

      <br />
      <br />
      <Segment>
        <Header as="h2" floated="right">
          Floated Content
        </Header>

        <Divider clearing />
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    </div>
  )
}

export default DividerDemo
