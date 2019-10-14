import React, { useRef } from 'react'
import {
  Input,
  Divider,
  Icon,
  Dropdown,
  Label,
  Select,
  Button,
  Segment,
} from 'semantic-ui-react'

const options = [
  { key: '.com', text: '.com', value: '.com' },
  { key: '.net', text: '.net', value: '.net' },
  { key: '.org', text: '.org', value: '.org' },
]

const options2 = [
  { key: 'page', text: 'This Page', value: 'page' },
  { key: 'org', text: 'This Organization', value: 'org' },
  { key: 'site', text: 'Entire Site', value: 'site' },
]

const options3 = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'articles', text: 'Articles', value: 'articles' },
  { key: 'products', text: 'Products', value: 'products' },
]

interface IProps {}

const InputDemo: React.FC<IProps> = () => {
  const focusRef = useRef<Input>(null)

  return (
    <div>
      <Divider />

      <Input placeholder="Search..." />

      <Divider />

      <Input focus placeholder="Search..." />

      <Divider />

      <Input loading icon="user" placeholder="Search..." />

      <Divider />
      <Input icon="user" iconPosition="left" placeholder="Search..." />
      <Input loading icon="user" iconPosition="left" placeholder="Search..." />

      <Divider />

      <Input disabled placeholder="Search..." />

      <Divider />

      <Input error placeholder="Search..." />

      <Divider />

      <Input icon="users" iconPosition="left" placeholder="Search users..." />

      <Divider />

      <Input
        icon={{
          name: 'search',
          circular: true,
          link: true,
          onClick() {
            alert('yy')
          },
        }}
        placeholder="Search..."
      />

      <Divider />

      <Input
        icon={
          <Icon
            name="search"
            inverted
            circular
            link
            onClick={() => alert('xx')}
          />
        }
        placeholder="Search..."
      />

      <Divider />

      <Input icon placeholder="Search...">
        <input />
        <Icon name="search" />
      </Input>
      <br />
      <br />
      <Input iconPosition="left" placeholder="Email">
        <Icon name="at" />
        <input />
      </Input>

      <Divider />

      <Input label="http://" placeholder="mysite.com" />
      <br />
      <br />
      <Input
        label={<Dropdown defaultValue=".com" options={options} />}
        labelPosition="right"
        placeholder="Find domain"
      />

      <br />
      <br />
      <Input
        label={{ basic: true, content: 'kg' }}
        labelPosition="right"
        placeholder="Enter weight..."
      />

      <br />
      <br />
      <Input labelPosition="right" type="text" placeholder="Amount">
        <Label basic>$</Label>
        <input />
        <Label>.00</Label>
      </Input>

      <br />
      <br />
      <Input
        icon="tags"
        iconPosition="left"
        label={{ tag: true, content: 'Add Tag' }}
        labelPosition="right"
        placeholder="Enter tags"
      />

      <br />
      <br />
      <Input
        label={{ icon: 'asterisk' }}
        labelPosition="left corner"
        placeholder="Search..."
      />

      <br />
      <br />

      <Input action="Search" placeholder="Search..." />

      <br />
      <br />

      <Input
        action={{
          content: 'Search...',
          onClick() {
            alert('zz')
          },
        }}
        placeholder="Search..."
      />

      <Divider />

      <Input
        action={{
          color: 'teal',
          labelPosition: 'left',
          icon: 'cart',
          content: 'Checkout',
        }}
        actionPosition="left"
        placeholder="Search..."
        defaultValue="52.03"
      />

      <br />
      <br />
      <Input
        action={
          <Dropdown
            button
            basic
            floating
            options={options2}
            defaultValue="page"
          />
        }
        icon="search"
        iconPosition="left"
        placeholder="Search..."
      />

      <Divider />

      <Input type="text" placeholder="Search..." action>
        <input />
        <Select compact options={options3} defaultValue="articles" />
        <Button type="submit">Search</Button>
      </Input>

      <Divider />

      <Input
        action={{
          color: 'teal',
          labelPosition: 'right',
          icon: 'copy',
          content: 'Copy',
        }}
        defaultValue="http://ww.short.url/c0opq"
      />

      <br />
      <br />
      <Input action={{ icon: 'search' }} placeholder="Search..." />
      <br />
      <br />
      <Input transparent placeholder="Search..." />
      <br />
      <br />
      <Segment inverted>
        <Input inverted placeholder="Search..." />
      </Segment>

      <Divider />

      <Input fluid icon="search" placeholder="Search..." />

      <Divider />

      <Input size="mini" icon="search" placeholder="mini..." />
      <br />
      <br />
      <Input size="small" icon="search" placeholder="small..." />
      <br />
      <br />
      <Input icon="search" placeholder="default..." />
      <br />
      <br />
      <Input size="large" icon="search" placeholder="large..." />
      <br />
      <br />
      <Input size="big" icon="search" placeholder="big..." />
      <br />
      <br />
      <Input size="huge" icon="search" placeholder="huge..." />
      <br />
      <br />
      <Input size="massive" icon="search" placeholder="massive..." />

      <Divider />
      <Input list="languages" placeholder="Choose language..." />
      <datalist id="languages">
        <option value="English" />
        <option value="Chinese" />
        <option value="Dutch" />
      </datalist>

      <Divider />
      <Button
        content="focus"
        onClick={() => {
          if (focusRef && focusRef.current) {
            focusRef.current.focus()
          }
        }}
      />
      <Input ref={focusRef} placeholder="Search..." />
    </div>
  )
}

export default InputDemo
