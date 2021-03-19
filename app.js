// const courses = ["arabic", "english", "art", "science", "math"];

const studentGrades = function (grade) {
  let iterateGrade = [];
  for (let i = 0; i < grade.length; i++) {
    let mar = onOfFive(grades[i]);
    let endGrades = mar + grades[i];
    if (mar < 5 && endGrades >= 50) {
      iterateGrade.push(endGrades);
    }else{
        iterateGrade.push(grade[i])
    }
  }
  return iterateGrade
};
