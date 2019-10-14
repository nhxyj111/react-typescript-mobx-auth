import React, { useState } from 'react'
import { Container, Confirm, Button } from 'semantic-ui-react'

interface IProps {}

const ConfirmDemo: React.FC<IProps> = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Container>
      <br />
      <br />
      <Button inverted color="green" onClick={() => setOpen(true)}>
        Show
      </Button>
      <Confirm
        header="test"
        open={open}
        content="This is a custom message"
        onCancel={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
      />
    </Container>
  )
}

export default ConfirmDemo
