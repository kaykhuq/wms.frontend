import React from 'react'
import { Form, Icon, Input, Button, Cascader} from 'antd'
import CKEditor from "react-ckeditor-component";
// import DescInput from "./DescInput";
// import UploadImage from "./UploadImage";
// import { connect } from 'react-redux'
// import { REDUCER, submit } from 'ducks/create-staff'

const FormItem = Form.Item

const vehicles = [
  {
    value: '0',
    label: 'Chọn loại phương tiện',
  },
  {
    value: '1',
    label: 'Xe tải',
  },
  {
    value: '2',
    label: 'Xe gắn máy',
  }
]
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

@Form.create()
class FormBase extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  constructor(props) {
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            content: 'Nhập Mô Tả',
        }
    }    

    updateContent(newContent) {
        /*this.setState({
            content: newContent
        })*/
    }
    
    onChange(evt){
      console.log("onChange : ", evt.editor.getData());
      var newContent = evt.editor.getData();
      /*this.setState({
        content: newContent
      })*/
    }
    
    onBlur(evt){
      console.log("onBlur event called with event info: ", evt);
    }
    
    afterPaste(evt){
      console.log("afterPaste event called with event info: ", evt);
    }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
    
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
          <div className="form-container">

                <FormItem {...formItemLayout} label="Mã:">
                  {getFieldDecorator('identificate', {
                    rules: [{ required: true, message: 'Nhập Mã' }],
                  })(<Input placeholder="Nhập Mã" />)}
                </FormItem>

                <FormItem {...formItemLayout} label="Số Giấy Phép:">
                  {getFieldDecorator('number_license', {
                    rules: [{ required: true, message: 'Nhập Số Giấy Phép' }],
                  })(<Input placeholder="Nhập Số Giấy Phép" />)}
                </FormItem>

                <FormItem {...formItemLayout} label="Loại Phương Tiện: ">
                  {getFieldDecorator('type_vehicle', {
                    rules: [{ required: true, message: 'Chọn Loại Phương Tiện' }],
                  })(<Cascader options={vehicles} placeholder="Chọn Loại Phương Tiện" />)}
                </FormItem>

                <FormItem {...formItemLayout} label="Mô Tả: ">
                  {getFieldDecorator('desc', {
                    rules: [{ required: false, message: 'Nhập Mô Tả' }],
                  })(<CKEditor 
                    activeClass="p10" 
                    content={this.state.content} 
                    events={{
                      "blur": this.onBlur,
                      "afterPaste": this.afterPaste,
                      "change": this.onChange
                    }}
                   />)}
                </FormItem>
                
              </div>
        </div>
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

export default FormBase
