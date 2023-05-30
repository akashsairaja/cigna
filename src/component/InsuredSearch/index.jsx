import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

import '../../Newperson.css';
import NewPerson from '../../Newperson';

const InsuredSearch = ({ show, handleClose, onSave }) => {
  const methods = useForm();
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = methods;
  //   const [modal, setModal] = React.useState(true);

  //   const toggle = () => setModal(!modal);
  console.log(errors);
  return (
    <div>
      <Modal
        isOpen={show}
        toggle={handleClose}
        centered
        size="lg"
        backdrop="static"
      >
        <ModalHeader toggle={handleClose}>Issued Search</ModalHeader>
        <ModalBody className="p-0">
          <div
            className="dialog-new-person"
            style={{
              position: 'relative',
            }}
          >
            <div className="main-div">
              <form onSubmit={handleSubmit(console.log)}>
                <fieldset className="border rounded-3">
                  <legend className="float-none w-auto">Criteria</legend>
                  <div className="row">
                    <div className="col-sm-3 p-0">
                      <div className="row">
                        <div className="col-sm-4">
                          <label htmlFor="lastname">Last Name</label>
                        </div>
                        <div className="col-sm-7">
                          <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            placeholder=""
                            {...register('lastname', {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4">
                          <label htmlFor="firstname">First Name</label>
                        </div>
                        <div className="col-sm-7">
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            placeholder=""
                            {...register('firstname', {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4">
                          <label htmlFor="ssn">SSN</label>
                        </div>
                        <div className="col-sm-7">
                          <InputMask
                            style={{
                              width: '100%',
                            }}
                            id="ssn"
                            mask="99-99-9999"
                            className="form-control"
                            placeholder={'  -  -  '}
                            {...register('ssn', {
                              required: true,
                              validate: value => {
                                return value.includes('_')
                                  ? 'Enter valid ssn'
                                  : true;
                              },
                            })}
                          ></InputMask>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3 p-0">
                      <div className="row">
                        <div className="col-sm-4">
                          <label>Mem ID</label>
                        </div>
                        <div className="col-sm-7">
                          <input
                            type="text"
                            className="form-control"
                            id="memid"
                            placeholder=""
                            {...register('memid', {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4">
                          <label>DOB</label>
                        </div>
                        <div className="col-sm-7">
                          <input
                            type="date"
                            className="form-control"
                            id="dob"
                            placeholder="__/__/____"
                            {...register('dob', {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col-sm-4 ">
                          <label htmlFor="state" className="col-form-label">
                            State
                          </label>
                        </div>
                        <div className="col-sm-7 p-0">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register('state', {
                              required: true,
                            })}
                            placeholder="-- Select --"
                          >
                            <option value="">-- Select --</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3 p-0 d-flex align-items-center ">
                      <div className="row">
                        <div className="col-sm-4 ">
                          <label htmlFor="personId" className="col-form-label">
                            Person Id
                          </label>
                        </div>
                        <div className="col-sm-7 p-0">
                          <input
                            type="text"
                            className="form-control"
                            id="personId"
                            placeholder=""
                            {...register('personId', {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <button type="submit" className="btn-custom">
                        Find
                      </button>
                      <br />
                      <button
                        type="button"
                        className="btn-custom"
                        onClick={() => {
                          setValue('ssn', '');
                          reset();
                        }}
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
              <fieldset className="border rounded-3 p-0 mt-3 ">
                <legend className="float-none w-auto">Persons</legend>
                <div
                  style={{
                    height: '45vh',
                    overflowX: 'scroll',
                    border: '2px solid #8080806b',
                  }}
                >
                  <table
                    className="table table-bordered"
                    style={{ width: '110%', marginLeft: '-13px' }}
                  >
                    <thead>
                      <tr>
                        <th>Lasname</th>
                        <th>Firstname</th>
                        <th>MI</th>
                        <th>DOB</th>
                        <th>Sheet1</th>
                        <th>City</th>
                        <th>State</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr>
                                                <td>1</td>
                                                <td>Clark</td>
                                                <td>Kent</td>
                                                <td>clarkkent@mail.com</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Peter</td>
                                                <td>Parker</td>
                                                <td>peterparker@mail.com</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>John</td>
                                                <td>Carter</td>
                                                <td>johncarter@mail.com</td>
                                            </tr> */}
                    </tbody>
                  </table>
                </div>
              </fieldset>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn-custom ms-4"
            // onClick={handleSubmit(formState => {
            //   console.log(formState);
            // })}
            onClick={onSave}
          >
            NewIssued
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default InsuredSearch;
