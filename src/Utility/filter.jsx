// let arr = [];
// export const changeHandler = (e, data, setFilterData, filterData) => {
//   const checked = e.target.checked;
//   const clickedItem = e.target.value;

//   if (checked) {
//     const filteredData = data.filter(
//       (item) => item?.license?.name === clickedItem
//     );
//     arr = arr.concat(filteredData);
//     setFilterData(arr);
//   } else {
//     const filteredData = filterData.filter(
//       (item) => item?.license?.name !== clickedItem
//     );
//     setFilterData(filteredData);
//   }
// };

export const getFilter=(data,check)=>{
  const values=Object.values(check).reduce((acc,curr)=>acc || curr,false)
  if(values){
    return data.filter(item=>check[item?.license?.name])
  }
  return data
}
