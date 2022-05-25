import { useEffect, useState } from "react";
import Big from "big.js";
import BN from "bn.js";
import { DOT_PRECISION } from "./utils";
import crowdloanContributeds from "./data/crowdloanContributeds.json";

import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

export const useEcharts = (dom) => {
  const [totalContributed, setTotalContributed] = useState(new BN(0));

  useEffect(() => {
    const chart = dom ? echarts.init(dom) : null;

    if (chart) {
      const date = [];
      const data = [];

      for (let node of crowdloanContributeds.data.crowdloanContributeds.nodes) {
        const amount = new BN(node.balance);

        date.push(node.timestamp.split("T")[0].replace(/-/g, "/"));
        data.push(data.length ? data[data.length - 1].add(amount) : amount);
      }

      if (data.length) {
        setTotalContributed(data[data.length - 1]);
      }

      const option = {
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: date,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Contribute KSM",
            type: "line",
            symbol: "none",
            sampling: "lttb",
            itemStyle: {
              color: "rgb(255, 70, 131)",
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 158, 68)",
                },
                {
                  offset: 1,
                  color: "rgb(255, 70, 131)",
                },
              ]),
            },
            data: data.map((d) => Big(d.toString()).div(DOT_PRECISION.toString()).toFixed(4)),
          },
        ],
      };

      chart.setOption(option);
    }

    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, [dom]);

  return { totalContributed };
};
