import React, { useState } from 'react';
import { Table, Popconfirm, Button, Space, Form, Input } from "antd";
import { is, values } from "lodash";

const Datatable = () => {
  const [griddata, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editRowKey, setEditRowKey] = useState("");
  const [form] = Form.useForm();

  const handleDelete = (record) => {
    const dataSource = [...griddata];
    const filteredData = dataSource.filter((item) => item.id !== record.id);
    setGridData(filteredData);
  };

  const isEditing = (record) => {
    return record.key === editRowKey;
  };

  const cancel = () => {
    setEditRowKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...griddata];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setGridData(newData);
        setEditRowKey("");
      } else {
        newData.push(row);
        setGridData(newData);
        setEditRowKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const edit = (record) => {
    form.setFieldsValue({
      id: "",
      Timestamp: "",
      title: "",
      Description: "",
      ...record
    });
    setEditRowKey(record.key);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "TimeStamp",
      dataIndex: "Timestamp",
      key: "Timestamp",
      align: "center",
      editable: false,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      align: "center",
      editable: true,
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
      align: "center",
      editable: true,
    },
    {
      title: "DueDate",
      dataIndex: "DueDate",
      key: "DueDate",
      align: "center",
      editable: true,
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      align: "center",
      editable: true,
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Space size="middle">
            <Button type="primary" onClick={() => save(record.key)}>
              Save
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button>Cancel</Button>
            </Popconfirm>
          </Space>
        ) : (
          <Space size="middle">
            <Button
              type="primary"
              disabled={editRowKey !== ""}
              onClick={() => edit(record)}
            >
              Edit
            </Button>
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record)}>
              <Button type="primary" danger>
                Delete
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];


    const Data = [
        {
            "userId": 1,
            "id": 1,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          
        ]
    
return (
    <div>
         <Form form={form}component={false}>;
         <Table
         columns={columns}
         dataSource={Data}
         bordered
         loading={loading}
         />
         </Form>
        
        
    </div>
  )
}

export default Datatable;