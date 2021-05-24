
import './App.css';
// import FunctionalComp from './Component/FunctionalComp';
// import CC, { ClassComp1 } from './Component/ClassComp';
// import { Click } from './Component/Click';
// import { Header } from './components/common/header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Post from './Post/Post';
import View from './View/View';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import ForgotLink from './ForgotLink/ForgotLink';
import ViewAll from './ViewAll/ViewAll';
import Reply from './Reply/Reply';
import Edit from './Edit/Edit';
import Delete from './Delete/Delete';
import Logout from './Logout/Logout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Registration}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/home' component={Home}></Route>
          <Route path='/forgot' component={ForgotLink}></Route>
          <Route path='/post' component={Post}></Route>
          <Route path='/viewTweet' component={View}></Route>
          <Route path='/viewAllTweets' component={ViewAll}></Route>
          <Route path='/editTweet' component={Edit}></Route>
          <Route path='/deleteTweet' component={Delete}></Route>
          <Route path='/logout' component={Logout}></Route>
          <Route path='/reply' component={Reply}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
