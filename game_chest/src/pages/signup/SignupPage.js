import React, { Component } from 'react';
import './SignupPage.css'
import {
    Col, Form,
    FormGroup, Label, Input,
    Button,
    Table,
} from 'reactstrap';
import { Redirect } from 'react-router-dom'
const colStyle =
{
    margin: "0pt",
    padding: "25pt",
    fontSize: "24pt",
};


class SignupPage extends Component {

    constructor(props) {
        super(props);

        //this.switchBool = this.switchBool.bind(this);
        //this.onChange = this.onChange.bind(this);

        this.state = {
            redirect: false
        };
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/main' />
        }
    }

    // function getBool() {
    //   console.log("got bool", testBoolean)
    //   return testBoolean;
    // }
    //<Input type="text" name="testInput" id="tagID" placeholder="ABCDEF" value={this.state.textInput} onChange={this.onChange} />

    render() {
        return (
            <div className="App">
                <div className="topbar">
                    <h1 style={{ color: "#FFFFFF", WebkitTextStroke: "0.04em black", fontSize: "64pt", margin: "0pt" }}>Game Chest</h1>
                </div>
                <div className="background">
                    <div className="buffer">

                    </div>
                    <Form className="form">
                        <Col style={colStyle}>
                            <FormGroup>
                                <table align="right">
                                    <td alignContent="left" width="100%">
                                        <Label style={{ alignContent: "right" }}>User Name</Label>
                                    </td>
                                    <td>
                                        <Input
                                            style={{ width: "250px" }}
                                            type="username"
                                            name="User Name"
                                            id="exampleUsername"
                                            placeholder="usernumberone"
                                        />
                                    </td>
                                </table>
                            </FormGroup>
                        </Col>
                        <Col style={colStyle}>
                            <FormGroup>
                                <table align="right">
                                    <td alignContent="left" width="100%">
                                        <Label>Password</Label>
                                    </td>
                                    <td>
                                        <Input
                                            style={{ width: "250px" }}
                                            type="password"
                                            name="Password"
                                            id="examplePassword"
                                            placeholder="***********"
                                        />
                                    </td>
                                </table>
                            </FormGroup>
                        </Col>
                        <Col style={colStyle}>
                            <FormGroup>
                                <table align="right">
                                    <td alignContent="left" width="100%">
                                        <Label>Confirm Password</Label>
                                    </td>
                                    <td>
                                        <Input
                                            style={{ width: "250px" }}
                                            type="password"
                                            name="Confrim"
                                            id="exampleConfirm"
                                            placeholder="***********"
                                        />
                                    </td>
                                </table>
                            </FormGroup>
                        </Col>
                        <Col style={colStyle}>
                            <FormGroup>
                                <table align="right">
                                    <td alignContent="left" width="100%">
                                        <Label>Email</Label>
                                    </td>
                                    <td>
                                        <Input
                                            style={{ width: "250px" }}
                                            type="email"
                                            name="Email"
                                            id="exampleEmail"
                                            placeholder="person@people.com"
                                        />
                                    </td>
                                </table>
                            </FormGroup>
                        </Col>
                        {this.renderRedirect()}
                        <button className="signbutton" style={{WebkitTextStroke: "0.02em black",}} onClick={this.setRedirect}>Submit</button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default SignupPage;