// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
import {
  IdcardOutlined, KeyOutlined,
  LogoutOutlined,
  MessageOutlined,
  SearchOutlined
} from "@ant-design/icons";
import { Dropdown, Input } from 'antd';
import React from "react";

const { Search } = Input;

export const layout = () => {
  return {
    layout: 'mix',
    // fixedHeader:true,
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    actionsRender: () => {
      return [
          <MessageOutlined />,
      ];
    },
    headerContentRender: () => {
      return (
          <Input
            prefix={<SearchOutlined />}
            placeholder="输入需要查找的内容"
            style={{ width: 230,float:'right',margin:'0 24px' }}
          />
      );
    },
    avatarProps: {
      src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      size: 'small',
      title: '七妮妮',
      render: (_: any, dom: any) => {
        return (
          <Dropdown
            menu={{
              items: [
                {
                  key: 'setting',
                  icon: <IdcardOutlined />,
                  label: '资料设置',
                },
                {
                  key: 'password',
                  icon:<KeyOutlined />,
                  label: '修改密码',
                },
                {
                  key: 'logout',
                  icon: <LogoutOutlined />,
                  label: '退出登录',
                },
              ],
            }}
          >
            {dom}
          </Dropdown>
        );
      },
    },
  };
};
