import React from 'react'
import { Collapse } from 'antd'
import { Button, Input, Icon, Table } from 'antd'
import './style.scss'

const Panel = Collapse.Panel

class StaffActive extends React.Component {
  render() {
    return (
      <section className="staff-active">

        <div className="staff-header">
          <div className="staff__title">
            <div className="staff__title_container"><icon className="icmn icmn-user-check"/></div>
            <strong>Danh Sách Nhân Viên Đang Hoạt Động</strong>
          </div>
          
          <div className="staff-header-btn ant-btn-primary">
            <a href="javascript: void(0);" > 
              <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                 Tạo Mới 
            </a>
          </div>
        </div>
        <div className="staff-tool">
          <div className="left"><label><strong>Hiển Thị: </strong></label></div>
          <div className="middle"><label><strong>Tìm Kiếm: </strong></label><input className="search"/></div>
          <div className="right btn ant-btn-primary"><a href="javascript: void(0);" > 
              
                 Làm Mới 
            </a></div>
        </div>

        <div className="card-body">
          {/*<p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>*/}
        </div>
      </section>
    )
  }
}

export default StaffActive
