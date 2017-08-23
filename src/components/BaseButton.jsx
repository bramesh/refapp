import React from 'react';
//import PropTypes from 'prop-types';
import classnames from 'classnames';
import {pure} from 'recompose';



const defaultProps = {
	className: '',
	kind: 'primary'
}


function BaseButton(props) {
	const {kind, label, className, slim, ...others} = props;
	const buttonClassNames = classnames(
		'myButton',
		`myButton-${kind}`,
		{
			'myButton-slim': slim
		},
		className
	)

	const children = label || props.children

	return(
		<button className={buttonClassNames} aria-label={children} {...others}>
			{children}		
		</button>

	)
}

BaseButton.defaultProps = defaultProps;
export default pure(BaseButton);