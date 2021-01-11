import React, { Component } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (
        projects,
        projIndex
      ) {
        var projectImage = "images/portfolio/" + projects.image;
        var priceTxt = projects.canvas.map((canvas, index) => {
          return (
            <p key={index} className="canvas-price">
              Canvas size: {canvas.size} - {canvas.price}
            </p>
          );
        });
        return (
          <Popup
            key={projIndex}
            trigger={
              <div key={projects.title} className="columns portfolio-item">
                <div className="item-wrap">
                  <a>
                    <img alt={projects.title} src={projectImage} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{projects.title}</h5>
                        <p>{projects.description}</p>
                        {projects.sold ? <React.Fragment><p> SOLD </p><br/></React.Fragment> : <br/>}
                        {priceTxt}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="modal-close" onClick={close}>
                  &times;
                </button>
                <div className="modal-header"> {projects.title} </div>
                <div className="modal-content">
                  <img id="modal-img" alt={projects.title} src={projectImage} />
                  <br />
                  <div id="modal-description">
                    {projects.description}
                    {projects.sold ? <p className="sold-txt"> SOLD </p> : <span>&nbsp;</span>}
                    {priceTxt}
                    {projects.sold ? 
                    <p className="extra-txt">
                      Each piece is unique and cannot be duplicated, however if there is a piece that is SOLD, that you   would like to order, I can create a similar style with colours of choice(including various sizes preferred).
                    </p> : 
                    <span>&nbsp;</span>
                    }
                    {projects.extra.map((extraTxt, index) => {
                      return (
                        <p className="extra-txt" key={index}>
                          {extraTxt.text}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </Popup>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-thirds s-bgrid-halves cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
