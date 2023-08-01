import { Button, Container, Form, Modal, Row, Table } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddUser, AllUsers, DeleteUser, EditUser } from './Actions/userAction';

function App() {
    const dispatch = useDispatch (),
          users = useSelector(state => state.User.users);

    useEffect(() => {
        dispatch(AllUsers());
        // console.log(users)
    })

  const [showEdit, setShowEdit] = useState(false),
        [showAdd, setShowAdd] = useState(false),
        [name, setName] = useState(''),
        [email, setemail] = useState(''),
        [password, setPassword] = useState(''),
        [isAdmin] = useState(false),
        [userId, setuserId ] = useState(''),


   handleCloseEdit = () => setShowEdit(false),
   handleShowEdit = (id) => {
    // console.log(id)
    users.forEach( user => {
      if (user._id === id){
        setName(user.name)
        setemail(user.email)
      }
    });
    setuserId(id);
    setShowEdit(true)
  },
  UpdateUser = async () => {
      // console.log(name)
      // console.log(email)
      const data = {
        name,
        email,
        password,
        isAdmin
      },
      id = userId;
      dispatch(EditUser(id, data));
      handleCloseEdit();
  },
   handleCloseAdd = () => setShowAdd(false),
   handleShowAdd = () => setShowAdd(true),
  addUser = async () =>{
      // console.log(name)
      // console.log(email)
      const data = {
        name,
        email,
        password
      }
      dispatch(AddUser(data))

      // close model
      handleCloseAdd()

      // reset data
      setName('')
      setemail('')
      setPassword('')
  },
  deleteUser = async (id) => {
    // console.log(id)
    dispatch(DeleteUser(id));
  }

  return (
    <Container className="App">
      <Row>
        <h1 className='text-center'>All Users </h1> 
        <Button variant='primary' className='ms-auto w-auto mb-3' onClick={handleShowAdd}>Add User</Button>
        { 
          users && users.length > 0 ? 
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                users.map((user, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <Button variant='success' onClick={() => handleShowEdit(user._id)}>Edit</Button>
                      <Button variant='danger' onClick={() => deleteUser(user._id)} className='ms-3'>Delete</Button>
                    </td>
                  </tr>
                ))
                }
                
              </tbody>
            </Table>
          : 
          <div>
            <p>no users.</p>
          </div>
        }
        <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"  value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"  value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Email" />
                  </Form.Group>
                </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
              Close
            </Button>
            <Button variant="primary" onClick={UpdateUser} >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={showAdd} onHide={handleCloseAdd}>
          <Modal.Header closeButton>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPass">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" value={email} controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"  onChange={(e)=>{setemail(e.target.value)}} placeholder="Email" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAdd}>
              Close
            </Button>
            <Button variant="primary" onClick={addUser}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
}

export default App;
