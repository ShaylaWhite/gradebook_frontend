class Grade {

  constructor(id, gradeAttributes) {
    this.id = id
    this.name_of_class = gradeAttributes.name_of_class
    this.student_grade = gradeAttributes.student_grade
    this.student = gradeAttributes.student
    Grade.all.push(this)

    //push each new instance of this into the Grade array
    //constructing this
  }

   renderGradeCard() {
     
    return `
    <div data-id="${this.id}" class="card">
    <h3>Name of Class: ${this.name_of_class}</h3>
              <h2>Grade: ${this.student_grade}</h2>
              <h3>Student's Name: ${this.student.name}</h3>
              <button type="submit" onClick="deleteGrade();" data-id="${this.id}" class="delete">Delete</button>
              </div>
            <br><br>`;
  
  }


}





Grade.all = [];