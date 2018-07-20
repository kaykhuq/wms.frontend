import React from 'react'
import { Form, Icon, Input, Button, Cascader, Tabs } from 'antd';

// import { connect } from 'react-redux'
// import { REDUCER, submit } from 'ducks/create-staff'

const FormItem = Form.Item;

const roles = [{
    value: '0',
    label: 'Chọn chức vụ',
}, {
    value: '1',
    label: 'Quản lý',
}, {
    value: '2',
    label: 'Nhân viên Sales',
}, {
    value: '3',
    label: 'Quản lý Sales',
}, {
    value: '4',
    label: 'Giám sát kho',
}, {
    value: '5',
    label: 'Nhân viên kho',
}, {
    value: '6',
    label: 'Tài xế',
}];
const wms_user = [{
    value: '0',
    label: 'Chọn wms user',
}, {
    value: '1',
    label: 'dathuynh@asiantechhub.com',
}, {
    value: '2',
    label: 'sales@thanhhaoseafood.com',
}, {
    value: '3',
    label: 'warehouse@thanhhaoseafood.com',

}];


@Form.create()
class FormBase extends React.Component {



    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const TabPane = Tabs.TabPane;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        return (
            <Form layout="vertical" hideRequiredMark >
                <div className="card-container">
                    <Tabs type="card">
                        <TabPane tab="Thông Tin Cơ Bản" key="1">
                            <div className="form-container">
                                <FormItem {...formItemLayout} label="Tên:">
                                    {getFieldDecorator('name', {
                                        rules: [
                                            { required: true, message: 'Nhập tên' },
                                        ],
                                    })(<Input placeholder="Nhập tên" />)}
                                </FormItem>

                                <FormItem {...formItemLayout} label="Chức Vụ:">
                                    {getFieldDecorator('role', {
                                        rules: [
                                            { required: true, message: 'Chọn Chức Vụ' },
                                        ],
                                    })(<Cascader options={roles} placeholder="Chọn Chức Vụ" />)}
                                </FormItem>

                                <FormItem {...formItemLayout} label="WMS User:">
                                    {getFieldDecorator('wms_user', {
                                        rules: [
                                            { required: true, message: 'Chọn WMS User' },
                                        ],
                                    })(<Cascader options={wms_user} placeholder="Chọn WMS User" />)}
                                </FormItem>
                                <FormItem {...formItemLayout} label="Kho:">
                                    {getFieldDecorator('store', {
                                        rules: [
                                            { required: true, message: 'Kho' },
                                        ],
                                    })(<Input placeholder="Kho" />)}
                                </FormItem>
                                <FormItem {...formItemLayout} label="Nhập Số Điện Thoại:">
                                    {getFieldDecorator('phone', {
                                        rules: [
                                            { required: true, message: 'Nhập Số Điện Thoại' },
                                        ],
                                    })(<Input placeholder="Nhập Số Điện Thoại" />)}
                                </FormItem>
                                <FormItem {...formItemLayout} label="Số Nhận Dạng:">
                                    {getFieldDecorator('identificate', {
                                        rules: [
                                            { required: true, message: 'Nhập Số Nhận Dạng' },
                                        ],
                                    })(<Input placeholder="Nhập Số Nhận Dạng" />)}
                                </FormItem>
                                <FormItem {...formItemLayout} label="Lương:">
                                    {getFieldDecorator('salary', {
                                        rules: [
                                            { required: true, message: 'Nhập Lương' },
                                        ],
                                    })(<Input placeholder="Nhập Lương" />)}
                                </FormItem>
                                <FormItem {...formItemLayout} label="Email Cá Nhân:">
                                    {getFieldDecorator('email', {
                                        rules: [
                                            { type: 'email', message: 'Email sai định dạng' },
                                            { required: true, message: 'Nhập Email Cá Nhân' },
                                        ],
                                    })(<Input placeholder="Nhập Email Cá Nhân" />)}
                                </FormItem>

                                <FormItem {...formItemLayout} label="Ngày Phát Hành:">
                                    {getFieldDecorator('date', {
                                        rules: [
                                            { required: true, message: 'Nhập Ngày Phát Hành' },
                                        ],
                                    })(<Input placeholder="Nhập Ngày Phát Hành" />)}
                                </FormItem>
                                <FormItem {...formItemLayout} label="Phát Hành Bởi:">
                                    {getFieldDecorator('by', {
                                        rules: [
                                            { required: true, message: 'Nhập Phát Hành Bởi' },
                                        ],
                                    })(<Input placeholder="Nhập Phát Hành Bởi" />)}
                                </FormItem>
                                <FormItem {...formItemLayout} label="Địa Chỉ:">
                                    {getFieldDecorator('address', {
                                        rules: [
                                            { required: true, message: 'Nhập Địa Chỉ' },
                                        ],
                                    })(<Input placeholder="Nhập Địa Chỉ" />)}
                                </FormItem>
                            </div>
                        </TabPane>
                        <TabPane tab="Thông Tin Nâng Cao" key="2">
                            <div>
                                <FormItem {...formItemLayout} label="SĐT Liên Hệ:">
                                    {getFieldDecorator('phone_contact', {
                                        rules: [
                                            { required: true, message: 'Nhập SĐT Liên Hệ' },
                                        ],
                                    })(<Input placeholder="Nhập SĐT Liên Hệ" />)}
                                </FormItem>
                                <FormItem {...formItemLayout} label="Email Liên Hệ:">
                                    {getFieldDecorator('email_contact', {
                                        rules: [
                                            { type: 'email', message: 'Email sai định dạng' },
                                            { required: true, message: 'Nhập Email Liên Hệ' },
                                        ],
                                    })(<Input placeholder="Nhập Email Liên Hệ" />)}
                                </FormItem>

                                <FormItem {...formItemLayout} label="Địa Chỉ Liên Hệ:">
                                    {getFieldDecorator('address_contact', {
                                        rules: [
                                            { required: true, message: 'Nhập Địa Chỉ Liên Hệ' },
                                        ],
                                    })(<Input placeholder="Nhập Địa Chỉ Liên Hệ" />)}
                                </FormItem>
                                <FormItem {...formItemLayout} label="Ghi Chú:">
                                    {getFieldDecorator('note', {
                                        rules: [
                                            { required: true, message: 'Nhập Ghi Chú' },
                                        ],
                                    })(<Input placeholder="Nhập Ghi Chú" />)}
                                </FormItem>
                            </div>
                        </TabPane>
                        <TabPane tab="Mô Tả" key="3">
                            <p>Content of Tab Pane 3</p>
                            <p>Content of Tab Pane 3</p>
                            <p>Content of Tab Pane 3</p>
                        </TabPane>
                        <TabPane tab="Hình" key="4">
                            <p>Content of Tab Pane 4</p>
                            <p>Content of Tab Pane 4</p>
                            <p>Content of Tab Pane 4</p>
                        </TabPane>
                    </Tabs>
                </div>

            </Form>
        );
    }
}

export default FormBase