import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const PaymentBarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Tổng tiền thu nhập",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Tổng tiền thu nhập theo tháng",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Tổng tiền thu nhập của Năm",
        data: [],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  });
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    const paymentData = [
      {
        paymentId: 1,
        usersId: 12,
        roomid: 44,
        total: 150000000,
        email: "vantinluu.vtl@gmail.com",
        status: "Thành công",
        isdeleted: 0,
        createdAt: "2023-08-22 22:55:57.937",
        updatedAt: "2023-08-22 22:58:21.803",
      },
      {
        paymentId: 2,
        usersId: 12,
        roomid: 44,
        total: 380000000,
        email: null,
        status: "Thành công",
        isdeleted: 0,
        createdAt: "2023-9-15 10:22:52.947",
        updatedAt: "2023-9-15 10:22:52.947",
      },
      {
        paymentId: 3,
        usersId: 12,
        roomid: 44,
        total: 200000000,
        email: null,
        status: "Thành công",
        isdeleted: 0,
        createdAt: "2023-10-15 10:22:52.947",
        updatedAt: "2023-10-15 10:22:52.947",
      },
      {
        paymentId: 4,
        usersId: 12,
        roomid: 44,
        total: 110000000,
        email: null,
        status: "Thành công",
        isdeleted: 0,
        createdAt: "2023-11-15 10:22:52.947",
        updatedAt: "2023-11-15 10:22:52.947",
      },
      {
        paymentId: 5,
        usersId: 12,
        roomid: 44,
        total: 238000000,
        email: null,
        status: "Thành công",
        isdeleted: 0,
        createdAt: "2023-12-15 10:22:52.947",
        updatedAt: "2023-12-15 10:22:52.947",
      },
      {
        paymentId: 6,
        usersId: 12,
        roomid: 44,
        total: 100000000,
        email: null,
        status: "Thành công",
        isdeleted: 0,
        createdAt: "2024-01-1 10:22:52.947",
        updatedAt: "2024-01-1 10:22:52.947",
      },
      {
        paymentId: 7,
        usersId: 12,
        roomid: 44,
        total: 180000000,
        email: null,
        status: "Thành công",
        isdeleted: 0,
        createdAt: "2024-01-15 10:22:52.947",
        updatedAt: "2024-01-15 10:22:52.947",
      },
      {
        paymentId: 8,
        usersId: 12,
        roomid: 44,
        total: 138000000,
        email: null,
        status: "Thành công",
        isdeleted: 0,
        createdAt: "2024-02-1 10:22:52.947",
        updatedAt: "2024-02-1 10:22:52.947",
      },
      {
        paymentId: 9,
        usersId: 12,
        roomid: 44,
        total: 95000000,
        email: null,
        status: "Thành công",
        isdeleted: 0,
        createdAt: "2024-02-15 10:22:52.947",
        updatedAt: "2024-02-15 10:22:52.947",
      },
      {
        paymentId: 10,
        usersId: 12,
        roomid: 44,
        total: 90000000,
        email: null,
        status: "Thành công",
        isdeleted: 0,
        createdAt: "2024-03-1 10:22:52.947",
        updatedAt: "2024-03-1 10:22:52.947",
      },
      {
        paymentId: 11,
        usersId: 12,
        roomid: 44,
        total: 15000000,
        email: null,
        status: "Thành công",
        isdeleted: 0,
        createdAt: "2024-03-15 10:22:52.947",
        updatedAt: "2024-03-15 10:22:52.947",
      },
      {
        paymentId: 12,
        usersId: 12,
        roomid: 44,
        total: 20000000,
        email: null,
        status: "Thành công",
        isdeleted: 0,
        createdAt: "2024-04-1 10:22:52.947",
        updatedAt: "2024-04-1 10:22:52.947",
      },
      {
        paymentId: 13,
        usersId: 12,
        roomid: 44,
        total: 18000000,
        email: null,
        status: "Thành công",
        isdeleted: 0,
        createdAt: "2024-04-15 10:22:52.947",
        updatedAt: "2024-04-15 10:22:52.947",
      },
      {
        paymentId: 14,
        usersId: 12,
        roomid: 44,
        total: 123800000,
        email: null,
        status: "Thành công",
        isdeleted: 0,
        createdAt: "2024-05-15 10:22:52.947",
        updatedAt: "2024-05-15 10:22:52.947",
      },
    ];

    // Filter successful payments
    const successfulPayments = paymentData.filter(
      (payment) => payment.status === "Thành công"
    );

    // Group payments by day, month, and year
    const paymentsByDayAndMonth = {};
    const paymentsByMonth = {};
    const paymentsByYear = {};
    let totalData = 0;
    for (let year = 2023; year <= 2024; year++) {
      paymentsByYear[year] = 0;
      for (let month = 1; month <= 12; month++) {
        const monthYear = `${month}/${year}`;
        paymentsByMonth[monthYear] = 0;
        for (let day = 1; day <= 30; day++) {
          const dayMonthYear = `${day}/${monthYear}`;
          paymentsByDayAndMonth[dayMonthYear] = 0;
        }
      }
    }

    successfulPayments.forEach((payment) => {
      const date = new Date(payment.createdAt);
      const dayMonthYear = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;
      const monthYear = `${date.getMonth() + 1}/${date.getFullYear()}`;
      const year = date.getFullYear();
      paymentsByDayAndMonth[dayMonthYear] += payment.total;
      paymentsByMonth[monthYear] += payment.total;
      paymentsByYear[year] += payment.total;
      totalData += payment.total;
    });

    // Convert data to chart format
    const dayLabels = Object.keys(paymentsByDayAndMonth);
    const dayData = dayLabels.map((label) => paymentsByDayAndMonth[label]);
    const monthLabels = Object.keys(paymentsByMonth);
    const monthData = monthLabels.map((label) => paymentsByMonth[label]);
    const yearLabels = Object.keys(paymentsByYear).map((year) => `Năm ${year}`);
    const yearData = yearLabels.map(
      (label) => paymentsByYear[label.split(" ")[1]]
    );

    if (selectedMonth !== null && selectedYear !== null) {
      // Filter data by selected month and year
      const filteredMonthYear = `${selectedMonth}/${selectedYear}`;
      const filteredDayLabels = dayLabels.filter((label) =>
        label.startsWith(`${selectedMonth}/${selectedYear}`)
      );
      const filteredDayData = filteredDayLabels.map(
        (label) => paymentsByDayAndMonth[label]
      );
      setChartData({
        labels: Array.from(
          { length: new Date(selectedYear, selectedMonth, 0).getDate() },
          (_, i) => {
            const date = new Date(selectedYear, selectedMonth - 1, i + 1);
            return `${date.getDate()}-${date.getMonth() + 1}-${date
              .getFullYear()
              .toString()
              .slice(-2)}`;
          }
        ),
        datasets: [
          {
            label: "Tổng tiền thu nhập",
            data: Array.from(
              { length: new Date(selectedYear, selectedMonth, 0).getDate() },
              (_, i) =>
                paymentsByDayAndMonth[
                  `${i + 1}/${selectedMonth}/${selectedYear}`
                ] || 0
            ),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      });
    } else if (selectedYear !== null) {
      // Filter data by selected year
      const filteredYearData =
        yearData[
          yearLabels.findIndex((label) => label === `Năm ${selectedYear}`)
        ];
      const filteredMonthLabels = monthLabels.filter((label) =>
        label.endsWith(`/${selectedYear}`)
      );
      const filteredMonthData = filteredMonthLabels.map(
        (label) => paymentsByMonth[label]
      );
      setChartData({
        labels: filteredMonthLabels,
        datasets: [
          {
            label: "Tổng tiền thu nhập của năm",
            data: [filteredYearData],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
          {
            label: "Tổng tiền thu nhập theo tháng",
            data: filteredMonthData,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      });
    } else {
      setChartData({
        labels: yearLabels,
        datasets: [
          {
            label: "Tổng tiền thu nhập",
            data: yearData,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      });
    }
  }, [selectedMonth, selectedYear]);
  const handleMonthChange = (event) => {
    setSelectedMonth(
      event.target.value === "" ? null : parseInt(event.target.value)
    );
  };

  const handleYearChange = (event) => {
    setSelectedYear(
      event.target.value === "" ? null : parseInt(event.target.value)
    );
  };

  return (
    <div>
      <div>
        <label htmlFor="year-filter">Lọc theo năm:</label>
        <select
          id="year-filter"
          value={selectedYear || ""}
          onChange={handleYearChange}
        >
          <option value="">Tất cả các năm</option>
          {Array.from({ length: 2 }, (_, i) => 2023 + i).map((year) => (
            <option key={year} value={year}>
              Năm {year}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="month-filter">Lọc theo tháng:</label>
        <select
          id="month-filter"
          value={selectedMonth || ""}
          onChange={handleMonthChange}
        >
          <option value="">Tất cả các tháng</option>
          {selectedYear !== null
            ? Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                <option key={month} value={month}>
                  Tháng {month}
                </option>
              ))
            : []}
        </select>
      </div>
      <Bar data={chartData} />
    </div>
  );
};

export default PaymentBarChart;
