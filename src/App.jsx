import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
// import AllTheBooks from './components/AllTheBooks'
import { Container, Row, Col } from 'react-bootstrap'
import BookList from './components/BookList'
import CommentArea from './components/CommentArea'
import { Component } from 'react'


import fantasy from './data/fantasy.json'

class App extends Component {

  state = {
    idOfBook: null
  }

  changeAppState = (id) => {
    this.setState({
      idOfBook: id,
    })
  }

  render() {

    return (
      <>
        <MyNav />
        <Container>
          <Welcome />
          {/* <AllTheBooks /> */}
          <Row>
            <Col className="col-8" >
              <BookList books={fantasy} />
            </Col>
            <Col className="col-4">
              <CommentArea />
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </>
    )
  }
}

export default App
