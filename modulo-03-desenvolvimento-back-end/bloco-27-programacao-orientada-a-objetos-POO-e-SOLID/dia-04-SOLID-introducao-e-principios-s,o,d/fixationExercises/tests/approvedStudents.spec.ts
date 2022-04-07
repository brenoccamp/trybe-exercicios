// ./tests/approvedStudents.spec.ts

import { expect } from "chai";
import { approvedStudents } from "../src";

const disciplinesDict = {
  mathematics: 'matemática',
  history: 'história',
};

describe('Testando a função "approvedStudents"', function () {
  const APPROVAL_GRADE = 0.7;

  describe('quando todas as notas são maiores que o critério de aprovação', function () {
    it('retorna "true"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.8 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];
      const school = {
        name: "School",
        approvalGrade: APPROVAL_GRADE
      };

      const result = approvedStudents({ name: "Student", disciplines, school });

      expect(result).to.be.equal(true);
    });
  });

  describe('quando todas as notas são menores que o critério de aprovação', function () {
    it('retorna "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.1 },
        { name: disciplinesDict.history, grade: 0.2 },
      ];
      const school = {
        name: "School",
        approvalGrade: APPROVAL_GRADE
      };

      const result = approvedStudents({ name: "Student", disciplines, school });

      expect(result).to.be.equal(false);
    });
  });

  describe('quando parte das notas são menores que o critério de aprovação', function () {
    it('retorna "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.5 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];
      const school = {
        name: "School",
        approvalGrade: APPROVAL_GRADE
      };

      const result = approvedStudents({ name: "Student", disciplines, school });

      expect(result).to.be.equal(false);
    });
  });
});