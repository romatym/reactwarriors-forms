import React from "react";
import countries from "../data/countries";
export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      repeatPassword: "",
      country: "1",
      gender: "male",
      agree: true,
      avatar: "",
      errors: {
        username: false,
        password: false,
        repeatPassword: false
      }
    };
  }

  onSubmit = (event) => {

    event.preventDefault();

    console.log("submit");
    const errors = {};

    if (this.state.username.length < 5) {
      errors.username = "Must be at least 5 characters long";
    }
    if (this.state.password.length < 3) {
      errors.password = "Password required";
    }
    if (this.state.repeatPassword !== this.state.password) {
      errors.repeatPassword = "not equal";
    }

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors
      })
    } else {
      this.setState({
        errors: {}
      })

      console.log("submit", this.state);
    }

  }

  onChange = (event) => {
    //event.preventDefault();
    console.log(event.target.name, event.target.value, event.target.checked);
    // console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onChangeAgree = (event) => {
    //event.preventDefault();
    console.log(event.target.name, event.target.value, event.target.checked);
    // console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.checked
      //[event.target.name]: !event.target.value
    });
  }

  onChangeAvatar = event => {
    const reader = new FileReader();
    reader.onload = event => {
      this.setState({
        avatar: event.target.result
      })
      console.log("result", event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  onChangeOld = (event) => {
    event.preventDefault();
    console.log(this.username.value);
  }

  getOptionItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ))
  }

  render() {
    //console.log(this);

    return (
      <div className="form-container card">
        <form className="form card-body">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              ref={node => this.username = node}
              value={this.state.username}
              name="username"
              onChange={this.onChange}
            />
            {this.state.errors.username ? (
              <div className="invalid-feedback">{this.state.errors.username}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter password"
              ref={node => this.password = node}
              value={this.state.password}
              name="password"
              onChange={this.onChange}
            />
            {this.state.errors.password ? (
              <div className="invalid-feedback">this.state.errors.password</div>
            ) : null}
          </div>
          <div className="form-group">
            <label>Repeat password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter repeat password"
              ref={node => this.repeatPassword = node}
              value={this.state.repeatPassword}
              name="repeatPassword"
              onChange={this.onChange}
            />
            {this.state.errors.repeatPassword ? (
              <div className="invalid-feedback">this.state.errors.repeatPassword</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select
              className="form-control"
              id="country"
              value={this.state.country}
              name="country"
              onChange={this.onChange}
            >
              {this.getOptionItems(countries)}
            </select>
          </div>
          <fieldset className="form-group">
            <div>Gender</div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={this.state.gender === "male"}
                //defaultChecked
                onChange={this.onChange}
              ></input>
              <label className="form-check-label" htmlFor="exampleRadios1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={this.onChange}
              ></input>
              <label className="form-check-label" htmlFor="exampleRadios2">
                Female
            </label>
            </div>
          </fieldset>
          <div className="form-group">
            <label htmlFor="avatar">Avatar</label>
            <input
              className="form-control-file"
              type="file"
              id="avatar"
              name="avatar"
              //value={this.state.avatar}
              onChange={this.onChangeAvatar}
            ></input>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="agree"
              name="agree"
              value={this.state.agree}
              onChange={this.onChangeAgree}
            ></input>
            <label className="form-check-label" htmlFor="Agree">
              Confirm the processing of data
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            //onSubmit={this.onSubmit}
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
