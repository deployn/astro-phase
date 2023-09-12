import { useState } from 'react';

const ReactComponent = () => {
	const [state, setState] = useState('');
	const [isInputVisible, setInputVisibility] = useState(true);

	const handleClear = () => {
		setState('');
	};

	const handleInputChange = (event: any) => {
		setState(event.target.value);
	};

	const toggleInputVisibility = () => {
		setInputVisibility(!isInputVisible);
	};

	return (
		<div className="m-4 mt-8 border p-4">
			<div className="mt-2 text-center text-2xl font-bold text-gray-700">
				This is a React Component
			</div>

			<div className="my-4 flex flex-col justify-center gap-4 md:flex-row">
				<input
					type={isInputVisible ? 'text' : 'password'}
					value={state}
					onChange={handleInputChange}
					className="mr-2 rounded-md border px-4 py-2 focus:outline-none"
					placeholder="Type a message..."
				/>
				<button
					onClick={toggleInputVisibility}
					className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none"
				>
					Toggle Visibility
				</button>
				<button
					onClick={handleClear}
					className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-700 focus:outline-none"
					disabled={!state}
				>
					Clear Message
				</button>
			</div>
			<div className="mt-4 text-center text-xl text-gray-700">{state}</div>
		</div>
	);
};

export default ReactComponent;
