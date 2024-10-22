import React from 'react';
interface Iprops {
  name: string,
  age: number
  height?: number
}
const DownLoad = (props: Iprops) => {
  return (
    <div>
      <div>name:{props.name}</div>
      <div>name:{props.age}</div>
      <div>name:{props.height}</div>
    </div>
  )
}
export default DownLoad;
