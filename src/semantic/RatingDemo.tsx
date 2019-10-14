import React, { useState } from 'react'
import { Container, Header, Rating, RatingProps } from 'semantic-ui-react'

interface IProps {}

const RatingDemo: React.FC<IProps> = () => {
  const [rating, setRating] = useState<any>(0)

  return (
    <Container>
      <Header>Basic</Header>
      <Rating />
      <br />
      <br />
      <Rating icon="star" defaultRating={3} maxRating={4} />

      <br />
      <br />
      <Rating icon="heart" defaultRating={1} maxRating={3} />

      <Header>Clearable</Header>
      <Rating maxRating={5} clearable />

      <Header>Disabled</Header>
      <Rating defaultRating={3} maxRating={5} disabled />

      <Header>onRate Callback</Header>
      <Rating maxRating={5} onRate={(_e, r) => setRating(r.rating)} />
    </Container>
  )
}

export default RatingDemo
