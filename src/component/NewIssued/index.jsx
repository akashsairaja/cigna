import React from 'react';
import { useForm } from 'react-hook-form';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import InputMask from 'react-input-mask';

import '../../Newperson.css';
import Swal from 'sweetalert2';
import { getAge } from '../../utils';

const NumberRegex = /^[0-9]+$/;
const NewIssued = ({ show, handleClose }) => {
  const [state, setState] = React.useState({
    isAge: false,
  });
  const { isAge } = state;
  const { register, setValue, setFocus, handleSubmit } = useForm();

  const handleSSNBlur = ({ target: { value } }) => {
    if (value.length > 0 && (!NumberRegex.test(value) || value.length < 9)) {
      Swal.fire({
        icon: 'warning',
        text: 'Invalid: SSN number',
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          setFocus('ssn');
        }
      });
    }
  };

  const handleAgeBlue = ({ target: { value } }) => {
    const age = Number(value);
    if (age > 0 && (!NumberRegex.test(age) || age < 1 || age > 200)) {
      Swal.fire({
        icon: 'warning',
        text: 'Invalid: Age',
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          setFocus('age');
        }
      });
    }
  };

  const handleDobChange = ({ target: { value } }) => {
    const todayDate = new Date();
    const selectedDate = new Date(value);
    if (selectedDate > todayDate) {
      Swal.fire({
        icon: 'warning',
        text: 'Invalid: Date of birth is in the future',
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          setFocus('dob');
        }
      });
      return;
    }
    const currentAge = getAge(selectedDate);
    const age = currentAge > 0 ? currentAge : null;
    const isAge = age > 0;
    setValue('age', age);
    setState(prev => ({ ...prev, isAge }));
  };

  const handleZipcodeBlur = ({ target: { value } }) => {
    if (
      value.length > 0 &&
      (!NumberRegex.test(value) || (value.length !== 5 && value.length !== 9))
    ) {
      Swal.fire({
        icon: 'warning',
        text: 'Invalid: Zipcode',
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          setFocus('zipcode');
        }
      });
    }
  };
  return (
    <Modal
      isOpen={show}
      toggle={handleClose}
      centered
      size="lg"
      backdrop="static"
    >
      <ModalHeader toggle={handleClose}>New Issued</ModalHeader>
      <ModalBody className="p-0">
        <div
          className="dialog-new-person"
          style={{
            position: 'relative',
          }}
        >
          <div className="main-div">
            {/* <form onSubmit={handleSubmit(console.log)}> */}
            <div className="row">
              <div className="col-sm-12 p-0 pt-4 row">
                <div className="col-md-6" id="form-new-person">
                  <div className="container">
                    <div className="row lt-email">
                      <div className="col-md-7">
                        <div className="row ">
                          <label
                            htmlFor="inputEmail"
                            className="col-sm-6 col-form-label"
                          >
                            HMO Code
                          </label>
                          <div
                            className="col-sm-5 p-0"
                            style={{ marginLeft: '-5px' }}
                          >
                            <input
                              type="email"
                              className="form-control"
                              id="inputEmail"
                              placeholder=""
                              {...register('email', { required: true })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row lt-email">
                      <div className="col-md-9">
                        <div className="row ">
                          <label
                            htmlFor="ssn"
                            className="col-sm-4 col-form-label"
                          >
                            Person SSN
                          </label>
                          <div className="col-sm-5">
                            {/* <input
                              type="text"
                              className="form-control"
                              id="ssn"
                              placeholder=""
                              maxLength={9}
                              pattern="[0-9]*"
                              {...register('ssn', {
                                required: true,
                                minLength: 9,
                                onBlur: handleSSNBlur,
                              })}
                            /> */}
                            <InputMask
                              style={{
                                width: '100%',
                              }}
                              id="ssn"
                              mask="99-99-9999"
                              // alwaysShowMask
                              placeholder={'  -  -  '}
                              required
                              className="form-control"
                              // {...register('ssn', {
                              //   required: true,
                              // })}
                            ></InputMask>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row lt-email">
                      <div className="col-md-10">
                        <div className="row ">
                          <label
                            htmlFor="memberId"
                            className="col-sm-4 col-form-label"
                          >
                            Person Mem ID
                          </label>
                          <div className="col-sm-7 p-0">
                            <input
                              type="text"
                              className="form-control"
                              id="memberId"
                              placeholder=""
                              {...register('memberId', { required: true })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row lt-email">
                      <div className="col-md-12">
                        <div className="row ">
                          <label
                            htmlFor="managementStatus"
                            className="col-sm-5 col-form-label"
                          >
                            Disease Management Status{' '}
                          </label>
                          <div className="col-sm-5 p-0">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              id="managementStatus"
                              {...register('managementStatus', {
                                required: true,
                              })}
                            >
                              <option value="">--Select--</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <fieldset className="border rounded-3">
                      <legend className="float-none w-auto">Name</legend>
                      <div className="row ">
                        <label
                          htmlFor="lastname"
                          className="col-sm-2 col-form-label"
                        >
                          Last
                        </label>
                        <div className="col-sm-9">
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
                      <div className="row ">
                        <label
                          htmlFor="firstname"
                          className="col-sm-2 col-form-label"
                        >
                          First
                        </label>
                        <div className="col-sm-9">
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
                      <div className="row ">
                        <label htmlFor="mi" className="col-sm-2 col-form-label">
                          M.I
                        </label>
                        <div className="col-sm-10">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="mi"
                            {...register('mi')}
                          />
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div className="container">
                    <fieldset className="border rounded-3">
                      <legend className="float-none w-auto">
                        General Information
                      </legend>
                      <div className="row ">
                        <label
                          htmlFor="gender"
                          className="col-sm-2 col-form-label"
                        >
                          Gender
                        </label>
                        <div className="col-sm-5">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register('gender', {
                              required: true,
                            })}
                          >
                            <option value="">-- Select --</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="row ">
                        <label
                          htmlFor="dob"
                          className="col-sm-2 col-form-label"
                        >
                          DOB
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="date"
                            className="form-control"
                            id="dob"
                            // max={maxDate}
                            placeholder="__/__/____"
                            {...register('dob', {
                              required: true,
                              onChange: handleDobChange,
                            })}
                          />
                        </div>
                      </div>
                      <div className="row ">
                        <label
                          htmlFor="age"
                          className="col-sm-2 col-form-label"
                        >
                          Age
                        </label>
                        <div className="col-sm-4">
                          <input
                            type="text"
                            className="form-control"
                            id="age"
                            placeholder=""
                            maxLength={3}
                            disabled={isAge}
                            {...register('age', {
                              required: true,
                              onBlur: handleAgeBlue,
                            })}
                          />
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="col-md-6  p-0">
                  <div className="container">
                    <fieldset className="border rounded-3">
                      <legend className="float-none w-auto">Address</legend>
                      <div className="row ">
                        <label
                          htmlFor="address1"
                          className="col-sm-2 col-form-label"
                        >
                          Address 1
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            id="address1"
                            placeholder=""
                            {...register('address1', {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                      <div className="row ">
                        <label
                          htmlFor="address2"
                          className="col-sm-2 col-form-label"
                        >
                          Address 2
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            id="address2"
                            placeholder=""
                            {...register('address2', {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                      <div className="row ">
                        <label
                          htmlFor="zipcode"
                          className="col-sm-2 col-form-label"
                        >
                          Zip Code
                        </label>
                        <div className="col-sm-4">
                          <input
                            type="text"
                            className="form-control"
                            id="zipcode"
                            maxLength={9}
                            placeholder=""
                            {...register('zipcode', {
                              required: true,
                              onBlur: handleZipcodeBlur,
                            })}
                          />
                        </div>
                      </div>
                      <div className="row ">
                        <label
                          htmlFor="city"
                          className="col-sm-2 col-form-label"
                        >
                          City
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            {...register('city', {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                      <div className="row ">
                        <label
                          htmlFor="countryName"
                          className="col-sm-2 col-form-label"
                        >
                          County
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            id="countryName"
                            placeholder=""
                            {...register('countryName', {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                      <div className="row ">
                        <label
                          htmlFor="state"
                          className="col-sm-2 col-form-label"
                        >
                          State
                        </label>
                        <div className="col-sm-4 p-0">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register('state', {
                              required: true,
                            })}
                          >
                            <option value="">-- Select --</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="row ">
                        <label
                          htmlFor="country"
                          className="col-sm-2 col-form-label"
                        >
                          Country
                        </label>
                        <div className="col-sm-5 p-0">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register('country', {
                              required: true,
                            })}
                          >
                            <option value="">-- Select --</option>
                            <option value="1">United states</option>
                            <option value="2">India</option>
                            <option value="3">China</option>
                          </select>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div className="container">
                    <fieldset className="border rounded-3">
                      <legend className="float-none w-auto">Phones</legend>
                      <div className="row">
                        <div
                          className="col-md-9"
                          style={{
                            height: '24vh',
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
                                <th>Phone Type</th>
                                <th>Phone</th>
                                <th>Extention</th>
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
                        <div className="col-md-2 p-0 ps-2">
                          <button type="button" className="btn-custom">
                            Add
                          </button>
                          <br />
                          <button type="button" className="btn-custom" disabled>
                            Modify
                          </button>
                          <br />
                          <button type="button" className="btn-custom" disabled>
                            Delete
                          </button>
                          <br />
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
            {/* </form> */}
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn-custom">Copy patient demo</button>
        <button className="btn-custom ms-4" onClick={handleSubmit(console.log)}>
          Save
        </button>
        <button type="button" className="btn-custom ms-4" onClick={handleClose}>
          Cancel
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default NewIssued;
