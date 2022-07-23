import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// 차트 라이브러리
import ReactApexChart from "react-apexcharts";

import moment from "moment";
import "moment/locale/ko";

const Income = ({ incomeData }) => {
  const incomeNumList =
    incomeData.data &&
    incomeData.data.map((data) => {
      return Number(data);
    });

  const labelList =
    incomeData.labels &&
    incomeData.labels.map((data) => {
      return data.replaceAll("_", " ");
    });

  // 숫자에 콤마넣기
  function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  }

  const donutData = {
    series: incomeNumList !== undefined ? incomeNumList : [1, 1, 1],
    options: {
      chart: {
        type: "donut",
      },
      legend: {
        show: false,
        position: "right",
        // fontSize: "8px",
      },

      responsive: [
        {
          breakpoint: 480,
        },
      ],
      dataLabels: {
        enabled: true,
        textAnchor: "right",
        distributed: true,
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: "16px",
          fontFamily: "Noto Sans KR",
          fontWeight: "500",
          colors: [
            "white",
            "white",
            "white",
            "white",
            "white",
            "white",
            "white",
            "white",
          ],
        },
        dropShadow: {
          enabled: true,
          color: "#5D5D5D",
        },
      },
      tooltip: {
        style: {
          fontSize: "14px",
          fontFamily: "Noto Sans KR",
        },
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return (
            '<div class="donut-tooltip-box">' +
            '<span class="donut-label-data">' +
            labelList[seriesIndex] +
            "</span>" +
            '<span class="donut-price-data">' +
            comma(series[seriesIndex]) +
            "원" +
            "</span>" +
            "</div>"
          );
        },
      },

      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: true,
              name: {
                // 데이터 라벨 커스텀
                show: true,
                fontSize: "22px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 700,
                color: undefined,
                offsetY: 6,
              },

              total: {
                showAlways: false,
                show: true,
                label: "수입",
                fontSize: "18px",
                fontWeight: "700",
                color: "black",
              },
              value: {
                fontSize: "12px",
                show: false,
                color: "black",
                // formatter: function (w) {
                //   return w.globals.seriesTotals.reduce((a, b) => {
                //     return a + b;
                //   }, 0);
                // },
              },
            },
          },
        },
      },

      labels:
        labelList !== undefined
          ? labelList
          : ["농산물 판매", "정부 보조금", "기타 수입"],
    },
  };

  return (
    <Wrap>
      {/* <TopWrap> */}
      {/* <h3>지출</h3> */}
      {/* <span>기간선택</span> */}
      {/* </TopWrap> */}

      <ReactApexChart
        options={donutData.options}
        series={donutData.series}
        type="donut"
        width="260"
      />
      <Legend>
        {labelList !== undefined &&
          labelList.map((data, idx) => {
            return <span key={idx}>{data}</span>;
          })}
      </Legend>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  @media only screen and (max-width: 760px) {
    margin-bottom: 20px;
  }
`;

const TopWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 10.5px;
    margin: 2px;
  }
`;

export default Income;
