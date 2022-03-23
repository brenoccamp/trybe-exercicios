var characters = [
    {
        nickname: 'xKillerx',
        "class": 'warrior',
        stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
        createdAt: new Date('2003-10-1')
    },
    {
        nickname: 'jainaProud',
        "class": 'mage',
        stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
        createdAt: new Date('2003-10-2')
    },
    {
        nickname: 'catIn',
        "class": 'hunter',
        stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
        createdAt: new Date('2003-10-15')
    },
];
function printCharacter(character, index) {
    var nickname = character.nickname, cls = character["class"], createdAt = character.createdAt;
    console.log("\n\n===== Character: ".concat(index + 1, " ========"));
    console.log("nickname: ".concat(nickname, "\nclass: ").concat(cls, "\ncreatedAt: ").concat(createdAt));
}
characters.forEach(printCharacter);
