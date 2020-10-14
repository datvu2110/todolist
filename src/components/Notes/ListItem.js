import React from 'react'
import Particles from 'react-particles-js'
import './ListItem.css'
import Note from './Note'
import {Modal, Button, Row, Col, Form } from 'react-bootstrap'


class ListItem extends React.Component{

    state = {
        show: false
    }

    handleModal =() =>{
        this.setState({show:!this.state.show})
        console.log(this.props)
    }

    handleSubmit = (e) => {
        const noteId = document.getElementById("currentNoteId").innerHTML
        const todo = e.target.TodoName.value
        e.preventDefault()
        this.props.editItem(todo, noteId)
    }

    // handleSubmit = (e) =>{
    //     e.preventDefault()
    //     const noteId = document.getElementById("currentNoteId").innerHTML
    //     const todo = e.target.TodoName.value
    //     console.log(todo)
    //     fetch('http://localhost:8000/todo/' + noteId, {
    //     method:'PUT',
    //     headers:{'Content-Type' : 'application/json', 'Authorization' : 'sdfsfsfwiiowuerewrwrewrww'},
    //     body:JSON.stringify({
    //       todo:todo
    //     })
    //   }).then((result)=>console.log(result))
    // }


    render(){

        return <div>
            {this.props.items.map(item => {
                return(
                    <div>
                        <div className="list" key={item.noteid} onDoubleClick={this.changeEditMode} >
                            <p key={item.noteid}> {item.todo}   </p>
                            <div className="icons">
                                
                                <Button onClick ={this.handleModal}>Edit</Button>
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


                                <img onClick={()=> this.props.deleteItem(item.noteid)} src="https://img.icons8.com/wired/64/000000/empty-trash.png" height="20" />
                            </div>
                        </div>
                    </div>
                
                )
            })}
        </div>
        
    }
}


/* const ListItem = (props) =>{
    const items = props.items
    if (items.length !== 0){
        const listItems = items.map(item => {
            return (
                <div className="list" key={item.noteid}>
                    <p key={item.noteid}> {item.todo} {item.noteid}</p>
                    <div className="icons">
                        <img className="pencil" src="https://img.icons8.com/android/24/000000/pencil.png" height="20"/>
                        <img onClick={()=> props.deleteItem(item.noteid)} src="https://img.icons8.com/wired/64/000000/empty-trash.png" height="20" />
                    </div>
                </div>
            )
        })
        return (
            <div>{listItems}
            
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
    
} */

export default ListItem

