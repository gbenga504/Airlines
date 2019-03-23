import React from "react";

import "./index.css";
import HTMLTitleAtom from "../../components/HTMLTitleAtom";
import { BoldText, LightText } from "../../components/TextAtom";
import ButtonAtom from "../../components/ButtonAtom";

export default class LoginScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <HTMLTitleAtom title="Login | Realtime airline data" />
        <div className="row">
          <form className="login__form col s12 m8 offset-m2">
            <BoldText className="col s12 login__text login__on-track">
              You are on track!
            </BoldText>
            <LightText className="col s12 login__please-track login__text">
              Please login
            </LightText>
            <div className="row">
              <div className="input-field col s12 offset-m2 m8">
                <input id="email" type="email" className="validate" />
                <label className="login__form-label" htmlFor="email">
                  Email
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 offset-m2 m8">
                <input id="password" type="password" className="validate" />
                <label className="login__form-label" htmlFor="password">
                  Password
                </label>
              </div>
            </div>
            <div className="col s12 offset-m2 m8 login__form-submit-btn">
              <ButtonAtom title="Log In" />
            </div>
            <LightText className="col s12 login__text login__form-no-account">
              Don't have an accout?{" "}
              <LightText className="login__form-signup">Sign Up</LightText>
            </LightText>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
