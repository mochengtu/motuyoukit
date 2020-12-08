import { getLists } from '../services/search';
export default {
  namespace: 'search',
  state: {
    text: 'dva',
    lists: [],
  },
  // 同步的方法
  reducers: {
    getLists(state: any, action: any) {
      /**
       * state 是指当前这里的 state
       * action
       *
       */
      return {
        ...state,
        // lists: Array(10).fill(action.payload)
        lists: action.payload
      }
    }


  },
  // 异步
  effects: {
    *getListsAsync({payload}:any, {call, put}: any) {
      /**
       * call 主要用来调 异步 函数，call 接收两个参数
       *   第一个是请求的方法名
       *   第二个是请求的参数 payload
       *
       * put 主要用来做事件派发
       */
      const res = yield call(getLists, payload);

      yield put({
        type: 'getLists', // 批当前 reducers 同步里面的方法名 getList 方法
        payload: res.lists,
      });

    }
  }

}
