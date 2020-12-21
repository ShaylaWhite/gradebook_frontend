const endPoint = "http://localhost:3000/api/v1/grades";

document.addEventListener('DOMContentLoaded', () => {
  getGrades()

  //find the submit form on the DOM w/ the ID #create-grade-form
  const createGradeForm = document.querySelector("#create-grade-form")
  createGradeForm.addEventListener("submit", (e) => createFormHandler(e))
  // listen for the submit event, 
  // then attaches the SUBMIT EVENT LISTNER to pass in the event when the submut event listner is triggered 

})

////////////////////
  ////GET FUNCTION////
  //////////get fetch request///////////////

function getGrades() {
  fetch(endPoint)
  .then(response => response.json())
  .then(grades => {
    grades.data.forEach(grade => {
      // double check how your data is nested in the console so you can successfully access the attributes of each individual object
      // debugger

      const newGrade = new Grade(grade.id, grade.attributes)
      document.querySelector('#grade-container').innerHTML += newGrade.renderGradeCard()
    })
  })
}


  //triggered from the user hitting submit by (e)
  //FORM HANDLER//
  // gather all the input values and pass it to the function to execute the post fetch 
  // stops form for auto, submitting
  function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const gradeInput = document.querySelector('#input-grade').value
    const studentId = parseInt(document.querySelector('#students').value)
    //passing in the function postFetch()
    postFetch(nameInput, gradeInput, studentId)
  }
  
  ////////////////////
  ////POST FUNCTION////
  /////////////////////////

  function postFetch(name_of_class, student_grade, student_id) {
   
    const bodyData = {name_of_class, student_grade, student_id}
  
    fetch(endPoint, {

      // POST fetch request
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(grade => {
      
      const newGrade = new Grade(grade.data.id, grade.data.attributes)
      // render JSON response
    document.querySelector('#grade-container').innerHTML += newGrade.renderGradeCard()
  })
}
