import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
//asercion de tipos obligamos a ts a que la const trabaje de una forma, tratar de evitar a menos que sea necesario

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => { // le decimos que puede devolver un diary entry o undefined 
    const entry = diaries.find(d => d.id === id)
    if (entry != null) {
        const { comment, ...restOfDiary } = entry
        return restOfDiary
    }
    return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {  // tenemos que hacer un maps de las props para ocultar la que no queremos que se vea por que ts no funciona en runtime
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}

export const addDiary = (addedDiaryEntry: NewDiaryEntry): DiaryEntry => {
    const newDiary = {
        // id: diaries.length + 1,
        id: Math.max(...diaries.map(d => d.id)) +1,
        ...addedDiaryEntry
    }

    diaries.push(newDiary)
    return newDiary
}

