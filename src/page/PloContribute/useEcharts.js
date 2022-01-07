import { useEffect, useState } from "react";
import BN from "bn.js";
import Big from "big.js";
import { DOT_TO_ORIG } from "./utils";

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

export const useEcharts = (dom, dataSource) => {
  const [currentTotalContribute, setCurrentTotalContribute] = useState(new BN());

  useEffect(() => {
    if (
      dom &&
      !dataSource.error &&
      !dataSource.loading &&
      dataSource.data.crowdloanContributeds.nodes &&
      dataSource.data.crowdloanContributeds.nodes.length
    ) {
      const date = [];
      const data = [];
      for (let i = 0; i < dataSource.data.crowdloanContributeds.nodes.length; i++) {
        const node = dataSource.data.crowdloanContributeds.nodes[i];
        const amount = new BN(node.balance);
        date.push(node.timestamp.split("T")[0].replace(/-/g, "/"));
        data.push(i > 0 ? data[i - 1].add(amount) : amount);
      }
      setCurrentTotalContribute(data[data.length - 1]);

      const option = {
        tooltip: {
          trigger: "axis",
          position: function (pt) {
            return [pt[0], "10%"];
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: date,
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 100,
          },
          {
            start: 0,
            end: 100,
          },
        ],
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
            data: data.map((d) => Big(d.toString()).div(DOT_TO_ORIG.toString()).toFixed(4)),
          },
        ],
      };

      echarts.init(dom).setOption(option);
    }
  }, [dom, dataSource]);

  return { currentTotalContribute };
};
