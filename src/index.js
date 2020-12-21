const endPoint = "http://localhost:3000/api/v1/grades";

document.addEventListener('DOMContentLoaded', () => {
  getSyllabi()

  let createSyllabusForm = document.querySelector('#create-syllabus-form')

  // listen for the submit event
  createSyllabusForm.addEventListener('submit', (e) => createFormHandler(e))

})

function getgrade() {
  fetch(endPoint)
  .then(response => response.json())
  .then(grades => {
    grades.data.forEach(grade => {
      // double check how your data is nested in the console so you can successfully access the attributes of each individual object
      const syllabusMarkup = `
        <div data-id=${grade.id}>
          <h3>${grade.attributes.name_of_class}</h3>
          <p>${grade.attributes.student_grade}</p>
          <p>${grade.attributes.student.name}</p>
          <button data-id=${grade.id}>edit</button>
        </div>
        <br><br>`;

        document.querySelector('#grade-container').innerHTML += syllabusMarkup
    
      })
    })
  }

  //triggered from the user hitiing submit 

  function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const gradeInput = document.querySelector('#input-grade').value
    const studentId = parseInt(document.querySelector('#students').value)
    postFetch(nameInput, gradeInput, studentId)
  }
  