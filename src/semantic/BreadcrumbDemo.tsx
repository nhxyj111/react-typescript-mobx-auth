import React from 'react'
import { Container, Breadcrumb } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const sections = [
  { key: 'Home', content: 'Home', link: true },
  { key: 'Store', content: 'Store', link: true },
  { key: 'Shirt', content: 'T-Shirt', active: true },
]

interface IProps {}

const BreadcrumbDemo: React.FC<IProps> = () => {
  return (
    <Container>
      <br />
      <br />
      <Breadcrumb>
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section link>Store</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
      </Breadcrumb>

      <br />
      <br />
      <Breadcrumb icon="right angle" sections={sections} />

      <br />
      <br />
      <Breadcrumb>
        <Breadcrumb.Section link as={Link} to="/login">
          Home
        </Breadcrumb.Section>
        <Breadcrumb.Divider>-</Breadcrumb.Divider>
        <Breadcrumb.Section link>Registration</Breadcrumb.Section>
        <Breadcrumb.Divider>-</Breadcrumb.Divider>
        <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
      </Breadcrumb>

      <br />
      <br />
      <Breadcrumb divider="*" sections={sections} />
    </Container>
  )
}

export default BreadcrumbDemo
