interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  getAll(): Promise<DbCharacter[]>;
  create(character: Character): Promise<DbCharacter>;
  update(id: number, character: Character): Promise<DbCharacter>;
  delete(id: number): Promise<void>;
}

class LocalDbModel implements IModel {
  public async getAll(): Promise<DbCharacter[]> {
    return db;
  }

  public async create(character: Character): Promise<DbCharacter> {
    const id = db.length > 0 ? (db.length + 1) : 0;
    const newCharacter = { id, name: character.name, specialMove: character.specialMove };
    db.push(newCharacter)
    return newCharacter;
  }

  public async update(id: number, character: Character): Promise<DbCharacter> {
    const foundCharacter = db.findIndex((character) => id = character.id);
    if (!foundCharacter) throw new Error('Character not found.');
    db[foundCharacter] = { ...db[foundCharacter], ...character };
    return db[foundCharacter];
  }

  public async delete(id: number): Promise<void> {
    const characterToDelete = db.findIndex((character) => character.id === id);
    if (!characterToDelete) throw new Error('Character not found.');

    db.splice(characterToDelete, 1);
    console.log(`Character with id: ${id} successfully deleted!`);
  }
}

class CharacterService<T> {
  // constructor(readonly dbModel: LocalDbModel) { }
  constructor(readonly dbModel: IModel) { }

  public async getAll(): Promise<DbCharacter[]> {
    const allCharacters = await this.dbModel.getAll();
    return allCharacters;
  }

  public async create(character: Character): Promise<DbCharacter> {
    const createdCharacter = await this.dbModel.create(character);
    return createdCharacter;
  }

  public async update(id: number, character: Character): Promise<DbCharacter> {
    const updatedCharacter = await this.dbModel.update(id, character);
    return updatedCharacter;
  }

  public async delete(id: number): Promise<void> {
    const deleted = await this.dbModel.delete(id);
    console.log(`Character with id: ${id} successfully deleted!`);
  }
}

class MockedDbModel implements IModel {
  public async getAll(): Promise<DbCharacter[]> {
    return db;
  }

  public async create(character: Character): Promise<DbCharacter> {
    const id = db.length > 0 ? db.length + 1 : 0;

    return { id, ...character };
  }

  public async update(id: number, character: Character): Promise<DbCharacter> {
    return { id, ...character };
  }

  public async delete(id: number): Promise<void> {
    const characterToDelete = db.findIndex((character) => character.id !== id);
    db.splice(characterToDelete, 1);
    console.log('Character deleted successfully');
  }
}

const a = new CharacterService(new LocalDbModel());
const b = new CharacterService(new MockedDbModel());

a.create({name: 'TesteA', specialMove: 'Moving like a butterfly'}).then(console.log)
a.getAll().then(console.log)