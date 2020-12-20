// grade class

// pulling from the instnace of the indtsnce of teh grde being sent from the back end 
class Grade {
    constructor(id, GradeAttributes) {
      this.id = id;
      this.name_of_class = GradeAttributes.name_of_class;
      this.student_grade = GradeAttributes.student_grade;
      this.student = GradeAttributes.student;
      Grade.all.push(this);
    }
  
    renderGradeCard() {
      return `
      <div data-id=${grade.id}>
        <h3>${grade.name_of_class}</h3>
        <h3>${grade.student_grade}</h3>
        <p>${grade.student.name}</p>
        <button data-id=${grade.id}>delete</button>
    </div>
    <br><br>`;
    }
  }
  
  Grade.all = [];