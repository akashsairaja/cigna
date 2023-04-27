import React from 'react';

import {
    Button, Form, FormGroup, Label, Input, Card,
    Container, Row, Col, CardBody, CardFooter, CardHeader, Table
} from 'reactstrap';

import 'bootstrap-css-only/css/bootstrap.css';
import './Modal.css'

const Application = () => {

    return (<Container>
            <Row className={"mt-5"}>
                <Col md={12} className={"health-Login"}>
                    <Card>
                        <CardHeader>
                            New Person
                        </CardHeader>
                        <CardBody className={"color-code"}>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Row>
                                            <Col md={8}>
                                                <FormGroup className={"form-group"} row>
                                                    <Label sm={4}>HMO Code</Label>
                                                    <Col sm={12}>
                                                        <input
                                                             type="text" name="last"
                                                            placeholder=""/>
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                            <Col md={4}>
                                                <FormGroup className={"form-group"}>
                                                    <Label check sm={12}>
                                                        <input type="checkbox"/>{' '}
                                                        Check me out
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup className={"form-group"}> <Label sm={12} className="">Personal
                                                    SSN</Label>
                                                    <input  type="text" name="personalSSN"/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup className={"form-group"}> <Label sm={12} className="">Personal
                                                    Mem ID</Label>
                                                    <input type="text" name="personalSSN"/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup className={"form-group"}>
                                                    <Label sm={12} className="">Disease Management Status</Label>
                                                    <input  type="select" name="country" id="exampleSelect"
                                                           className={"d-inline"}/>
                                                </FormGroup>
                                            </Col>

                                            <Col md={12}>
                                                <fieldset className="border p-2">
                                                    <legend className="float-none w-auto p-2"> Name</legend>
                                                    <Form row>
                                                        <FormGroup className={"form-group"} row>
                                                            <Label sm={2} className="">Last</Label>
                                                            <Col sm={10}>
                                                                <input type="text" name="last"
                                                                       placeholder=""/>
                                                            </Col>
                                                        </FormGroup>
                                                        <FormGroup className={"form-group"} row>
                                                            <Label sm={2} className="">First </Label>
                                                            <Col sm={10}>
                                                                <input  type="text" name="last"
                                                                       placeholder=""/>
                                                            </Col>
                                                        </FormGroup>
                                                        <FormGroup className={"form-group"} check row>
                                                            <Label sm={2} check>
                                                                <Col sm={10}>
                                                                    M.I
                                                                    <input type="checkbox"/>{' '}
                                                                </Col>
                                                            </Label>
                                                        </FormGroup>
                                                    </Form>

                                                </fieldset>
                                            </Col>
                                            <Col md={12}>
                                                <fieldset className="border p-2">
                                                    <legend className="float-none w-auto p-2"> General Information
                                                    </legend>
                                                    <FormGroup className={"form-group"} row>
                                                            <Label sm={2} className="">Gender</Label>
                                                            <Col sm={10}>
                                                                <input  type="text" name="last"
                                                                       placeholder=""/>
                                                            </Col>
                                                        </FormGroup>
                                                    <FormGroup className={"form-group"} row>

                                                            <Label sm={2} className="">DOB</Label>
                                                            <Col sm={10}>

                                                                <input  type="text" name="last"
                                                                       placeholder=""/>
                                                            </Col>
                                                        </FormGroup>
                                                    <FormGroup className={"form-group"} row>
                                                            <Label sm={2} className="">Age</Label>
                                                            <Col sm={10}>
                                                                <input  type="number" name="last"
                                                                       placeholder=""/>
                                                            </Col>
                                                        </FormGroup>
                                                </fieldset>
                                            </Col>

                                            <Col md={12}>
                                                <fieldset className="border p-2">
                                                    <legend className="float-none w-auto p-2 font-smaller"> Insured Relation to Person
                                                    </legend>

                                                    <input
                                                        type="text" name="last"
                                                        placeholder=""/>

                                                        <button>
                                                            find
                                                        </button>
                                                </fieldset>
                                            </Col>
                                        </Row>

                                    </Col>
                                    <Col md={6}>
                                        <fieldset className="border p-2">
                                            <legend className="float-none w-auto p-2"> Address</legend>
                                            <FormGroup className={"form-group"}>
                                                <Label className="">Address 1</Label>
                                                <input  type="text" name="address1" placeholder=""/>
                                            </FormGroup>
                                            <FormGroup className={"form-group"}>
                                                <Label className="">Address 2</Label>
                                                <input  type="text" name="address2"
                                                       placeholder=""/>
                                            </FormGroup>
                                            <FormGroup className={"form-group"}>
                                                <Label className="">Zip Code</Label>
                                                <input  type="text" name="zipCode"
                                                       placeholder=""/>
                                            </FormGroup>
                                            <FormGroup className={"form-group"}>
                                                <Label className="">City</Label>
                                                <input  type="text" name="city"
                                                       placeholder=""/>
                                            </FormGroup>
                                            <FormGroup className={"form-group"}>
                                                <Label className="">County</Label>
                                                <input  type="text" name="county"
                                                       placeholder=""/>
                                            </FormGroup>
                                            <FormGroup className={"form-group"}>
                                                <Label>State</Label>
                                                <Input  type="select" name="state" id="exampleSelect">
                                                    <option>MY</option>
                                                    <option>WS</option>
                                                    <option>TA</option>
                                                    <option>AB</option>
                                                    <option>CD</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup className={"form-group"}>
                                                <Label>Country</Label>
                                                <Input  type="select" name="country" id="exampleSelect">
                                                    <option>Unites States</option>
                                                    <option>England</option>
                                                    <option>India</option>
                                                </Input>
                                            </FormGroup>
                                        </fieldset>
                                        <fieldset className="border p-2">
                                            <legend className="float-none w-auto p-2"> Phones</legend>

                                            <Table>
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Phone Type</th>
                                                    <th>Phone</th>
                                                    <th>Extension</th>
                                                </tr>
                                                </thead>
                                            </Table>
                                        </fieldset>


                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                        <CardFooter className="d-flex justify-content-end align-content-end float-end">
                            <Button className={"mx-2"}>
                                Save
                            </Button>
                            <Button>
                                Cancel
                            </Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Application