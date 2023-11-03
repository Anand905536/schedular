import React from 'react'
import { Space, Typography, Row, Col, Avatar } from 'antd';
import './footer.css'
import { MoreOutlined, UserOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;
const Header = () => {
    return (
        <Row className='footer'>
            <Col className='footer-inside'>
            copyright (c) 2022-2023 || Scheduler | all right reserved
            </Col>
        </Row>

    )
}

export default Header