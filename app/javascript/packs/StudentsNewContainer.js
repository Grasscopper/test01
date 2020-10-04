import React, { useState } from 'react'

const StudentsNewContainer = (props) => {
  let [student, setStudent] = useState({
    name: "",
    talent: ""
  })

  const update = (event) => {
    event.preventDefault()
    setStudent({
      ...student,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const clearForm = () => {
    setStudent({
      name: "",
      talent: ""
    })
  }

  const passStudent = (event) => {
    event.preventDefault()
    props.postNewStudent(student)
    clearForm()
  }

  return (
    <form onSubmit={passStudent} autoComplete="off">
      <label htmlFor="name">Name</label>
      <input
      id="name"
      name="name"
      value={student.name}
      onChange={update}/>

      <label htmlFor="talent">Talent</label>
      <input
      id="talent"
      name="talent"
      value={student.talent}
      onChange={update}/>

      <button type="submit">Submit</button>
    </form>
  )
}

export default StudentsNewContainer
