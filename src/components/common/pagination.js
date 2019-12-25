import React from 'react';
import Pagination from "react-js-pagination";
import PropTypes from 'prop-types';
// require("bootstrap/less/bootstrap.less");
const PAGE_RANGE_SHOW = 10;

const pagination = ({ activePage, ItemPerPage, length, _handlePageChange }) => {
  return (
    <div className = 'row'>
       <Pagination
        activePage={activePage}
        itemsCountPerPage={ItemPerPage}
        totalItemsCount={length}
        ageRangeDisplayed={PAGE_RANGE_SHOW}
        onChange={_handlePageChange}
        />
    {/* <Pagination
      innerClass="pagination"
      activePage={activePage}
      itemsCountPerPage={ItemPerPage}
      prevPageText={<i className="fa fa-chevron-left customIcon" aria-hidden="true" />}
      nextPageText={<i className="fa fa-chevron-right customIcon" aria-hidden="true" />}
      totalItemsCount={length}
      pageRangeDisplayed={PAGE_RANGE_SHOW}
      onChange={_handlePageChange}
    /> */}
    </div>
  );
};

pagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  ItemPerPage: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  _handlePageChange: PropTypes.func.isRequired
};

export default pagination;