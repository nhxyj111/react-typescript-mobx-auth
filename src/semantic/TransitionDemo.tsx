import React, { useState } from 'react'
import { Container, Button, Transition, Image, List } from 'semantic-ui-react'
import _ from 'lodash'

const users = ['ade', 'chris', 'christian', 'daniel', 'elliot', 'helen']

interface IProps {}

const TransitionDemo: React.FC<IProps> = () => {
  const [items, setItems] = useState(users.slice(0, 3))

  return (
    <Container>
      <br />
      <br />
      <Button.Group>
        <Button
          disabled={items.length === 0}
          icon="minus"
          onClick={() => setItems(prevItems => prevItems.slice(0, -1))}
        />
        <Button
          disabled={items.length === users.length}
          icon="plus"
          onClick={() =>
            setItems(prevItems => users.slice(0, prevItems.length + 1))
          }
        />
      </Button.Group>

      <Transition.Group
        as={List}
        duration={200}
        divided
        size="huge"
        verticalAlign="middle"
      >
        {items.map(item => (
          <List.Item key={item}>
            <Image
              avatar
              src={`https://react.semantic-ui.com/images/avatar/small/${item}.jpg`}
            />
            <List.Content header={_.startCase(item)} />
          </List.Item>
        ))}
      </Transition.Group>
    </Container>
  )
}

export default TransitionDemo
