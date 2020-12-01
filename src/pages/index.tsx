import React, { FC, memo } from 'react';
import About from '@/components/About';
import Scatters from '@/components/Scatters';
import styles from './index.less';

interface IProps {}
type GetProps = IProps & any;

const Index: FC = memo<IProps>((props: GetProps) => {
  return (
    <div>
      <Scatters />
      <About />
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
});

export default Index;
