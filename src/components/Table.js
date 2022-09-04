import * as React from "react";
import {Table} from 'antd';
import { useState, useEffect} from "react";
import axios from "axios";

const columnUser = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name) => `${name.title} ${name.first} ${name.last}`,
      sorter: (a, b) => a.name.last.localeCompare(b.name.last),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      filters: [
        {
          text: "male",
          value: "male",
        },
        {
          text: "female",
          value: "female",
        },
        {
          text: "other",
          value: "other",
        },
      ],
      onFilter: (value, record) => record.gender.indexOf(value) === 0,
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
  ];
  
const TableMember = () => {

    const [useList, setUseList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const callApi =async()=>{
        setIsLoading(true);
 
         const response = await axios({
             method: 'get',
             url: 'https://randomuser.me/api/?results=100',
             type: 'json'
         });
 
         if(response.status === 200){
             setUseList(response.data.results)
         }
         console.log(response)
         setIsLoading(false);     
     }
 
     useEffect(()=>{
         callApi();    
     },[]);

  return (
    <div>
        <h2>danh sách thành viên lớp</h2>
          <Table rowKey="email" columns={columnUser} dataSource={useList} loading={isLoading}  />
    </div>
  )
}

export default TableMember