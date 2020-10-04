import React from 'react'

const StudentTile = (props) => {
  return (
    <div>
      <h2>{props.student.name}</h2>
      <p>{props.student.talent}</p>
    </div>
  )
}

export default StudentTile
