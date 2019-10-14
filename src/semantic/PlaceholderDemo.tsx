import React, { useState, useEffect } from 'react'
import {
  Placeholder,
  Grid,
  Segment,
  Card,
  Button,
  Image as SemanticImage,
} from 'semantic-ui-react'
import _ from 'lodash'

const cards = [
  {
    avatar: 'https://react.semantic-ui.com/images/avatar/large/helen.jpg',
    date: 'Joined in 2013',
    header: 'Helen',
    description: 'Primary Contact',
  },
  {
    avatar: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    date: 'Joined in 2013',
    header: 'Matthew',
    description: 'Primary Contact',
  },
  {
    avatar: 'https://react.semantic-ui.com/images/avatar/large/molly.png',
    date: 'Joined in 2013',
    header: 'Molly',
    description: 'Primary Contact',
  },
]

interface IProps {}

interface ICard {
  avatar: ImageData
  date: string
  header: string
  description: string
}

const PlaceholderDemo: React.FC<IProps> = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    for (const card of cards) {
      const img = new Image()
      img.src = card.avatar
      img.onload = () => {
        setCount(prev => prev + 1)
      }
    }
  }, [])

  useEffect(() => {
    if (count === cards.length) {
      setLoading(false)
    }
  }, [count])

  return (
    <div>
      <br />
      <br />
      <Placeholder>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>

      <br />
      <br />

      <Grid columns={3} stackable>
        <Grid.Column>
          <Segment>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
      </Grid>

      <br />
      <br />

      <Card.Group doubling itemsPerRow={3} stackable>
        {_.map(cards, card => (
          <Card key={card.header}>
            {loading ? (
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
            ) : (
              <SemanticImage src={card.avatar} />
            )}

            <Card.Content>
              {loading ? (
                <Placeholder>
                  <Placeholder.Header>
                    <Placeholder.Line length="very short" />
                    <Placeholder.Line length="medium" />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length="short" />
                  </Placeholder.Paragraph>
                </Placeholder>
              ) : (
                <>
                  <Card.Header>{card.header}</Card.Header>
                  <Card.Meta>{card.date}</Card.Meta>
                  <Card.Description>{card.description}</Card.Description>
                </>
              )}
            </Card.Content>

            <Card.Content extra>
              <Button disabled={loading} primary>
                Add
              </Button>
              <Button disabled={loading}>Delete</Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>

      <br />
      <br />

      <Placeholder style={{ height: 250, width: 250 }}>
        <Placeholder.Image />
      </Placeholder>

      <Card.Group itemsPerRow={3}>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image rectangular />
            </Placeholder>
          </Card.Content>
        </Card>
      </Card.Group>

      <br />
      <br />

      <Placeholder>
        <Placeholder.Line length="full" />
        <Placeholder.Line length="very long" />
        <Placeholder.Line length="long" />
        <Placeholder.Line length="medium" />
        <Placeholder.Line length="short" />
        <Placeholder.Line length="very short" />
      </Placeholder>

      <br />
      <br />

      <Placeholder fluid>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>

      <br />
      <br />
    </div>
  )
}

export default PlaceholderDemo
