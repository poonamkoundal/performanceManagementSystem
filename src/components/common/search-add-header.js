import React, { useState } from 'react';
import PropTypes from 'prop-types';

const search = ({buttonTitle, redirectTo, history}) => { 

    // redirect to the url provided as param to the component
    const addModule = () => {
        history.push(redirectTo);
    };
    return (
        <div className="row">
           <div className= 'col-md-8'>
               Search bar here
           </div>
           <div className= 'col-md-4'>
           <button onClick={() => addModule()} className="btn operator-btn" type="button">
              {buttonTitle}
              <i className="fas fa-plus pl-3"></i>
            </button>
           </div>
        </div>
    );

};

export default search;