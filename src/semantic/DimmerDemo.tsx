import React, { useState } from 'react'
import {
  Container,
  Segment,
  Header,
  Dimmer,
  Image,
  Button,
  Icon,
  Loader,
} from 'semantic-ui-react'

interface IProps {}

const DimmerDemo: React.FC<IProps> = () => {
  const [active, setActive] = useState<boolean>(false)
  const [dimmerPage, setDimmerPage] = useState<boolean>(false)

  return (
    <Container>
      <Header>Dimmer</Header>
      <div>
        <Dimmer.Dimmable blurring as={Segment} dimmed={active}>
          <Header as="h3">Overlayable Section</Header>
          <Image.Group size="small" className="ui small images">
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Image.Group>
          <Image
            size="medium"
            src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png"
          />
          <Dimmer active={active} onClickOutside={() => setActive(false)}>
            <Header as="h2" icon inverted>
              <Icon name="heart" />
              Dimmed Message!
            </Header>
          </Dimmer>
        </Dimmer.Dimmable>
        <Button.Group>
          <Button icon="plus" onClick={() => setActive(true)} />
          <Button icon="minus" onClick={() => setActive(false)} />
        </Button.Group>
      </div>
      <br />
      <br />

      <div>
        <Button
          content="Show"
          icon="plus"
          labelPosition="left"
          onClick={() => setDimmerPage(true)}
        />

        <Dimmer
          active={dimmerPage}
          onClickOutside={() => setDimmerPage(false)}
          page
        >
          <Header as="h2" icon inverted>
            <Icon name="heart" />
            Dimmed Message!
            <Header.Subheader>Dimmer sub-header</Header.Subheader>
          </Header>
        </Dimmer>
      </div>

      <Header>An active dimmer will dim its parent container. </Header>
      <Segment>
        <Dimmer active />
        <p>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </p>
        <p>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </p>
      </Segment>

      <br />
      <br />
      <div>
        <Dimmer.Dimmable as={Segment} dimmed={active}>
          <Dimmer active={active} inverted>
            <Loader>Loading</Loader>
          </Dimmer>

          <p>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </p>
          <p>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </p>
        </Dimmer.Dimmable>

        <Button.Group>
          <Button icon="plus" onClick={() => setActive(true)} />
          <Button icon="minus" onClick={() => setActive(false)} />
        </Button.Group>
      </div>
    </Container>
  )
}

export default DimmerDemo
