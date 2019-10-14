import React from 'react'
import { Divider, List, Image, Segment, Button } from 'semantic-ui-react'

interface IProps {}

const ListDemo: React.FC<IProps> = () => {
  return (
    <div>
      <Divider />
      <List>
        <List.Item>Apples</List.Item>
        <List.Item>Pears</List.Item>
        <List.Item>Oranges</List.Item>
      </List>
      <Divider />
      <List items={['Apples', 'Pears', 'Oranges']} />

      <Divider />
      <List>
        <List.Item>
          <List.Icon name="users" />
          <List.Content>Semantic UI</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>New York, NY</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content>
            <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="http://www.semantic-ui.com">semantic-ui.com</a>
          </List.Content>
        </List.Item>
      </List>
      <Divider />
      <List>
        <List.Item icon="users" content="Semantic UI" />
        <List.Item icon="marker" content="New York, NY" />
        <List.Item
          icon="mail"
          content={
            <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
          }
        />
        <List.Item
          icon="linkify"
          content={<a href="http://www.semantic-ui.com">semantic-ui.com</a>}
        />
      </List>
      <Divider />
      <List divided relaxed>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
            <List.Description as="a">Updated 10 mins ago</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">Semantic-Org/Semantic-UI-Docs</List.Header>
            <List.Description as="a">Updated 22 mins ago</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">Semantic-Org/Semantic-UI-Meteor</List.Header>
            <List.Description as="a">Updated 34 mins ago</List.Description>
          </List.Content>
        </List.Item>
      </List>

      <Divider />

      <List>
        <List.Item>
          <List.Icon name="folder" />
          <List.Content>
            <List.Header>src</List.Header>
            <List.Description>Source files for project</List.Description>
            <List.List>
              <List.Item>
                <List.Icon name="folder" />
                <List.Content>
                  <List.Header>site</List.Header>
                  <List.Description>Your site's theme</List.Description>
                </List.Content>
              </List.Item>
            </List.List>
          </List.Content>
        </List.Item>
      </List>

      <Divider />

      <List bulleted>
        <List.Item>Gaining Access</List.Item>
        <List.Item>Inviting Friends</List.Item>
        <List.Item>
          Benefits
          <List.List>
            <List.Item href="#">Link to somewhere</List.Item>
            <List.Item>Rebates</List.Item>
            <List.Item>Discounts</List.Item>
          </List.List>
        </List.Item>
        <List.Item>Warranty</List.Item>
      </List>

      <Divider />

      <List bulleted horizontal>
        <List.Item as="a">About Us</List.Item>
        <List.Item as="a">Sitemap</List.Item>
        <List.Item as="a">Contact</List.Item>
      </List>

      <Divider />

      <List ordered>
        <List.Item as="a">Getting Started</List.Item>
        <List.Item as="a">Introduction</List.Item>
        <List.Item>
          <a href="/#">Languages</a>
          <List.List>
            <List.Item as="a">HTML</List.Item>
            <List.Item as="a">Javascript</List.Item>
            <List.Item as="a">CSS</List.Item>
          </List.List>
        </List.Item>
        <List.Item as="a">Review</List.Item>
      </List>

      <Divider />

      <List as="ol">
        <List.Item as="li" value="*">
          Signing Up
        </List.Item>
        <List.Item as="li" value="*">
          User Benefits
        </List.Item>
        <List.Item as="li" value="*">
          User Types
          <List.Item as="ol">
            <List.Item as="li" value="-">
              Admin
            </List.Item>
            <List.Item as="li" value="-">
              Power User
            </List.Item>
            <List.Item as="li" value="-">
              Regular User
            </List.Item>
          </List.Item>
        </List.Item>
        <List.Item as="li" value="*">
          Deleting Your Account
        </List.Item>
      </List>

      <Divider />

      <List link>
        <List.Item active>Home</List.Item>
        <List.Item as="a">About</List.Item>
        <List.Item as="a">Jobs</List.Item>
        <List.Item as="a">Team</List.Item>
      </List>

      <Divider />

      <List>
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
          />
          <List.Content>
            <List.Header as="a">Rachel</List.Header>
            <List.Description>
              Last seen watching{' '}
              <a href="/#">
                <b>Arrested Development</b>
              </a>{' '}
              just now.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
          />
          <List.Content>
            <List.Header as="a">Lindsay</List.Header>
            <List.Description>
              Last seen watching{' '}
              <a href="/#">
                <b>Bob's Burgers</b>
              </a>{' '}
              10 hours ago.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
          />
          <List.Content>
            <List.Header as="a">Matthew</List.Header>
            <List.Description>
              Last seen watching{' '}
              <a href="/#">
                <b>The Godfather Part 2</b>
              </a>{' '}
              yesterday.
            </List.Description>
          </List.Content>
        </List.Item>
      </List>

      <Divider />

      <List>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>
            <List.Header as="a">Krowlewskie Jadlo</List.Header>
            <List.Description>
              An excellent polish restaurant, quick delivery and hearty, filling
              meals.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>
            <List.Header as="a">Xian Famous Foods</List.Header>
            <List.Description>
              A taste of Shaanxi's delicious culinary traditions, with delights
              like spicy cold noodles and lamb burgers.
            </List.Description>
          </List.Content>
        </List.Item>
      </List>

      <Divider />

      <List horizontal ordered>
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/tom.jpg"
          />
          <List.Content>
            <List.Header>Tom</List.Header>
            Top Contributor
          </List.Content>
        </List.Item>
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
          />
          <List.Content>
            <List.Header>Christian Rocha</List.Header>
            Admin
          </List.Content>
        </List.Item>
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
          />
          <List.Content>
            <List.Header>Matt</List.Header>
            Top Rated User
          </List.Content>
        </List.Item>
      </List>

      <Divider />

      <List bulleted horizontal link>
        <List.Item as="a">Terms and Conditions</List.Item>
        <List.Item as="a">Privacy Policy</List.Item>
        <List.Item as="a">Contact Us</List.Item>
      </List>

      <Divider />

      <Segment inverted>
        <List divided inverted relaxed>
          <List.Item>
            <List.Content>
              <List.Header>Snickerdoodle</List.Header>
              An excellent companion
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Poodle</List.Header>A poodle, its pretty basic
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Paulo</List.Header>
              He's also a dog
            </List.Content>
          </List.Item>
        </List>
      </Segment>

      <Divider />

      <List animated selection verticalAlign="middle">
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
          />
          <List.Content>
            <List.Header>Helen</List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
          />
          <List.Content>
            <List.Header>Christian</List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg"
          />
          <List.Content>
            <List.Header>Daniel</List.Header>
          </List.Content>
        </List.Item>
      </List>

      <Divider />

      <List celled ordered>
        <List.Item>Cats</List.Item>
        <List.Item>Horses</List.Item>
        <List.Item>
          Dogs
          <List.List>
            <List.Item>Labradoodles</List.Item>
            <List.Item>Shiba Inu</List.Item>
            <List.Item>Mastiff</List.Item>
          </List.List>
        </List.Item>
      </List>

      <Divider />

      <List celled horizontal>
        <List.Item>About Us</List.Item>
        <List.Item>Contact</List.Item>
        <List.Item>Support</List.Item>
      </List>

      <Divider />

      <List horizontal>
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
          />
          <List.Content verticalAlign="top">Top Aligned</List.Content>
        </List.Item>
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
          />
          <List.Content verticalAlign="middle">Middle</List.Content>
        </List.Item>
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
          />
          <List.Content verticalAlign="bottom">Bottom</List.Content>
        </List.Item>
      </List>

      <Divider />

      <List floated="right" horizontal>
        <List.Item disabled href="#">
          © GitHub, Inc.
        </List.Item>
        <List.Item href="#">Terms</List.Item>
        <List.Item href="#">Privacy</List.Item>
        <List.Item href="#">Contact</List.Item>
      </List>

      <List horizontal>
        <List.Item href="#">About Us</List.Item>
        <List.Item href="#">Jobs</List.Item>
      </List>

      <Divider />
      <List divided verticalAlign="middle">
        <List.Item>
          <List.Content floated="right">
            <Button>Add</Button>
          </List.Content>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/lena.png"
          />
          <List.Content>Lena</List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated="right">
            <Button>Add</Button>
          </List.Content>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
          />
          <List.Content>Lindsay</List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated="right">
            <Button>Add</Button>
          </List.Content>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/mark.png"
          />
          <List.Content>Mark</List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated="right">
            <Button>Add</Button>
          </List.Content>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/molly.png"
          />
          <List.Content>Molly</List.Content>
        </List.Item>
      </List>
      <Divider />
    </div>
  )
}

export default ListDemo
