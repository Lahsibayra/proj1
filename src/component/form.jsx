import React, { useState } from 'react'

function Form() {
  const [name, setName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [course, setCourse] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [shift, setShift] = useState('');
  const [source, setSource] = useState('');
  const [stage, setStage] = useState('');
  const [address, setAddress] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [discount, setDiscount] = useState('');
  const [email, setEmail] = useState('');
  const [guardian, setGuardian] = useState('');
  const [guardianNo, setGuardianNo] = useState('');
  const [id, setId] = useState('');
  const [referalNo, setReferalNo] = useState('');
  const [referedBy, setReferedBy] = useState('');
  const [schoolCourse, setSchoolCourse] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [status, setStatus] = useState('');

  return (
    <div>
      <div className='border-2 drop-shadow-sm m-3  bg-red-100 p-4'>
        <form action='' className='grid grid-cols-2'>
          <div className='flex flex-col gap-3'>
            <div>
              <label className='mx-6'>Name</label>
              <input
                type='text'
                onChange={(e) => setName(e.target.value)}
                value={name}
                name='name'
                className='outline-none rounded-md'
              />
            </div>
            <div>
              <label className='mx-6'>Categories</label>
              <input
                type='text'
                onChange={(e) => setCategoryName(e.target.value)}
                value={categoryName}
                name='Category_name'
                className='outline-none rounded-md'
              />
            </div>
            <div>
              <label className='mx-6'>Course</label>
              <input
                type='text'
                onChange={(e) => setCourse(e.target.value)}
                value={course}
                name='Course'
                className='outline-none rounded-md'
              />
            </div>
            <div>
              <label className='mx-6'>Date</label>
              <input
                type='date'
                onChange={(e) => setDate(e.target.value)}
                value={date}
                name='Date'
                className='outline-none rounded-md'
              />
            </div>
            <div>
              <label className='mx-6'>Gender</label>
              <input
                type='text'
                onChange={(e) => {setGender('gender',e.target.value);
                  console.log({gender});
                }}
                value={gender}
                
                name='Gender'
                className='outline-none rounded-md'
              />
              
               
              
            </div>

            <div>
              <label className='mx-6'>Education-level</label>
              <input
                type='text'
                onChange={(e) => setEducationLevel(e.target.value)}
                value={educationLevel}
                name='Level_of_Education'
                className='outline-none rounded-md'
              />
            </div>

            <div>
              <label className='mx-6'>Shift</label>
              <input
                type='text'
                onChange={(e) => setShift(e.target.value)}
                value={shift}
                name='Shift'
                className='outline-none rounded-md'
              />
            </div>

            <div>
              <label className='mx-6'>Source</label>
              <input
                type='text'
                onChange={(e) => setSource(e.target.value)}
                value={source}
                name='SourceOfInformation'
                className='outline-none rounded-md'
              />
            </div>

            <div>
              <label className='mx-6'>Stage</label>
              <input
                type='text'
                onChange={(e) => setStage(e.target.value)}
                value={stage}
                name='Stage'
                className='outline-none rounded-md'
              />
            </div>

            <div>
              <label className='mx-6'>Address</label>
              <input
                type='text'
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                name='address'
                className='outline-none rounded-md'
              />
            </div>

            <div>
              <label className='mx-6'>Contact_no</label>
              <input
                type='text'
                onChange={(e) => setContactNo(e.target.value)}
                value={contactNo}
                name='contact_no'
                className='outline-none rounded-md'
              />
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div>
              <label className='mx-6'>Discount</label>
              <input
                type='text'
                onChange={(e) => setDiscount(e.target.value)}
                value={discount}
                name='discount'
                className='outline-none rounded-md'
              />
            </div>

            <div>
              <label className='mx-6'>Email</label>
              <input
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name='email'
                className='outline-none rounded-md'
              />
            </div>

            <div>
              <label className='mx-6'>Guardian</label>
              <input
                type='text'
                onChange={(e) => setGuardian(e.target.value)}
                value={guardian}
                name='gurdain_name'
                className='outline-none rounded-md'
              />
            </div>

            <div>
              <label className='mx-6'>Guardian-NO</label>
              <input
                type='text'
                onChange={(e) => setGuardianNo(e.target.value)}
                value={guardianNo}
                name='gurdain_no'
                className='outline-none rounded-md'
              />
            </div>

            <div>
              <label className='mx-6'>ID</label>
              <input
                type='text'
                onChange={(e) => setId(e.target.value)}
                value={id}
                name='id'
                className='outline-none rounded-md'
              />
            </div>

            <div>
              <label className='mx-6'>Image</label>
              <input
                type='file'
                onChange={(e) => console.log(e.target.files[0])}
                name='image'
                className='outline-none rounded-md'
              />
            </div>

            <div>
              <label className='mx-6'>ReferalNo</label>
              <input
                type='text'
                onChange={(e) => setReferalNo(e.target.value)}
                value={referalNo}
                name='referal_contact_no'
                className='outline-none rounded-md'
              />
            </div>

            <div>
              <label className='mx-6'>Refered_from</label>
              <input
                type='text'
                onChange={(e) => setReferedBy(e.target.value)}
                value={referedBy}
                name='refered_by'
                className='outline-none rounded-md'
              />
            </div>

            <div>
              <label className='mx-6'>School_Course</label>
              <input
                type='text'
                onChange={(e) => setSchoolCourse(e.target.value)}
                value={schoolCourse}
                name='schoolCourseTaken'
                className='outline-none rounded-md'
              />
            </div>

            <div>
              <label className='mx-6'>SchoolName</label>
              <input
                type='text'
                onChange={(e) => setSchoolName(e.target.value)}
                value={schoolName}
                name='schoolName'
                className='outline-none rounded-md'
              />
            </div>

            <div>
              <label className='mx-6'>Status</label>
              <input
                type='text'
                onChange={(e) => setStatus(e.target.value)}
                value={status}
                name='status'
                className='outline-none rounded-md border'
              />
            </div>
          </div>
        </form>
        <div className='align-middle flex justify-center w-11/12 m-auto'>
          <button
            type='submit'
            name='submit'
            className='text-white bg-slate-500 rounded-md p-2'
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
