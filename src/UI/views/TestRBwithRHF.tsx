import React from 'react'
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';


function TestRBwithRHF() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    const { register, handleSubmit, watch, errors, control } = useForm();

    const onSubmit = (data: FormData) => {
        console.log("data", data);
    }
    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email"
                        className="text-danger"
                        ref={register({ required: true })} />
                    <Form.Text className="text-muted" >
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Group className="row">
                          <label htmlFor="employeeType" className="col-sm-2 col-form-label">الفئة التابعة لها</label>
                          <div className="col-sm-4">
     
                          <Select ref={register} name="ice" options={options} />
                          </div>
                          <label htmlFor="" className="col-sm-2 col-form-label">إقامة وزارة</label>
                          <div className="col-sm-4">
                            {/* <div className="custom-control custom-checkbox  mt-1"> */}
                              <input type="checkbox" defaultChecked data-toggle="toggle" data-on="<i class='fa fa-check'></i>" data-off="<i class='fas fa-times'></i>" data-size="sm" />
                              {/* <Switch onChange={()=> setmoaIqama(val=>!val)} checked={moaIqama} /> */}
                              {/* <Controller
                                name="isMOA"
                                control={control}
                                defaultValue={true}
                                render={({ onChange, value }) => (
                                  <Switch
                                    onChange={onChange}
                                    checked={value}
                                    />
                                  )}
                              /> */}
                            {/* </div> */}
                          </div>
                        
                        
                        </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>
            <Container fluid>
                <Row>
                    <Col >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default TestRBwithRHF
