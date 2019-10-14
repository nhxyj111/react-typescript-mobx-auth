import React from 'react'
import {
  Container,
  Header,
  Card,
  Icon,
  Image,
  Button,
  Feed,
} from 'semantic-ui-react'

const src = 'https://react.semantic-ui.com/images/wireframe/image.png'

const items = [
  {
    header: 'Project Report - April',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  },
  {
    header: 'Project Report - May',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: 'Project Report - June',
    description:
      'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
  },
]

interface IProps {}

const CardDemo: React.FC<IProps> = () => {
  return (
    <Container>
      <Header>Card</Header>
      <Card>
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="/#">
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
        <Card.Content>
          <Button>test</Button>
        </Card.Content>
      </Card>
      <br />
      <Card
        image="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
        header="Elliot Baker"
        meta="Friend"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        extra={
          <a href="/#">
            <Icon name="user" />
            16 Friends
          </a>
        }
      />
      <br />
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />
          <Card.Header>Steve Sanders</Card.Header>
          <Card.Meta>Friends of Elliot</Card.Meta>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group fluid>
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </Button.Group>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
      <br />
      <Card.Group items={items} />
      <Header>
        Content Block
        <Header.Subheader>A card contains blocks of content.</Header.Subheader>
      </Header>
      <Card>
        <Card.Content>
          <Card.Header>Recent Activity</Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
              <Feed.Content>
                <Feed.Date content="1 day ago" />
                <Feed.Summary>
                  You added <a href="/">Jenny Hess</a> to your{' '}
                  <a href="/">coworker</a> group.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/molly.png" />
              <Feed.Content>
                <Feed.Date content="3 days ago" />
                <Feed.Summary>
                  You added <a href="/">Molly Malone</a> as a friend.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
              <Feed.Content>
                <Feed.Date content="4 days ago" />
                <Feed.Summary>
                  You added <a href="/">Elliot Baker</a> to your{' '}
                  <a href="/">musicians</a> group.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
      <br />
      <Card
        href="#card-example-link-card"
        header="Elliot Baker"
        meta="Friend"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
      />
      <br />
      <Card fluid color="red" header="Option 1" />
      <Card
        color="purple"
        image="https://react.semantic-ui.com/images/wireframe/white-image.png"
      />

      <Card.Group itemsPerRow={6}>
        <Card raised image={src} />
        <Card raised image={src} />
        <Card raised image={src} />
        <Card raised image={src} />
        <Card raised image={src} />
        <Card raised image={src} />
        <Card raised image={src} />
        <Card raised image={src} />
        <Card raised image={src} />
        <Card raised image={src} />
        <Card raised image={src} />
        <Card raised image={src} />
      </Card.Group>

      <br />
      <br />
    </Container>
  )
}

export default CardDemo
