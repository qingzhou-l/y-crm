import React from "react";
import { ProCard, StatisticCard } from "@ant-design/pro-components";
import { Space } from "antd";

const {Statistic} = StatisticCard

const DataOverview: React.FC = () => {
  return (
    <ProCard title={'数据概览'} subTitle={'数据更新数据：99:33:33'}>
      <Space>
        <StatisticCard
          bordered
          statistic={{
              title:'今日销售额',
              value:99999999,
              description: <Statistic title={'占比'} value={'100%'}/>
          }}
        />
        <StatisticCard
          bordered
          statistic={{
              title:'今日订单数',
              value:99999999,
              description: <Statistic title={'占比'} value={'100%'}/>
          }}
        />
        <StatisticCard
          bordered
          statistic={{
              title:'今日销售利润',
              value:99999999,
              description: <Statistic title={'占比'} value={'100%'}/>
          }}
        />
        <StatisticCard
          bordered
          statistic={{
              title:'今日销售产品数',
              value:99999999,
              description: <Statistic title={'占比'} value={'100%'}/>
          }}
        />
        <StatisticCard
          bordered
          statistic={{
              title:'今日新增用户',
              value:99999999,
              description: <Statistic title={'占比'} value={'100%'}/>
          }}
        />
      </Space>
    </ProCard>
  );
};

export default DataOverview;