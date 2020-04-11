import React, { Component } from "react";

/* Import Components */
import CheckBox from "../components/CheckBox";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Button from "../components/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        organizationName: "",
        typeOfRegistration:[],
       	yearOfRegistration: [], 
       	registrationNumber: "",
        registeredUnder: "",
        causes:[],
        country: [],
        city:"",
        state:"",
        pinCode:"",
        address_line1:"",
        address_line2:"",
        aboutTheNGO: "",
        url:""
      },
      causesOptions:["Livelihood Development & Economic Empowerment","No Hunger & Malnutrition", "Quality Education","Gender Empowerment"],
      typeOfRegistrationOptions:["NGO","Rotary Club"],
      yearOfRegistrationOptions: ["2004", "2007", "2000","2002","1998"],
      countryOptions: ["India", "USA", "Japan", "Russia"]
    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleRegNo = this.handleRegNo.bind(this);
    this.handleOrgName = this.handleOrgName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleOrgName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          organizationName: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleRegNo(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          registrationNumber: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          aboutTheNGO: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.causes.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.causes.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.causes, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, causes: newSelectionArray }
    }));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
       newUser: {
        organizationName: "",
        typeOfRegistration:[],
       	yearOfRegistration: [], 
       	registrationNumber: "",
        registeredUnder: "",
        causes:[],
        country: [],
        city:"",
        state:"",
        pinCode:"",
        address_line1:"",
        address_line2:"",
        aboutTheNGO: "",
        url:""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid b " onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"Organization's Name"}
          name={"organizationName"}
          value={this.state.newUser.organizationName}
          placeholder={"Enter Organization's Name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the org */}
        <Input
          inputType={"number"}
          name={"registrationNumber"}
          title={"Registration Number"}
          value={this.state.newUser.registrationNumber}
          placeholder={"Enter your Registration Number"}
          handleChange={this.handleRegNo}
        />{" "}
        {/* Registration Number */}
        <Select
          title={"Type of Registration"}
          name={" typeOfRegistration"}
          options={this.state.typeOfRegistrationOptions}
          value={this.state.newUser.typeOfRegistration}
          placeholder={"Select Type of Registration"}
          handleChange={this.handleInput}
        />{" "}
        {/* Type of Registration */}
        <Select
          title={"Year of Registration"}
          name={" yearOfRegistration"}
          options={this.state.yearOfRegistrationOptions}
          value={this.state.newUser.yearOfRegistration}
          placeholder={"Select Year of Registration"}
          handleChange={this.handleInput}
        />{" "}
        {/* Year of Registration */}
         <Input
          inputType={"text"}
          title={"URL"}
          name={"url"}
          value={this.state.newUser.url}
          placeholder={" "}
          handleChange={this.handleInput}
        />{" "}
        {/*URL */}
        <Select
          title={"Country"}
          name={" country"}
          options={this.state.countryOptions}
          value={this.state.newUser.country}
          placeholder={"Select Country"}
          handleChange={this.handleInput}
        />{" "}
        {/* Country Selection */}
        <Input
          inputType={"text"}
          title={"State"}
          name={"state"}
          value={this.state.newUser.state}
          placeholder={"Enter State"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the state */}
        <Input
          inputType={"text"}
          title={"City"}
          name={"city"}
          value={this.state.newUser.city}
          placeholder={"Enter City's Name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the city */}
        <Input
          inputType={"text"}
          title={"Address Line 1"}
          name={"address_line1"}
          value={this.state.newUser.address_line1}
          placeholder={"Enter address line1"}
          handleChange={this.handleInput}
        />{" "}
        {/* Address Line 1 */}
        <Input
          inputType={"text"}
          title={"Address Line 2"}
          name={"address_line2"}
          value={this.state.newUser.address_line2}
          placeholder={"Enter address line2"}
          handleChange={this.handleInput}
        />{" "}
        {/* Address Line 2 */}
        <Input
          inputType={"text"}
          title={"Pin Code"}
          name={"pinCode"}
          value={this.state.newUser.pinCode}
          placeholder={"Enter Pincode"}
          handleChange={this.handleInput}
        />{" "}
        {/* Pincode */}
        <CheckBox
          title={"Causes we work for: "}
          name={"causes"}
          options={this.state.causesOptions}
          selectedOptions={this.state.newUser.causes}
          handleChange={this.handleCheckBox}
        />{" "}
        {/* Causes*/}
        <TextArea
          title={"About the NGO."}
          rows={10}
          value={this.state.newUser.aboutTheNGO}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
          placeholder={"Help others understand a bit about your organisation"}
        />
        {/* About the NGO */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />	{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
