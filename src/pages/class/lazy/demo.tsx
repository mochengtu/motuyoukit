import React, {FC, memo} from 'react';

interface IProps {}

const Demo: FC = memo<IProps>((): JSX.Element => {

  return (
    <>
      <h1>demo</h1>
    </>
  );
});

export default Demo;
