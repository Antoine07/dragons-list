import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Dragon from './Dragon';
import Form from './Form';
import Nav from './Nav';

const App = () => {

    return (
        <div className="container">
            <Nav />
            <div className="row">
                <div className="col-12 col-md-4">
                    <Form />
                </div>
                <div className="col-12 col-md-8">
                    <Dragon />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
   
    return state
}

export default connect(mapStateToProps)(App);