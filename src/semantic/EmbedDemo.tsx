import React from 'react'
import { Embed } from 'semantic-ui-react'

interface IProps {}

const EmbedDemo: React.FC<IProps> = () => {
  return (
    <div>
      <Embed
        autoplay={false}
        color="white"
        hd={false}
        id="gJscrxxl_Bg"
        iframe={{
          allowFullScreen: true,
          style: {
            padding: 10,
          },
        }}
        placeholder="/images/image-16by9.png"
        source="youtube"
      />
    </div>
  )
}

export default EmbedDemo
