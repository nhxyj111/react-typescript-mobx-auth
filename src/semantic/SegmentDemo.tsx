import React from 'react'
import {
  Segment,
  Header,
  Icon,
  Button,
  Grid,
  Divider,
  Search,
  Placeholder,
  Message,
  Container,
} from 'semantic-ui-react'

const square = { width: 175, height: 175 }

interface IProps {}

const SegmentDemo: React.FC<IProps> = () => {
  return (
    <div>
      <br />
      <br />

      <Segment>Pellentesque habitant morbi tristique senectus.</Segment>

      <br />
      <br />

      <Segment placeholder>
        <Header icon>
          <Icon name="file pdf outline" />
          No documents are listed for this customer.
        </Header>
        <Button primary>Add Document</Button>
      </Segment>

      <br />
      <br />
      <Segment placeholder>
        <Header icon>
          <Icon name="search" />
          We don't have any documents matching your query.
        </Header>
        <Segment.Inline>
          <Button primary>Clear Query</Button>
          <Button>Add Document</Button>
        </Segment.Inline>
      </Segment>

      <br />
      <br />

      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header icon>
                <Icon name="search" />
                Find Country
              </Header>

              <Search placeholder="Search countries..." />
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name="world" />
                Add New Country
              </Header>
              <Button primary>Create</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <br />
      <br />
      <Segment raised>Pellentesque habitant morbi tristique senectus.</Segment>
      <br />
      <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
      <br />
      <Segment stacked>Pellentesque habitant morbi tristique senectus.</Segment>
      <br />
      <Segment piled>Pellentesque habitant morbi tristique senectus.</Segment>

      <br />
      <br />
      <Segment vertical>
        Te eum doming eirmod, nominati pertinacia argumentum ad his.
      </Segment>
      <Segment vertical>
        Pellentesque habitant morbi tristique senectus.
      </Segment>
      <Segment vertical>
        Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.
      </Segment>

      <br />
      <br />
      <Segment.Group>
        <Segment>Top</Segment>
        <Segment>Middle</Segment>
        <Segment>Middle</Segment>
        <Segment>Middle</Segment>
        <Segment>Bottom</Segment>
      </Segment.Group>

      <br />
      <br />

      <Segment.Group size="mini">
        <Segment>Top</Segment>
        <Segment.Group>
          <Segment>Nested Top</Segment>
          <Segment>Nested Middle</Segment>
          <Segment>Nested Bottom</Segment>
        </Segment.Group>
        <Segment.Group horizontal>
          <Segment>Top</Segment>
          <Segment>Middle</Segment>
          <Segment>Bottom</Segment>
        </Segment.Group>
        <Segment>Bottom</Segment>
      </Segment.Group>

      <br />
      <br />

      <Segment.Group raised>
        <Segment>Left</Segment>
        <Segment>Middle</Segment>
        <Segment>Right</Segment>
      </Segment.Group>

      <br />
      <br />

      <Segment loading>
        <Placeholder>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder>
      </Segment>

      <br />
      <br />

      <Container>
        <Segment attached="top">This segment is on top</Segment>
        <Segment attached>This segment is attached on both sides</Segment>
        <Segment attached="bottom">This segment is on bottom</Segment>

        <Header as="h5" attached="top">
          Dogs
        </Header>
        <Segment attached>Dogs are one type of animal.</Segment>
        <Header as="h5" attached>
          Cats
        </Header>
        <Segment attached>
          Cats are thought of as being related to dogs, but only humans think
          this.
        </Segment>
        <Header as="h5" attached>
          Lions
        </Header>
        <Segment attached>
          Humans don't think of lions as being like cats, but they are.
        </Segment>
        <Message warning attached="bottom">
          <Icon name="warning" />
          You've reached the end of this content segment!
        </Message>
      </Container>

      <br />
      <br />

      <Container>
        <Segment padded>Padded content.</Segment>
        <Segment padded="very">Very padded content.</Segment>
        <Segment compact>Compact content.</Segment>
        <Segment.Group compact>
          <Segment>Pellentesque habitant morbi</Segment>
          <Segment>Pellentesque habitant morbi</Segment>
        </Segment.Group>
      </Container>

      <br />
      <br />

      <Container>
        <Segment color="red">Red</Segment>
        <Segment color="orange">Orange</Segment>
        <Segment color="yellow">Yellow</Segment>
        <Segment color="olive">Olive</Segment>
        <Segment color="green">Green</Segment>
        <Segment inverted color="teal">
          Teal
        </Segment>
        <Segment color="blue">Blue</Segment>
        <Segment color="violet">Violet</Segment>
        <Segment inverted color="purple">
          Purple
        </Segment>
        <Segment color="pink">Pink</Segment>
        <Segment color="brown">Brown</Segment>
        <Segment color="grey">Grey</Segment>
        <Segment color="black">Black</Segment>
      </Container>

      <br />
      <br />

      <Container>
        <Segment>
          I'm here to tell you something, and you will probably read me first.
        </Segment>
        <Segment secondary>
          I am pretty noticeable but you might check out other content before
          you look at me.
        </Segment>
        <Segment tertiary>
          If you notice me you must be looking very hard.
        </Segment>

        <Segment inverted>
          I'm here to tell you something, and you will probably read me first.
        </Segment>
        <Segment inverted secondary>
          I am pretty noticeable but you might check out other content before
          you look at me.
        </Segment>
        <Segment inverted tertiary>
          If you notice me you must be looking very hard.
        </Segment>

        <Segment inverted color="red">
          I'm here to tell you something, and you will probably read me first.
        </Segment>
        <Segment inverted color="red" secondary>
          I am pretty noticeable but you might check out other content before
          you look at me.
        </Segment>
        <Segment inverted color="red" tertiary>
          If you notice me you must be looking very hard.
        </Segment>
      </Container>

      <br />
      <br />

      <Container>
        <Segment circular style={square}>
          <Header as="h2">
            Sale!
            <Header.Subheader>$10.99</Header.Subheader>
          </Header>
        </Segment>
        <Segment circular inverted style={square}>
          <Header as="h2" inverted>
            Buy Now
            <Header.Subheader>$10.99</Header.Subheader>
          </Header>
        </Segment>
      </Container>

      <br />
      <br />

      <Segment clearing>
        <Button content="Test" />
        <Button floated="right">floated</Button>
      </Segment>

      <br />
      <br />

      <Container>
        <Segment floated="left">This segment will appear to the left</Segment>
        <Segment floated="right">This segment will appear to the right</Segment>
      </Container>

      <br />
      <br />

      <Container>
        <Segment textAlign="right">Right aligned content.</Segment>
        <Segment textAlign="left">Left aligned content.</Segment>
        <Segment textAlign="center">Center aligned content.</Segment>
      </Container>

      <br />
      <br />

      <Container>
        <Segment basic>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </Segment>
      </Container>
    </div>
  )
}

export default SegmentDemo
