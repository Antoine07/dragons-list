import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { add } from '../actions/actions-types';

const Form = () => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Ajoutez un dragon</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="add dragon..."
                />
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
        </form>
    );
}

const mapDispatchToProps = (dispatch) => {

    return {
        add: add
    }
};

export default connect(null, mapDispatchToProps)(Form)