import { useState } from 'react';

export const useTest = () => {
	const [testNum, setTestNum] = useState(1);
	const onClickTestNum = () => {
		setTestNum((num) => num + 1);
		console.log('click testNum',testNum);
	}

	return {testNum, onClickTestNum};
}