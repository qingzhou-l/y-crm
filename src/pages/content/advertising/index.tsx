import { PlusOutlined } from '@ant-design/icons';
import { ProColumns, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import dayjs from 'dayjs';
import React from 'react';

interface AdvertisingItem {
  id: string;
  name: string;
  status: string;
  place: string;
  createAt: Date;
}

const dataSource: AdvertisingItem[] = [
  {
    id: '1234134',
    name: '特喵618',
    place: '轮播图',
    status: '1',
    createAt: new Date(),
  },
  {
    id: '1134',
    name: '特喵618',
    place: '首页弹窗',
    status: '0',
    createAt: new Date(),
  },
];

const columns: ProColumns<AdvertisingItem>[] = [
  {
    dataIndex: 'name',
    title: '广告名称',
  },
  {
    dataIndex: 'place',
    title: '广告位置',
  },
  {
    dataIndex: 'status',
    title: '发布状态',
    valueType: 'select',
    valueEnum: {
      all: {
        text: '全部状态',
      },
      '1': {
        text: '上线中',
        status: '1',
      },
      '0': {
        text: '已下线',
        status: '0',
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
    valueType: 'option',
    key: 'options',
    title: '操作',
    render: () => {
      return (
        <>
          <Button type={'link'} size={'small'}>
            查看数据
          </Button>
          <Button type={'link'} size={'small'}>
            编辑
          </Button>
          <Button type={'link'} size={'small'} danger>
            删除
          </Button>
        </>
      );
    },
  },
];

const Advertising: React.FC = () => {
  return (
    <div>
      <ProTable
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={dataSource}
        toolBarRender={() => [
          <Button icon={<PlusOutlined />} type={'primary'}>
            新建广告
          </Button>,
        ]}
      ></ProTable>
    </div>
  );
};

export default Advertising;
