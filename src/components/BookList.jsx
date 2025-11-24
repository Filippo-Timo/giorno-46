import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'

class BookList extends Component {
  state = {
    searchQuery: '',
    singleBookID: null
  }

  selectBook = (asin) => { this.setState({ singleBookID: asin }) }


  render() {
    console.log(this.selectBook)
    return (
      <>
        <Row className="justify-content-center">
          <Col className="text-center col-12">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}

              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col xs={12} md={4} key={b.asin}>
                <SingleBook book={b} selectBook={this.selectBook} />
              </Col>
            ))}
        </Row>
      </>
    )
  }
}

export default BookList
