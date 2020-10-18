import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
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
          console.log(result);
          return result;
        });
        setArticle({ datasource: "result" });
      })
      .catch((error) => {
        console.log("Error fetching the feed: ", error);
      })

    }, []);


  useEffect(() => {
    getArticle();
  }, [getArticle]);

 /*  let array = article.map((singleArticle) => {
    console.log(singleArticle.item);
      return(array)
      
  }); */

  /* const renderArticle =
    article.map((singleArticle) => {
      return (
        <Row>
          <Col sm="6">
            <Card body>
       <CardTitle>{singleArticle.rss.$.version}</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
        </Row>
      );
    }); */

  return (
    <Row>
      <h1>Buraya</h1>
      {/* {renderArticle} */}
    </Row>
  );
}

export default ArticleList;
