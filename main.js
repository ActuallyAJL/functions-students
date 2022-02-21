const createStudent = (namePar , gradePar) => {
    let studentTemplate = {
        name: namePar,
        grade: gradePar
    }
    return studentTemplate;
}

const addMathGrade = (studentPar) => {
    studentPar.math = "B";
    return studentPar;
}

const addHistoryGrade = (studentPar) => {
    studentPar.history = "C";
    return studentPar;
}

const addScienceGrade = (studentPar) => {
    studentPar.science = "A";
    return studentPar;
}

let realStudent = createStudent("Sumo Lennings" , "First");
realStudent = addMathGrade(realStudent);
realStudent = addHistoryGrade(realStudent);
realStudent = addScienceGrade(realStudent);
console.log(realStudent);