import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { add } from '../actions/actions-types';

const Form = ({add, message}) => {

    const [validate, setValidate] = useState(false);
    const [dragon, setDragon] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate === true) add(dragon)
    };

    const handleChange = (event) => {
        const dragon = event.target.value;
        const valid = dragon.length > 3 ? true : false;
        setValidate(valid);
        setDragon(dragon);
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="name">Ajoutez un dragon</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="add dragon..."
                        value={dragon}
                        onChange={handleChange}
                    />
                </div>
                <button
                    disabled={!validate}
                    type="submit"
                    className="btn btn-primary"
                >Add</button>
            </form>
        </div>

    );
}

const mapDispatchToProps = (dispatch) => {

    return {
        add:  (dragon) => dispatch(add(dragon)),
    }
};

const mapStateToProps = ({message}) =>{
    
    return {
        message : message
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)