import React, { Component } from 'react';
import { Button, Input, Icon, Table } from 'antd'

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    // sorter: true,
    render: name => `${name}`,
    width: '20%',
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
}, {
    title: 'Username',
    dataIndex: 'username',
    filters: [
        { text: 'Username', value: 'username' },
    ],
    render: username => `${username}`,
    width: '20%',
    onFilter: (value, record) => record.username.indexOf(value) === 0,
    sorter: (a, b) => a.username.length - b.username.length,
}, {
    title: 'Email',
    dataIndex: 'email',
    onFilter: (value, record) => record.email.indexOf(value) === 0,
    sorter: (a, b) => a.email.length - b.email.length,
},



];

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