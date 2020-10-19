import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Jumbotron } from "reactstrap";
import { parseString } from "xml2js";

function Detail() {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  const getDetail = useCallback(() => {
    let url = 'https://www.wired.com/feed/category/culture/latest/rss';
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        parseString(responseText, function (err, result) {
          console.log(result.rss.channel[0].item);
          setDetail(result.rss.channel[0].item);
          return result.rss.channel[0].item;
        });
      })
      .catch((error) => {
        console.log("Error fetching the feed: ", error);
      });
  }, []);

  useEffect(() => {
    getDetail();
  }, [getDetail]);

  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Title</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
      </Jumbotron>
    </div>
  );
}

export default Detail;
