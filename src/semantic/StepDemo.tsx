import React from 'react'
import { Container, Step, Icon } from 'semantic-ui-react'

const steps = [
  {
    key: 'shipping',
    icon: 'truck',
    title: 'Shipping',
    description: 'Choose your shipping options',
  },
  {
    key: 'billing',
    active: true,
    icon: 'payment',
    title: 'Billing',
    description: 'Enter billing information',
  },
  { key: 'confirm', disabled: true, icon: 'info', title: 'Confirm Order' },
]

interface IProps {}

const StepDemo: React.FC<IProps> = () => {
  return (
    <Container>
      <br />
      <br />
      <Step.Group>
        <Step>Shipping</Step>
        <Step content="Shipping" />
      </Step.Group>

      <br />
      <br />
      <Step.Group>
        <Step>
          <Icon name="truck" />
          <Step.Content>
            <Step.Title>Shipping</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
          </Step.Content>
        </Step>

        <Step active>
          <Icon name="payment" />
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>

        <Step disabled>
          <Icon name="info" />
          <Step.Content>
            <Step.Title>Confirm Order</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>

      <br />
      <br />
      <Step.Group items={steps} />

      <br />
      <br />
      <Step.Group ordered>
        <Step completed>
          <Step.Content>
            <Step.Title>Shipping</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
          </Step.Content>
        </Step>

        <Step completed>
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>

        <Step active>
          <Step.Content>
            <Step.Title>Confirm Order</Step.Title>
          </Step.Content>
        </Step>

        <Step>
          <Step.Content>
            <Step.Title>XX XXX</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>

      <br />
      <br />
      <Step.Group vertical>
        <Step completed>
          <Icon name="truck" />
          <Step.Content>
            <Step.Title>Shipping</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
          </Step.Content>
        </Step>

        <Step completed>
          <Icon name="payment" />
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>

        <Step active>
          <Icon name="info" />
          <Step.Content>
            <Step.Title>Confirm Order</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>

      <br />
      <br />
      <Step.Group stackable="tablet">
        <Step>
          <Icon name="plane" />
          <Step.Content>
            <Step.Title>Shipping</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
          </Step.Content>
        </Step>
        <Step active>
          <Icon name="dollar" />
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>
        <Step disabled>
          <Icon name="info circle" />
          <Step.Content>
            <Step.Title>Confirm Order</Step.Title>
            <Step.Description>Verify order details</Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
    </Container>
  )
}

export default StepDemo
