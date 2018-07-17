import React from 'react'
import { Collapse } from 'antd'
import './style.scss'

const Panel = Collapse.Panel

class ListProcessUnit extends React.Component {
  render() {
    return (
      <section className="card">
        <div className="card-header">
          <div className="utils__title">
            <strong>List Process Unit Page</strong>
          </div>
        </div>
        <div className="card-body">
          <p>
            this is list process Unit page
          </p>
        </div>
      </section>
    )
  }
}

export default ListProcessUnit
