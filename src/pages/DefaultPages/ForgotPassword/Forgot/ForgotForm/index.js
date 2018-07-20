import React from 'react'
import { connect } from 'react-redux'
import { REDUCER, submit } from 'ducks/resetpass'
import { Form, Input, Button } from 'antd'

const FormItem = Form.Item

const mapStateToProps = (state, props) => ({
  isSubmitForm: state.app.submitForms[REDUCER],
})

@connect(mapStateToProps)
@Form.create()
class LoginForm extends React.Component {
  static defaultProps = {}

  // $FlowFixMe
  onSubmit = (isSubmitForm: ?boolean) => event => {
    event.preventDefault()
    const { form, dispatch } = this.props
    if (!isSubmitForm) {
      form.validateFields((error, values) => {
        if (!error) {
          dispatch(submit(values))
        }
      })
    }
  }

  render() {
    const { form, isSubmitForm } = this.props

    return (
      <div className="cat__pages__login__block__form">
        <h4 className="text-uppercase">
          <strong>Quên mật khẩu ?</strong>
        </h4>
        <br />
        <p>Nhập địa chỉ email của bạn để thiết lập lại mật khẩu</p>
        <Form layout="vertical" hideRequiredMark onSubmit={this.onSubmit(isSubmitForm)}>
          <FormItem label="Email">
            {form.getFieldDecorator('email', {
              rules: [
                { type: 'email', message: 'E-mail không hợp lệ' },
                { required: true, message: 'Nhập địa chỉ email của bạn' },
              ],
            })(<Input size="default" />)}
          </FormItem>

          <div className="form-actions">
            <Button
              type="primary"
              className="width-150 mr-4"
              htmlType="submit"
              loading={isSubmitForm}
            >
              Reset Password
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default LoginForm
