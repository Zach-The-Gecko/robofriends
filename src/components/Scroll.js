import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '5px solid black', height: props.height, width: '100vw'}}>
			{props.children}
		</div>
	)
}

export default Scroll;