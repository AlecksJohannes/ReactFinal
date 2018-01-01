import React, { Component } from "react";
import "bulma/css/bulma.css";
import {
  Label,
  Control,
  Input,
  Field,
  Title,
  Section,
  Container,
  Checkbox,
  Select,
  Tag,
  Delete,
  Button
} from "bloomer";
import "./searchScreen.css";

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startPoint: 0,
      endPoint: 10,
      language: ["english"],
      additionalSkill: ["agile"]

    };
  }
  handleSeachFilter(e) {
    e.preventDefault();
    this.props.onFilter = false
    this.props.dataSearch = this.state
  }

  removeA(array, item) {
    for(var i = array.length - 1; i >= 0; i--) {
      if(array[i] == item) {
         array.splice(i, 1);
      }
    }
    return array
  }

  setValue(field, event) {

    var newState = Object.assign({}, this.state);
    if (newState[field] === undefined) {
      newState[field] = [];
      if (event.target.checked || (event.target.selected === undefined && event.target.value)) {
        newState[field].push(event.target.value);
        this.setState(newState);
      }  
    } 
    else 
    {
      if (event.target.checked ||  (event.target.selected === undefined && event.target.value)) {
        newState[field].push(event.target.value);
        this.setState(newState);
      } else {
        newState[field]= this.removeA(newState[field], event.target.value);
        this.setState(newState);
      }
    }
  }

  delValue(field,event){
    var newState = Object.assign({}, this.state);
    if (newState[field] != undefined) {
      newState[field]= this.removeA(newState[field], event.target.value);
      this.setState(newState);
    }
  }

  handleClear(){
    window.location.reload();
  }

  render() {

    let tagLanguages = this.state.language.map((lan) => { 
      return  (
      <Tag isSize="medium">
        {lan} <Delete isSize="medium" value={lan} onClick={this.delValue.bind(this, "language")} />
      </Tag> )
    })

    let tagSkills = this.state.additionalSkill.map((skill) => { 
      return  (
      <Tag isSize="medium">
        {skill} <Delete isSize="medium" value={skill} onClick={this.delValue.bind(this, "additionalSkill")} />
      </Tag> )
    })

    return (
      <div>
        <Section isSize="small" isBold>
          <Container>
            <form
              className="searchForm"
              onSubmit={this.handleSeachFilter.bind(this)}
            >
              <Field>
                <Title>Search Filter</Title>
              </Field>
              <Field id="classTaken" isGrouped>
                <Label>Class taken:</Label>
                <Control>
                  <Checkbox
                    id="android"
                    value="android"
                    onChange={this.setValue.bind(this, "classTaken")}
                  >
                    Android
                  </Checkbox>
                </Control>
                <Control>
                  <Checkbox
                    id="iOS"
                    value="iOS"
                    onChange={this.setValue.bind(this, "classTaken")}
                  >
                    iOS
                  </Checkbox>
                </Control>
                <Control>
                  <Checkbox
                    id="rubyOnRails"
                    value="rubyOnRails"
                    onChange={this.setValue.bind(this, "classTaken")}
                  >
                    Rails
                  </Checkbox>
                </Control>
                <Control>
                  <Checkbox
                    id="nodeJS"
                    value="nodeJS"
                    onChange={this.setValue.bind(this, "classTaken")}
                  >
                    Node Js
                  </Checkbox>
                </Control>
                <Control>
                  <Checkbox
                    id="reactNT"
                    value="reactNT"
                    onChange={this.setValue.bind(this, "classTaken")}
                  >
                    React Native
                  </Checkbox>
                </Control>
              </Field>
              <Field isGrouped id="exp">
                <Label>Experience:</Label>
                <Control>
                  <Checkbox
                    id="junior"
                    value="junior"
                    onChange={this.setValue.bind(this, "experience")}
                  >
                    Junior
                  </Checkbox>
                </Control>
                <Control>
                  <Checkbox
                    id="midLevel"
                    value="midLevel"
                    onChange={this.setValue.bind(this, "experience")}
                  >
                    Mid-level
                  </Checkbox>
                </Control>
                <Control>
                  <Checkbox
                    id="senior"
                    value="senior"
                    onChange={this.setValue.bind(this, "experience")}
                  >
                    Senior
                  </Checkbox>
                </Control>
              </Field>
              <Field isGrouped id="location">
                <Label>Location:</Label>
                <Control>
                  <Checkbox
                    id="HCM"
                    value="HoChiMinh"
                    onChange={this.setValue.bind(this, "location")}
                  >
                    HoChiMinh
                  </Checkbox>
                </Control>
                <Control>
                  <Checkbox
                    id="HN"
                    value="HaNoi"
                    onChange={this.setValue.bind(this, "location")}
                  >
                    HaNoi
                  </Checkbox>
                </Control>
                <Control>
                  <Checkbox
                    id="DN"
                    value="DaNang"
                    onChange={this.setValue.bind(this, "location")}
                  >
                    DaNang
                  </Checkbox>
                </Control>
              </Field>
              <Field isGrouped id="language">
                <Label>Language:</Label>
                <Control>
                  <Select
                    isSize="small"
                    onChange={this.setValue.bind(this, "language")}
                  >
                    <option value="English">English</option>
                    <option value="French">French</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Spanish">Spanish</option>
                  </Select>
                </Control>
              </Field>
              <Field isGrouped id="listLanguage">
                <Label />
                <Control>
                  {tagLanguages}
                </Control>
              </Field>
              <Field isGrouped id="addSkill">
                <Label>Additional Skills:</Label>
                <Control>
                  <Select
                    isSize="small"
                    onChange={this.setValue.bind(this, "additionalSkill")}
                  >
                    <option value="agile">Agile</option>
                    <option value="bigData">Big Data</option>
                    <option value="ecommerce">Ecommerce</option>
                  </Select>
                </Control>
              </Field>
              <Field isGrouped id="addSkill">
                <Label />
                <Control>
                  { tagSkills }
                </Control>
              </Field>
              <Field isGrouped id="language">
                <Label>Score:</Label>
                <Input
                  isSize="small"
                  className="score"
                  defaultValue={0}
                  onChange={event =>
                    this.setState({ startPoint: event.target.value })
                  }
                />
                &nbsp; to &nbsp;
                <Input
                  isSize="small"
                  className="score"
                  defaultValue={10}
                  onChange={event =>
                    this.setState({ endPoint: event.target.value })
                  }
                />
                <span className="scale"> (scale 1 - 10) </span>
              </Field>
              <Field isGrouped className="btnFunction">
                <Control>
                  <Button isColor="danger" type="submit" value="Submit">
                    Search
                  </Button>
                </Control>
                <Control>
                  <Button isColor="danger" onClick={this.props.handleCancel}>Cancel</Button>
                </Control>
                <Control>
                  <Button isColor="danger" onClick={this.handleClear}>Clear All</Button>
                </Control>
              </Field>
            </form>
          </Container>
        </Section>
      </div>
    );
  }
}

export default SearchScreen;
