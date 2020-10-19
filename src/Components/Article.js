import React, { useState, useEffect, useCallback } from "react";
import { Button, Card, CardText, CardTitle, Col, Row } from "reactstrap";
import { parseString } from "xml2js";

function ArticleList() {
  const [article, setArticle] = useState([]);

  const getArticle = useCallback(() => {
    /* axios({
        method: "GET",
        url: `https://www.wired.com/feed/category/culture/latest/rss`,
      }).then((response) => response.text())
      .then((responseText) => {
        parseString(responseText, function (err, result) {
            console.log(result.rss.channel);
            return result;
        });
        setArticle({ datasource: "result" });
    })
    .catch((error) => {
        console.log("Error fetching the feed: ", error);
    })


    }, []); */

    let url = "https://www.wired.com/feed/category/culture/latest/rss";
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        parseString(responseText, function (err, result) {
          console.log(result.rss.channel[0].item);
          setArticle(result.rss.channel[0].item);
          return result.rss.channel[0].item;
        });
      })
      .catch((error) => {
        console.log("Error fetching the feed: ", error);
      });
  }, []);

  useEffect(() => {
    getArticle();
  }, [getArticle]);

  const renderArticle =
    article &&
    article.slice(0,5).map((singleArticle, index) => {
      return (
        <Row key={index}>
          <Col sm="12">
            <Card
              body
              style={{
                marginTop: "2rem",
                marginRight: "1",
                marginLeft: "4rem",
                width: 310,
              }}
            >
              <CardTitle>{singleArticle.title}</CardTitle>
              <CardText>{singleArticle.description}</CardText>
              <Button href={singleArticle.link}>Link</Button>
            </Card>
          </Col>
        </Row>
      );
    });

  return <Row>{renderArticle}</Row>;
}

export default ArticleList;
