import React, {FC, memo, useCallback, useState} from 'react';
import { SearchBar } from 'antd-mobile';
interface IProps {}

const Search: FC = memo<IProps>((props: IProps & any): any => {
  const [value, setValue] = useState<string>('');

  const handleChange = useCallback<string | any>((value: string): void => {
    setValue(value);
  }, [ value ]);

  const handleSubmit = useCallback<string | any>((value: string): void => {
    console.log(value);
    props.dispatch({
      type: 'search/getListsAsync',
      payload: value,
    });
  }, []);

  console.log("Search00000: ", props);
  return (
    <>
      <SearchBar
        autoFocus
        {...value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
});
export default Search;
