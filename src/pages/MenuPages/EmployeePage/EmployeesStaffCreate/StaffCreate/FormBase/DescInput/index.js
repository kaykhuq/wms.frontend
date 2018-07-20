import React from 'react'

import CKEditor from 'react-ckeditor-component'

class DescInput extends React.Component {
  constructor(props) {
    super(props)
    this.updateContent = this.updateContent.bind(this)
    this.state = {
      content: 'Nhập Mô Tả',
    }
  }

  updateContent(newContent) {
    /*this.setState({
            content: newContent
        })*/
  }

  onChange(evt) {
    console.log('onChange : ', evt.editor.getData())
    var newContent = evt.editor.getData()
    /*this.setState({
        content: newContent
      })*/
  }

  onBlur(evt) {
    console.log('onBlur event called with event info: ', evt)
  }

  afterPaste(evt) {
    console.log('afterPaste event called with event info: ', evt)
  }
  render() {
    return (
      <CKEditor
        activeClass="p10"
        content={this.state.content}
        events={{
          blur: this.onBlur,
          afterPaste: this.afterPaste,
          change: this.onChange,
        }}
      />
    )
  }
}

export default DescInput
