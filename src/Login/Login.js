import React from 'react';
import { Form, Col, Row, InputGroup, Nav } from 'react-bootstrap';
import axios from 'axios';
import validator from 'validator';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loginId: "",
      passWord: "",
      errors: []

    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // validate = (loginId, passWord) => {
  //    const errors = [];
  //    var passw=  /^[A-Za-z]\w{7,14}$/;
  //   if (!validator.isEmail(loginId)) {
  //   //  alert("Enter valid Email")
  //      errors.push("Enter valid Email")
  //   }

  //   if(passWord.match(passw) == false ){
  //     alert("Password should contain at least one numeric digit, one uppercase and one lowercase letter ")
  //     errors.push("Password should contain at least one numeric digit, one uppercase and one lowercase letter ")
  //   }
  //    return errors;
  // }
  handleSubmit(e) {
    console.log("Inside handle submit functin")
    e.preventDefault();
    // const { loginId, passWord } = this.state;
    // const errors = this.validate(loginId, passWord);
    // if (errors.length > 0) {
    //   this.setState({ errors });
    //   return;
    // }
    this.userLogin()
  }
  getPassWord = (e) => {

    this.setState({ passWord: e.target.value })
    // console.log(e.target.value);

  }
  getLoginId = (e) => {

    this.setState({ loginId: e.target.value })
    // console.log(this.state.mailId)
    // console.log(e.target.value);

  }


  userLogin = async () => {



    console.log(this.state.loginId);
    console.log("  " + this.state.passWord);

    let credentials = btoa(this.state.loginId + ':' + this.state.passWord)

  //  const data1 = await axios.get('http://localhost:9500/v1/User/register?loginId='+this.state.loginId)

    const data = await axios.get('http://localhost:9500/v1/User/loginUsers', {
      headers: {
        "Authorization": "Basic " + credentials
      }
    }

    )

      .then(res => {

        localStorage.setItem('token', res.data.token);
        console.log("Token value is:")
        console.log("Token value :**********" + localStorage.getItem('token'));
        localStorage.setItem('userLoginId', res.data.username);
        console.log(res);
        this.props.history.push("/home")
      },
        error => {
          console.log("got error")
          // console.error(error.message);
          console.log(error.res.data.message);
          alert(error.message)
          // errors.push(error.message)

        }
      );


  }

  render() {
    const { errors } = this.state;
    return (


      <div className="login">
        <div id="ui1">
          <div className="col d-flex justify-content-center " >
            <div id="errormsg" style={{position: 'absolute',marginTop: '-110px', color: 'red'}}>  {errors.map(error => (
              <p data-testid='p' key={error}>Error: {error}</p>
            ))}</div>
            <Form onSubmit={this.handleSubmit}>
          
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
                  <p>Dont have an account?</p>

                </Col>
              </Row>
              <Row>
                <Nav.Link style={{textDecoration: 'underline'}} href="/forgot">Forgot Password</Nav.Link>
                <Nav.Link  style={{textDecoration: 'underline'}} href="/">Sign Up</Nav.Link>
              </Row><br />
              <div >
                <button id="loginbutton">Login</button>
              </div>
           
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;