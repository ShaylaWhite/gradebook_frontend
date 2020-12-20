const endPoint = "http://localhost:3000/api/v1/grades";


//the DOMContent Loads and triggers the fetch request (get) the getGrades function
document.addEventListener('DOMContentLoaded', () => {
  getGrades()

  // event listner and handler for create syllabus form


  const createGradeForm = document.querySelector('#input-container')
  createGradeForm.addEventListener("submit", (e) => createFormHandler(e))

})

// get function fires off AJax request to the index route

function getGrades() {
    fetch(endPoint)
      .then(response => response.json())
      .then(grades => {
        // remember our JSON data is a bit nested due to our serializer
        grades.data.forEach(grade => {

          //create a new grade object , make a new instance of the grade class
        let newGrade = new Grade(grade, grade.attributes)

        // render90 brings the unconstructed object and creates a instance of that data
      
        document.querySelector('#grade-container').innerHTML += gradeMarkup.renderGradeCard()



      })
      })
    }

    //reusable function anytime I need to render the json data
    // function takes in the grade object



    // in the scope of the Form Handler
    function createFormHandler(e) {
        e.preventDefault()
        const inputClass = document.querySelector('#input-class').value
        const inputGrade = document.querySelector('#student-grade').value
        const studentId = parseInt(document.querySelector('#students').value)
        postGrade(inputClass, inputGrade, studentId)
      }

      //post function 

      function postGrade(name_of_class, student_grade, student_id) {
        // confirm these values are coming through properly

        const bodyData = {name_of_class, student_grade, student_id}

      
        fetch(endPoint, {
          // POST request
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(bodyData)
        })
        .then(response => response.json())
        .then(grade => {
          console.log(grade);
          // taking the grade object we get back from teh fetch request and extracting the data
          const gradeData = grade.data
          // render JSON response
          let newGrade = new Grade(gradeData, gradeData.attributes)
          // render90 brings the unconstructed object and creates a instance of that data
        
          document.querySelector('#grade-container').innerHTML += newGrade.renderGradeCard()
  
        })
      }

      // delete function

      function deleteGrade() {
        let dogId = this

      }