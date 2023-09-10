import React, { useState } from 'react'

const ReactComponent = () => {
  const [state, setState] = useState('')

  return (
    <>
      <div className="mt-8 text-center text-2xl font-bold text-gray-700">
        This is a React Component
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setState('Hello World')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Click Me
        </button>
      </div>
      <div className="text-center mt-4 text-xl text-gray-700">{state}</div>
    </>
  )
}

export default ReactComponent
