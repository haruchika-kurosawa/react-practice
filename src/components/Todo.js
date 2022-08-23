import React from "react";

export default function Todo({title, state, id}) {
	return (
		<li id='{id}'><span>title: {title}</span><em>state: {state}</em></li>
	);
}