'use strict';


import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory ,IndexRoute} from 'react-router';

import Header from '../components/Header';
import Aside from '../components/Aside';
import Article from '../components/Article';
import Article2 from '../components/Article2';
import Article3 from '../components/Article3';

import '../vendor/home';

var App = React.createClass({
    render: function() {
        return (
            <div className="container">
              <Header/>
              <ul className="msg_select">
                <li><a href="javascript:;"><span><img src="src/images/personal.png" alt=""/></span><span>个人信息</span></a></li>
                <li><a href="javascript:;"><span><img src="src/images/setting.png" alt=""/></span><span>设置</span></a></li>
                <li><a href="javascript:;"><span><img src="src/images/lock.png" alt=""/></span><span>锁屏</span></a></li>
                <li><a href="javascript:;"><span><img src="src/images/exit.png" alt=""/></span><span>注销</span></a></li>
              </ul>
              <section>
                <Aside/>
                {this.props.children}
              </section>
            </div>
        );
    }
});

//最终渲染
ReactDom.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Article}/>
      <Route path='#/CUSTOM_DITCH' component={Article2}></Route>
      <Route path='#/CUSTOM_SALE' component={Article3}></Route>
    </Route>
  </Router>
), document.getElementById('app'));
