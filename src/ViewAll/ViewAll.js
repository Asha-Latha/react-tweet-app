import React, { useState } from 'react';
import logo from '../3t.png';
import scenary from '../userimag.jpg'
import like1 from '../like1.png';
import like2 from '../like2.png'
import UncontrolledCollapse from 'reactstrap';
import comment from '../comment.png';
import { Navbar, Button, Card, Row, Col, Form, Collapse } from 'react-bootstrap';
import Headroom from 'react-headroom';
import Moment from 'react-moment';
import axios from 'axios';
import '../App.css';
class ViewAll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: logo,
            postImage: scenary,
            image: like1,
            comment: comment,
            likesCount: "",
            userName: "",
            replyText: "",
            loginId: "",
            data: [],
            open: false,
            errors: []

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getReply = (e) => {

        this.setState({ replyText: e.target.value })
        //  console.log(e.target.value);

    }

    imageChange = (tweetId) => {
        this.setState({
            image: like2
        });

        console.log("Inside imageChange")
        console.log(tweetId)

        this.updateLike(tweetId)
    }
    collapse = () => {
        // console.log("Before click" + this.state.open);
        const toggle = !this.state.open
        // console.log(toggle);


        this.setState({

            open: toggle
        });
        // console.log("After click" + this.state.open);

    }
    contentChange = () => {
        // this.setState({
        this.props.history.push('/reply')
        // });
    }
    handleSubmit = tweetId => e => {
        console.log("Inside register handle submit function")
        e.preventDefault();

        console.log(localStorage.getItem('userLoginId'));

        // this.setState(
        //     {loginId:localStorage.getItem('userLoginId')}
        // )
        this.addReply(tweetId)
        // console.log(this.state.loginId);
        console.log(this.state.replyText);
        console.log(tweetId);

    }
    addReply = (tweetId) => {
        let commentTweet = {
            "replyText": this.state.replyText,
            "userLoginId": localStorage.getItem('userLoginId')
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        console.log(' Inside comment  Tweet')
        console.log("Token value :**********" + localStorage.getItem('token'));
        axios.post('http://localhost:9001/v1/Tweet/reply/' + tweetId, commentTweet,

            {
                headers: headers
            })
            .then(response => {
                console.log("commented tweet successfully");
                console.log(response.data)

                //   console.log(response);
                this.props.history.push("/viewTweet");
            }, error => {
                console.error(error);
            })

    }

    updateLike = (id) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        console.log(' Inside Like  Tweet')
        console.log("Token value :**********" + localStorage.getItem('token'));
        axios.put('http://localhost:9500/v1/Tweet/like/' + id, null,

            {
                headers: headers

            })
            .then(response => {
                console.log("liked tweet successfully");
                console.log(localStorage.getItem('userLoginId'))
                axios.get('http://localhost:9500/v1/Tweet/getTweetByUser/' + localStorage.getItem('userLoginId'),

                    {
                        headers: headers

                    })
                    .then(res => {
                        console.log("Calling tweet by User");
                        this.setState({ data: JSON.parse(JSON.stringify(res.data)) })
                        console.log(res);


                    })


            }, error => {
                console.error(error);
            })


    }
    componentDidMount = () => {



        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        console.log(' Inside view  Tweet')
        console.log(localStorage.getItem('userLoginId'))
        console.log("Token value :**********" + localStorage.getItem('token'));
        axios.get('http://localhost:9500/v1/Tweet/getAllTweets',

            {
                headers: headers

            })
            .then(response => {
                console.log("Viewed tweet successfully");
                this.setState({ data: JSON.parse(JSON.stringify(response.data)) })
                console.log(this.state.data)
                console.log(this.state.data[0].likesCount);

            }, error => {
                console.error(error);
            })

    }

    render() {
        const { data } = this.state;
        // console.log("Inside render")
        // console.log(data)
        return (
            <>
                <div>

                    <Headroom>

                        <div className="header">


                            <Navbar className="color-nav" fixed="top"    >
                                <h className="tweet">tweet</h> &nbsp;
                    <img style={{ width: "50px", height: "50px" }}
                                    src={this.state.imageURL}
                                    alt="" />
                                <Navbar.Brand className="view-link1" href="/post" > Post </Navbar.Brand>
                                <Navbar.Brand className="viewall-link1" href="/viewTweet" > View </Navbar.Brand>
                                <Button href="/">Logout</Button> {' '}
                            </Navbar>


                        </div>

                    </Headroom>
                    <div className="contentBody">


                        {this.state.data.map(element => {


                            return <div>

                                <div className="col d-flex justify-content-center mb-3">


                                    <Card style={{ width: '25rem' }}>
                                        <Row>


                                            <Col> {element.userLoginId} </Col>
                                            {/* <Col><DropDown/></Col> */}


                                        </Row>
                                        <Card.Img variant="top" src={this.state.postImage} />
                                        <Row>
                                            <Col>
                                                <div className="likes">
                                                    <img style={{ width: "25px", height: "15px" }}
                                                        src={this.state.image}
                                                        onClick={() => this.imageChange(element.tweetId)}
                                                        // onClick={this.imageChange(element.tweetId)}

                                                        alt="" />

                                                </div>
                                            </Col>
                                            <Col>
                                                <div>
                                                    <img style={{ width: "25px", height: "20px" }}
                                                        src={this.state.comment} onClick={() => this.collapse()}


                                                        alt="" />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Card.Body className="likes">
                                            <Row>
                                                <Col>
                                                    <div>{element.likesCount} likes</div>
                                                </Col>
                                                <Col>
                                                    <Moment fromNow>{element.dateOfPost}</Moment>
                                                </Col>

                                            </Row>

                                            <div>{element.tweetMessage}</div>



                                            <div >
                                                <Button id="collapse" onClick={() => this.collapse()}>
                                                    ViewAllComments
           </Button> <br />
                                                <Collapse in={this.state.open}>
                                                    <div>

                                                        {element.replies.map((comment) => {
                                                            return (
                                                                <div>

                                                                    <p>{comment.userLoginId}   {comment.replyText}</p>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </Collapse>
                                            </div>


                                            <div>
                                                <Form onSubmit={this.handleSubmit(element.tweetId)} id="reply">
                                                    <input placeholder="Add your comment " onChange={this.getReply} />
                                                    <button type="submit">Add</button>
                                                </Form>
                                            </div>






                                        </Card.Body>



                                    </Card>

                                </div>

                            </div>



                        })
                        }





                    </div>





                    <div>
                        <Navbar fixed="bottom" bg="dark" className="footer" >
                            Copyright @ 2021
                  </Navbar>
                    </div>

                </div>
            </>
        );
    }
}
export default ViewAll;