import React from 'react'
import { Row, Col, Typography ,Button} from 'antd'
import { ImCross } from 'react-icons/im'
import './taskArray.css'


const { Title } = Typography
const TaskArray = () => {
    return (
        <Col className='task-array'>
            <Row className='task-array-1'>
                <Row className='timings'>
                    <Col className="start-timing">
                        start time
                    </Col>
                    <Col className='end-timing'>
                        End time
                    </Col>
                </Row>
                <Col>
                    <Title level={2} className='add-task'>Task Detail</Title>
                </Col>
                <Col>
                <Title level={3} className='count-down'>Countdown Timer</Title>
                    {/* <ImCross className="cross-icon" size={20} style={{ width: "200px" }} /> */}
                </Col>

            </Row>
            <Row className='task-array-2'>
                <Row className='task'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, officiis nesciunt enim maiores aut quidem illo cupiditate nisi ea harum beatae esse rerum debitis dignissimos optio soluta veniam pariatur eos placeat atque magni eaque consectetur nostrum? Ducimus dolorem eveniet voluptas enim dicta quod non perspiciatis rerum necessitatibus tempore quam deserunt error sapiente dolores quos accusamus voluptatibus animi hic illum sed illo asperiores, dolore quasi. Dolores quisquam reprehenderit debitis molestias inventore? Est consequuntur quam explicabo tempora eveniet? Porro asperiores at magnam quas explicabo hic deserunt recusandae, praesentium similique fuga rem harum tempore, vel nostrum repellendus, repudiandae suscipit. Similique laboriosam harum unde!
                </Row>
            </Row>
            <Row className="last-row">
                <Title level={4} className='status'>Status</Title>
                <Button className="delete-task-button" style={{color:"red"}}>Delete Task</Button>
            </Row>
        </Col>
    )
}

export default TaskArray