import React from 'react'
import { Container, Header, Checkbox, Segment } from 'semantic-ui-react'

interface IProps {}

const CheckboxDemo: React.FC<IProps> = () => {
  return (
    <Container>
      <Header>CheckboxDemo</Header>
      <Checkbox label="Make my profile visible" />
      <br />
      <Checkbox
        label={{ children: 'Make my profile visible' }}
        defaultChecked
      />
      <br />
      <Checkbox
        label={<label>Make my profile visible</label>}
        defaultIndeterminate
      />
      <br />

      <Checkbox toggle />
      <br />
      <Checkbox slider />
      <br />

      <div>
        <Segment compact>
          <Checkbox />
        </Segment>
        <Segment compact>
          <Checkbox slider />
        </Segment>
        <Segment compact>
          <Checkbox toggle />
        </Segment>
      </div>

      <br />
      <br />
    </Container>
  )
}

export default CheckboxDemo
