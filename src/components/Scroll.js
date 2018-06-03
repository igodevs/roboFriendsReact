import React from 'react';
//{{}} Returns object

const Scroll = (props) => {
	// return props.children;
	return (
		<div style = {{ overflowY : 'auto', 
						WebkitOverflowScrolling: "touch", 
						height: '450px' }}>
			{props.children}
		</div>
		);
};

export default Scroll;