import { PlusOutlined } from '@ant-design/icons';
import { ProColumns, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import dayjs from 'dayjs';
import React from 'react';

interface CustomPageItem {
  id: string;
  title: string;
  status: string;
  createAt: Date;
  remark: string;
}

const dataSource: CustomPageItem[] = [
  {
    id: '1234134',
    title: '特喵618',
    status: 'issue',
    createAt: new Date(),
    remark: 'ddd',
  },
  {
    id: '1134',
    title: '特喵618',
    status: 'notIssue',
    createAt: new Date(),
    remark: '',
  },
];

const columns: ProColumns<CustomPageItem>[] = [
  {
    dataIndex: 'title',
    title: '页面标题',
  },
  {
    dataIndex: 'status',
    title: '发布状态',
    valueType: 'select',
    valueEnum: {
      all: {
        text: '全部状态',
      },
      issue: {
        text: '已发布',
        status: 'issue',
      },
      notIssue: {
        text: '未发布',
        status: 'notIssue',
      },
    },
  },
  {
    dataIndex: 'createAt',
    title: '创建时间',
    valueType: 'date',
    renderText: (text) => dayjs(text).format('YYYY-MM-DD'),
  },
  {
    dataIndex: 'remark',
    title: '备注',
    renderText: (text) => (text.length > 0 ? text : '--'),
  },
  {
    valueType: 'option',
    key: 'options',
    title: '操作',
    render: () => {
      return (
        <>
          <Button type={'link'} size={'small'}>
            编辑
          </Button>
          <Button type={'link'} size={'small'}>
            复制
          </Button>
          <Button type={'link'} size={'small'} danger>
            删除
          </Button>
        </>
      );
    },
  },
];

const CustomPage: React.FC = () => {
  return (
    <div>
      <ProTable
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={dataSource}
        toolBarRender={() => [
          <Button icon={<PlusOutlined />} type={'primary'}>
            新建页面
          </Button>,
        ]}
      ></ProTable>
    </div>
  );
};

export default CustomPage;
