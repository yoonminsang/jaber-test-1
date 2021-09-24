import React, { useEffect, useState } from 'react';
import { EMPLOYEE_LIST_MOCK, EMPLOYEE_TABLE_COLUMNS } from '../../constants';
import CustomTable from '../common/CustomTable';
import MemberHeader from './MemberHeader';

const Member = ({ isDesktop }) => {
  const [dataSource, setDataSource] = useState('');
  const [columns, setColumns] = useState('');
  useEffect(() => {
    setDataSource(EMPLOYEE_LIST_MOCK);
  }, []); // 원래는 비동기 처리라서 hooks 사용
  useEffect(() => {
    if (isDesktop) {
      setColumns(EMPLOYEE_TABLE_COLUMNS);
    } else {
      setColumns([
        EMPLOYEE_TABLE_COLUMNS[0],
        EMPLOYEE_TABLE_COLUMNS[1],
        EMPLOYEE_TABLE_COLUMNS[3],
      ]);
    }
  }, [isDesktop]);
  return (
    <CustomTable
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      getTitle={isDesktop && MemberHeader}
    />
  );
};

export default Member;
