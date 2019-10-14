import React from 'react'
import {
  Container,
  Header,
  Segment,
  Responsive,
  Select,
} from 'semantic-ui-react'

const countryOptions = [
  { key: 'af', value: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', text: 'Albania' },
  { key: 'dz', value: 'dz', text: 'Algeria' },
  { key: 'as', value: 'as', text: 'American Samoa' },
  { key: 'ad', value: 'ad', text: 'Andorra' },
  { key: 'ao', value: 'ao', text: 'Angola' },
  { key: 'ai', value: 'ai', text: 'Anguilla' },
  { key: 'ag', value: 'ag', text: 'Antigua' },
  { key: 'ar', value: 'ar', text: 'Argentina' },
  { key: 'am', value: 'am', text: 'Armenia' },
  { key: 'aw', value: 'aw', text: 'Aruba' },
  { key: 'au', value: 'au', text: 'Australia' },
  { key: 'at', value: 'at', text: 'Austria' },
  { key: 'az', value: 'az', text: 'Azerbaijan' },
  { key: 'bs', value: 'bs', text: 'Bahamas' },
  { key: 'bh', value: 'bh', text: 'Bahrain' },
  { key: 'bd', value: 'bd', text: 'Bangladesh' },
  { key: 'bb', value: 'bb', text: 'Barbados' },
  { key: 'by', value: 'by', text: 'Belarus' },
  { key: 'be', value: 'be', text: 'Belgium' },
  { key: 'bz', value: 'bz', text: 'Belize' },
  { key: 'bj', value: 'bj', text: 'Benin' },
]

interface IProps {}

const ResponsiveDemo: React.FC<IProps> = () => {
  return (
    <Container>
      <Header>
        Responsive
        <Header.Subheader>
          You can pass minimal width value at which content will be displayed.
        </Header.Subheader>
      </Header>
      <Segment.Group>
        <Responsive as={Segment} minWidth={768}>
          Visible only if display has <code>768px</code> width and higher
        </Responsive>
        <Responsive as={Segment} minWidth={992}>
          Visible only if display has <code>992px</code> width and higher
        </Responsive>
      </Segment.Group>

      <br />
      <br />
      <br />
      <Select placeholder="Select your country" options={countryOptions} />
    </Container>
  )
}

export default ResponsiveDemo
