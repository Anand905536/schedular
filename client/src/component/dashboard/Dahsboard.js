import React from 'react'
import './dashboard.css'
import { Space, Typography, Row, Col, Avatar, Button, TimePicker } from 'antd';
import TaskArray from './TaskArray';

const { Title } = Typography
const Dahsboard = () => {

  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };

  return (
    <Typography style={{ textAlign: "center" }}>
      <Row className='dashboard-container'>
        <Col className='title'>
          <Title >Add time with task</Title>
        </Col>
      </Row>

      <Row className='time-task-row'>
        <Col className='time-picker'>
          <TimePicker style={{ cursor: "pointer" }} use12Hours placeholder="start time" format="h:mm a" onChange={onChange} />
          <TimePicker style={{ cursor: "pointer" }} use12Hours placeholder="end time" format="h:mm a" onChange={onChange} />
          <Button className='addTask-button'>Add task</Button>
        </Col>
      </Row>
      <Row >
        <Title className='my-tasks'> My Tasks</Title>
      </Row>

      <Row >
        <TaskArray className='user-task-array' />
      </Row>
    </Typography>
  )
}

export default Dahsboard