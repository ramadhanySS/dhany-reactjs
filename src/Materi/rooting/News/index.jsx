import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import useToggle from "./useToggle";

const Container = styled.div`
  padding: 20px;
  align-item: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
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
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.cardColor};
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

const ButtonTheme = styled.button`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  border-radius: 5px;
  potition: fixed;
  top: 10px;
  z-index: 1;
`;
const lightTheme = {
  background: "#f7f7f7",
  color: "#000",
  cardBackground: "#444",
  cardColor: "#fff",
  buttonBackground: "#333",
  buttonColor: "#fff",
};

const darkTheme = {
  background: "#333",
  color: "#fff",
  cardBackground: "#fff",
  cardColor: "#000",
  buttonBackground: "#fff",
  buttonColor: "#333",
};

const News = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterArticles, setFilteredArticles] = useState([]);
  const [isDarkTheme, toggleTheme] = useToggle();

  const fetchNews = useCallback(async () => {
    const apiKey = "c9268fdafe0b4923ba3845d8d532894d";
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Terjadi kesalahan...");
      }
      const data = await response.json();
      setArticles(data.articles);
      setFilteredArticles(data.articles);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleSearch = useCallback(
    (event) => {
      const searchQuery = event.target.value.toLowerCase();
      const filterArticles = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery) ||
          article.description.toLowerCase().includes(searchQuery)
      );
      setSearchQuery(searchQuery);
      setFilteredArticles(filterArticles);
    },
    [articles]
  );

  if (isLoading) {
    return <p>Memuat...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <Container theme={currentTheme}>
      <ButtonTheme theme={currentTheme} onClick={toggleTheme}>
        {isDarkTheme ? "Light" : "Dark"}
      </ButtonTheme>
      <Input
        type="text"
        placeholder="Cari berita..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <CardContainer>
        {filterArticles.map((article) => (
          <NewsCard key={article.url} theme={currentTheme}>
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
};

export default News;
