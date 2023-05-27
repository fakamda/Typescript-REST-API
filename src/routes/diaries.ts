import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from './utils/utils';

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => { // unary operator + para indicar que es un number sino tambien puede transformarse con Number()
  const diary = diaryServices.findById(+req.params.id)

  return (diary != null) 
    ? res.send(diary) 
    : res.sendStatus(404)
  // res.send(diary?.weather);
});

router.post("/", (req, res) => {
  try {

    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
  
    res.json(addedDiaryEntry)

  } catch (e: any) {
    res.status(400).send(e.message)
  }

})

export default router
