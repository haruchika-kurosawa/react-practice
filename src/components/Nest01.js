import React, { useState, useContext } from "react";
import {TestContext} from "../App";

export default function Nest01() {

	const {sendData} = useContext(TestContext);

	return(
		<div>{sendData}</div>
	);
}