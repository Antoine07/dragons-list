import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';

const Dragon = ({dragons, count}) => {
    return (
        <ul className="list-group">
            <h1>Number count : {count}</h1>
            {dragons.map(dragon => (
                <li className="list-group-item">{dragon}</li>
            ))}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        dragons : state.dragons,
        count : state.count
    }
}

export default connect(mapStateToProps)(Dragon);