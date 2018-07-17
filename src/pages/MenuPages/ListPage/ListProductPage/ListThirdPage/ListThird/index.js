import React from 'react'
import { Collapse } from 'antd'
import './style.scss'

const Panel = Collapse.Panel

class ListThird extends React.Component {
  render() {
    return (
      <section className="card">
        <div className="card-header">
          <div className="utils__title">
            <strong>List Third Page</strong>
          </div>
        </div>
        <div className="card-body">
          <p>
            this is list third page
          </p>
        </div>
      </section>
    )
  }
}

export default ListThird
