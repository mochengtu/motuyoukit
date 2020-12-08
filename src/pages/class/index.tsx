import React, { FC, PureComponent } from 'react';
import { Link } from 'umi';
import { List } from 'antd-mobile';



class Index extends PureComponent<FC> {
  state = {

  }

  render() {
    return (
      <div>
        <h1>demo</h1>
        <List>
          <List.Item>
            <Link to="/class/old">component-old</Link>
          </List.Item>
          <List.Item>
            <Link to="/class/new">component-new</Link>
          </List.Item>
          <List.Item>
            <Link to="/class/dva">component-dva</Link>
          </List.Item>
          <List.Item>
            <Link to="/class/context">component-context</Link>
          </List.Item>
          <List.Item>
            <Link to="/class/lazy">component-lazyLoad</Link>
          </List.Item>
        </List>
      </div>
    );
  }
}

export default Index;
