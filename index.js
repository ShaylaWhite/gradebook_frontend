const endPoint = "http://localhost:3000/api/v1/grades";


//the DOMContent Loads and triggers the fetch request (get) the getGrades function
document.addEventListener('DOMContentLoaded', () => {
  getGrades()

  const createGradeForm = document.querySelector('#input-container')
  createGradeForm.addEventListener("submit", (e) => createFormHandler(e))

})

// get function 


function getGrades() {
    fetch(endPoint)
      .then(response => response.json())
      .then(grades => {
        // remember our JSON data is a bit nested due to our serializer
        grades.data.forEach(grade => {
          render(grade)
        })
      })
    }

    //reusable function anytime I need to render the json data
    // function takes in the grade object
  function render(grade) {
   const gradeMarkup = `
            <div data-id=${grade.id}>
              <h3>${grade.attributes.name_of_class}</h3>
              <h3>${grade.attributes.student_grade}</h3>
              <p>${grade.attributes.student.name}</p>
              <button data-id=${grade.id}>edit</button>
            </div>
            <br><br>`;

      //manipulation of the DOM

            document.querySelector('#grade-container').innerHTML += gradeMarkup
  
  }


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
        console.log(name_of_class, student_grade, student_id);
        // build body object
        let bodyData = {name_of_class, student_grade, student_id}
      
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
          const gradeMarkup = 
          render(gradeData)
        })
      }