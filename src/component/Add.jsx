import React from 'react';
import { Formik, Form, Field } from 'formik';
import Switches from './switches';
import {useLocation} from 'react-router-dom'

function Add() {
  const location=useLocation()
  console.log(location)
  return (
    <div className="bg-red-300 h-full">
        <h1 className=' flex justify-center mt-4 text-xl font-bold '>The Registration Form</h1>
        <div className='w-fit mx-auto my-2'>
        <Switches/>
        </div>
             
      <Formik
        initialValues={{
          name: '',
          Category_name: '',
          Course: '',
          Date: '',
          Gender: '',
          Level_of_Education: '',
          Shift: '',
          SourceOfInformation: '',
          Stage: '',
          address: '',
          contact_no: '',
          discount: '',
          email: '',
          gurdain_name: '',
          gurdain_no: '',
          id: '',
          image: '',
          referal_contact_no: '',
          refered_by: '',
          schoolCourseTaken: '',
          schoolName: '',
          status: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className='  grid lg:grid-cols-2  shadow-lg shadow-gray-200 justify-center grid-col-1 bg-red-200  p-2 content-center w-fit m-auto rounded-sm'>    
             <div className=' m-2 text-xl gap-2 '>
            <div className="flex flex-col">
              <div>
                <label htmlFor="" className="mr-11">
                  Name:
                </label>
              </div>
              <div>
                <Field type="text" name="name" className="outline-none p-2 rounded-md"/>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="" className="mr-2">
                  Categories:
                </label>
              </div>
              <div>
                <Field type="text" name="Category_name" className="outline-none p-2 rounded-md" />
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="">Course:</label>
              </div>
              <div>
                <Field type="text" name="Course" className="outline-none p-2 rounded-md"/>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="">Date:</label>
              </div>
              <div>
                <Field type="date" name="Date"  className="outline-none p-2 rounded-md"/>
              </div>
            </div>
            <div className="flex flex-col ">
              <div>
                <label htmlFor="">Gender:</label>
              </div>
              <div>
                <label className='mr-2'>
                  <Field type="radio" name="Gender" value="male" className="outline-none p-2 rounded-md" />
                  Male
                </label>
                <label className='mr-2'>
                  <Field type="radio" name="Gender" value="female" className="outline-none p-2 rounded-md" />
                  Female
                </label>
                <label className='mr-2'>
                  <Field type="radio" name="Gender" value="other" className="outline-none p-2 rounded-md" />
                  Other
                </label>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="">Level:</label>
              </div>
              <div>
                <Field type="text" name="Level_of_Education" className="outline-none p-2 rounded-md" />
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="">Shift:</label>
              </div>
              <div>
                <Field as="select" name="Shift" className="outline-none p-2 rounded-md">
                  <option value="">Select Shift</option>
                  <option value="Night">Night</option>
                  <option value="Day">Day</option>
                </Field>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="">Source of Information:</label>
              </div>
              <div>
                <Field type="text" name="SourceOfInformation" className="outline-none p-2 rounded-md" />
              </div>
            </div>
            
                
            <div className="flex flex-col">
              <div>
                <label htmlFor="">Stage:</label>
              </div>
              <div>
                <Field type="text" name="Stage" className="outline-none p-2 rounded-md"/>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="">Address:</label>
              </div>
              <div>
                <Field type="text" name="address" className="outline-none p-2 rounded-md"/>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="">Contact No:</label>
              </div>
              <div>
                <Field type="tel" name="contact_no" className="outline-none p-2 rounded-md"/>
              </div>
            </div>
            </div>
            <div className='text-xl m-2'>
            <div className="flex flex-col">
              <div>
                <label htmlFor="">Discount:</label>
              </div>
              <div>
                <Field type="text" name="discount" className="outline-none p-2 rounded-md"/>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="">Email:</label>
              </div>
              <div>
                <Field type="email" name="email" className="outline-none p-2 rounded-md" />
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="">Guardian Name:</label>
              </div>
              <div>
                <Field type="text" name="gurdain_name" className="outline-none p-2 rounded-md"/>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="">Guardian No:</label>
              </div>
              <div>
                <Field type="tel" name="gurdain_no"className="outline-none p-2 rounded-md" />
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="">ID:</label>
              </div>
             <div>
              </div>
              <div>
                <Field type="text" name="id" className="outline-none p-2 rounded-md"/>
              </div>
            </div>
            <div className="flex flex-col ">
              <div>
                <label htmlFor="">Image:</label>
              </div>
              <div>
                <Field type="file" name="image" className="outline-none p-2 rounded-md"/>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="">Referral Contact No:</label>
              </div>
              <div>
                <Field type="tel" name="referal_contact_no" className="outline-none p-2 rounded-md"/>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="">Referred By:</label>
              </div>
              <div>
                <Field type="text" name="refered_by" className="outline-none p-2 rounded-md" />
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="">School Course Taken:</label>
              </div>
              <div>
                <Field type="text" name="schoolCourseTaken"className="outline-none p-2 rounded-md" />
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="">School Name:</label>
              </div>
              <div>
                <Field type="text" name="schoolName" className="outline-none p-2 rounded-md"/>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="">Status:</label>
              </div>
              <div>
                <Field type="text" name="status" className="outline-none p-2 rounded-md"/>
              </div>
            </div>
            </div>
            </div>
            <div className=' flex justify-center m-4 '>

            <button type="submit" className='border-2 bg-slate-400 rounded-md p-2 m-2' > Submit </button>
            </div>

             
             
          </Form>
            
        )}
      </Formik>
    </div>
  );
}

export default Add;
