const endPoint = "http://localhost:3000/api/v1/grades";

document.addEventListener('DOMContentLoaded', () => {

    // gets all the GRADES once the domcontent is loaded.

  getGrades();

  //find the submit form  w/ the ID #create-grade-form
  const createGradeForm = document.querySelector("#create-grade-form")
  createGradeForm.addEventListener("submit", (e) => createFormHandler(e))
  // listen for the submit event, 
  // then attaches the SUBMIT EVENT LISTNER to pass in the event when the submut event listner is triggered 

  
  const sortButton = document.querySelector("#sort-grades");
  sortButton.addEventListener("click", (e) => sortGrades());






});

function sortGrades() {
  document.querySelector("grade-container").innerHTML = "";


  // fecth GET to get grades
  fetch(endPoint)
    .then((response) => response.json())
    .then((grades) => {
      // sort by name

      grades.data.sort(function (a, b) {
        if (a[0] < b[0]) {
          return -1;
      }
      if (b[0] > a[0]) {
          return 1;
      }
      if(a[0] === b[0]) {
          if(a[1] && a[1] === "+") {
              return -1;
          }
      }
      return 0;
  });
    
      grades.data.forEach((grade) => {
        let newGrade = new Grade(grade, grade.attributes);
        document.querySelector(
          "#grade-container"
        ).innerHTML += newGrade.renderGradeCard();
      });
    });
}




////////////////////
  ////GET FUNCTION////
  //////////get fetch request///////////////

function getGrades() {
  fetch(endPoint)
  .then(response => response.json())
  .then(grades => {
  // sort 
     grades.data.sort(function (a, b) {
        var nameA = a.attributes.name_of_class.toUpperCase(); // ignore upper and lowercase
        var nameB = b.attributes.name_of_class.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
      console.log(grades.data);

    grades.data.forEach(grade => {
      //get grades array
      //access the attributes of each individual object 
      //every time I create a new instance it goes through my constructor in my renderfunction 
      let newGrade = new Grade(grade, grade.attributes)
      document.querySelector("#grade-container").innerHTML += newGrade.renderGradeCard();
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
    const studentId = parseInt(document.querySelector('#students').value);
    //passing in the function postFetch()
    postFetch(nameInput, gradeInput, studentId)
  }
  
  ////////////////////
  ////POST FUNCTION////
  /////////////////////////
//fectch returns a promise, when promis is fufilled a response is given as a json method
//json method also returns a promise
  function postFetch(name_of_class, student_grade, student_id) {
    const bodyData = { name_of_class, student_grade, student_id };
    // POST request
    fetch(endPoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyData),
    })
      .then((response) => response.json())
      .then((grade) => {
        console.log(grade)
        const gradeData = grade.data
        let newGrade = new Grade(gradeData, gradeData.attributes)
        // render JSON response
      document.querySelector('#grade-container').innerHTML += newGrade.renderGradeCard()
    })
  }
// chain your function with .then to call function when promise is successful
//promise is a placeholder, prmoise value is from a callback(where the action happens)


//.grade.sort

// Added deleteGrade() functon
function deleteGrade() {
  // let GradeDiv = document.getElementsByClassName("card");
  // let GradeDiv = e.target;
  // let gradeDataId = gradeDiv[0].dataset.id;
  let gradeDataId = event.target.dataset.id;
  fetch(`http://localhost:3000/api/v1/grades/${gradeDataId}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((json) => {
      let selectedGrade = document.querySelector(
        `.card[data-id="${gradeDataId}"]`
      );
      selectedGrade.remove();
    });
}