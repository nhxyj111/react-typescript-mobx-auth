import React from 'react'
import { Container, Item, Image, Header } from 'semantic-ui-react'

const items = [
  {
    childKey: 0,
    image: 'https://react.semantic-ui.com/images/wireframe/image.png',
    header: 'Header',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
  {
    childKey: 1,
    image: 'https://react.semantic-ui.com/images/wireframe/image.png',
    header: 'Header',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
]

interface IProps {}

const ItemDemo: React.FC<IProps> = () => {
  return (
    <Container>
      <br />
      <br />

      <Item.Group>
        <Item>
          <Item.Image size="tiny" src="/images/wireframe/image.png" />
          <Item.Content>
            <Item.Header as="a">Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image size="tiny" src="/images/wireframe/image.png" />
          <Item.Content>
            <Item.Header as="a">Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>

      <Header>Shorthand</Header>
      <Item.Group items={items} />

      <br />
      <br />

      <Item.Group divided>
        <Item>
          <Item.Image
            size="tiny"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />
          <Item.Content verticalAlign="middle">Content A</Item.Content>
        </Item>
        <Item>
          <Item.Image
            size="tiny"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />
          <Item.Content verticalAlign="middle">Content B</Item.Content>
        </Item>
        <Item>
          <Item.Image
            size="tiny"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />
          <Item.Content content="Content C" verticalAlign="middle" />
        </Item>
      </Item.Group>

      <br />
      <br />
    </Container>
  )
}

export default ItemDemo
