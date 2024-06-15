import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Navigate, useLocation } from 'react-router-dom';
import { DefaultLayoutRouteList } from '@root/routes/DefaultLayoutRouteList';

//import Table2 from '@root/components/Table2/Table2.jsx';

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			{/* */}
			<DefaultLayoutRouteList />
			{/* <Table2 /> */}
			{/*<>	
				<div>	sssssssssssssssss
					<a href='https://vitejs.dev' target='_blank'></a>
					<a href='https://react.dev' target='_blank'></a>
				</div>
				<h1 className='tw-mb-2'>Vite + React</h1>
				<div className='card'>
					<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>

				
			</>  */}
		</BrowserRouter>
	);
}

export default App;
