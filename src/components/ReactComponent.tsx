import React, { useState } from 'react';

const ReactComponent = () => {
	const [state, setState] = useState('');

	return (
		<>
			<div className="mt-8 text-center text-2xl font-bold text-gray-700">
				This is a React Component
			</div>
			<div className="flex justify-center">
				<button
					onClick={() => setState('Hello World')}
					className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none"
				>
					Click Me
				</button>
			</div>
			<div className="mt-4 text-center text-xl text-gray-700">{state}</div>
		</>
	);
};

export default ReactComponent;
