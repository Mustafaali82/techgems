import React from "react";
import { useParams } from "react-router-dom";

const Story = ({ personalities }) => {
  const { id } = useParams();
  const person = personalities.find((p) => p.id === parseInt(id));

  if (!person) {
    return <p className="error">Personality not found.</p>;
  }

  return (
    <div className="story">
      <div className="story-container">
        <div className="story-header">
          <div className="story-info">
          <img
              src={person.img}
              alt={`${person.name}`}
              className="story-img"
            />
            <h1>{person.name}</h1>
            <p>
              <strong>Born:</strong> {person.born}
            </p>
            <p>
              <strong>Known For:</strong> {person.description}
            </p>
            <div className="story-links">
              <h3>Follow {person.name}:</h3>
              <ul>
                {person.socialLinks.twitter && (
                  <li>
                    <a
                      href={person.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                )}
                {person.socialLinks.linkedin && (
                  <li>
                    <a
                      href={person.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
                {person.socialLinks.website && (
                  <li>
                    <a
                      href={person.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="story-content">
            <h2>The Story</h2>
            <p>{person.story}</p>
        </div>
      </div>
    </div>
  );
};

export default Story;
