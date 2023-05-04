import { useState } from 'react'

// const order = [100, 200, 300]
function ReactHookUseState() {
  /*
  giá trị khởi tạo render lại khi setState
  const total = order.reduce((total, cur) => total + cur)
  console.log('toal:', total)
  const [counter, setCounter] = useState(total)
  */

  /*
 không bị render lại giá trị khởi tạo
 const [counter, setCounter] = useState(() => {
   const total = order.reduce((total, cur) => total + cur)
   console.log('toal:', total)
   return total
 })
*/
  // const [counter, setCounter] = useState(0)

  /*
  const handleIncrease = () => {
    const prevState = (value) => value + 1
    setCounter(prevState)
    setCounter(prevState)
    setCounter(prevState) 
  setCounter(counter + 1)
  }*/

  const [info, setInfo] = useState({
    name: 'NV A',
    age: 19,
    address: 'HN, VN',
  })
  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: '^^',
    })
  }

  return (
    <div className="p-10">
      {/* <h1>{counter}</h1>
      <button onClick={handleIncrease} className="bg-red-500 p-3 m-10">
        Increase
      </button> */}

      <h3>{JSON.stringify(info)}</h3>
      <button onClick={handleUpdate} className="bg-red-500 p-3 m-10">
        Update
      </button>
    </div>
  )
}
export default ReactHookUseState

/*
###
- Component được re-render sau khi `setState()` và sẽ render lại các component con bên trong
- Inittial state chỉ được dùng 1 lần đầu tiên
- Set state với callback?
- Initial state với callback?
- Set state là thay thế state bằng giá trị mới
*/
