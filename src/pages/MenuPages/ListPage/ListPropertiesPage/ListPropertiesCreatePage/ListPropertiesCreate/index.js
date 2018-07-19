import React from 'react'
import { Collapse, Tabs, Upload, message, Button, Icon, Input, Form, Select } from 'antd'

import './style.scss'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Panel = Collapse.Panel
const TabPane = Tabs.TabPane;
const FormItem = Form.Item
const Option = Select.Option;

const types = [{
    value: '0',
    label: 'Chọn loại',
}, {
    value: '1',
    label: 'text',
}, {
    value: '2',
    label: 'Datetime',
}, {
    value: '3',
    label: 'Number',

}];
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
        const props = this.props;
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
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
                        <div className="form-actions">
                            <Button type="primary" className="" htmlType="submit">Tạo </Button>&nbsp;
                            <Button className="" htmlType="button">Hủy</Button>
                        </div>
                    </TabPane>
                    <TabPane tab="Mô Tả" key="2">
                        <FormItem>
                            {/* <Editor
                                editorState={editorState}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                onEditorStateChange={this.onEditorStateChange}
                            /> */}
                        </FormItem>
                    </TabPane>
                    <TabPane tab="Media" key="3">
                        <FormItem>
                            <div className="tab_Media">
                                <span className="upload_title mb-2">Image File: </span>
                                <Upload {...props}>
                                    <Button>
                                        <Icon type="upload" /> Click to Upload
                        </Button>
                                </Upload>
                                <div className="img_alt mt-3">
                                    <span className="upload_alt">Image Alt: </span>
                                    <Input placeholder="alt text" className="upload_alt_input col-10" />
                                </div>
                            </div>
                        </FormItem>
                    </TabPane>
                </Tabs>
            </Form>
        )
    }
}

export default ListPropertiesCreate
