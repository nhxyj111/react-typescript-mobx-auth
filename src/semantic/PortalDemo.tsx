import React, { useState } from 'react'
import { Header, Container, Portal, Button, Segment } from 'semantic-ui-react'

interface IProps {}

const PortalDemo: React.FC<IProps> = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Container style={{ border: '1px solid red' }}>
      <Header>PortalDemo</Header>
      <Portal
        closeOnTriggerClick
        openOnTriggerClick
        trigger={
          <Button
            content={open ? 'Close Portal' : 'Open Portal'}
            negative={open}
            positive={!open}
          />
        }
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <Segment
          style={{
            left: '40%',
            position: 'fixed',
            top: '50%',
            zIndex: 1000,
          }}
        >
          <Header>This is an example portal</Header>
          <p>Portals have tons of great callback functions to hook into.</p>
          <p>To close, simply click the close button or click away</p>
        </Segment>
      </Portal>
    </Container>
  )
}

export default PortalDemo
