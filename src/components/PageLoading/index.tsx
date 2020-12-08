import React, { memo } from 'react';
import { Spin, Space } from 'antd';


interface IProps {}

type GProps = IProps | any;

const Index =  memo<IProps>((props: IProps): GProps => {
  const delay: number = 500;
  return (
    <>
      <Space size="middle" {...delay}>
        <Spin size="large" />
      </Space>,
    </>
  );
})

export default Index;
