import Announcement from '@/pages/workbench/component/Announcement';
import Backlog from '@/pages/workbench/component/Backlog';
import CommonlyUsed from '@/pages/workbench/component/CommonlyUsed';
import DataOverview from '@/pages/workbench/component/DataOverview';
import { EllipsisOutlined } from '@ant-design/icons';
import { StatisticCard } from '@ant-design/pro-components';
import { Col, Row, Space } from 'antd';
import React from 'react';

const Workbench: React.FC = () => {
  return (
    <div>
      <Space direction={'vertical'}>
        <DataOverview />

        <Row gutter={{ xl: 12 }}>
          <Col xl={18}>
            <Space direction={'vertical'}>
              <Backlog />
              <StatisticCard
                title="销售额趋势"
                extra={<EllipsisOutlined />}
                chart={
                  <img
                    src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg"
                    alt="柱状图"
                    width="100%"
                  />
                }
              />

              <Row gutter={{ xl: 12 }}>
                <Col xl={12}>
                  <StatisticCard
                    title="销售额趋势"
                    extra={<EllipsisOutlined />}
                    chart={
                      <img
                        src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg"
                        alt="柱状图"
                        width="100%"
                      />
                    }
                  />
                </Col>
                <Col xl={12}>
                  <StatisticCard
                    title="销售额趋势"
                    extra={<EllipsisOutlined />}
                    chart={
                      <img
                        src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg"
                        alt="柱状图"
                        width="100%"
                      />
                    }
                  />
                </Col>
              </Row>
            </Space>
          </Col>

          <Col xl={6}>
            <Space direction={'vertical'}>
              <CommonlyUsed />
              <Announcement />
              <StatisticCard
                title="流量占用情况"
                chart={
                  <img
                    src="https://gw.alipayobjects.com/zos/alicdn/qoYmFMxWY/jieping2021-03-29%252520xiawu4.32.34.png"
                    alt="大盘"
                    width="100%"
                  />
                }
              />
            </Space>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default Workbench;
