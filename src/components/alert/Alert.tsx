import React from "react";

const Alert = ({ data }) => {
	if (!data || !data.show) return null; 
	
	return (
		<div
			className={`bg-${data.color}-700 text-white p-2 rounded shadow-md mt-12
        	${data.position === "top" ? "fixed top-0 right-0 z-50" : "fixed bottom-0 right-5 z-50"}`}>
			<p>{data.success}</p>
		</div>

	);
};

export default Alert;
