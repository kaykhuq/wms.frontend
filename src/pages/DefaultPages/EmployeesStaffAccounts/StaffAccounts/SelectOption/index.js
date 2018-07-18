import React from 'react'
import { Select } from 'antd';

class SelectOption extends React.Component {

  
  render() {
    const Option = Select.Option;

    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    return (
      <div>
        <Select defaultValue="10" style={{ width: 120 }} onChange={handleChange}>
          <Option value="10">10</Option>
          <Option value="20">20</Option>
          <Option value="40">40</Option>
          <Option value="50">50</Option>
          <Option value="100">100</Option>
        </Select>
      </div>
    )
  }
}

export default SelectOption
