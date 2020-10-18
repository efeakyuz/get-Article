import axios from 'axios';
import { parseString } from "xml2js";

const BASE_URL = 'https://www.wired.com/feed/category/culture/latest/rss'

export const getArticle = async() => {
    const article = await axios.get(`${BASE_URL}`)
    .then((response) => response.text())
    .then((responseText) => {
      parseString(responseText, function (err, result) {
          console.log(result.rss.channel);
          return article.result.data;
      });
    })
}