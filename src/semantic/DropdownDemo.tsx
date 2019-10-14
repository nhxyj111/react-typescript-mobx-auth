import React from 'react'
import {
  Container,
  Dropdown,
  Input,
  Header,
  Menu,
  Button,
  Message,
} from 'semantic-ui-react'
import _ from 'lodash'

const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: {
      avatar: true,
      src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
    },
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: {
      avatar: true,
      src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
    },
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: {
      avatar: true,
      src: 'https://react.semantic-ui.com/images/avatar/small/stevie.jpg',
    },
  },
  {
    key: 'Christian',
    text: 'Christian',
    value: 'Christian',
    image: {
      avatar: true,
      src: 'https://react.semantic-ui.com/images/avatar/small/christian.jpg',
    },
  },
  {
    key: 'Matt',
    text: 'Matt',
    value: 'Matt',
    image: {
      avatar: true,
      src: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
    },
  },
  {
    key: 'Justen Kitsune',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune',
    image: {
      avatar: true,
      src: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg',
    },
  },
]

const countryOptions = [
  { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
  { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
  { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
  { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
  { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
  { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
  { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
  { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
  { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
  { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
  { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
  { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
  { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
  { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
  { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
  { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
  { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
  { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
  { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
  { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
  { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
]

const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' },
]

const tagOptions = [
  {
    key: 'Important',
    text: 'Important',
    value: 'Important',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    key: 'Announcement',
    text: 'Announcement',
    value: 'Announcement',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    key: 'Cannot Fix',
    text: 'Cannot Fix',
    value: 'Cannot Fix',
    label: { color: 'black', empty: true, circular: true },
  },
  {
    key: 'News',
    text: 'News',
    value: 'News',
    label: { color: 'purple', empty: true, circular: true },
  },
  {
    key: 'Enhancement',
    text: 'Enhancement',
    value: 'Enhancement',
    label: { color: 'orange', empty: true, circular: true },
  },
  {
    key: 'Change Declined',
    text: 'Change Declined',
    value: 'Change Declined',
    label: { empty: true, circular: true },
  },
  {
    key: 'Off Topic',
    text: 'Off Topic',
    value: 'Off Topic',
    label: { color: 'yellow', empty: true, circular: true },
  },
  {
    key: 'Interesting',
    text: 'Interesting',
    value: 'Interesting',
    label: { color: 'pink', empty: true, circular: true },
  },
  {
    key: 'Discussion',
    text: 'Discussion',
    value: 'Discussion',
    label: { color: 'green', empty: true, circular: true },
  },
]

const languageOptions = [
  { key: 'Arabic', text: 'Arabic', value: 'Arabic' },
  { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
  { key: 'Danish', text: 'Danish', value: 'Danish' },
  { key: 'Dutch', text: 'Dutch', value: 'Dutch' },
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'German', text: 'German', value: 'German' },
  { key: 'Greek', text: 'Greek', value: 'Greek' },
  { key: 'Hungarian', text: 'Hungarian', value: 'Hungarian' },
  { key: 'Italian', text: 'Italian', value: 'Italian' },
  { key: 'Japanese', text: 'Japanese', value: 'Japanese' },
  { key: 'Korean', text: 'Korean', value: 'Korean' },
  { key: 'Lithuanian', text: 'Lithuanian', value: 'Lithuanian' },
  { key: 'Persian', text: 'Persian', value: 'Persian' },
  { key: 'Polish', text: 'Polish', value: 'Polish' },
  { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' },
  { key: 'Russian', text: 'Russian', value: 'Russian' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
  { key: 'Swedish', text: 'Swedish', value: 'Swedish' },
  { key: 'Turkish', text: 'Turkish', value: 'Turkish' },
  { key: 'Vietnamese', text: 'Vietnamese', value: 'Vietnamese' },
]

const LeftRightoptions = [
  { key: 1, text: 'This is a super long item', value: 1 },
  { key: 2, text: 'Dropdown direction can help', value: 2 },
  { key: 3, text: 'Items are kept within view', value: 3 },
]

interface IProps {}

const DropdownDemo: React.FC<IProps> = () => {
  return (
    <Container>
      <Dropdown text="File">
        <Dropdown.Menu>
          <Dropdown.Item text="New" />
          <Dropdown.Item text="Open..." description="ctrl + o" />
          <Dropdown.Item text="Save as..." description="ctrl + s" />
          <Dropdown.Item text="Rename" description="ctrl + r" />
          <Dropdown.Item text="Make a copy" />
          <Dropdown.Item icon="folder" text="Move to folder" />
          <Dropdown.Item icon="trash" text="Move to trash" />
          <Dropdown.Divider />
          <Dropdown.Item text="Download As..." />
          <Dropdown.Item text="Publish To Web" />
          <Dropdown.Item text="E-mail Collaborators" />
        </Dropdown.Menu>
      </Dropdown>
      <br />
      <br />
      <Dropdown
        placeholder="Select Friend"
        fluid
        selection
        options={friendOptions}
      />
      <br />
      <br />
      <Dropdown
        placeholder="Select Country"
        fluid
        search
        selection
        options={countryOptions}
      />
      <br />
      <br />
      <Dropdown
        placeholder="Skills"
        fluid
        multiple
        selection
        options={options}
        onChange={(_e, data) => console.log(data.value)}
      />
      <br />
      <br />
      <Dropdown
        clearable
        fluid
        multiple
        search
        selection
        options={countryOptions}
        placeholder="Select Country"
      />
      <br />
      <br />
      <Dropdown
        button
        className="icon"
        floating
        labeled
        icon="world"
        options={languageOptions}
        search
        text="Select Language"
        onChange={(_e, data) => console.log(data.value)}
      />
      <br />
      <br />
      <Dropdown
        text="Filter Posts"
        icon="filter"
        floating
        labeled
        button
        className="icon"
      >
        <Dropdown.Menu>
          <Input icon="search" iconPosition="left" className="search" />
          <Dropdown.Divider />
          <Dropdown.Header icon="tags" content="Tag Label" />
          <Dropdown.Menu scrolling>
            {tagOptions.map(option => (
              <Dropdown.Item key={option.value} {...option} />
            ))}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
      <br />
      <br />
      <span>
        Show me posts by{' '}
        <Dropdown
          inline
          options={friendOptions}
          defaultValue={friendOptions[0].value}
        />
      </span>
      <br />
      <br />
      <Header>Pointing</Header>
      <Menu compact>
        <Menu.Item>Home</Menu.Item>
        <Dropdown text="Shopping" pointing className="link item">
          <Dropdown.Menu>
            <Dropdown.Header>Categories</Dropdown.Header>
            <Dropdown.Item>
              <Dropdown text="Clothing">
                <Dropdown.Menu>
                  <Dropdown.Header>Mens</Dropdown.Header>
                  <Dropdown.Item>Shirts</Dropdown.Item>
                  <Dropdown.Item>Pants</Dropdown.Item>
                  <Dropdown.Item>Jeans</Dropdown.Item>
                  <Dropdown.Item>Shoes</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Womens</Dropdown.Header>
                  <Dropdown.Item>Dresses</Dropdown.Item>
                  <Dropdown.Item>Shoes</Dropdown.Item>
                  <Dropdown.Item>Bags</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
            <Dropdown.Item>Home Goods</Dropdown.Item>
            <Dropdown.Item>Bedroom</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Order</Dropdown.Header>
            <Dropdown.Item>Status</Dropdown.Item>
            <Dropdown.Item>Cancellations</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item>Forums</Menu.Item>
        <Menu.Item>Contact Us</Menu.Item>
      </Menu>
      <br />
      <br />
      <Menu vertical>
        <Menu.Item>Home</Menu.Item>
        <Dropdown text="Messages" pointing="left" className="link item">
          <Dropdown.Menu>
            <Dropdown.Item>Inbox</Dropdown.Item>
            <Dropdown.Item>Starred</Dropdown.Item>
            <Dropdown.Item>Sent Mail</Dropdown.Item>
            <Dropdown.Item>Drafts (143)</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Spam (1009)</Dropdown.Item>
            <Dropdown.Item>Trash</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item>Browse</Menu.Item>
        <Menu.Item>Help</Menu.Item>
      </Menu>
      <br />
      <br />
      <Button.Group color="teal">
        <Button>Save</Button>
        <Dropdown
          className="button icon"
          floating
          options={options}
          trigger={<></>}
        />
      </Button.Group>
      <br />
      <br />
      <Menu compact>
        <Dropdown text="Dropdown" options={options} simple item />
      </Menu>
      <br />
      <br />
      <Dropdown
        text="Filter"
        icon="filter"
        floating
        labeled
        button
        className="icon"
      >
        <Dropdown.Menu>
          <Dropdown.Header icon="tags" content="Filter by tag" />
          <Dropdown.Item>Important</Dropdown.Item>
          <Dropdown.Item>Announcement</Dropdown.Item>
          <Dropdown.Item>Discussion</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br />
      <br />
      <Dropdown
        text="Filter"
        icon="filter"
        floating
        labeled
        button
        className="icon"
      >
        <Dropdown.Menu>
          <Dropdown.Header icon="tags" content="Filter by tag" />
          <Dropdown.Divider />
          <Dropdown.Item icon="attention" text="Important" />
          <Dropdown.Item icon="comment" text="Announcement" />
          <Dropdown.Item icon="conversation" text="Discussion" />
        </Dropdown.Menu>
      </Dropdown>
      <br />
      <br />
      <Dropdown
        text="Filter Tags"
        floating
        labeled
        button
        icon="filter"
        className="icon"
      >
        <Dropdown.Menu>
          <Dropdown.Header icon="tags" content="Filter by tag" />
          <Dropdown.Divider />
          <Dropdown.Item description="2 new" text="Important" />
          <Dropdown.Item description="10 new" text="Hopper" />
          <Dropdown.Item description="5 new" text="Discussion" />
        </Dropdown.Menu>
      </Dropdown>
      <br />
      <br />
      <Dropdown
        text="Filter"
        icon="filter"
        floating
        labeled
        button
        className="icon"
      >
        <Dropdown.Menu>
          <Dropdown.Header icon="tags" content="Filter by tag" />
          <Dropdown.Divider />
          <Dropdown.Item
            label={{ color: 'red', empty: true, circular: true }}
            text="Important"
          />
          <Dropdown.Item
            label={{ color: 'blue', empty: true, circular: true }}
            text="Announcement"
          />
          <Dropdown.Item
            label={{ color: 'black', empty: true, circular: true }}
            text="Discussion"
          />
        </Dropdown.Menu>
      </Dropdown>
      <br />
      <br />
      <Dropdown
        text="Login"
        icon="filter"
        floating
        labeled
        button
        className="icon"
      >
        <Dropdown.Menu>
          <Message
            error
            header="Error"
            content="You must log-in to see all categories"
          />
        </Dropdown.Menu>
      </Dropdown>
      <br />
      <br />
      <Dropdown text="Dropdown" options={options} loading />
      <br />
      <br />
      <Dropdown text="Dropdown" options={options} error />
      <br />
      <br />
      <Dropdown
        text="Dropdown"
        options={[
          { key: 1, text: 'Choice 1', value: 1 },
          { key: 2, text: 'Choice 2', value: 2, disabled: true },
        ]}
        open
      />
      <br />
      <br />
      <Menu>
        <Dropdown
          item
          simple
          text="Left menu"
          direction="right"
          options={LeftRightoptions}
        />
        <Menu.Menu position="right">
          <Dropdown
            item
            simple
            text="Right menu"
            direction="right"
            options={LeftRightoptions}
          />
        </Menu.Menu>
      </Menu>
      <br />
      <br />
      <Dropdown
        placeholder="I close on blur"
        closeOnBlur
        closeOnEscape
        openOnFocus
        selection
        options={friendOptions}
      />{' '}
      <Dropdown
        placeholder="I stay open on blur"
        closeOnBlur={false}
        selection
        options={friendOptions}
      />
      <br />
      <br />
      <Dropdown
        multiple
        search
        selection
        selectOnNavigation={false} //////
        closeOnChange
        options={friendOptions}
        placeholder="I close on change"
      />{' '}
      <Dropdown
        multiple
        search
        selection
        options={friendOptions}
        placeholder="I stay open on change"
      />
      <br />
      <br />
      <br />
    </Container>
  )
}

export default DropdownDemo
