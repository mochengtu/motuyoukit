import React, { memo } from 'react';

interface IProps {}

const Id = memo<IProps>((props: IProps & any): any => {
  console.log("GetId: ", props);
  return (
    <>
      <h3>ths is get id-{props.match.params.id ?? '' }</h3>
    </>
  );
});

export default Id;
