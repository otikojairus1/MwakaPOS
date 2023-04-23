import { Table } from "antd";
import React from "react";

export default function Catalogue() {
  const columns = [
    {
      title: "Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      // fixed: "left",
    },
    {
      title: "Brand",
      width: 100,
      dataIndex: "brand",
      key: "brand",
      // fixed: "left",
      // sorter: true,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "1",
    },
    {
      title: "Package",
      dataIndex: "package",
      key: "2",
      width: 200,
      children: [
        {
          title: "ctn",
          dataIndex: "ctn",
          key: "ctn",
          width: 70,
        },
        {
          title: "roll",
          dataIndex: "roll",
          key: "roll",
          width: 70,
        },
        {
          title: "ream",
          dataIndex: "ream",
          key: "ream",
          width: 70,
        },
        {
          title: "pkt",
          dataIndex: "pkt",
          key: "pkt",
          width: 70,
        },
        {
          title: "dzn",
          dataIndex: "dzn",
          key: "dzn",
          width: 70,
        },
        {
          title: "pcs",
          dataIndex: "pcs",
          key: "pcs",
          width: 70,
        },
      ],
    },
    {
      title: "color",
      dataIndex: "color",
      key: "3",
    },
    {
      title: "Quantity",
      dataIndex: "address",
      key: "4",
      width: 100,
    },
    {
      title: "Buying Price",
      dataIndex: "address",
      key: "5",
      width: 100,
    },
    {
      title: "Selling Price",
      dataIndex: "address",
      width: 100,
      key: "6",
      children: [
        {
          title: "ctn",
          dataIndex: "ctn",
          key: "ctn",
          width: 70,
        },
        {
          title: "dzn",
          dataIndex: "dzn",
          key: "dzn",
          width: 70,
        },
        {
          title: "pcs",
          dataIndex: "pcs",
          key: "pcs",
          width: 70,
        },
      ],
    },

    // {
    //   title: "Action",
    //   key: "operation",
    //   // fixed: "right",
    //   width: 100,
    //   render: () => <a>action</a>,
    // },
  ];
  const data = [
    // {
    //   key: "1",
    //   name: "John Brown",
    //   age: 32,
    //   address: "New York Park",
    // },
    // {
    //   key: "2",
    //   name: "Jim Green",
    //   age: 40,
    //   address: "London Park",
    // },
  ];
  return (
    <div className="h-[35rem] w-[75rem] bg-white m-auto mt-[4rem]">
      {" "}
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1300,
          y: 1000,
        }}
      />
    </div>
  );
}
