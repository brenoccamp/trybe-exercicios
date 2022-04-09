import fs from 'fs/promises';

type SpecialCare = { waterFrequency: number };

export interface IPlant {
  id: string,
  breed: string,
  needsSun: Boolean,
  origin: string,
  size: number,
  specialCare?: SpecialCare,
}

interface IOpsInfo { createdPlants: number }

class Plants {
  private static PLANTS_JSON = 'plants.json';

  initPlant(plant: IPlant) {
    const { id, breed, needsSun, origin, specialCare, size } = plant;

    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const newPlant: IPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: {
        ...specialCare,
        waterFrequency,
      },
      size,
    };
    return newPlant;
  }

  async getPlants() {
    const plantsRaw = await fs.readFile(Plants.PLANTS_JSON, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    return plants;
  }

  async getPlantById(id: string) {
    const plantsRaw = await fs.readFile(Plants.PLANTS_JSON, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const plantById = plants.find((plant) => plant.id === id);
    if (!plantById) return null;
    return plantById;
  }

  async removePlantById(id: string) {
    const plantsRaw = await fs.readFile(Plants.PLANTS_JSON, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const removedPlant = plants.find((plant) => plant.id === id);
    if (!removedPlant) return null;

    const newPlants = plants.filter((plant) => plant.id !== id);
    await fs.writeFile(Plants.PLANTS_JSON, JSON.stringify(newPlants));

    return removedPlant;
  }

  async getPlantsThatNeedsSunWithId(id: string) {
    const plantsRaw = await fs.readFile(Plants.PLANTS_JSON, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const filteredPlants = plants.filter((plant) => {
      if (plant.needsSun && plant.id === id) {
        if (!plant.specialCare || plant.specialCare.waterFrequency > 2) {
          return true;
        }
        return false;
      }

      return false;
    });
    return filteredPlants;
  }

  async editPlant(plantId: string, newPlant: IPlant) {
    const plantsRaw = await fs.readFile(Plants.PLANTS_JSON, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const updatedPlants = plants.map((plant) => {
      if (plant.id === plantId) return newPlant;
      return plant;
    });

    await fs.writeFile(Plants.PLANTS_JSON, JSON.stringify(updatedPlants));
    return newPlant;
  }

  async savePlant(plant: IPlant) {
    const plantsRaw = await fs.readFile(Plants.PLANTS_JSON, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const newPlant = this.initPlant({ ...plant });
    plants.push(newPlant);

    const opsInfoRaw = await fs.readFile('opsInfo.json', { encoding: 'utf8' });
    let { createdPlants }: IOpsInfo = JSON.parse(opsInfoRaw);
    createdPlants += 1;
    await fs.writeFile('opsInfo.json', JSON.stringify({ createdPlants }));

    await fs.writeFile(Plants.PLANTS_JSON, JSON.stringify(plants));
    return newPlant;
  }
}

export default Plants;