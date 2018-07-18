import React from 'react'
import { Collapse } from 'antd'
import './style.scss'

const Panel = Collapse.Panel

class ListProcessSize extends React.Component {
  render() {
    return (
      <section className="card">
        <div className="card-header">
          <div className="utils__title">
            <strong>List Process Size Page</strong>
          </div>
        </div>
        <div className="card-body">
          <p>this is list process size page</p>
        </div>
      </section>
    )
  }
}

export default ListProcessSize
