import React from 'react'
import { Collapse, Input, Button, Select } from 'antd'
import './style.scss'

const Panel = Collapse.Panel
const Option = Select.Option;

const message="Chưa Tồn Tại Danh Sách Thuộc Tính Sản Phẩm !";

class ListPropertiesDeactive extends React.Component {
    state = {
        selectNumber: 10
    }
    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })

    }
    render() {
        return (
            <section className="card">
                <div className="card-header">
                    <div className="utils__title">
                        <div className="wrapper-title">
                            <div className="list_props__title_container">
                                <span className="icon ml-3 mr-3"><i className="icmn icmn-calendar" aria-hidden="true"></i></span>
                            </div>
                            <h5 className="page-title mr-3">Danh Sách Thuộc Tính Nguyên Liệu Không Hoạt Động</h5>
                            <div className="staff-header-btn btn primary">
                                <a href="javascript: void(0);">
                                    <i class="fa fa-plus-square-o" aria-hidden="true" />
                                    <span> Tạo Mới</span>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="row mt-2 col-12 tool_bar">
                        <div className="number_display">
                            <span className='select_title'>Display: </span>
                            <Select style={{ width: 120 }} value={this.state.selectNumber} name="selectNumber" onChange={this.handleChange}>
                                <Option value="10">10</Option>
                                <Option value="20">20</Option>
                                <Option value="40">40</Option>
                                <Option value="50">50</Option>
                                <Option value="100">100</Option>
                            </Select>
                        </div>
                        <div className="search_input text-center">
                            <span className="search_title">Search: </span>
                            <Input className="col-6" name="searchText" onChange={this.onChange} placeholder="Input keyword" />
                        </div>
                        <div className="refresh">
                            <Button type="default">Làm Mới</Button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    
                </div>
                <div class="alert alert-info container">{message}</div>
            </section>
        )
    }
}

export default ListPropertiesDeactive
