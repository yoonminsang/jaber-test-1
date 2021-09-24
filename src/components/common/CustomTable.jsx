import React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

const CustomTableWrapper = styled.div`
  font-size: 16px;
  line-height: 24px;
  .name {
    color: ${(props) => props.theme.blue6};
  }
  .ant-table-thead > tr > th {
    background-color: ${(props) => props.theme.grey1} !important;
  }
  ${(props) => props.theme.desktop} {
    font-size: 14px;
    line-height: 22px;
    .ant-table-cell {
      text-align: center;
      &::before {
        width: 0 !important;
      }
    }
    .complete {
      color: ${(props) => props.theme.grey6};
    }
    .request {
      color: ${(props) => props.theme.blue6};
      text-decoration: underline;
    }
  }
`;

const CustomTable = ({ dataSource, columns, pagination, getTitle }) => {
  return (
    <CustomTableWrapper>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={pagination}
        title={getTitle}
      />
    </CustomTableWrapper>
  );
};

export default CustomTable;
