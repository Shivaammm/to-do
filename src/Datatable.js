import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Table, Popconfirm, Button, Space, Form, Input} from "antd";
import Item from 'antd/es/list/Item';
import {is} from "lodash";

const Datatable = () => {
    const[griddata, setgridData] = useState([]);
    const[loading, setLoading] = useState(false);
    const[editRowKey, setEditRowKey] = useState("");

    // useEffect(() => {
    //     loadData();

    // },[])

    // const loadData = async () => {
    //     setLoading(true);

    //     const response = await axios.get("https://mock-api-1.vercel.app/");
    //    // setgridData(JSON.parse);
    //    console.log(response.data.toString());
    //     setLoading(false);
    // }
  // console.log(griddata);


  

  const handleDelete = (record) => {
    const dataSource = [...Data];
    const filteredData = dataSource.filter((item) => item.id !== record.id);
    setgridData(filteredData);

  };

  const isEding = (record) =>{
    return record.key === editRowKey;

  }

  const cancel = () => {};
  const save = () => {};
  const edit = () => {};


  

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "TimeStamp",
            dataIndex: "Timestamp",
            align: "center",
            editTable: false
        },
        {
            title: "Title",
            dataIndex: "title",
            align: "center",
            editTable: true
        },
        {
            title: "Description",
            dataIndex: "Description",
            align: "center",
            editTable: true
        },
        {
            title: "DueDate",
            dataIndex: "Due Date",
            align: "center",
            editTable: true
        },
        {
            title: "Status",
            dataIndex: "Status",
            align: "center",
            editTable: true
        },
        {
          title: "Action",
          dataIndex: "Action",
          align: "center",
          render: (_, record) => {
            const editTable = isEding(record);
            if (Data.length >= 1) {
              return (
                <Space>
                   <Popconfirm title="Are you sure you want to delete?" onConfirm={() => handleDelete(record)}>
                  <Button danger type="primary">
                    Delete
                  </Button>
                </Popconfirm>
                {editTable ?(

              
                  <span> 
                    <Space size = "middle">
                      <Button onClick={()=> save(record.key)} 
                      type="primary" 
                      style={{marginRight: 8}}> Save  </Button>
                      <Popconfirm title = "Are you sure to cancel ?" onConfirm={cancel}>
                        <Button>cancel</Button>
                      </Popconfirm>
                      </Space>
                      </span>
                        ): (
              
                <Button onClick={() => edit(record)} type="primary">
                  Edit
                </Button>
                  )}

                </Space>
               
              );
            } else {
              return null;
            }
          }
        }
        
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
          {
            "userId": 1,
            "id": 2,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 1,
            "id": 3,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 1,
            "id": 4,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 1,
            "id": 5,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 1,
            "id": 6,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 1,
            "id": 7,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 1,
            "id": 8,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 1,
            "id": 9,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 1,
            "id": 10,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 11,
            "id": 1,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 12,
            "id": 1,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 1,
            "id": 12,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 1,
            "id": 13,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 1,
            "id": 13,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 1,
            "id": 14,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 1,
            "id": 15,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 1,
            "id": 16,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 1,
            "id": 17,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 1,
            "id": 18,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 1,
            "id": 19,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
          {
            "userId": 1,
            "id": 20,
            "Timestamp": "02/15/2023 --> 7:30 pm",
            "title": "delectus aut autem",
            "Description": "Job descriptions are also known as job specifications",
            "Due Date": "05/15/2023",
            "Status": "Done",
          },
    ]
    

    
  return (
    <div>
         <Table
         columns={columns}
         dataSource={Data}
         bordered
         loading={loading}
         />
        
    </div>
  )
}

export default Datatable;