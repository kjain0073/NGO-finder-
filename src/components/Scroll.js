import React from 'react';

const Scroll=(props)=>{
	return (
		<div style={{ border: '5px solid black' }}>
			{props.children}
		</div>	
		);
};

export default Scroll;