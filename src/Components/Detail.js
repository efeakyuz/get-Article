import React, { useCallback, useEffect, useState } from "react";
import { Jumbotron } from "reactstrap";

const story = {
  text:
    "Efe Efe As the presidential election draws closer, online extremists are restive. From private Facebook groups devoted to the QAnon conspiracy theory to alternative social media sites colonized by white supremacists to Telegram group chats for anti-government militias, far-right chatter has risen to a constant hum. Some groups talk endlessly about unsubstantiated claims of voter fraud and the corrupt Democrats supposedly behind it. Others agitate and try to stir people into joining the Army for Trump, a Republican poll-watching effort widely criticized as voter intimidation that has already recruited thousands. Some call for an armed rebellion if President Trump were to lose the election, often via meme. Others actually organize paramilitary training exercises. You could spend days or weeks trying to get to the bottom of what’s a genuine threat and what’s just bravado. Trouble is, there is no bottom.",
};

let wordCount = [];


function Detail() {

    const [pool, setPool] = useState([]);
  const wordCounter = useCallback(() => {
    var wordPool = {};
    var wordArray = story.text.toLowerCase().split(/\W+/);
    wordArray = wordArray.replace(/\b(to|or|is|a|the|for|)\b/g, '').trim();
    console.log(wordArray);
    console.log(wordPool);

    wordArray.forEach((key) => {
      if (wordPool.hasOwnProperty(key)) {
        wordPool[key] += 1;
      } else {
        wordPool[key] = 1;
      }
    });

    wordCount = Object.keys(wordPool).map((key) => {
      return {
        word: key,
        count: wordPool[key],
      };
    });

    wordCount.sort((a, b) => b.count - a.count);
    setPool(wordCount)
  }, []);

  useEffect(() => {
    wordCounter();
    console.log(wordCount);
  }, [wordCounter]);

  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">
          How Online Extremists Could Interfere With the Election
        </h1>
        <p className="lead">
          Far-right factions say they're willing to take action to keep
          President Trump in the White House. The question is whether those
          actions are viable—or dangerous.
        </p>
        <hr className="my-2" />

        <p>{story.text}</p>
        <hr className="my-2" />

        <p className="lead"> Word Count</p>
        {pool.slice(0, 5).map((item, index) => (
          <tr key={index}>
            <td className="words">{item.word}</td>
            <td className="count">{item.count}</td>
          </tr>
          
        ))}
      </Jumbotron>
    </div>
  );
}

export default Detail;
