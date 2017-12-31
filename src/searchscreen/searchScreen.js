import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { Label, Control, Input, Field, Title, Section, Container, Checkbox, Select, Tag, Delete, Button } from 'bloomer';
import "./searchScreen.css"
class SearchScreen extends Component {
  render() {
    return (
      <div>
        <Section isSize='small' isBold>
          <Container>
            <Field>
              <Title>Search Filter</Title>
            </Field>
            <Field id="classTaken" isGrouped>
              <Label>
                Class taken:
              </Label>
              <Control>
                <Checkbox id="android"> Android </Checkbox>
              </Control>
              <Control>
                <Checkbox id="iOS"> iOS </Checkbox>
              </Control>
              <Control>
                <Checkbox id="rubyOnRails"> Rails </Checkbox>
              </Control>
              <Control>
                <Checkbox id="nodeJS"> Node Js </Checkbox>
              </Control>
              <Control>
                <Checkbox id="reactNT"> React Native </Checkbox>
              </Control>
            </Field>
            <Field isGrouped id="exp">
              <Label>
                Experience:
              </Label>
              <Control id="junior">
                <Checkbox > Junior </Checkbox>
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
                <Button isColor='danger'>Search</Button>
              </Control>
              <Control>
                <Button isColor='danger'>Cancel</Button>
              </Control>
              <Control>
                <Button isColor='danger'>Clear All</Button>
              </Control>

            </Field>
          </Container>
        </Section>
      </div>
    )
  }
}

export default SearchScreen