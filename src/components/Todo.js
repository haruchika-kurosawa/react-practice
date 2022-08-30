import React, {useContext} from "react";
import {testContext} from "../App";

export default function Todo({title, state, id, onDelete}) {
	const { testData } = useContext(testContext);
	return (
		<li id='{id}'>
			<div>
				<span>title: {title}</span><em>state: {state}</em>
				<button onClick={() => onDelete(id)}>delete</button>
			</div>
			{
				testData.map((item) => {
					console.log(item);
				})
			}
		</li>
	);
}