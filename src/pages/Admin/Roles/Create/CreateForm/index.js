import React from 'react'
import { Form, Icon, Input, Button, Cascader, Tabs } from 'antd'


const FormItem = Form.Item

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

                <FormItem {...formItemLayout} label="Tên:">
                  {getFieldDecorator('name', {
                    rules: [
                    { required: true, message: 'Nhập Tên' }],
                  })(<Input placeholder="Nhập Tên" />)}
                </FormItem>

                <FormItem {...formItemLayout} label="Ghi Chú:">
                  {getFieldDecorator('note', {
                    rules: [{ required: true, message: 'Nhập Ghi Chú' }],
                  })(<TextArea rows={4} placeholder="Nhập Ghi Chú" />)}
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
