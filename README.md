## Student data from CSV

Several cohorts worth of student data are available in CSV format. Using tests, create a function which returns an array of cohort objects representing cohort information present in the CSV. The expected array length is the number of cohorts found in the data.

Use a Git repository to track your work.

A cohort object should provide:

* an id for the cohort
* the average grade of that cohort
* "min" which holds the minimum grade of the class and their first name, last name, and email
* "max" which holds the maximum grade of the class and their first name, last name, and email
* "students" which is an array of students belonging to that cohort
    * Include their first name, last name, email, grade, years of experience, and zodiac sign

The function should be capable of receiving letter grade input, or no input at all. When no input is given, all students are returned. When a letter grade is given, the min, max, and student set should contain only students who received that letter grade. The letter grade conversion ranges are as follows:

| Grade | Range  |
|-------|--------|
| A     | 93-100 |
| A-    | 90-92  |
| B+    | 87-89  |
| B     | 83-86  |
| B-    | 80-82  |
| C+    | 77-79  |
| C     | 73-76  |
| C-    | 70-72  |
| D+    | 67-69  |
| D     | 63-66  |
| D-    | 60-62  |
| F     | < 60   |
