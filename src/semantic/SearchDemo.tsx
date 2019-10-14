import React, { useState } from 'react'
import _ from 'lodash'
import faker from 'faker'
import {
  Container,
  Header,
  Search,
  SearchProps,
  Label,
} from 'semantic-ui-react'

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}))

interface IProps {}

const SearchDemo: React.FC<IProps> = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [value, setValue] = useState<string | undefined>('')
  const [results, setResults] = useState<
    { title: string; description: string; image: string; price: string }[]
  >([])

  const handleSearchChange = (_e: any, sp: SearchProps) => {
    setLoading(true)
    setValue(sp.value)

    setTimeout(() => {
      if (!value || value.length < 1) {
        setLoading(false)
        setResults([])
        setValue('')
      } else {
        const re = new RegExp(_.escapeRegExp(value), 'i')
        const isMatch = (result: any) => re.test(result.title)
        setLoading(false)
        setResults(_.filter(source, isMatch))
      }
    }, 500)
  }

  return (
    <Container>
      <Header>Search</Header>
      <Search
        loading={loading}
        onResultSelect={(_e, { result }) => setValue(result.title)}
        onSearchChange={_.debounce(handleSearchChange, 500, {
          leading: true,
        })}
        results={results}
        value={value}
      />
      <Header>Standard (Custom Render) </Header>
      <Search
        loading={loading}
        onResultSelect={(_e, { result }) => setValue(result.title)}
        onSearchChange={_.debounce(handleSearchChange, 500, {
          leading: true,
        })}
        results={results}
        resultRenderer={({ title }) => <Label content={title} />}
        value={value}
      />
      // TODO:
    </Container>
  )
}

export default SearchDemo
