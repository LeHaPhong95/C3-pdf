import { useState } from 'react'

// ### 1 const gifts = ['CPU i9', 'RAM 32GB RGB', 'RGB Keyboard']

const courses = [
  {
    id: 1,
    name: 'HTML, CSS',
  },
  {
    id: 2,
    name: 'Javascript',
  },
  {
    id: 3,
    name: 'ReactJS',
  },
]
function TwoWayBinding() {
  /* ###1  
  const [gift, setGift] = useState()
  const handleGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    console.log(gifts[index])
    setGift(gifts[index])
  } */

  const [checked, setChecked] = useState('')
  console.log(checked)
  const handleSubmit = () => {}

  return (
    <div>
      {/*  ## 1
       <h2>{gift || 'chưa có thưởng'}</h2>
      <button onClick={handleGift} className="bg-red-500 p-3 m-10">
        Lấy thưởng
      </button> */}

      {courses.map((course) => {
        return (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checked === course.id}
              onChange={() => {
                setChecked(course.id)
              }}
            />
            {course.name}
          </div>
        )
      })}
      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

export default TwoWayBinding
