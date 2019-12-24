import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const GenricTable = ({ records, columns, loading, _getTdProps, pageSize }) => {
  return (
    <ReactTable
      indexKey="_index"
      className="table table-bordered"
      data={records}
      columns={columns}
      pageSize={pageSize}
      collapseOnSortingChange={true}
      minRows={0}
      showPagination={false}
      loading={loading}
      getTdProps={_getTdProps}
      showPageJump={true}
      collapseOnPageChange={true}
      collapseOnDataChange={true}
      freezeWhenExpanded={false}
      // onResizedChange={(newResized, event) => { console.log('resize', newResized, event); }}
    />
  );
};

GenricTable.propTypes = {
  records: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  _getTdProps: PropTypes.func.isRequired
};

export default GenricTable;
