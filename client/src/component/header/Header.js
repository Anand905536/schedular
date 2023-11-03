import React from 'react'
import { Space, Typography, Row, Col, Avatar } from 'antd';
import './header.css'
import { MoreOutlined, UserOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;
const Header = () => {
    return (
        <Row className='main-container'>
            <Col span={8} className='sub-container1'>
                <Col className='image-content'>
                    <Col className='inside-sub-container1-1'> <Avatar className="image"
                        size={80} icon={<UserOutlined />} /></Col>
                    <Col className='inside-sub-container1-2'>name</Col>
                    <Col className='inside-sub-container1-3'>(A Software Developer)</Col>
                </Col>
            </Col>
            <Col span={8} className='sub-container2'>
                <Col style={{ textAlign: "center" }} className='inside-sub-container2-1'>Scheduler</Col>
                <Col style={{ textAlign: "center" }} className='inside-sub-container2-2' >(A Time Management App)</Col>
            </Col>
            <Col span={8} className='sub-container3'>
                <MoreOutlined className='icon' />
            </Col>
        </Row>

    )
}

export default Header