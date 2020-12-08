import React, { FC, memo } from 'react';

interface IProps {}

const Error: FC = memo<IProps>((): JSX.Element => {
  return (
    <>
      组件引入错误
    </>
  );
});

export default Error;
