import React, { memo, } from 'react';
import { List } from 'antd-mobile';
interface IProps {}

const Lists = memo<IProps>((props: IProps & any): any => {
  const { text, lists } = props.search;
  console.log("GetId888888: ", props.search);
  return (
    <>
      <h3 style={{textAlign: 'center'}}>Text: {text}</h3>
      <List>
        {lists && lists.map((item: string, index: number): any => {
          return <List.Item key={index}>{item}</List.Item>
        })}

      </List>
    </>
  );
});

export default Lists;
