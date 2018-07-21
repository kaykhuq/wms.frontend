import React from 'react'
import { Collapse, Tabs, message, Button, Input, Form, Select } from 'antd'

import './style.scss'
import UploadImage from './UploadImage/index';
import DescInput from 'components/LayoutComponents/DescInput/index';

const Panel = Collapse.Panel
const TabPane = Tabs.TabPane;
const FormItem = Form.Item
const Option = Select.Option;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
@Form.create()

class ListPropertiesCreate extends React.Component {
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
                            <FormItem
                                label="Loại"
                                {...formItemLayout}
                            >
                                {getFieldDecorator('loại', {
                                    rules: [{ required: true, message: 'Chọn loại' }],
                                })(
                                    <Select
                                        placeholder="Chọn loại"
                                        onChange={this.handleSelectChange}
                                    >
                                        <Option value="text">text</Option>
                                        <Option value="Datetime">Datetime</Option>
                                        <Option value="Number">Number</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </div>
                    </TabPane>
                    <TabPane tab="Mô Tả" key="2">
                        <div className="form-container">
                            <FormItem {...formItemLayout} label="">
                                {getFieldDecorator('description', {
                                    rules: [{ required: false, message: 'Nhập Mô Tả' }],
                                })(<DescInput />)}
                            </FormItem>
                        </div>
                    </TabPane>
                    <TabPane tab="Media" key="3">
                        <div className="form-container">
                            <FormItem {...formItemLayout} label="Image File">
                                {getFieldDecorator('image_file', {
                                    rules: [{ required: false, message: 'Image File' }],
                                })(<UploadImage />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="Image Alt">
                                {getFieldDecorator('alt_image', {
                                    rules: [{ required: false, message: 'Nhập Image Alt' }],
                                })(<Input placeholder="Nhập Image Alt" />)}
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

export default ListPropertiesCreate
