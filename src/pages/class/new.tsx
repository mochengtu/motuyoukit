import React, { memo, } from 'react';
import { Link } from 'umi';
interface IProps {}

const Old = memo<IProps>((props: IProps & any): any => {
  console.log("GetId: ", props);
  return (
    <>
      <h3>ths is get New</h3>
      <Link to="/class">return class</Link>
    </>
  );
});

export default Old;
