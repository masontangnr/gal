import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import CSVReader from "react-csv-reader";

function App() {

	const [student, setStudent] = useState([]);

  const allStudentData = [];
  //convert arrays to array of object
  for(let i = 1; i < student.length; i++){
    const studentObj = {}

    studentObj['first_name'] = student[i][0]
    studentObj['last_name'] = student[i][1]
    studentObj['email'] = student[i][2]
    studentObj['zodiac'] = student[i][3]
    studentObj['grade'] = student[i][4]
    studentObj['class_id'] = student[i][5]
    studentObj['years_exp'] = student[i][6]
    allStudentData.push(studentObj)
  }

  const classData = []

  //if allStudentData class_id exist then add the total grades divide it by the total number of items in that object
  
  const total_student = {}
  const grade = {}
  const minGrade = {}
  const maxGrade = {}
  const studentInfo = {}

  for(let i = 1; i < allStudentData.length; i++){

    const classObj = {}

    //if class id does exist, then increment value by 1
    //if class id does exist, then set it equal to 1

    if(total_student[allStudentData[i]['class_id']]){
      total_student[allStudentData[i]['class_id']] ++
    } else{
      total_student[allStudentData[i]['class_id']] = 1
    }

    //if class id does exist, then add it to existing grade
    //if class id does not exist set it equals to the grade
    if(grade[allStudentData[i]['class_id']]){
      grade[allStudentData[i]['class_id']] += Number(allStudentData[i]['grade'])
    } else{
      grade[allStudentData[i]['class_id']] = Number(allStudentData[i]['grade'])
    }

    //if class id does exist, then compare the previous class id grade to the current id grade. If the previous id grade is larger than the current id grade then replace it with the current id grade
    //if class id does not exist set it equals to the current grade
    if(minGrade[allStudentData[i]['class_id']]){
      if(minGrade[allStudentData[i]['class_id']] > Number(allStudentData[i]['grade'])){
        minGrade[allStudentData[i]['class_id']] = Number(allStudentData[i]['grade'])
      }
    } else{
      minGrade[allStudentData[i]['class_id']] = Number(allStudentData[i]['grade'])
    }

    //if class id does exist, then compare the previous class id grade to the current id grade. If the previous id grade is larger than the current id grade then replace it
    //if class id does not exist set it equals to the current grade
    if(maxGrade[allStudentData[i]['class_id']]){
      if(maxGrade[allStudentData[i]['class_id']] < Number(allStudentData[i]['grade'])){
        maxGrade[allStudentData[i]['class_id']] = Number(allStudentData[i]['grade'])
      }
    } else{
      maxGrade[allStudentData[i]['class_id']] = Number(allStudentData[i]['grade'])
    }

  }
  console.log(maxGrade)

	return (
		<div className='App'>
      <CSVReader onFileLoaded={(data, fileInfo, originalFile) => setStudent(data)} />
			<p>and then open the console</p>
		</div>
	);
}

export default App;
