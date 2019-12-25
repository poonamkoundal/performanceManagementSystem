import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GenricTable from '../../../components/common/genric-table';
import Pagination from '../../../components/common/pagination';
import Columns from '../../../components/common/table-columns/employee';
import SearchBar from '../../../components/common/search-add-header';
import { confirmAlert } from 'react-confirm-alert';
// import {
//   getCustomer,
//   getCreditApplicationCustomers,
//   updateCustomerStatus,
//   filterCustomer,
//   getCustomerDetail
// } from '../../../actions/customer';


class EmployeesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false,
      selectedCustomer: {},
      activePage: 1
    };
    this.approveCustomer = this.approveCustomer.bind(this);
    this.declineCustomer = this.declineCustomer.bind(this);
    this.showCustomerDetails = this.showCustomerDetails.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    // this.props.getCustomer({});
    // this.props.getCreditApplicationCustomers({ isApproved: 0 });
  }

  handlePageChange(){
      
  }
  static getDerivedStateFromProps(props, state) {
    // if (props.customer.isSearch) {
    //   props.getCustomer(props.customer.value);
    // }
    return state;
  }

  /********** Search *********/
  search = params => {
    if (params.trim().length > 1) {
      this.props.filterCustomer({ search: params });
    } else if (params.trim().length === 0) {
      this.props.filterCustomer({});
    }
  };

  declineCustomer = id => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Are you sure?</h1>
            <p>You want to delete this ?</p>
            <button onClick={onClose}>No</button>
            <button
              onClick={() => {
                this.props.updateCustomerStatus({ userId: id, status: 2 });
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

  approveCustomer = value => {
    this.props.updateCustomerStatus({ userId: value, status: 1 });
  };

  showCustomerDetails = id => {
    this.props.getCustomerDetail(id, res => {
      if (res && res.status) {
        this.setState({ popup: !this.state.popup, selectedCustomer: res.data });
      }
    });
  };

  render() {
    const { history, customer } = this.props;

    return (
      <div className="content">
        <div>
          <h3 className="main-heading">Employees</h3>
          
          <SearchBar buttonTitle = 'Add Employee' redirectTo='/employees/add' history= {history}/>
          <div className="table-responsive customer-listing-table">
            <GenricTable
              records={[]}
              columns={Columns}
              pageSize={100}
              loading={false}
              _getTdProps={(state, rowInfo, column, instance) => {
                return {
                  state,
                  onClick: () => {
                    // this.props.checked({ id: rowInfo.original.id });
                    // this.setState({ _id: rowInfo.original.id });
                  },
                  column,
                  instance
                };
              }}
            />
          </div>
          <Pagination
                      activePage={this.state.activePage}
                      ItemPerPage={10}
                      length={10}
                      _handlePageChange={this.handlePageChange.bind(this)}
                    />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customer: state.customer
});

const mapDispatchToProps = dispatch => ({
//   getCustomer: bindActionCreators(getCustomer, dispatch),
//   getCreditApplicationCustomers: bindActionCreators(getCreditApplicationCustomers, dispatch),
//   filterCustomer: bindActionCreators(filterCustomer, dispatch),
//   updateCustomerStatus: bindActionCreators(updateCustomerStatus, dispatch),
//   getCustomerDetail: bindActionCreators(getCustomerDetail, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesList);
