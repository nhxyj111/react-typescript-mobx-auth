import React from 'react'
import { Container, Reveal, Image } from 'semantic-ui-react'

interface IProps {}

const RevealDemo: React.FC<IProps> = () => {
  return (
    <Container>
      <br />
      <br />
      <Reveal animated="fade">
        <Reveal.Content visible>
          <Image
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            size="small"
          />
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/ade.jpg"
            size="small"
          />
        </Reveal.Content>
      </Reveal>

      <br />
      <br />
      <Reveal animated="move right" style={{ border: '1px solid red' }}>
        <Reveal.Content visible>
          <Image
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            size="small"
          />
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/chris.jpg"
            size="small"
          />
        </Reveal.Content>
      </Reveal>

      <br />
      <br />
      <Reveal animated="rotate" style={{ border: '1px solid red' }}>
        <Reveal.Content visible>
          <Image
            circular
            size="small"
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
          />
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image
            circular
            size="small"
            src="https://react.semantic-ui.com/images/avatar/large/stevie.jpg"
          />
        </Reveal.Content>
      </Reveal>
    </Container>
  )
}

export default RevealDemo
