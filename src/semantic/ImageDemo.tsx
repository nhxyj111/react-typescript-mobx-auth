import React from 'react'
import { Image, Divider, Segment, Label } from 'semantic-ui-react'

const src = 'https://react.semantic-ui.com/images/wireframe/image.png'

interface IProps {}

const ImageDemo: React.FC<IProps> = () => {
  return (
    <div>
      <Image
        src="https://react.semantic-ui.com/images/wireframe/image.png"
        size="small"
        disabled
      />
      <Image
        src="https://react.semantic-ui.com/images/wireframe/image.png"
        size="small"
        wrapped
      />
      <br />
      <br />
      <Image
        src="https://react.semantic-ui.com/images/wireframe/image-text.png"
        size="medium"
        as="a"
        href="http://baidu.com"
        target="_blank"
      />
      <br />
      <br />
      <Image
        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
        avatar
      />
      <span>Username</span>
      <br />
      <br />
      <Image
        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
        size="small"
        bordered
      />
      <Image
        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
        size="small"
        circular
      />
      <br />
      <br />
      <Image
        src="https://react.semantic-ui.com/images/wireframe/image.png"
        size="tiny"
        verticalAlign="top"
      />{' '}
      <span>Top Aligned</span>
      <Divider />
      <Image
        src="https://react.semantic-ui.com/images/wireframe/image.png"
        size="tiny"
        verticalAlign="middle"
      />{' '}
      <span>Middle Aligned</span>
      <Divider />
      <Image
        src="https://react.semantic-ui.com/images/wireframe/image.png"
        size="tiny"
        verticalAlign="bottom"
      />{' '}
      <span>Bottom Aligned</span>
      <br />
      <br />
      <Segment>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="medium"
          centered
        />
        <p>
          Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
          alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
          referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
          electram, eos choro alterum definiebas in. Vim dolorum definiebas an.
          Mei ex natum rebum iisque.
        </p>
        <p>
          Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
          definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his
          te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo
          vide phaedrum, vim vivendum maiestatis in.
        </p>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/image-text.png"
          size="small"
          centered
        />
        <p>
          Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.
          Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute
          at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi
          te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
          convenire mnesarchum eu per, quas minimum postulant per id.
        </p>
      </Segment>
      <br />
      <br />
      <Segment>
        <p>
          Te eum doming eirmod, nominati pertinacia{' '}
          <Image
            src="https://react.semantic-ui.com/images/wireframe/image.png"
            size="mini"
            spaced
          />{' '}
          argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip
          detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur
          vix. Cum ea laoreet recteque electram, eos choro alterum definiebas
          in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
        </p>
      </Segment>
      <p>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="mini"
          spaced="right"
        />
        Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
        definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his
        te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo
        vide phaedrum, vim vivendum maiestatis in.
      </p>
      <p>
        Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei
        ut facer dolores adolescens, no illum aperiri quo, usu odio brute at.
        Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam,
        wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire
        mnesarchum eu per, quas minimum postulant per id.
        <Image
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="mini"
          spaced="left"
        />
      </p>
      <br />
      <br />
      <Segment>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/image-text.png"
          size="small"
          floated="left"
        />
        <p>
          Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
          alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
          referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
          electram, eos choro alterum definiebas in. Vim dolorum definiebas an.
          Mei ex natum rebum iisque.
        </p>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/image-text.png"
          size="small"
          floated="right"
        />
        <p>
          Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
          definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his
          te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo
          vide phaedrum, vim vivendum maiestatis in.
        </p>
        <p>
          Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.
          Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute
          at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi
          te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
          convenire mnesarchum eu per, quas minimum postulant per id.
        </p>
      </Segment>
      <br />
      <br />
      <Image.Group size="tiny">
        <Image src={src} />
        <Image src={src} />
        <Image src={src} />
        <Image src={src} />
      </Image.Group>
      <Divider hidden />
      <Image.Group size="small">
        <Image src={src} />
        <Image src={src} />
        <Image src={src} />
        <Image src={src} />
      </Image.Group>
      <br />
      <br />
      <Image size="small">
        <Label content="Image not found!" icon="warning" />
      </Image>
      <span>Some other content</span>
      <Label content="Image not found!" icon="apple" />
      <br />
      <br />
      <Image
        as="div"
        alt="An example alt"
        size="small"
        src="https://react.semantic-ui.com/images/wireframe/image-text.png"
        srcSet="https://react.semantic-ui.com/images/wireframe/image.png 2x"
      />
    </div>
  )
}

export default ImageDemo
