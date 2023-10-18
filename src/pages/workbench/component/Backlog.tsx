import React, { useState } from "react";
import { ProCard, StatisticCard } from "@ant-design/pro-components";

const imgStyle = {
  display: 'block',
  width: 42,
  height: 42,
};

const Backlog: React.FC = () => {

  const [responsive, setResponsive] = useState(false);

  return (
    <ProCard title={'待办事项'}>
      <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
        <StatisticCard
          statistic={{
            title: '今日订单',
            value: 2176,
          }}
        />
        <StatisticCard
          statistic={{
            title: '待发货订单',
            value: 475,
          }}
        />
        <StatisticCard
          statistic={{
            title: '待处理售后',
            value: 87,
          }}
        />
        <StatisticCard
          statistic={{
            title: '库存预警商品',
            value: 1754,
          }}
        /> <StatisticCard
          statistic={{
            title: '活动即将到期',
            value: 1754,
          }}
        />
      </StatisticCard.Group>
    </ProCard>
  );
};

export default Backlog;