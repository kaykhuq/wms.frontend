import React from 'react'
import { Collapse } from 'antd'
import './style.scss'

const Panel = Collapse.Panel

class SupplierDeactive extends React.Component {
  render() {
    return (
      <section className="card">
        <div className="card-header">
          <div className="utils__title">
            <strong>Supplier Deactive Page</strong>
          </div>
        </div>
        <div className="card-body">
          <p>
            this is supplier Deactive page
          </p>
        </div>
      </section>
    )
  }
}

export default SupplierDeactive
