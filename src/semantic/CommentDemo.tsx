import React, { useState } from 'react'
import {
  Header,
  Container,
  Comment,
  Form,
  Button,
  Icon,
  Checkbox,
} from 'semantic-ui-react'

const comments = [
  {
    avatar: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
    name: 'Matt',
    date: 'Today at 5:42PM',
    text: 'How artistic!',
    reply: [],
  },
  {
    avatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
    name: 'Elliot Fu',
    date: 'Yesterday at 12:30AM',
    text: 'This has been very useful for my research. Thanks as well!',
    reply: [
      {
        avatar: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
        name: 'Jenny Hess',
        date: 'Just now',
        text: 'Elliot you are always so right :)',
        reply: [],
      },
    ],
  },
  {
    avatar: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg',
    name: 'Joe Henderson',
    date: '5 days ago',
    text: 'Dude, this is awesome. Thanks so much',
    reply: [],
  },
]

interface IComment {
  avatar: string
  name: string
  date: string
  text: string
  reply: IComment[]
}

const C: React.SFC<{ item: IComment }> = ({
  item: { avatar, name, date, text, reply },
}) => (
  <Comment>
    <Comment.Avatar src={avatar} />
    <Comment.Content>
      <Comment.Author as="a">{name}</Comment.Author>
      <Comment.Metadata>
        <div>{date}</div>
      </Comment.Metadata>
      <Comment.Text>{text}</Comment.Text>
      <Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
      </Comment.Actions>
    </Comment.Content>
    {reply.length > 0 && (
      <Comment.Group>
        {reply.map((c, index) => (
          <C item={c} key={`${name}-${index}`} />
        ))}
      </Comment.Group>
    )}
  </Comment>
)

interface IProps {}

const CommentDemo: React.FC<IProps> = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  return (
    <Container>
      <Header>Comment</Header>
      <Comment.Group threaded>
        <Header as="h3" dividing>
          Comments
        </Header>
        {comments.map(c => (
          <C item={c} key={c.name} />
        ))}
      </Comment.Group>

      <Form reply>
        <Form.TextArea />
        <Button content="Add Reply" labelPosition="left" icon="edit" primary />
      </Form>
      <br />
      <br />
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
          <Comment.Content>
            <Comment.Author as="a">Elliot Fu</Comment.Author>
          </Comment.Content>
        </Comment>
      </Comment.Group>

      <br />
      <br />
      <Comment.Group>
        <Comment>
          <Comment.Avatar
            as="a"
            src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
          />
          <Comment.Content>
            <Comment.Author as="span">Stevie Feliciano</Comment.Author>
            <Comment.Metadata>
              <div>2 days ago</div>
              <div>
                <Icon name="star" />5 Faves
              </div>
            </Comment.Metadata>
            <Comment.Text>
              Hey guys, I hope this example comment is helping you read this
              documentation.
            </Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>

      <br />
      <br />
      <Comment.Group>
        <Comment>
          <Comment.Avatar
            as="a"
            src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
          />
          <Comment.Content>
            <Comment.Author>Tom Lukic</Comment.Author>
            <Comment.Text>
              This will be great for business reports. I will definitely
              download this.
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
              <Comment.Action>Save</Comment.Action>
              <Comment.Action>Hide</Comment.Action>
              <Comment.Action>
                <Icon name="expand" />
                Full-screen
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>

      <br />
      <br />
      <Comment.Group>
        <Comment>
          <Comment.Avatar
            as="a"
            src="https://react.semantic-ui.com/images/avatar/small/steve.jpg"
          />
          <Comment.Content>
            <Comment.Author as="a">Steve Jobes</Comment.Author>
            <Comment.Metadata>
              <div>2 days ago</div>
            </Comment.Metadata>
            <Comment.Text>Revolutionary!</Comment.Text>
            <Comment.Actions>
              <Comment.Action active>Reply</Comment.Action>
            </Comment.Actions>
            <Form reply>
              <Form.TextArea />
              <Button
                content="Add Reply"
                labelPosition="left"
                icon="edit"
                primary
              />
            </Form>
          </Comment.Content>
        </Comment>
      </Comment.Group>

      <br />
      <Header>
        Collapsed
        <Header.Subheader>
          Comments can be collapsed, or hidden from view.
        </Header.Subheader>
      </Header>

      <br />
      <br />
      <div>
        <Checkbox
          defaultChecked
          label="Collapse comments"
          onChange={() => setCollapsed(!collapsed)}
        />

        <Comment.Group>
          <Comment>
            <Comment.Avatar
              as="a"
              src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
            />
            <Comment.Content>
              <Comment.Author as="a">Christian Rocha</Comment.Author>
              <Comment.Metadata>
                <span>2 days ago</span>
              </Comment.Metadata>
              <Comment.Text>
                I'm very interested in this motherboard. Do you know if it'd
                work in a Intel LGA775 CPU socket?
              </Comment.Text>
              <Comment.Actions>
                <a href="/">Reply</a>
              </Comment.Actions>
            </Comment.Content>

            <Comment.Group collapsed={collapsed}>
              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Elliot Fu</Comment.Author>
                  <Comment.Metadata>
                    <span>1 day ago</span>
                  </Comment.Metadata>
                  <Comment.Text>No, it wont</Comment.Text>
                  <Comment.Actions>
                    <a href="/">Reply</a>
                  </Comment.Actions>
                </Comment.Content>

                <Comment.Group>
                  <Comment>
                    <Comment.Avatar
                      as="a"
                      src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
                    />
                    <Comment.Content>
                      <Comment.Author as="a">Jenny Hess</Comment.Author>
                      <Comment.Metadata>
                        <span>20 minutes ago</span>
                      </Comment.Metadata>
                      <Comment.Text>Maybe it would.</Comment.Text>
                      <Comment.Actions>
                        <a href="/">Reply</a>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>
            </Comment.Group>
          </Comment>
        </Comment.Group>
      </div>

      <br />
      <br />

      <Comment.Group size="mini" minimal>
        <Header as="h3" dividing>
          Mini Comments
        </Header>

        <Comment>
          <Comment.Avatar
            as="a"
            src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
          />
          <Comment.Content>
            <Comment.Author as="a">Matt</Comment.Author>
            <Comment.Metadata>
              <span>Today at 5:42PM</span>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
              <a href="/">Reply</a>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
        <Comment>
          <Comment.Avatar
            as="a"
            src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
          />
          <Comment.Content>
            <Comment.Author as="a">Joe Henderson</Comment.Author>
            <Comment.Metadata>
              <span>5 days ago</span>
            </Comment.Metadata>
            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
            <Comment.Actions>
              <a href="/">Reply</a>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Container>
  )
}

export default CommentDemo
