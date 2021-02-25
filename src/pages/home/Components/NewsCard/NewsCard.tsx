import React, { useState, useCallback } from 'react'
import './NewsCard.css'
import {
    Card, CardImg, CardText, CardBody, CardTitle,
    Modal, ModalHeader, ModalBody
} from 'reactstrap';

interface Props {
    title: string, 
    text: string, 
    date: string, 
    img: string
}

const NewsCard:React.FC<Props> = ({ title, text, date, img }) => {

    const [modal, setModal] = useState(false);

    const toggle = useCallback(() => setModal(!modal), [modal]);

    return (
        <Card>
            <CardImg top width="100%" src={img} alt="Card image cap" onClick={toggle} className="cursor" />
            <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardText>
                    <small className="text-muted">{date}</small>
                </CardText>
            </CardBody>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} close={
                    <button className="close" onClick={toggle}>&times;</button>
                }>
                    {title}</ModalHeader>
                <ModalBody>
                    {text}
                </ModalBody>
            </Modal>
        </Card>
    )
}

export default NewsCard