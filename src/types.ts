// export type Weather = 'sunny' | 'rainy' | 'windy' | 'cloudy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export enum Weather { // el enum tambien sirve en runtime
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Windy = 'windy',
    Stormy = 'stormy'
}

export enum Visibility { // el enum tambien sirve en runtime
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor'
}

export interface DiaryEntry {
    id: number
    date: string
    weather: Weather
    visibility: Visibility
    comment: string
}
// con esto lo que podemos hacer es extender las propiedades de la interface.
// interface SpecialDiaryEntry extends DiaryEntry {
//     flightNumber: number
// }

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>  con pick lo que hacemos es decirle los que queremos

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'> // con omit solo le decimos los que queremos omitir

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>