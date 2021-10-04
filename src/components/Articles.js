import React from "react";
import ReactDOM from "react-dom";
import PopularitySort from "../components/PopularitySort";

const Articles = ({ articles }) => {
  const ARTICLES = [
    {
      title: "This is a test",
      upvotes: 12,
      date: "2021-01/24",
    },
  ];

  ReactDOM.render(
    <React.StrictMode>
      <PopularitySort articles={ARTICLES} />
    </React.StrictMode>,
    document.getElementById("root")
  );

  return (
    <div className="pending">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr data-testid="article" key={`article-index-${index + 1}`}>
              <td data-testid="article-title">{article.title}</td>
              <td data-testid="article-upvotes">{article.upvotes}</td>
              <td data-testid="article-date">{article.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Articles;
