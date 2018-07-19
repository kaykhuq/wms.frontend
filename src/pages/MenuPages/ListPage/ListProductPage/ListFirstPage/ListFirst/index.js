import React from 'react'
import { Collapse } from 'antd'
import './style.scss'
import { Button, Select, Input } from 'antd';
// import Table from '../../../../../../components/AntComponents/Table/Ajax'
import CustomTable from '../../../../../../components/LayoutComponents/CustomTable';
// import reqwest from 'reqwest';

const Panel = Collapse.Panel
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

class ListFirst extends React.Component {

    render() {
        return (
            <section className="card">
                <div className="card-header">
                    <div className="utils__title">
                        <div className="wrapper-title">
                            <span className="icon ml-3 mr-3"><i className="icmn icmn-calendar" aria-hidden="true"></i></span>
                            <h5 className="page-title mr-3">Danh Sách Hạng Mục Nguyên Liệu Chủ</h5>
                            <div>
                                <Button type="primary"><i className="fa fa-plus-square-o" aria-hidden="true"></i> &nbsp;Tạo Mới</Button>
                            </div>
                        </div>


                    </div>
                    <div className="search_input mt-2">
                        <span className="search_title">Search: </span>
                        <Input className="col-1" placeholder="Input keyword" />
                    </div>
                </div>
                <div className="card-body">
                    <CustomTable />
                </div>
            </section>
        )
    }
}

export default ListFirst
