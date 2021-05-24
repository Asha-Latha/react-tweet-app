import React from 'react';
import { Form, Col, Row, InputGroup } from 'react-bootstrap';
import Axios from 'axios';
class ForgotLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passWord: '',
            loginId: '',
            contactNumber: '',
            errors: []

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getLoginId = (e) => {

        this.setState({ loginId: e.target.value })
        // console.log(e.target.value);

    }
    getcontactNumber = (e) => {

        this.setState({ contactNumber: e.target.value })
        // console.log(e.target.value);

    }
    getPassWord = (e) => {

        this.setState({ passWord: e.target.value })
        // console.log(e.target.value);

    }
    handleSubmit(e) {
        console.log("Inside  handle submit function")
        e.preventDefault();
        // const { firstName, lastName, mailId, passWord,confirmPassword,loginId,contactNumber } = this.state;
        // const errors = this.validate(firstName, lastName, mailId, passWord,confirmPassword, loginId,contactNumber);
        // if (errors.length > 0) {
        //     this.setState({ errors });
        //     return;
        // }
        this.forgot()
    }
    messages = () => {
        const e = this.forgot();

        if (e !== 0) {
            this.setState({ e });
            return;
        }

    }

    forgot = () => {
        const errors = [];
        console.log('forgot password')
        let requestBody = {
            "passWord": this.state.passWord,
            "loginId": this.state.loginId,
            "contactNumber": this.state.contactNumber
        }
        console.log(requestBody);

        Axios.put('http://localhost:9500/v1/User/forgot', requestBody)
            .then(response => {
                console.log("updated password successfully");
                console.log(response);
                this.props.history.push('login')
            }, error => {
                console.log("error encountered");
                console.log(error.response.data.message);
                //     this.setState({
                //                 message:true
                //             });

                errors.push(error.response.data.message);
                //    console.log(errors)
                //    this.messages();

            })

        // return errors;


    }

    render() {
        const { errors } = this.state;
        return (
            <div className="login">
                <div id="ui1">
                    <div className="col d-flex justify-content-center " >



                        <Form onSubmit={this.handleSubmit}>

                            <p id="messageColor">{errors}</p>
                            <Row>
                                <Col>
                                    <Form.Label>Login Id</Form.Label>
                                    <InputGroup className="mb-2 mr-sm-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i class="material-icons">person</i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control placeholder="Enter loginId" onChange={this.getLoginId} />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label>Password</Form.Label>
                                    <InputGroup className="mb-2 mr-sm-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i class="material-icons">lock</i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="password" placeholder="Password" onChange={this.getPassWord} />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label>Contact Number</Form.Label>
                                    <InputGroup className="mb-2 mr-sm-2">

                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i class="material-icons">phone</i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control name="contactNumber" placeholder="Enter contact Number" onChange={this.getcontactNumber} />
                                    </InputGroup>
                                </Col>
                            </Row><br />

                            <div >
                                <button className="btn btn-secondary " onClick={"/login"}>Back</button>
                                <button className="btn btn-secondary " id="loginbutton">Submit</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default ForgotLink;