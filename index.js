import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

function Redirector({to}) {
	useEffect(() => {
		window.location = to;
	}, [to]);

	return <></>;
}

Redirector.propTypes = {
	to: PropTypes.string.isRequired
};

export default Redirector;
