import React from 'react'
import { Collapse } from 'antd'
import './style.scss'

const Panel = Collapse.Panel

class CustomerDeactive extends React.Component {
  render() {
    return (
      <section className="card">
        <div className="card-header">
          <div className="utils__title">
            <strong>Customer Deactive Page</strong>
          </div>
        </div>
        <div className="card-body">
          <p>this is Customer Deactive page</p>
        </div>
      </section>
    )
  }
}

export default CustomerDeactive
