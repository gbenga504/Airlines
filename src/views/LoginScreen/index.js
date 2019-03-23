import React from "react";

import "./index.css";
import HTMLTitleAtom from "../../components/HTMLTitleAtom";
import { BoldText, LightText } from "../../components/TextAtom";
import ButtonAtom from "../../components/ButtonAtom";
import TextFieldAtom from "../../components/TextFieldAtom";

export default class LoginScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  onSubmit = async e => {
    e.preventDefault();
    let { email, password } = this.state;
    if (email === "demo" && password === "demo") {
      await this.setState({
        error: ""
      });
      window.localStorage.setItem("user", email);
      this.props.dispatch("/");
    } else {
      this.setState({
        error: "One or more details entered is wrong, please check again."
      });
    }
  };

  render() {
    let { email, password, error } = this.state;

    return (
      <div className="app-container">
        <HTMLTitleAtom title="Login | Realtime airline data" />
        <div className="row">
          <form className="login__form col s12 m8 offset-m2">
            <BoldText className="col s12 login__text login__on-track">
              You are on track!
            </BoldText>
            <LightText className="col s12 login__please-track login__text">
              Please login
            </LightText>
            <TextFieldAtom
              id="email"
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
              type="email"
              label="Email"
              labelClassName="login__form-label"
            />
            <TextFieldAtom
              id="password"
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
              label="Password"
              labelClassName="login__form-label"
              validate
            />
            <div className="col s12 offset-m2 m8 login__form-submit-btn">
              <ButtonAtom title="Log In" onClick={this.onSubmit} />
            </div>
            <LightText className="col s12 login__text login__form-error">
              {error}
            </LightText>
            <LightText className="col s12 login__text login__form-no-account">
              Don't have an accout?{" "}
              <LightText className="login__form-signup">Sign Up</LightText>
            </LightText>
          </form>
        </div>
      </div>
    );
  }
}
