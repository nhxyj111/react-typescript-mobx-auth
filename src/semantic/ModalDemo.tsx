import React, { useState } from 'react'
import {
  Header,
  Modal,
  Container,
  Image,
  Button,
  Icon,
} from 'semantic-ui-react'
import _ from 'lodash'

const NestedModal: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Modal
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      size="small"
      trigger={
        <Button primary icon>
          Proceed <Icon name="chevron right" />
        </Button>
      }
    >
      <Modal.Header>Modal #2</Modal.Header>
      <Modal.Content>
        <p>That's everything!</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          icon="check"
          content="All Done"
          onClick={() => setOpen(false)}
        />
      </Modal.Actions>
    </Modal>
  )
}

interface IProps {}

const ModalDemo: React.FC<IProps> = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Container>
      <Header>Modal</Header>
      <Modal trigger={<Button>Show Modal</Button>}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
          />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>

      <Header>Basic</Header>
      <Modal trigger={<Button>Basic Modal</Button>} basic size="small">
        <Header icon="archive" content="Archive Old Messages" />
        <Modal.Content>
          <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted>
            <Icon name="remove" /> No
          </Button>
          <Button color="green" inverted>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>

      <Header>Top Aligned</Header>
      <Modal trigger={<Button>Show Modal</Button>} centered={false}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
          />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>

      <Header>Scrolling Modal</Header>
      <Modal trigger={<Button>Long Modal</Button>}>
        <Modal.Header>Profile Picture</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />
          <Modal.Description>
            <Header>Modal Header</Header>
            <p>
              This is an example of expanded content that will cause the modal's
              dimmer to scroll
            </p>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
            Proceed <Icon name="chevron right" />
          </Button>
        </Modal.Actions>
      </Modal>

      <Header>Multiple Modals </Header>
      <Modal trigger={<Button>Multiple Modals</Button>}>
        <Modal.Header>Modal #1</Modal.Header>
        <Modal.Content image>
          <div className="image">
            <Icon name="arrow right" />
          </div>
          <Modal.Description>
            <p>We have more to share with you. Follow us along to modal 2</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <NestedModal />
        </Modal.Actions>
      </Modal>

      <Header>Controlled</Header>
      <Modal
        trigger={<Button onClick={() => setOpen(true)}>Show Modal</Button>}
        open={open}
        onClose={() => setOpen(false)}
        basic
        size="small"
      >
        <Header icon="browser" content="Cookies policy" />
        <Modal.Content>
          <h3>This website uses cookies to ensure the best user experience.</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={() => setOpen(false)} inverted>
            <Icon name="checkmark" /> Got it
          </Button>
        </Modal.Actions>
      </Modal>

      <Header>Shorthand</Header>
      <Modal
        basic
        trigger={<Button>Show Modal</Button>}
        header="Reminder!"
        content="Call Benjamin regarding the reports."
        actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
      />

      <Header>Scrolling Content - Dimmer Variations </Header>
      <Modal
        dimmer="blurring"
        size="mini"
        trigger={<Button>Scrolling Content Modal</Button>}
      >
        <Modal.Header>Profile Picture</Modal.Header>
        <Modal.Content image scrolling>
          <Image
            size="medium"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
            wrapped
          />

          <Modal.Description>
            <Header>Modal Header</Header>
            <p>
              This is an example of expanded content that will cause the modal's
              dimmer to scroll
            </p>

            {_.times(16, i => (
              <Image
                key={i}
                src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                style={{ paddingBottom: 5 }}
              />
            ))}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
            Proceed <Icon name="chevron right" />
          </Button>
        </Modal.Actions>
      </Modal>

      <Header>A Modal can have a close icon. </Header>
      <Modal trigger={<Button>Show Modal</Button>} closeIcon>
        <Header icon="archive" content="Archive Old Messages" />
        <Modal.Content>
          <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red">
            <Icon name="remove" /> No
          </Button>
          <Button color="green">
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </Container>
  )
}

export default ModalDemo
