import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { resetMessage } from '../actions/actions-types';

import { connect } from 'react-redux';

const Message = ({message, resetMessage}) => {

    useEffect(() =>{

        const delay = setTimeout(() => {
            resetMessage();
        }, 1000);

        return () => {
            console.log('bye !');
        }
    });

    return (
        <div className="flashMessage alert alert-danger">
            {message}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {

    return {
        resetMessage : () => dispatch(resetMessage())
    }
};

export default connect(null, mapDispatchToProps)(Message);