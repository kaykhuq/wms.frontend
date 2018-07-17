import React from 'react'
import { Collapse } from 'antd'
import './style.scss'

const Panel = Collapse.Panel

class CustomerCreate extends React.Component {
  render() {
    return (
      <section className="card">
        <div className="card-header">
          <div className="utils__title">
            <strong>Customer Create Page</strong>
          </div>
        </div>
        <div className="card-body">
          <p>this is Customer create page</p>
        </div>
      </section>
    )
  }
}

export default CustomerCreate
