import { useReducer, useRef } from 'react'

// 1. Init state
const initState = {
  job: '',
  jobs: [],
}
// 2. Action
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = (payloadSetJob) => {
  return {
    type: SET_JOB,
    stateInnput: payloadSetJob,
  }
}
const addJob = (payloadAddJob) => {
  return {
    type: ADD_JOB,
    add: payloadAddJob,
  }
}
const deleteJob = (payloadDelete) => {
  return {
    type: DELETE_JOB,
    delete: payloadDelete,
  }
}

// 3. Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.stateInnput,
      }
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.add],
      }
    case DELETE_JOB:
      const newJob = [...state.jobs]
      newJob.splice(action.delete, 1)
      return {
        ...state,
        jobs: newJob,
      }
    default:
      throw new Error('invalid action')
  }
}

// 4. Dispatch

export const UseReducerTodo = () => {
  const [state, dispatch] = useReducer(reducer, initState)

  const { job, jobs } = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }

  // const deleteJob = (index) => {
  //   dispatch(deleteJob(index))
  // }

  return (
    <div>
      <h1>useReducer Todo</h1>

      <input
        ref={inputRef}
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value))
        }}
        className="border-2 m-2"
        placeholder="add todo"
      />

      <button onClick={handleSubmit} className="border-2 text-red-500">
        Add
      </button>

      <ul>
        {jobs.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
