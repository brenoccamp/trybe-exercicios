import express, { Request, Response } from 'express';
import PlantsModule, { IPlant } from './Plants';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const PLANT = 'plant';

const plantsController = new PlantsModule();

const INTERNAL_SERVER_ERROR = 'Internal server error.';

app.get('/plants', async (req: Request, res: Response) => {
  try {
    const plants = await plantsController.getPlants();
    return res.status(200).json(plants);
  } catch (err) {
    return res.status(500).json({ error: INTERNAL_SERVER_ERROR });
  }
});

app.get(`/${PLANT}/:id`, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const plantById = await plantsController.getPlantById(id);
    return res.status(200).json(plantById);
  } catch (err) {
    return res.status(500).json({ error: INTERNAL_SERVER_ERROR });
  }
});

app.delete(`/${PLANT}/:id`, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await plantsController.removePlantById(id);

    return res.status(201).json({ message: `Deleted Plant: ${deleted}` });
  } catch (err) {
    return res.status(500).json({ error: INTERNAL_SERVER_ERROR });
  }
});

app.put(`/${PLANT}/:id`, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const newPlant: IPlant = req.body;
    const editedPlant = await plantsController.editPlant(id, newPlant);

    return res.status(201).json({ message: `Edited Plant: ${editedPlant}` });
  } catch (err) {
    return res.status(500).json({ error: INTERNAL_SERVER_ERROR });
  }
});

app.post(`/${PLANT}`, async (req: Request, res: Response) => {
  try {
    const newPlant: IPlant = req.body;
    const createdPlant = await plantsController.savePlant(newPlant);

    return res.status(201).json({ message: `Created Plant: ${createdPlant}` });
  } catch (err) {
    return res.status(500).json({ error: INTERNAL_SERVER_ERROR });
  }
});

app.get('/sunny/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const plantsNeedsSun = await plantsController.getPlantsThatNeedsSunWithId(id);

    return res.status(201).json({ message: `Plants that needs sun: ${plantsNeedsSun}` });
  } catch (err) {
    return res.status(500).json({ error: INTERNAL_SERVER_ERROR });
  }
});

app.listen(PORT, () => console.log(`App running on ${PORT}`));
