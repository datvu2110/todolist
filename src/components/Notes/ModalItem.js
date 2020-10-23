import React from 'react'
import {Modal, Button, Row, Col, Form } from 'react-bootstrap'

class ModalItem extends React.Component{
    

    handleSubmit = (e) => {
        let noteId = ""
        noteId = document.getElementById("currentNoteId").innerHTML
        const todo = e.target.TodoName.value
        e.preventDefault()
        this.props.editItem(todo, noteId)
    }
    render(){
        console.log(document.getElementById("p2"))
        return(
            <Modal show={this.props.show} onHide={this.handleModal} >
                                    <Modal.Header closeButton>Edit Todo</Modal.Header>
                                    <Modal.Body>
                                        <Row>
                                            <Col sm={6}>
                                                <Form onSubmit={this.handleSubmit}>
                                                <Form.Group controlId="TodoName" >
                                                    <Form.Label>Re-enter Todo</Form.Label>
                                                    <Form.Control type="text" name="TodoName" required placeholder="TodoName" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Button variant="primary" type="submit">Rename</Button>
                                                </Form.Group>
                                                </Form>
                                                    <p  id="currentNoteId">{this.props.item}</p>
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick ={this.handleModal}>Close</Button>
                                    </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalItem