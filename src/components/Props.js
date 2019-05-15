import React from "react";
import { PROPS } from "./templates";
import "./main.css";

class PropsComp extends React.Component {
  render() {
    return (
      <div>
        {PROPS.map(prop => {
          return (
            <div className="prop-card">
              <div className="title">{prop.title}</div>
              <div className="type">Type:- {prop.type}</div>
              <div className="required">Required:- {prop.required}</div>
              <div className="default">Default Value:-{prop.default}</div>
              <div className="desc">{prop.desc}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PropsComp;
