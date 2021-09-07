// Bônus
// Parte I - Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo.Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragDamage = (dragon) => {
  const dragStrength = dragon.strength;
  const aleatoryDamage = Math.floor(Math.random() * ((dragStrength + 1) - 15)) + 15;
  return aleatoryDamage;
}
dragDamage(dragon);

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorDamage = (warrior) => {
  const maxDamage = warrior.weaponDmg * warrior.strength;
  const warriorStrength = warrior.strength;
  const aleatoryDamage = Math.floor(Math.random() * ((maxDamage + 1) - warriorStrength) + warriorStrength);
  return aleatoryDamage;
}
warriorDamage(warrior);

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const mageDamage = (mage) => {
  const maxDamage = mage.intelligence * 2;
  const mageIntelligence = mage.intelligence;
  let magesMana = mage.mana;
  const bout = {
    aleatoryDamage: 'Não possui mana suficiente',
    spentMana: 0,
  };
  if (magesMana > 15) {
    bout.aleatoryDamage = Math.floor(Math.random() * ((maxDamage + 1) - mageIntelligence) + mageIntelligence);
    bout.spentMana = 15;
  }
  console.log(bout)
  return bout;
}
mageDamage(mage);