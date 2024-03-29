import React, { useState } from "react";

import "../styles/styles.scss";

const ReadMore = ({ children }) => {
  const text = children;
  let sentenceEnd = text.indexOf(".", 226);
  let charCount = 200;
  charCount = charCount > sentenceEnd ? charCount : sentenceEnd;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="recs__content">
      {isReadMore ? text.slice(0, charCount) : text}
      <button type="button" onClick={toggleReadMore} className="recs__readMore">
        {isReadMore ? "... read more" : "  show less"}
      </button>
    </p>
  );
};

const Recommendations = () => {
  return (
    <div className="recs__container"id="recs">
      <h2 className="recs__header"> Recs </h2>
        <section>
          <div>
            <ReadMore>
              Krista was the true MVP of our Grace Hopper Capstone project, Leashed. Leashed is a cross-platform mobile app that allows users to create profiles for their dogs to connect with local dogs through matching and realtime chat. I worked with Krista for three weeks on the development of this app and no matter what the challenge was, Krista was always the first one to offer assistance in debugging and pair programming. On top of her exceptional collaboration skills, she is also tremendously reliable as an independent worker. She voluntarily took on tasks such as user authentication, implementing the navigation stack/bar, and persisting global user context and was able to push up deliverables in a timely manner which kept our team running like a well-oiled machine. I can attest from first-hand experience that Krista would be an impactful asset to any team.
            </ReadMore>
            <p className="recs__name">- Ashley Tran</p>
            <p className="recs__relationship">
              {`  Ashley worked with Krista on the same team`}
            </p>
          </div>
          <div>
            <ReadMore>
              Krista will be an essential member of any team she works on. When we worked together on our project, "Leashed," she always gave a helping hand whenever she could, and never shied away from a tedious debugging session. Even in times of stress, Krista seemed to keep a sound mind and presence. She contributed even more to the team by 1) coding our user authentication process via Firebase, 2) attaching integral data to our global state so that the team could utilize it via Firebase and React Context, and 3) creating the schema for our project's design plan. She was also great at doing her own research and bringing forth technologies that benefitted the project such as React Native Paper. Krista always has something to show for her work, and her organization and time management skills are top-notch.
            </ReadMore>
            <p className="recs__name">- Tiffany McNerlin</p>
            <p className="recs__relationship">
              {`  Tiffany worked with Krista on the same team`}
            </p>
          </div>
          <div>
            <ReadMore>
              Working with Krista on our first group project for the Grace Hopper Program was an amazing experience. Krista is an outstanding software engineer whose determination to master new technology was not only admirable, but also motivated those around her to dig deeper into learning the logic behind our work. Krista's top priority was understanding and implementing authentication for our application. She took the initiative to thoroughly research JSON web tokens and password hashing on behalf of the team. She got our team up to speed on the steps needed to ensure our site was secure, and during code review, she asked concise, clarifying questions that helped make our code stronger. I would be delighted to have the opportunity to work with Krista again in the future, and I have no doubt that Krista will continue to thrive with whatever company is lucky enough to have her on their team.
            </ReadMore>
            <p className="recs__name">- Jill Sherman</p>
            <p className="recs__relationship">
              {`  Jill worked with Krista on the same team`}
            </p>
          </div>
        </section>
      </div>
  );
}

export default Recommendations;
