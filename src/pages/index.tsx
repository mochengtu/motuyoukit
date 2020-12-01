import React, { FC, memo } from 'react';
import About from '@/components/About';
import styles from './index.less';

interface IProps {}
type GetProps = IProps & any;

const Index: FC = memo<IProps>((props: GetProps) => {
  return (
    <div>
      <About />
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
});

export default Index;
