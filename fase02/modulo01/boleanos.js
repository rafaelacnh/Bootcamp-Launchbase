const classA = [
    {
        name: "Rafa",
        grade: 9.5
    },

    {
        name: "Vida",
        grade: 7.5
    },

    {
        name: "Puff",
        grade: 3.2
    },
]

const classB = [
    {
        name: "Caio",
        grade: 8.7
    },

    {
        name: "Renato",
        grade: 4.5
    },

    {
        name: "Mirai",
        grade: 7.2
    },
    {
        name: 'Maria',
        grade: 9
    },
    {
        name: 'Israel',
        grade: 2
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(` ${turma} average: ${average}. Congratulations!!!`)
    } else {
        console.log(` ${turma} average: ${average}. Is not Good!`)
    }
}

function markAsFlunked(student) {
    student.flunked = false
    
    if (student.grade < 5) {
        student.flunked = true;
    }
}

function sendMessageflunked(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} is flunked`)
    }
}

function studentsflunkeds(students) {
    for (let student of students) {
        markAsFlunked(student);
        sendMessageflunked(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'classA')
sendMessage(average2, 'classB')

studentsflunkeds(classA)
studentsflunkeds(classB)