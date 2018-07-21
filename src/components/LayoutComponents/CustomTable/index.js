import React, { Component } from 'react';
import { Button, Input, Icon, Table } from 'antd'

// const columns = [{
//     title: 'Name',
//     dataIndex: 'name',
//     // sorter: true,
//     render: name => `${name}`,
//     width: '20%',
//     onFilter: (value, record) => record.name.indexOf(value) === 0,
//     sorter: (a, b) => a.name.length - b.name.length,
// }, {
//     title: 'Username',
//     dataIndex: 'username',
//     filters: [
//         { text: 'Username', value: 'Bret' },
//     ],
//     render: username => `${username}`,
//     width: '20%',
//     onFilter: (value, record) => record.username.indexOf(value) === 0,
//     sorter: (a, b) => a.username.length - b.username.length,
// }, {
//     title: 'Email',
//     dataIndex: 'email',
//     onFilter: (value, record) => record.email.indexOf(value) === 0,
//     sorter: (a, b) => a.email.length - b.email.length,
// },
// ];

function getColumns(data) {
    const columns = [];
    const sample = data[0];
    Object.keys(sample).forEach(key => {
        if (key !== "id") {
            columns.push({
                accessor: key,
                title: key,
            });
        }
    });
    return columns;
}


class CustomTable extends Component {
    constructor(props) {
        super(props);
        const columns = getColumns(this.props.users)
        this.state = {
            pagination: {},
            loading: false,
            columns
        };
    }




    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        // console.log(pagination)
    }

    render() {
        const { users } = this.props;
        const { columns } = this.state;
        // users.forEach(user => {
        //     console.log(user.id);
        // });
        console.log(users);
        // console.log(getColumns(users));
        console.log(columns);
        // console.log(getCol(columnss));

        return (
            <Table
                columns={columns}
                rowKey="id"
                dataSource={users}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
            />
        );
    }
}

export default CustomTable;