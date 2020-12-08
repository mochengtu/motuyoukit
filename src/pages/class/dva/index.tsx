import React, { memo, } from 'react';
import { connect } from 'dva';
import List from './lists';
import Search from './Search';
interface IProps {}



const Index = memo<IProps>((props: IProps & any): any => {
  return (
    <>
      <Search {...props} />
      <List {...props} />
    </>
  );
});



export default connect((search) => ({...search}))(Index);
