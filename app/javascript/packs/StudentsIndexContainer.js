import React, { useState, useEffect } from 'react'
import StudentTile from './StudentTile'
import StudentsNewContainer from './StudentsNewContainer'

const StudentsIndexContainer = (props) => {
  let [students, setStudents] = useState([])

  //GET
  useEffect(() => {
    fetch('/api/students')
    .then(response => response.json())
    .then(body => {
      setStudents(body)
    })
    .catch(err => console.error(err))
  }, [])

  //POST
  const postNewStudent = (student) => {
    fetch('/api/students', {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(student),
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(body => {
      setStudents([
        ...students,
        body
      ])
    })
    .catch(err => console.error(err))
  }

  let studentTiles = students.map((student) => {
    return (
      <StudentTile key={student.id} student={student} />
    )
  })

  return (
    <div>
    <StudentsNewContainer postNewStudent={postNewStudent} />
    {studentTiles}
    </div>
  )
}

export default StudentsIndexContainer
