import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { deleteEmployee } from '../../actions/employee';
import { deleteProject } from '../../actions/project';

const DeleteRecord = ({ title, deleteId, deleteEmployee, deleteProject }) => {
    const name = title;
    const id = deleteId;
    const confirm = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="custom-ui">
                        <h1>Are you sure?</h1>
                        <p>You want to delete this {name}?</p>
                        <button onClick={onClose}>No</button>
                        <button
                            onClick={() => {
                                handleClickDelete(id);
                                onClose();
                            }}
                        >
                            Yes, Delete it!
                        </button>
                    </div>
                );
            }
        });
    };

    const handleClickDelete = id => {
        if (name === 'employee') {
            const tmpObj =
            {
                'userId': id,
                'status': 0
            };
            deleteEmployee(tmpObj);
        }
        if (name === 'project') {
            const tmpObj =
            {
                'id': id,
                'status': 4
            };
            deleteProject(tmpObj);
        }


    };
    return (
        <span>
            <i className="fas fa-trash-alt" onClick={() => confirm()} />
        </span>
    );
};

// Map State to props
const mapStateToProps = state => ({});

// Map state to props
const mapDispatchToProps = dispatch => ({
    deleteEmployee: bindActionCreators(deleteEmployee, dispatch),
    deleteProject: bindActionCreators(deleteProject, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteRecord);
