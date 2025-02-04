import React from 'react';
import { Zoom } from '@mui/material';

const ZoomInTransition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});

export default ZoomInTransition;
