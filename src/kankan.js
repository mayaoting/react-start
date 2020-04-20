import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import { Card, Form, Button, Radio, Table, Row, Col, Divider, message, Popconfirm } from 'antd'
import moment from 'moment'
import { formatToLong } from 'utils/lib'
import { ImageViewer } from '@fe/angela'
import EditModal from './components/edit-modal'
import { appOptions, appMap, visibleMap, redirectTypeMap } from './config'
import * as api from './api'
import './index.scss'

const FormItem = Form.Item
const RadioGroup = Radio.Group

const More = () => {
  const [appId, setAppId] = useState(10)
  const [list, setList] = useState([])
  const [modalData, setModalData] = useState()
  const [modalType, setModalType] = useState('add')
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    fetchData()
  }, [appId])

  const handleChange = (key, setKey, value) => {
    setKey(value)
  }

  const fetchData = () => {
    const params = { appId }
    api.fetchAllIconByAppId(params).then(res => {
      setList(res || [])
    })
  }

  const handleSubmit = () => {
    fetchData()
  }

  const initModalData = () => {
    return {
      appId: 10,
      isVisible: 1,
      redirectConfig: 1,
    }
  }

  // 修改功能
  const handleUpdate = obj => {
    setModalData(obj)
    setModalType('edit')
    setModalVisible(true)
  }

  // 删除功能
  const handleDel = obj => {
    const params = {}
    params.id = formatToLong(obj.id)
    api.handleDelOp(params).then(res => {
      if (res) {
        fetchData()
        message.success('删除成功')
      } else {
        message.error('删除失败')
      }
    }).catch(() => {
      message.error('删除失败')
    })
  }

  // 新增功能
  const handleAdd = () => {
    setModalData(initModalData())
    setModalType('add')
    setModalVisible(true)
  }

  // 新增&修改功能
  const handleOk = obj => {
    const params = { ...obj }
    if (params.id) {
      params.id = formatToLong(params.id)
    }
    delete params.iconUrlList
    if (modalType === 'add') {
      api.handleAddOp(params).then(res => {
        if (res) {
          fetchData()
          setModalVisible(false)
          message.success('添加成功')
        } else {
          message.error('添加失败')
        }
      }).catch(() => {
        message.error('添加失败')
      })
    } else {
      api.handleUpdateOp(params).then(res => {
        if (res) {
          fetchData()
          setModalVisible(false)
          message.success('修改成功')
        } else {
          message.error('修改失败')
        }
      }).catch(() => {
        message.error('修改失败')
      })
    }
  }

  const handleCancel = () => {
    setModalVisible(false)
  }

  const columns = [{
    title: 'APP',
    dataIndex: 'appId',
    width: 100,
    render: text => appMap[text],
  }, {
    title: '序号',
    width: 50,
    dataIndex: 'position',
  }, {
    title: '可见状态',
    dataIndex: 'isVisible',
    width: 100,
    render: text => visibleMap[text],
  }, {
    title: '功能名称',
    dataIndex: 'name',
    width: 100,
  }, {
    title: '功能图标',
    dataIndex: 'iconUrl',
    width: 100,
    align: 'center',
    render: text => {
      if (!text) return '--'

      return <ImageViewer src={[text]} />
    },
  }, {
    title: '跳转类型',
    dataIndex: 'redirectConfig',
    width: 100,
    render: text => redirectTypeMap[text],
  }, {
    title: '跳转链接',
    dataIndex: 'redirectUrl',
    render: text => (
      <div styleName='table-redirect-url'>
        < a href= >{text}</ a>
      </div>
    ),
  }, {
    title: '更新时间',
    width: 170,
    align: 'center',
    dataIndex: 'updateTime',
    render: text => text ? moment(text).format('YYYY-MM-DD HH:mm:ss') : '',
  }, {
    title: '操作人',
    width: 120,
    align: 'center',
    dataIndex: 'operator',
  }, {
    title: '操作',
    width: 100,
    align: 'center',
    fixed: 'right',
    render: (text, record, index) => (
      <div styleName='table-op-icon'>
        <a styleName='table-edit-icon' onClick={() => handleUpdate(record)}>编辑</ a>
        <Divider type='vertical' />
        <Popconfirm
          title='确定删除吗？'
          onConfirm={() => handleDel(record)}
          okText='确定'
          cancelText='取消'
        >
          <a styleName='table-delete-icon'>删除</ a>
        </Popconfirm>
      </div>
    ),

  }]

  return <>
    <div styleName='more-wrap'>
      <Card styleName='search-card' bordered={false}>
        <Form layout='inline' styleName='search-form'>
          <Row>
            <Col span={12}>
              <FormItem label='平台'>
                <RadioGroup options={appOptions} onChange={e => handleChange('appId', setAppId, e.target.value)} value={appId} />
              </FormItem>
            </Col>
            <div styleName='search-btn-box'>
              <Button type='primary' onClick={handleSubmit}>查询</Button>
            </div>
          </Row>
        </Form>
      </Card>
      <Card styleName='table-card' bordered={false}>
        <div styleName='table-btn-box'>
          <Button onClick={handleAdd}>添加</Button>
        </div>
        <Table styleName='more-table' rowKey='id' scroll={{ x: 1300 }} columns={columns} pagination={false} dataSource={list} />
      </Card>
      <EditModal initModalData={modalData} visible={modalVisible} type={modalType} handleOk={handleOk} handleCancel={handleCancel} />
    </div>
  </>
}

More.propTypes = {
}

export default More