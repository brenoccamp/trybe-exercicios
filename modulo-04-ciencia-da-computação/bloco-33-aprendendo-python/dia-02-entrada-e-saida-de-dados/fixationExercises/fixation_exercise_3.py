# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que:

# 1. lê todas essas informações;
# 2. aplique um filtro, mantendo somente as pessoas que estão reprovadas;
# 3. escreva seus nomes em outro arquivo.

reproved_students = []
with open('students_rate') as students_rate:
    for student_rate in students_rate:
        # rate = student_rate
        rate = student_rate.split(' ')
        if int(rate[1]) < 6:
            reproved_students.append(rate[0] + '\n')


with open('reproved_students', mode='w') as reproved_students_list:
    print(reproved_students, end='')
    for reproved in reproved_students:
        print(reproved, end='')
        # print('felipe\n', 'miguel')
    reproved_students_list.writelines(reproved_students)


# recuStudents = []
# with open("students_rate.txt") as gradesFile:
#     for line in gradesFile:
#         student_grade = line
#         student_grade = student_grade.split(" ")
#         if int(student_grade[1]) < 6:
#             recuStudents.append(student_grade[0] + "\n")


# with open("recuStudents.txt", mode="w") as recuStudentsFile:
#     print(recuStudents)
#     recuStudentsFile.writelines(recuStudents)
