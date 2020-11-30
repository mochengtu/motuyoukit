import React, { FC, memo, useState, useCallback } from 'react';
import { Button } from 'antd';

interface IProps {

}

type TProps = IProps & any;

const Id: FC = memo<IProps>((props: TProps) => {
  const [num, setNum] = useState<number>(0);
  console.log(props)

  const handleClick = useCallback((): void => {
      setNum(num+1);
  }, [ num ]);
  return (
    <>
      <p>this is id pages! id={props.match.params.id} ---- { num }</p>
      <Button type="primary" onClick={handleClick}>Button</Button>
    </>
  )
});

export default Id;
