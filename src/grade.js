class Grade {

      constructor(grade, gradeAttributes) {
        this.id = grade.id
        this.name_of_class = gradeAttributes.name_of_class
        this.student_grade = gradeAttributes.student_grade
        this.student = gradeAttributes.student
        Grade.all.push(this)

      }

       renderGradeCard() {
        return `
                <div data-id=${this.id}>
                  <h3>${this.name_of_class}</h3>
                  <h3>${this.student_grade}</h3>
                  <p>${this.student.name}</p>
                  <button data-id=${this.id}>edit</button>
                </div>
                <br><br>`;
      
      }


    }


  


Grade.all = [];