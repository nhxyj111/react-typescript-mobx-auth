import React from 'react'
import { Container, Header, Advertisement, Divider } from 'semantic-ui-react'

interface IProps {}

const img = 'https://react.semantic-ui.com/images/wireframe/image.png'

const AdvertisementDemo: React.FC<IProps> = () => {
  return (
    <Container>
      <Header>Advertisement</Header>
      <Advertisement unit="medium rectangle">
        <img src={img} alt="" />
      </Advertisement>

      <Divider />
      <Advertisement unit="medium rectangle" test="Medium Rectangle" />
      <Advertisement unit="banner" test="Banner" />
      <Advertisement unit="leaderboard" test="Leaderboard" />
      <Advertisement unit="large rectangle" test="Large Rectangle" />
      <Advertisement unit="half page" test="Half Page" />

      <Divider />

      <Advertisement unit="small button" test="Small Button" />
      <Advertisement unit="square button" test="Small Button" />

      <Divider />
      <Advertisement unit="panorama" test="Panorama" />
      <br />
      <br />
    </Container>
  )
}

export default AdvertisementDemo
