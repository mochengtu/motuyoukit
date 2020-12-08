import React, {FC, memo, useCallback, useState, useContext} from 'react';
import { SearchBar } from 'antd-mobile';
import { SearchContext } from './searchContext';
interface IProps {}

const Search: FC = memo<IProps>((): JSX.Element => {
  // 使用一个静态变量来接收
  const contextType = useContext(SearchContext);

  const [value, setValue] = useState<string>('');

  const handleChange = useCallback<string | any>((value: string): void => {
    setValue(value);
  }, [ value ]);

  const handleSubmit = useCallback<string | any>((value: string): void => {
    const { dispatch } = contextType as any;
    dispatch({
      type: 'TEXT',
      payload: value,
    });
    dispatch({
      type: 'LISTS',
      payload: value,
    });
  }, []);

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
