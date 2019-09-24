import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { remove } from '../actions/actions-types';

const Dragon = ({ dragons, count, remove, message }) => {

    // deux paramètres le nom du state et la fonction qui met à jour le state
    const [flashMessage, setFlashMessage] = useState(message);

    const handleDelete = (dragon) => {
        remove(dragon);
    };

    useEffect(() =>{

        console.log(message);

        // montage/démontage
        return () => {

        }
    }, [flashMessage]); // useEffect ne sera exécuté que si le state de flashMessage est modifié


    return (
        <ul className="list-group">
            {message? <p>{message}</p> : null}
            <h1><small>Number of dragon(s): {count}</small></h1>
            {dragons.map((dragon, index) => (
                <li key={index} className="list-group-item">{dragon}
                    <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(dragon)}
                    >delete</button>
                </li>
            ))}
        </ul>
    )
}

// lecture du state
const mapStateToProps = (state) => {

    return state;
}

const mapDispatchToProps = (dispatch) => {

    return {
        remove: (dragon) => dispatch(remove(dragon))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dragon);