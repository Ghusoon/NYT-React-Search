import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Nav from "../../components/Nav";

class articales extends Component {
  state = {
    articales: [],
    title: "",
    URL: "",
   date: ""
  };

  componentDidMount() {
    this.loadArticales();
  }

  loadArticales = () => {
    API.search()
      .then(res =>{
        
        let articlesArray = [];

    res.data.response.docs.map(({snippet, web_url, pub_date, _id}) => {
        articlesArray.push({title: snippet, url: web_url, date: pub_date, articleId: _id})
      .catch(err => console.log(err));
    }
    )}
    )}

  deleteArticale = id => {
    API.deleteSavedArticle(id)
      .then(res => this.loadArticales())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.getSavedArticles({
        title: this.state.title,
        URL: this.state.URL,
        date: this.state.date
      })
        .then(res => this.loadarticales())
        .catch(err => console.log(err));
    }
  };
  

  render() {
    return (
      <div>
      <Nav />
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>New York Times Search</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.numRecords}
                onChange={this.handleInputChange}
                name="numRecords"
                placeholder="numRecords (required)"
              />
              <Input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
                placeholder="startYear (Optional)"
              />
              <Input
              value={this.state.endYear}
              onChange={this.handleInputChange}
              name="endYear"
              placeholder="endYear (Optional)"
            />
              <FormBtn
                disabled={!( this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit 
              </FormBtn>
            </form>
          </Col>
        
        </Row>
      </Container>
      </div>
    );
  }
}

export default articales;
