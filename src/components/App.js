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
      avatar: ""
    };
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
          <button type="submit" className="btn btn-primary w-100"
            onChange={this.onChange}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
