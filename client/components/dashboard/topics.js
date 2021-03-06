import React from 'react';

const Topics = ({ topics, removeTopic }) => (
  <div className="tile is-child box" style={{ padding: 0 }}>
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">Current Topics</p>
        <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fa fa-angle-down" aria-hidden="true" />
          </span>
        </a>
      </header>

      <div className="card-content">
        <div className="field is-grouped is-grouped-multiline">
          {topics.length > 0 &&
            topics.map(topic => (
              <div className="control" key={topic.id}>
                <div className="tags has-addons">
                  <span className="tag is-light">{topic.name}</span>
                  <a
                    className="tag is-delete"
                    onClick={() => removeTopic(topic.id)}
                  />
                </div>
              </div>
            ))}
        </div>
        {topics.length === 0 && (
          <div className="content">
            <p>You have not added any topics!</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default Topics;
