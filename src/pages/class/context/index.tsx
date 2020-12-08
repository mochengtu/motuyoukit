import React, { FC, memo, useState, useCallback, ReactElement } from 'react';
import { IContext, SearchContext } from './searchContext';
import { getLists } from '@/services/search';
import Consumer from './consumer';
import Search from './Search';
import Lists from './lists';
import LazyLoad, { ILazLoad } from '@/components/LazLoad';


interface IProps{}
type GProps = IProps & any;

const Index: FC<ILazLoad> = memo<IProps | ILazLoad>((): JSX.Element & any => {
  const [text, setText] = useState<string>('');
  const [lists, setLists] = useState<[]>([]);


  const handleDispatch = useCallback(async (action): Promise<GProps> => {
    switch (action.type){
      case 'TEXT':
        setText(action.payload);
        break;
      case 'LISTS':
        const res = await getLists(action.payload);
        setLists(res.lists);
        break;
      default:
        break;
    }
  }, [text, lists]);

  const ContextValue: IContext= {
    state: text,
    lists: lists,
    dispatch: handleDispatch,
  }

  return (
    <>
      <SearchContext.Provider value={ContextValue}>
        <Search />
        {/*<Lists />*/}
        <LazyLoad component={import('./lists')} delay={3000}/>
        <Consumer />
      </SearchContext.Provider>
    </>
  );
});

export default Index;
