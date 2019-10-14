import React from 'react'
import {
  Form,
  Container,
  Checkbox,
  Button,
  Input,
  Select,
  Radio,
  TextArea,
  Header,
  Message,
  Divider,
  Segment,
} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

interface IProps {}

const FormDemo: React.FC<IProps> = () => {
  return (
    <Container>
      <br />
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>

      <br />
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid label="First name" placeholder="First name" />
          <Form.Input fluid label="Last name" placeholder="Last name" />
          <Form.Select
            fluid
            label="Gender"
            options={options}
            placeholder="Gender"
          />
        </Form.Group>
        <Form.Group inline>
          <label>Size</label>
          <Form.Radio label="Small" value="sm" />
          <Form.Radio label="Medium" value="md" />
          <Form.Radio label="Large" value="lg" />
        </Form.Group>
        <Form.TextArea label="About" placeholder="Tell us more about you..." />
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Form.Button>Submit</Form.Button>
      </Form>

      <br />
      <Header>Field with Custom Control </Header>
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="First name"
            placeholder="First name"
          />
          <Form.Field
            control={Input}
            label="Last name"
            placeholder="Last name"
          />
          <Form.Field
            control={Select}
            label="Gender"
            options={options}
            placeholder="Gender"
          />
        </Form.Group>
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field control={Radio} label="One" value="1" />
          <Form.Field control={Radio} label="Two" value="2" />
          <Form.Field control={Radio} label="Three" value="3" />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="About"
          placeholder="Tell us more about you..."
        />
        <Form.Field
          control={Checkbox}
          label="I agree to the Terms and Conditions"
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>

      <br />

      <Header>Field with Custom Label</Header>
      <Form>
        <Form.Field
          control={Checkbox}
          label={{
            children: 'I agree to the Terms and Conditions',
            style: { color: 'red' },
          }}
        />
      </Form>
      <br />
      <Header>You can define a label by passing your own element.</Header>
      <Form>
        <Form.Field
          control={Checkbox}
          label={<label>I agree to the Terms and Conditions</label>}
        />
      </Form>

      <br />
      <Header>Field with HTML Control </Header>
      <Form>
        <Form.Group widths="equal">
          <Form.Field label="An HTML <input>" control="input" />
          <Form.Field label="An HTML <select>" control="select">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Field>
        </Form.Group>
        <Form.Group grouped>
          <label>HTML radios</label>
          <Form.Field
            label="This one"
            control="input"
            type="radio"
            name="htmlRadios"
          />
          <Form.Field
            label="That one"
            control="input"
            type="radio"
            name="htmlRadios"
          />
        </Form.Group>
        <Form.Group grouped>
          <label>HTML checkboxes</label>
          <Form.Field label="This one" control="input" type="checkbox" />
          <Form.Field label="That one" control="input" type="checkbox" />
        </Form.Group>
        <Form.Field label="An HTML <textarea>" control="textarea" rows="3" />
        <Form.Field label="An HTML <button>" control="button">
          HTML Button
        </Form.Field>
      </Form>

      <br />
      <Header>Accessible Labels </Header>
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            label="First name"
            placeholder="First name"
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Last name"
            placeholder="Last name"
          />
          <Form.Field
            control={Select}
            options={genderOptions}
            label={{
              children: 'Gender',
              htmlFor: 'form-select-control-gender',
            }}
            placeholder="Gender"
            search
            searchInput={{ id: 'form-select-control-gender' }}
          />
        </Form.Group>
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Opinion"
          placeholder="Opinion"
        />
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Confirm"
          label="Label with htmlFor"
        />
      </Form>

      <br />
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-first-name"
            label="First name"
            placeholder="First name"
          />
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-last-name"
            label="Last name"
            placeholder="Last name"
          />
        </Form.Group>
      </Form>

      <br />
      <Form loading>
        <Form.Input label="Email" placeholder="joe@schmoe.com" />
        <Button>Submit</Button>
      </Form>

      <br />
      <Form success>
        <Form.Input label="Email" placeholder="joe@schmoe.com" />
        <Message
          success
          header="Form Completed"
          content="You're all signed up for the newsletter"
        />
        <Button>Submit</Button>
      </Form>

      <br />
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid label="First name" placeholder="First name" error />
          <Form.Input fluid label="Last name" placeholder="Last name" />
        </Form.Group>
        <Form.Select options={options} placeholder="Gender" error />
        <Form.Checkbox label="I agree to the Terms and Conditions" error />
      </Form>

      <br />
      <br />
      <Form>
        <Form.Input
          error={{ content: 'Please enter your first name', pointing: 'below' }}
          fluid
          label="First name"
          placeholder="First name"
        />
        <Form.Input
          error="Please enter your last name"
          fluid
          label="Last name"
          placeholder="Last name"
        />
        <Form.Checkbox
          label="I agree to the Terms and Conditions"
          error={{
            content: 'You must agree to the terms and conditions',
            pointing: 'left',
          }}
        />
      </Form>

      <br />
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="First name"
            placeholder="Disabled"
            disabled
          />
          <Form.Input fluid label="Last name" placeholder="Disabled" disabled />
        </Form.Group>
      </Form>

      <br />

      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="First name"
            placeholder="Read only"
            readOnly
          />
          <Form.Input
            fluid
            label="Last name"
            placeholder="Read only"
            readOnly
          />
        </Form.Group>
      </Form>

      <br />
      <Form size="mini">
        <Form.Group widths="equal">
          <Form.Field
            label="First name"
            control="input"
            placeholder="First name"
          />
          <Form.Field
            label="Last name"
            control="input"
            placeholder="Last name"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
        <Divider hidden />
      </Form>

      <br />
      <Segment inverted>
        <Form inverted>
          <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
          </Form.Group>
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>

      <br />
      <Form>
        <Form.Field inline>
          <label>First name</label>
          <Input placeholder="First name" />
        </Form.Field>
      </Form>

      <br />
      <Form>
        <Form.Group>
          <Form.Input label="First name" placeholder="First Name" width={6} />
          <Form.Input label="Middle Name" placeholder="Middle Name" width={4} />
          <Form.Input label="Last Name" placeholder="Last Name" width={6} />
        </Form.Group>
        <Form.Group>
          <Form.Input placeholder="2 Wide" width={2} />
          <Form.Input placeholder="12 Wide" width={12} />
          <Form.Input placeholder="2 Wide" width={2} />
        </Form.Group>
        <Form.Group>
          <Form.Input placeholder="8 Wide" width={8} />
          <Form.Input placeholder="6 Wide" width={6} />
          <Form.Input placeholder="2 Wide" width={2} />
        </Form.Group>
      </Form>

      <br />
      <Form>
        <Form.Field required>
          <label>Last name</label>
          <Input placeholder="Full name" />
        </Form.Field>
      </Form>

      <Form>
        <Form.Checkbox
          inline
          label="I agree to the terms and conditions"
          required
        />
      </Form>

      <br />
      <br />
    </Container>
  )
}

export default FormDemo
