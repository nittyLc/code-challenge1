
function calculateGrade(mark) {
    if (mark > 79) {
      return 'A';
    } else if (marks >= 60 && marks <= 79) {
      return 'B';
    } else if (marks >= 50 && marks <= 59) {
      return 'C';
    } else if (marks >= 40 && marks <= 49) {
      return 'D';
    } else {
      return 'E';
    }
  }
  
  function studentGrade() {
    const mark = parseFloat(prompt('Enter the student mark (0-100):'));
  
    if (isNaN(mark) || mark < 0 || mark > 100) {
      return 'please enter mark between 0 and 100';
    }
  
    const grade = calculateGrade(mark);
    return `The student's grade is: ${grade}`;
  }
  
  
  console.log(studentGrade());
  