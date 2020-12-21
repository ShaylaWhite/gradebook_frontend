const endPoint = "http://localhost:3000/api/v1/grades";

document.addEventListener('DOMContentLoaded', () => {
  getSyllabi()

  //find the submit form
  let createGradeForm = document.querySelector('#create-grade-form')

  // listen for the submit event, 
  // then attaches the SUBMIT EVENT LISTNER to the form element 
  createGradeForm.addEventListener('submit', (e) => createFormHandler(e))

})

// GET FETCH , fetches the data 
function getgrade() {
  fetch(endPoint)
  .then(response => response.json())
  .then(grades => {
    grades.data.forEach(grade => {

      // data is nested, access with the attributes of each individual object
      const gradeMarkup = `
        <div data-id=${grade.id}>
          <h3>${grade.attributes.name_of_class}</h3>
          <p>${grade.attributes.student_grade}</p>
          <p>${grade.attributes.student.name}</p>
          <button data-id=${grade.id}>edit</button>
        </div>
        <br><br>`;


        // takes the user input and fills in the grade-container on index.html 
        document.querySelector('#grade-container').innerHTML += gradeMarkup
    
      })
    })
  }

  //triggered from the user hitting submit 
  //FORM HANDLER//
  // gather all the input values and pass it to the function to execute the post fetch 
  function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const gradeInput = document.querySelector('#input-grade').value
    const studentId = parseInt(document.querySelector('#students').value)
    postFetch(nameInput, gradeInput, studentId)
  }
  