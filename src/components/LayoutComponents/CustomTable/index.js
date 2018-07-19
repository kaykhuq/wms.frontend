import React, { Component } from 'react';
import { Button, Input, Icon, Table } from 'antd'

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name}`,
    width: '20%',
}, {
    title: 'Username',
    dataIndex: 'username',
    filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
    ],
    render: username => `${username}`,
    width: '20%',
}, {
    title: 'Email',
    dataIndex: 'email',
}];

class CustomTable extends Component {
    state = {
        pagination: {},
        loading: false,
    };
    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        // this.fetch({
        //     results: pagination.pageSize,
        //     page: pagination.current,
        //     sortField: sorter.field,
        //     sortOrder: sorter.order,
        //     ...filters,
        // });
    }

    render() {
        const { users } = this.props;
        // console.log(users);
        return (
            <Table columns={columns}
                rowKey={record => record.registered}
                dataSource={users}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
            />
        );
    }
}

export default CustomTable;