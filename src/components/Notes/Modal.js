import React from 'react'

class Modal extends React.Component{
    

    handleSubmit = (e) => {
        let noteId = ""
        noteId = document.getElementById("currentNoteId").innerHTML
        const todo = e.target.TodoName.value
        e.preventDefault()
        this.props.editItem(todo, noteId)
    }
    render(){
        return(
            <Modal show={this.state.show} onHide={this.handleModal} >
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
                                                <p  id="currentNoteId">{item.noteid}</p>
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

export default Modal