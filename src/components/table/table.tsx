import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { DataType } from '../../utils/interfaces';

interface Props {
    dataTable: DataType[] | undefined,
    loadingTable: boolean,
    columnTable: ColumnsType<DataType>
}

const TableComponent: React.FC<Props> = ({ dataTable, loadingTable, columnTable }) => {

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (

        <Table className='tablePartner' columns={columnTable}  dataSource={dataTable} onChange={onChange} loading={loadingTable}/>
    );
};

export default TableComponent;