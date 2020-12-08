import React, { FC, memo, useContext, useCallback } from 'react';

import {IContext ,SearchContext } from './searchContext';

interface IProps {}

type GProps = IProps & any;

const Consumer: FC = memo<IProps>((): JSX.Element => {

  const consumerContext = useContext(SearchContext);

  const handleOnClick = useCallback(() => {
    const { dispatch } = consumerContext as any;
    dispatch({
      type: 'TEXT',
      payload: 'consumer test'
    });

  }, []);

  return (
    <>
      <h1 onClick={handleOnClick}>consumer: {consumerContext?.state}</h1>
    </>
  );
});

export default Consumer;
