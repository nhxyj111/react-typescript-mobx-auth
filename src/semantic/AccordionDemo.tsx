import React from 'react'
import { Container, Header, Accordion, Icon } from 'semantic-ui-react'

const panels = [
  {
    key: 'what-is-dog',
    title: {
      content: 'How do you acquire a dog?',
      icon: 'question',
    },
    content: [
      'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome',
      'guest in many households across the world.',
    ].join(' '),
  },
  {
    key: 'kinds-of-dogs',
    title: 'What kinds of dogs are there?',
    content: [
      'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog',
      'that they find to be compatible with their own lifestyle and desires from a companion.',
    ].join(' '),
  },
  {
    key: 'acquire-dog',
    title: 'How do you acquire a dog?',
    content: {
      content: (
        <div>
          <p>
            Three common ways for a prospective owner to acquire a dog is from
            pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </div>
      ),
    },
  },
]

const level1Panels = [
  { key: 'panel-1a', title: 'Level 1A', content: 'Level 1A Contents' },
  { key: 'panel-ba', title: 'Level 1B', content: 'Level 1B Contents' },
]

const Level1Content = (
  <div>
    Welcome to level 1
    <Accordion.Accordion panels={level1Panels} />
  </div>
)

const level2Panels = [
  { key: 'panel-2a', title: 'Level 2A', content: 'Level 2A Contents' },
  { key: 'panel-2b', title: 'Level 2B', content: 'Level 2B Contents' },
]

const Level2Content = (
  <div>
    Welcome to level 2
    <Accordion.Accordion panels={level2Panels} />
  </div>
)

const rootPanels = [
  { key: 'panel-1', title: 'Level 1', content: { content: Level1Content } },
  { key: 'panel-2', title: 'Level 2', content: { content: Level2Content } },
]

interface IProps {}

const AccordionDemo: React.FC<IProps> = () => {
  return (
    <Container>
      <Header>Accordion</Header>
      <Accordion>
        <Accordion.Title active>
          <Icon name="dropdown" />
          What is a dog?
        </Accordion.Title>
        <Accordion.Content active>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
        </Accordion.Content>
      </Accordion>

      <Header>
        Accordion can be rendered via shorthand prop. It will automatically
        manage the component state.
      </Header>
      <Accordion styled defaultActiveIndex={0} panels={panels} />
      <br />
      <br />
      <Accordion styled exclusive={false} panels={panels} />

      <br />
      <br />
      <Header>Nested</Header>
      <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
    </Container>
  )
}

export default AccordionDemo
