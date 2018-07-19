import React from 'react'
import { Collapse } from 'antd'
import { Table } from 'antd'
import SelectOption from './SelectOption'
import './style.scss'

const Panel = Collapse.Panel

class StaffInactive extends React.Component {
  render() {
    return (
      <section className="staff-active">
        <div className="staff-header">
          <div className="staff__title">
            <div className="staff__title_container">
              <icon className="icmn icmn-user-check" />
            </div>
            <strong>Danh Sách Nhân Viên Không Hoạt Động</strong>
          </div>

          <div className="staff-header-btn btn primary">
            <a href="javascript: void(0);">
              <i class="fa fa-plus-square-o" aria-hidden="true" />
              <span> Tạo Mới</span>
            </a>
          </div>
        </div>
        <div className="staff-tool">
          <div className="left">
            <label>
              <strong>Hiển Thị: </strong>
            </label>
            <SelectOption />
          </div>
          <div className="middle">
            <label>
              <strong>Tìm Kiếm: </strong>
            </label>
            <input className="search" placeholder="Nhập từ khóa tìm kiếm" />
          </div>
          <div className="right btn">
            <a href="javascript: void(0);">Làm Mới</a>
          </div>
        </div>

        <div className="staff-body" />
      </section>
    )
  }
}

export default StaffInactive
