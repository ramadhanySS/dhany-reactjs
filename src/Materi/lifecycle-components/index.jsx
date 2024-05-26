import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  align-item: center;
`;

const Input = styled.input`
  width: 94%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

const NewsCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Description = styled.p`
  font-size: 1em;
  margin-bottom: 15px;
`;

const Button = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    const apiKey = "c9268fdafe0b4923ba3845d8d532894d";
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Terjadi kesalahan...");
        }
      })
      .then((data) =>
        this.setState({
          articles: data.articles,
          filterArticles: data.articles,
          isLoading: false,
        })
      )
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filterArticles = this.state.articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchQuery) ||
        article.description.toLowerCase().includes(searchQuery)
    );
    this.setState({ searchQuery, filterArticles });
  };

  render() {
    const { filterArticles, isLoading, error, searchQuery } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <Container>
        <Input
          type="text"
          placeholder="Cari berita..."
          value={searchQuery}
          onChange={this.handleSearch}
        />
        <CardContainer>
          {filterArticles.map((article) => (
            <NewsCard key={article.url}>
              {article.urlToImage && (
                <Image src={article.urlToImage} alt={article.title} />
              )}
              <Title>{article.title}</Title>
              <Description>{article.description}</Description>
              <Button
                href={article.url}
                target="_blank"
                rel="noopener noreferrer">
                Read more
              </Button>
            </NewsCard>
          ))}
        </CardContainer>
      </Container>
    );
  }
}

export default Article;
