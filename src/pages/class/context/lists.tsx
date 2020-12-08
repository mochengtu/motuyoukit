import React, { memo, useContext } from 'react';
import { List } from 'antd-mobile';
import { SearchContext } from './searchContext';


interface IProps {}

const Lists = memo<IProps>((): JSX.Element => {

  // 接收数据
  const contextType = useContext(SearchContext);
  console.log("00000",contextType)

  return (
    <>
      <h3 style={{textAlign: 'center'}}>Text: {contextType?.state}</h3>
      <List>
        {contextType?.lists && contextType?.lists.map((item: string, index: number): any => {
          return <List.Item key={index}>{item}</List.Item>
        })}
      </List>
    </>
  );
});

export default Lists;
