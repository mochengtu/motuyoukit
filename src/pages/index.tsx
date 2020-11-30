import React, { FC, memo } from 'react';
import styles from './index.less';


const Index: FC = memo<{}>((props: any) => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
});

export default Index;
