import React, { useRef, useState } from 'react'
import {
  Container,
  Popup,
  Header,
  Button,
  Image,
  Card,
  Rating,
  Grid,
  Icon,
  Placeholder,
  Input,
} from 'semantic-ui-react'
import faker from 'faker'

interface IProps {}

const PopupDemo: React.FC<IProps> = () => {
  const [data, setData] = useState<any>(null)
  const timer = useRef<number>(0)
  const strongRef = useRef<HTMLElement>(null)

  return (
    <Container>
      <Header>Popup</Header>
      <Popup content="Add users to your feed" trigger={<Button icon="add" />} />

      <Header>An element can specify popup content with a header. </Header>
      <Popup
        content="Elliot has been a member since July 2012"
        // key="Elliot Fu"
        header="Elliot Fu"
        trigger={
          <Image
            src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
            avatar
          />
        }
      />

      <Header>A trigger can be complex element. </Header>
      <Popup
        trigger={
          <Card>
            <Image src="https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg" />
            <Card.Content>
              <Card.Header>My Neighbor Totoro</Card.Header>
              <Card.Description>
                Two sisters move to the country with their father in order to be
                closer to their hospitalized mother, and discover the
                surrounding trees are inhabited by magical spirits.
              </Card.Description>
            </Card.Content>
          </Card>
        }
      >
        <Popup.Header>User Rating</Popup.Header>
        <Popup.Content>
          <Rating icon="star" defaultRating={3} maxRating={4} />
        </Popup.Content>
      </Popup>

      <Header>
        Disables automatic repositioning of the component, it will always be
        placed according to the position value.
      </Header>
      <Popup
        content="I will not flip!"
        on="click"
        pinned
        trigger={<Button content="Button" />}
      />

      <Header>Basic</Header>
      <Popup
        trigger={<Button icon="add" />}
        content="The default theme's basic popup removes the pointing arrow."
        basic
      />

      <Header>Position</Header>
      <Grid columns={3} style={{ width: '600px' }}>
        <Grid.Row>
          <Grid.Column>
            <Popup
              trigger={<Icon name="heart" color="red" size="large" circular />}
              content="I am positioned to the top left"
              position="top left"
            />
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Popup
              trigger={<Icon name="heart" color="red" size="large" circular />}
              content="I am positioned to the top center"
              position="top center"
            />
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Popup
              trigger={<Icon name="heart" color="red" size="large" circular />}
              content="I am positioned to the top right"
              position="top right"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column floated="left">
            <Popup
              trigger={<Icon name="heart" color="red" size="large" circular />}
              content="I am positioned to the left center"
              position="left center"
            />
          </Grid.Column>
          <Grid.Column floated="right" textAlign="right">
            <Popup
              trigger={<Icon name="heart" color="red" size="large" circular />}
              content="I am positioned to the right center"
              position="right center"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Popup
              trigger={<Icon name="heart" color="red" size="large" circular />}
              content="I am positioned to the bottom left"
              position="bottom left"
            />
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Popup
              trigger={<Icon name="heart" color="red" size="large" circular />}
              content="I am positioned to the bottom center"
              position="bottom center"
            />
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Popup
              trigger={<Icon name="heart" color="red" size="large" circular />}
              content="I am positioned to the bottom right"
              position="bottom right"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Header>
        A popup can have no maximum width and continue to flow to fit its
        content.
      </Header>
      <Popup
        size="huge"
        trigger={<Button>Show flowing popup</Button>}
        flowing
        hoverable
      >
        <Grid centered divided columns={3}>
          <Grid.Column textAlign="center">
            <Header as="h4">Basic Plan</Header>
            <p>
              <b>2</b> projects, $10 a month
            </p>
            <Button>Choose</Button>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Header as="h4">Business Plan</Header>
            <p>
              <b>5</b> projects, $20 a month
            </p>
            <Button>Choose</Button>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Header as="h4">Premium Plan</Header>
            <p>
              <b>8</b> projects, $25 a month
            </p>
            <Button>Choose</Button>
          </Grid.Column>
        </Grid>
      </Popup>

      <Header>Wide</Header>
      <Popup inverted trigger={<Icon circular name="heart" />}>
        Hello. This is a regular pop-up which does not allow for lots of
        content. You cannot fit a lot of words here as the paragraphs will be
        pretty narrow.
      </Popup>
      <Popup
        style={{ opacity: 0.5 }}
        trigger={<Icon circular name="heart" />}
        wide
      >
        Hello. This is a wide pop-up which allows for lots of content with
        additional space. You can fit a lot of words here and the paragraphs
        will be pretty wide.
      </Popup>
      <Popup trigger={<Icon circular name="heart" />} wide="very">
        Hello. This is a very wide pop-up which allows for lots of content with
        additional space. You can fit a lot of words here and the paragraphs
        will be pretty wide.
      </Popup>

      <Header>Offset</Header>
      <Popup
        trigger={<Icon size="large" name="heart" circular />}
        content="Way off to the left"
        offset="-50px, 50px"
        position="left center"
      />

      <Header>Popper Dependencies </Header>
      <Popup
        on="click"
        onClose={() => {
          setData(null)
          clearTimeout(timer.current)
        }}
        onOpen={() => {
          setData(null)

          timer.current = setTimeout(() => {
            setData({
              description: faker.lorem.sentences(5),
              name: faker.name.firstName(),
              title: faker.name.title(),
            })
          }, 2000)
        }}
        popperDependencies={[!!data]}
        trigger={<Button content="Simulate loading" icon="lab" />}
        wide
      >
        {data === null ? (
          <Placeholder style={{ minWidth: '200px' }}>
            <Placeholder.Header>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line length="medium" />
              <Placeholder.Line length="short" />
            </Placeholder.Paragraph>
          </Placeholder>
        ) : (
          <>
            <Header as="h2" content={data.name} subheader={data.title} />
            <p>{data.description}</p>
          </>
        )}
      </Popup>

      <Header>Actions</Header>
      <Grid columns={1}>
        <Grid.Column>
          <Popup
            trigger={<Button icon="add" content="Add a friend" />}
            content="Sends an email invite to a friend."
            on="hover"
          />
          <Popup
            trigger={
              <Button
                color="red"
                icon="flask"
                content="Activate doomsday device"
              />
            }
            content={<Button color="green" content="Confirm the launch" />}
            on="click"
            position="top right"
          />
          <Popup
            trigger={<Input icon="search" placeholder="Search..." />}
            header="Movie Search"
            content="You may search by genre, header, year and actors"
            on="focus"
          />
        </Grid.Column>
        <Grid.Column>
          <Popup
            trigger={<Button>Click me or Hover me</Button>}
            header="Movie Search"
            content="Multiple events can trigger a popup"
            on={['hover', 'click']}
          />
        </Grid.Column>
      </Grid>

      <Header>Nested</Header>
      <Popup wide trigger={<Button content="Are you the one?" />} on="click">
        <Grid divided columns="equal">
          <Grid.Column>
            <Popup
              trigger={<Button color="blue" content="Blue Pill" fluid />}
              content="The story ends. You wake up in your bed and believe whatever you want to believe."
              position="top center"
              size="tiny"
              inverted
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              trigger={<Button color="red" content="Red Pill" fluid />}
              content="Stay in Wonderland, and I show you how deep the rabbit hole goes."
              position="top center"
              size="tiny"
              inverted
            />
          </Grid.Column>
        </Grid>
      </Popup>

      <Header>A popup can open over a DOM node when using a trigger. </Header>
      <>
        <Popup
          trigger={<Button content="Trigger Popup" />}
          context={strongRef}
          content="Hello"
          position="top center"
        />
        ---------->
        <strong ref={strongRef}>here</strong>
      </>

      <Header>Default Open </Header>
      <Popup
        content="Hello"
        open
        position="top center"
        trigger={<Button content="Already Open" />}
      />

      <Header>Delay</Header>
      <Popup
        content="Popup will hide in 500ms after leaving mouse."
        mouseEnterDelay={1500}
        mouseLeaveDelay={1500}
        on="hover"
        trigger={<Button>Open After 500ms</Button>}
      />
    </Container>
  )
}

export default PopupDemo
