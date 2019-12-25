import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GenricTable from '../../../components/common/genric-table';
import Pagination from '../../../components/common/pagination';
import Columns from '../../../components/common/table-columns/employee';
import SearchBar from '../../../components/common/search-add-header';
import { confirmAlert } from 'react-confirm-alert';
import { getEmployee } from '../../../actions/employee';


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
    this.props.getEmployee({ pageNumber: this.state.activePage });
    // this.props.getCreditApplicationCustomers({ isApproved: 0 });
  }

  handlePageChange(activePage) {
    this.setState({ activePage }, () => {
      this.props.getEmployee({ pageNumber: activePage });
    });
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
    const { history, employee } = this.props;

    return (
      <div className="content">
        <div>
          <h3 className="main-heading">Employees</h3>

          <SearchBar buttonTitle='Add Employee' redirectTo='/employees/add' history={history} />
          <div className="table-responsive customer-listing-table">
            <GenricTable
              records={employee.records}
              columns={Columns}
              pageSize={10}
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
            ItemPerPage={employee.limit}
            length={employee.total}
            _handlePageChange={this.handlePageChange.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employee: state.employee
});

const mapDispatchToProps = dispatch => ({
  getEmployee: bindActionCreators(getEmployee, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesList);
