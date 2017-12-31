import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { Label, Control, Input, Field, Title, Section, Container, Checkbox, Select, Tag, Delete, Button } from 'bloomer';
import "./searchScreen.css"
class SearchScreen extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //   }

  // }
  handleSeachFilter(){
    
  };
  removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

  setValue(field, event){
    var newState = Object.assign({}, this.state)
    if(newState[field] === undefined) {
      newState[field] = []
      newState[field].push(event.target.value)
      this.setState(newState)
    } else {
      newState[field].push(event.target.value)
      this.setState(newState)
    }
    console.log(this.state)
  };

  render() {
    return (
      <div>
        <Section isSize='small' isBold>
          <Container>
            <form className="searchForm" onSubmit={this.handleSeachFilter()}>
              <Field>
                <Title>Search Filter</Title>
              </Field>
              <Field id="classTaken" isGrouped>
                <Label>
                  Class taken:
                </Label>
                <Control>
                  <Checkbox id="android" value="android" onChange={this.setValue.bind(this,'classTaken')} > Android </Checkbox>
                </Control>
                <Control>
                  <Checkbox id="iOS" value="iOS" onChange={this.setValue.bind(this,'classTaken')}> iOS </Checkbox>
                </Control>
                <Control>
                  <Checkbox id="rubyOnRails" value="rubyOnRails" onChange={this.setValue.bind(this, 'classTaken')}> Rails </Checkbox>
                </Control>
                <Control>
                  <Checkbox id="nodeJS" value="nodeJS" onChange={this.setValue.bind(this, 'classTaken')}> Node Js </Checkbox>
                </Control>
                <Control>
                  <Checkbox id="reactNT" value="reactNT" onChange={this.setValue.bind(this, 'classTaken')}> React Native </Checkbox>
                </Control>
              </Field>
              <Field isGrouped id="exp">
                <Label>
                  Experience:
                </Label>
                <Control id="junior">
                  <Checkbox value="junior" onChange={this.setValue.bind(this, 'experience')}> Junior </Checkbox>
                </Control>
                <Control>
                  <Checkbox id="midLevel"> Mid-level </Checkbox>
                </Control>
                <Control>
                  <Checkbox id="senior"> Senior </Checkbox>
                </Control>
              </Field>
              <Field isGrouped id="location">
                <Label>
                  Location:
                </Label>
                <Control id="HCM">
                  <Checkbox > HoChiMinh </Checkbox>
                </Control>
                <Control>
                  <Checkbox id="HN"> HaNoi</Checkbox>
                </Control>
                <Control>
                  <Checkbox id="DN"> DaNang </Checkbox>
                </Control>
              </Field>
              <Field isGrouped id="language">
                <Label>
                  Language:
                </Label>
                <Control>
                  <Select isSize='small'>
                    <option>English</option>
                    <option>French</option>
                    <option>Chinese</option>
                    <option>Japanese</option>
                    <option>Spanish</option>
                  </Select>
                </Control>
              </Field>
              <Field isGrouped id="listLanguage">
                <Label>
                </Label>
                <Control>
                  <Tag isSize='medium'>
                    English <Delete isSize='medium' />
                  </Tag>
                  <Tag isSize='medium'>
                    French <Delete isSize='medium' />
                  </Tag>
                </Control>
              </Field>
              <Field isGrouped id="language">
                <Label>
                  Additional Skills:
                </Label>
                <Control>
                  <Select isSize='small'>
                    <option>Agile</option>
                    <option>Big Data</option>
                    <option>Ecommerce</option>
                  </Select>
                </Control>
              </Field>
              <Field isGrouped id="listLanguage">
                <Label>
                </Label>
                <Control>
                  <Tag isSize='medium'>
                    Agile <Delete isSize='medium' />
                  </Tag>
                  <Tag isSize='medium'>
                    Big Data <Delete isSize='medium' />
                  </Tag>
                </Control>
              </Field>
              <Field isGrouped id="language">
                <Label>
                  Score:
                </Label>
                <Input isSize="small" className="score">
                </Input>
                &nbsp;  to  &nbsp;
                <Input isSize="small" className="score">
                </Input>
                <span className="scale"> (scale 1 - 10)  </span>
              </Field>
              <Field isGrouped className="btnFunction">
                <Control>
                  <Button isColor='danger' type="submit" value="Submit">Search</Button>
                </Control>
                <Control>
                  <Button isColor='danger'>Cancel</Button>
                </Control>
                <Control>
                  <Button   isColor='danger' >Clear All</Button>
                </Control>
              </Field>
            </form>  
          </Container>
        </Section>
      </div>
    )
  }
}

export default SearchScreen