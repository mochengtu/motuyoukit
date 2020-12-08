
export const getLists = (value: string): any => {
  return fetch(`/api/getListsAsync?value=${value}`, ).then((res)=>{
    return res.json();
  }).catch(err => {
    console.log("err: ", err);
  })
}
