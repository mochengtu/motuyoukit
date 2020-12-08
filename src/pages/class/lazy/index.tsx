import React, {FC, lazy, memo, useState, useEffect, Suspense} from 'react';
import PageLoading from '@/components/PageLoading';

const Demo = lazy((): Promise<any> => import('./demo'));

interface IProps {}

const Index: FC = memo<IProps>((): JSX.Element => {
  const [flag, setFlag] = useState<boolean>(false);


  useEffect((): void => {
    setTimeout((): void => {
      setFlag(true)
    }, 2000);
  }, []);


  return (
    <>
      {flag ? (
        <Suspense fallback={<PageLoading />}>
          <Demo />
        </Suspense>
      ): null}

    </>
  );
});

export default Index;
