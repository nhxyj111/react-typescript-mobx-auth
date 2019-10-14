import React from 'react'
import { Container, Message, Icon, Form, Button } from 'semantic-ui-react'

const list = [
  'You can now have cover images on blog pages',
  'Drafts will now auto-save while writing',
]

interface IProps {}

const MessageDemo: React.FC<IProps> = () => {
  return (
    <Container>
      <Message>
        <Message.Header>Changes in Service</Message.Header>
        <p>
          We updated our privacy policy here to better service our customers. We
          recommend reviewing the changes.
        </p>
      </Message>

      <Message
        header="Changes in Service"
        content="We updated our privacy policy here to better service our customers. We recommend reviewing the changes."
      />

      <Message size="mini">
        <Message.Header>New Site Features</Message.Header>
        <Message.List>
          <Message.Item>
            You can now have cover images on blog pages
          </Message.Item>
          <Message.Item>Drafts will now auto-save while writing</Message.Item>
        </Message.List>
      </Message>

      <Message header="New Site Features" list={list} />

      <Message>
        <Message.Header>New Site Features</Message.Header>
        <Message.List items={list} />
      </Message>

      <Message icon size="mini">
        <Icon name="circle notched" loading />
        <Message.Content>
          <Message.Header>Just one second</Message.Header>
          We are fetching that content for you.
        </Message.Content>
      </Message>

      <Message
        icon="inbox"
        header="Have you heard about our mailing list?"
        content="Get the best news in your e-mail every day."
      />

      <Message compact>Get all the best Sign up now!</Message>

      <div>
        <Message
          attached
          header="Welcome to our site!"
          content="Fill out the form below to sign-up for a new account"
        />
        <Form className="attached fluid segment">
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="First Name"
              placeholder="First Name"
              type="text"
            />
            <Form.Input
              fluid
              label="Last Name"
              placeholder="Last Name"
              type="text"
            />
          </Form.Group>
          <Form.Input label="Username" placeholder="Username" type="text" />
          <Form.Input label="Password" type="password" />
          <Form.Checkbox inline label="I agree to the terms and conditions" />
          <Button color="blue">Submit</Button>
        </Form>
        <Message attached="bottom" warning>
          <Icon name="help" />
          Already signed up?&nbsp;<a href="/#">Login here</a>&nbsp;instead.
        </Message>
      </div>

      <Message info>
        <Message.Header>Was this what you wanted?</Message.Header>
        <p>Did you know it's been a while?</p>
      </Message>

      <Message
        warning
        header="Was this what you wanted?"
        content="Did you know it's been a while?"
      />

      <Message
        positive
        header="Was this what you wanted?"
        content="Did you know it's been a while?"
      />

      <Message
        error
        header="Was this what you wanted?"
        content="Did you know it's been a while?"
      />

      <Message color="red">Red</Message>
      <Message color="orange">Orange</Message>
      <Message color="yellow">Yellow</Message>
      <Message color="olive">Olive</Message>
      <Message color="green">Green</Message>
      <Message color="teal">Teal</Message>
      <Message color="blue">Blue</Message>
      <Message color="violet">Violet</Message>
      <Message color="purple">Purple</Message>
      <Message color="pink">Pink</Message>
      <Message color="brown">Brown</Message>
      <Message color="black">Black</Message>
    </Container>
  )
}

export default MessageDemo
