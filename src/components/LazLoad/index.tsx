import React, {FC, lazy, memo, ReactElement, Suspense, useCallback} from 'react';

export interface ILazLoad {
  component: JSX.Element & any;
  delay: number;
}

const LazLoad: FC<ILazLoad> = memo<ILazLoad>((props: ILazLoad): JSX.Element & ReactElement => {

  const _renderLazy = useCallback((): JSX.Element | any => {
    let Lazy;
    const { component, delay, ...other } = props;

    if(!component || component.constructor.name !== 'Promise') {
      Lazy = import('./error');
    }

    Lazy = lazy((): Promise<any> => new Promise((resolve, reject) => {
      setTimeout((): void => {
        resolve(component);
      }, delay | 300);
    }))

    return <Lazy {...other}/>;
  }, []);
  return (
    <>
      <Suspense fallback={<div>Loading....</div>}>
        {_renderLazy()}
      </Suspense>
    </>
  );
});

export default LazLoad;
