const endPoint = "http://localhost:3000/api/v1/grades";

document.addEventListener('DOMContentLoaded', () => {
  getGrades()

  const createGradeForm = document.querySelector('#input-container')

 
  createGradeForm.addEventListener('submit', (e) => createFormHandler(e))
})



function getGrades() {
    fetch(endPoint)
      .then(response => response.json())
      .then(grades => {
        // remember our JSON data is a bit nested due to our serializer
        grades.data.forEach(grade => {
            // double check how your data is nested in the console so you can successfully access the attributes of each individual object
          const gradeMarkup = `
            <div data-id=${grade.id}>
              <h3>${grade.attributes.name_of_class}</h3>
              <h3>${grade.attributes.student_grade}</h3>
              <p>${grade.attributes.student.name}</p>
              <button data-id=${grade.id}>edit</button>
            </div>
            <br><br>`;
  
            document.querySelector('#grade-container').innerHTML += gradeMarkup
        })
      })
    }

    
    // in the scope of the Form Handler
    function createFormHandler(e) {
        e.preventDefault()
        const inputClass = document.querySelector('#input-class').value
        const inputGrade = document.querySelector('#student-grade').value
        const inputStudent = document.querySelector('#students').value
        const studentId = parseInt(studentInput)
        postGrade(inputClass, inputGrade, inputStudent, studentId)
      }

      function postGrade(name_of_class, student_grade, student_id)