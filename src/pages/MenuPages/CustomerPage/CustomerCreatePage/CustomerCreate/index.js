import React from 'react'
import { Collapse, Tabs, message, Button, Input, Form, Select } from 'antd'

import './style.scss'
import DescInput from 'components/LayoutComponents/DescInput/index';

const Panel = Collapse.Panel
const TabPane = Tabs.TabPane;
const FormItem = Form.Item
const Option = Select.Option;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
@Form.create()

class CustomerCreate extends React.Component {
    onSubmit = event => {
        event.preventDefault();

    }
    onChange = (info) => {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }
    render() {
        const { getFieldDecorator, getFieldsError } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return (
            <Form layout="vertical" hideRequiredMark onSubmit={this.onSubmit}>
                <Tabs type="card">
                    <TabPane tab="Thông Tin Cơ Bản" key="1">
                        <div className="form-container">
                            <FormItem label="Tên:"
                                {...formItemLayout}
                            >
                                {getFieldDecorator('name', {
                                    rules: [
                                        { required: true, message: 'Nhập tên' },
                                    ],
                                })(<Input placeholder="Nhập tên" />)}
                            </FormItem>
                            <FormItem label="Email:"
                                {...formItemLayout}
                            >
                                {getFieldDecorator('email', {
                                    rules: [
                                        { required: true, message: 'Nhập email' },
                                    ],
                                })(<Input placeholder="Nhập email" />)}
                            </FormItem>

                            <FormItem label="Số Điện Thoại:"
                                {...formItemLayout}
                            >
                                {getFieldDecorator('phone', {
                                    rules: [
                                        { required: true, message: 'Nhập số điện thoại' },
                                    ],
                                })(<Input placeholder="Nhập số điện thoại" />)}
                            </FormItem>
                            <FormItem
                                label="Loại"
                                {...formItemLayout}
                            >
                                {getFieldDecorator('type', {
                                    rules: [{ required: true, message: 'Chọn loại khách' }],
                                })(
                                    <Select
                                        placeholder="Chọn loại khách"
                                        onChange={this.handleSelectChange}
                                    >
                                        <Option value="Chọn loại khách">Chọn loại khách</Option>
                                        <Option value="normal">Khách thường</Option>
                                        <Option value="vip">Khách vip</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </div>
                    </TabPane>
                    <TabPane tab="Địa Chỉ Giao Hàng" key="2">
                        <div className="form-container">
                            <FormItem
                                label="Quốc Gia :"
                                {...formItemLayout}
                            >
                                {getFieldDecorator('quốc gia', {
                                    rules: [{ required: true, message: 'Chọn quốc gia' }],
                                })(
                                    <Select
                                        placeholder="Chọn quốc gia"
                                        onChange={this.handleSelectChange}
                                    >
                                        <Option value="Chọn-quốc-gia">Chọn quốc gia</Option>
                                        <Option value="VietName">Việt Nam</Option>
                                        <Option value="Lào">Lào</Option>
                                        <Option value="Campuchia">Campuchia</Option>
                                    </Select>
                                )}
                            </FormItem>
                            <FormItem
                                label="Tỉnh/Thành :"
                                {...formItemLayout}
                            >
                                {getFieldDecorator('tỉnh/thành', {
                                    rules: [{ required: true, message: 'Chọn tỉnh - thành' }],
                                })(
                                    <Select
                                        placeholder="Chọn tỉnh - thành"
                                        onChange={this.handleSelectChange}
                                    >
                                        <Option value="Chọn-tỉnh-thành">Chọn tỉnh - thành</Option>
                                    </Select>
                                )}
                            </FormItem>
                            <FormItem
                                label="Quận/Huyện :"
                                {...formItemLayout}
                            >
                                {getFieldDecorator('quận/huyện', {
                                    rules: [{ required: true, message: 'Chọn quận - huyện' }],
                                })(
                                    <Select
                                        placeholder="Chọn quận - huyện"
                                        onChange={this.handleSelectChange}
                                    >
                                        <Option value="Chọn-quận-huyện">Chọn quận - huyện</Option>
                                    </Select>
                                )}
                            </FormItem>
                            <FormItem label="Đường :"
                                {...formItemLayout}
                            >
                                {getFieldDecorator('đường', {
                                    rules: [
                                        { required: true, message: 'Nhập đường' },
                                    ],
                                })(<Input placeholder="Nhập tên" />)}
                            </FormItem>
                        </div>
                    </TabPane>

                </Tabs>
                <div className="form-container">
                    <FormItem className="btn-inline">
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={hasErrors(getFieldsError())}>
                            Tạo
                    </Button>
                    </FormItem>
                    <FormItem className="btn-inline">
                        <Button
                            type="dashed"
                            htmlType="reset">
                            Hủy
                    </Button>
                    </FormItem>
                </div>
            </Form>
        )
    }
}

export default CustomerCreate
