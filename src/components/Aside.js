import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router';

import '../vendor/home';

class Aside extends React.Component{
  constructor(){
    super();
    this.state={
      treeArr : []
    };
    this.getTreeCons = this.getTreeCons.bind(this);
  }

  componentDidMount(){
    this.getTreeCons();
  }

  getTreeCons(){
    // var treeUrl = '/data/test.json';
    var treeUrl = 'http://192.168.2.198/zrt-front-manage/loadMenuTree.do';
    var params = "emplId=1";
    fetch(treeUrl,{
      method: "POST",
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params,
    }).then((res)=>{
      res.json().then((arr)=>{
        this.setState({
          treeArr:arr
        })
      })
    }).catch((error)=>{
      alert('获取信息错误');
    })
  }

  render(){
    let {treeArr} = this.state;
    return(
      <aside>
        <ul className="tree">
          <li>
            <Link to="/"><span>首页</span></Link>
          </li>
          {
            treeArr.map(function (item,index) {
              return(
                <li key={index} className="parentTree">
                  <a href="javascript:;"><span>{item.menuName}</span></a>
                  <ul>
                    {
                      item.children.map(function (item1,index1) {
                        return(
                          <li key={index1}>
                            <Link to={"/"+item1.menuCode} >{item1.menuName}</Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </li>
              )
            })
          }
        </ul>
      </aside>
    )
  }
}

export default Aside;