import React from 'react';
import logo from '../logo.png';
import { Navbar, Form, Button } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';

class Edit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageURL: logo,
            "loginId": "",
            "tweetMessage": "",
            "hashTag": "",
            "data": []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getTweetMessage = (e) => {
        this.setState({ tweetMessage: e.target.value })
        console.log(this.statetweetMessage);



    }
    getHashTag = (e) => {
        this.setState({ hashTag: e.target.value })
    }


    handleSubmit = tweetId => e => {
        console.log("Inside add post handle submit functin")
        e.preventDefault();

        this.editPost(tweetId)
    }
    componentDidMount = () => {



        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        console.log(' Inside view  Tweet')
        console.log(localStorage.getItem('userLoginId'))
        console.log("Token value :**********" + localStorage.getItem('token'));
        axios.get('http://localhost:9500/v1/Tweet/getTweetByUser/' + localStorage.getItem('userLoginId'),

            {
                headers: headers

            })
            .then(response => {
                console.log("Viewed tweet successfully");
                this.setState({ data: JSON.parse(JSON.stringify(response.data)) })
                console.log(this.state.data)
                // console.log(this.state.data[0].likesCount);

            }, error => {
                console.error(error);
            })

    }

    editPost = (tweetId) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        console.log('edit  Tweet')
        // let headers = new Headers();
        let editTweets = {
            "tweetMessage": this.state.tweetMessage,
            "hashTag": this.state.hashTag

        }

        console.log("Token value :**********" + localStorage.getItem('token'));
        axios.put('http://localhost:9500/v1/Tweet/updateTweet/' + tweetId, editTweets,

            {
                headers: headers
            })
            .then(response => {
                console.log("edited tweet successfully");
                console.log(response.data)
                // localStorage.setItem('tweetId',response.data.tweetId)
                // console.log(response);
                this.props.history.push("/home");
            }, error => {
                console.error(error);
            })
    }



    render() {
        const { data } = this.state;
        return (
            <>
                <div className="header">

                    <Navbar className="color-nav" fixed="top"    >
                        <h className="tweet">tweet</h> &nbsp;
                    <img style={{ width: "45px", height: "45px" }}
                            src={this.state.imageURL}
                            alt="" />
                        <Navbar.Brand className="view-link1" href="/viewTweet" > View </Navbar.Brand>
                        <Navbar.Brand className="viewall-link1" href="/viewAllTweets" > ViewAll </Navbar.Brand>
                        <Button href="/">Logout</Button> {' '}


                    </Navbar>
                </div>

                <div id="uipost">

                    {this.state.data.map(element => {
                        return <Form onSubmit={this.handleSubmit(element.tweetId)}>



                            <div >
                                <input type="text" placeholder="Enter text" id="post" name="post" rows="5" cols="44" value={element.tweetMessage} onChange={this.getTweetMessage} ></input>
                            </div>
                            <br />
                            <Form.Row>
                                <Form.Group controlId="formGridCity" >

                                    <Form.Control placeholder="hashtag" value={element.hashTag} onChange={this.getHashTag} />
                                </Form.Group>
                            </Form.Row>


                            <div id="postbutton" >
                                <button className="btn btn-secondary " id="postb">Edit</button>
                                {/* <Button variant="primary" id="postb">Post</Button>{' '} */}
                                {/* <button class="btn btn-primary btn-lock btn-lg "  name="submit" type="submit"  >Post</button> */}
                            </div>
                        </Form>

                    })}
                </div>



                <div>
                    <Navbar fixed="bottom" bg="dark" className="footer" >
                        Copyright @ 2021
                  </Navbar>
                </div>
            </>
        );
    }
}
export default Edit;