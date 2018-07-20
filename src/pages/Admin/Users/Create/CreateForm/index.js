import React from 'react'
import { Form, Icon, Input, Button, Cascader, Tabs } from 'antd'


const FormItem = Form.Item

const Warehouses = [
  {
    value: '0',
    label: 'Chọn Kho',
  },
  {
    value: '1',
    label: 'Warehouse Hồ Chí Minh 1',
  },
  {
    value: '2',
    label: 'Warehouse Hồ Chí Minh 2',
  },
  {
    value: '3',
    label: 'Warehouse Hồ Chí Minh 3',
  },
]

const roles = [
  {
    value: '0',
    label: 'Chọn Vai Trò',
  },
  {
    value: '1',
    label: 'Administrator',
  },
  {
    value: '2',
    label: 'Sales',
  },
  {
    value: '3',
    label: 'Warehouse',
  },
]

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

@Form.create()
class CreateForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
    const TabPane = Tabs.TabPane
    const { TextArea } = Input
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    }
    return (
      <Form layout="vertical" hideRequiredMark onSubmit={this.handleSubmit}>
        <div className="card-container">
          <Tabs type="card">

            <TabPane tab="Thông Tin Cơ Bản" key="1">
              <div className="form-container">

                <FormItem {...formItemLayout} label="Email">
                  {getFieldDecorator('email', {
                    rules: [
                    { type: 'email', message: 'Email sai định dạng' },
                    { required: true, message: 'Nhập email' }],
                  })(<Input placeholder="Nhập email" />)}
                </FormItem>

                <FormItem {...formItemLayout} label="Mật Khẩu:">
                  {getFieldDecorator('password', {
                    rules: [
                    { required: true, message: 'Nhập Mật Khẩu' }],
                  })(<Input type="password" placeholder="Nhập Mật Khẩu" />)}
                </FormItem>

                <FormItem {...formItemLayout} label="Ghi Chú:">
                  {getFieldDecorator('note', {
                    rules: [{ required: true, message: 'Nhập Ghi Chú' }],
                  })(<TextArea rows={4} placeholder="Nhập Ghi Chú" />)}
                </FormItem>
                
              </div>
            </TabPane>
            <TabPane tab="Phân Quyền" key="2">
              <div className="form-container">

                <FormItem {...formItemLayout} label="Kho:">
                  {getFieldDecorator('warehouse', {
                    rules: [{ required: true, message: 'Chọn Kho' }],
                  })(<Cascader options={Warehouses} placeholder="Chọn Kho" />)}
                </FormItem>

                <FormItem {...formItemLayout} label="Vai Trò:">
                  {getFieldDecorator('role', {
                    rules: [
                      { required: true, message: 'Chọn Vai Trò' },
                    ],
                  })(<Cascader options={roles} placeholder="Chọn Vai Trò" />)}
                </FormItem>

              </div>
            </TabPane>

          </Tabs>
        </div>

        <div className="form-container">
          <FormItem className="btn-inline">
            <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
              Tạo
            </Button>
          </FormItem>

          <FormItem className="btn-inline">
            <Button type="dashed" htmlType="reset">
              Hủy
            </Button>
          </FormItem>
        </div>

      </Form>
    )
  }
}

export default CreateForm
