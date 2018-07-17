import React from 'react'
import { Collapse } from 'antd'
import './style.scss'
import { Button } from 'antd';
import { Select } from 'antd';
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
                        <div className="select_filter_number pt-2">
                            <span className="filter_title">Hiển Thị: </span>
                            <Select defaultValue="10" style={{ width: 120 }} onChange={handleChange}>
                                <Option value="10">10</Option>
                                <Option value="20">20</Option>
                                <Option value="50">50</Option>
                                <Option value="100">100</Option>
                            </Select>
                        </div>

                    </div>
                </div>
                <div className="card-body">
                    <p>
                        this is list first page
          </p>
                    <CustomTable />
                </div>
            </section>
        )
    }
}

export default ListFirst
