import React from 'react'
import { Container, Header, Feed, Icon } from 'semantic-ui-react'

const events = [
  {
    date: '1 Hour Ago',
    image: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
    meta: '4 Likes',
    summary: 'Elliot Fu added you as a friend',
  },
  {
    date: '4 days ago',
    image: 'https://react.semantic-ui.com/images/avatar/small/helen.jpg',
    meta: '1 Like',
    summary: 'Helen Troy added 2 new illustrations',
    extraImages: [
      'https://react.semantic-ui.com/images/wireframe/image.png',
      'https://react.semantic-ui.com/images/wireframe/image-text.png',
    ],
  },
  {
    date: '3 days ago',
    image: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg',
    meta: '8 Likes',
    summary: 'Joe Henderson posted on his page',
    extraText:
      "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
  },
  {
    date: '4 days ago',
    image: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg',
    meta: '41 Likes',
    summary: 'Justen Kitsune added 2 new photos of you',
    extraText:
      'Look at these fun pics I found from a few years ago. Good times.',
    extraImages: [
      'https://react.semantic-ui.com/images/wireframe/image.png',
      'https://react.semantic-ui.com/images/wireframe/image-text.png',
    ],
  },
]

const feeds = [
  {
    avatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
    name: 'Elliot Fu',
    msg: 'added you as a friend',
    date: '1 Hour Ago',
    text: '',
    images: [],
    likes: 4,
  },
  {
    avatar: 'https://react.semantic-ui.com/images/avatar/small/helen.jpg',
    name: 'Helen Troy',
    msg: 'added 2 new illustrations',
    date: '4 days ago',
    text: '',
    images: [
      'https://react.semantic-ui.com/images/wireframe/image.png',
      'https://react.semantic-ui.com/images/wireframe/image.png',
    ],
    likes: 1,
  },
  {
    avatar: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
    name: 'Jenny Hess',
    msg: 'add you as a friend',
    date: '2 days Ago',
    text: '',
    images: [],
    likes: 8,
  },
  {
    avatar: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg',
    name: 'Joe Henderson',
    msg: 'posted on his page',
    date: '1 Hour Ago',
    text: `
    Ours is a life of constant reruns. We're always circling back to where
          we'd we started, then starting all over again. Even if we don't run
          extra laps that day, we surely will come back for more of the same
          another day soon.
    `,
    images: [],
    likes: 5,
  },
]

interface IFeedEvent {
  avatar: string
  name: string
  msg: string
  date: string
  text?: string
  images: string[]
  likes: number
}

const FeedEvent: React.SFC<{ feed: IFeedEvent }> = ({
  feed: { avatar, name, msg, text, images, likes, date },
}) => (
  <Feed.Event>
    <Feed.Label image={avatar} />
    <Feed.Content>
      <Feed.Summary>
        <a href="/">{name}</a> {msg}
        <Feed.Date>{date}</Feed.Date>
      </Feed.Summary>
      {text && <Feed.Extra text>{text}</Feed.Extra>}
      {images.length > 0 && (
        <Feed.Extra images>
          {images.map((img, index) => (
            <a href="/" key={index}>
              <img src={img} alt="" />
            </a>
          ))}
        </Feed.Extra>
      )}
      <Feed.Meta>
        <Feed.Like>
          <Icon name="like" />
          {likes} Like
        </Feed.Like>
      </Feed.Meta>
    </Feed.Content>
  </Feed.Event>
)

interface IProps {}

const FeedDemo: React.FC<IProps> = () => {
  return (
    <Container>
      <Header>Feed</Header>
      <Feed>
        {feeds.map((feed, index) => (
          <FeedEvent feed={feed} key={index} />
        ))}
      </Feed>

      <br />
      <br />
      <br />
      <Feed events={events} />
    </Container>
  )
}

export default FeedDemo
