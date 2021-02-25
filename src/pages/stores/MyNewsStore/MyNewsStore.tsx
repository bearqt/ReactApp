import { action, makeObservable, observable } from "mobx"
import axios from "axios"
import type  NewsServerType from '../../../types/NewsServerType'
import type  NewsType from '../../../types/NewsType'


export default class MyNewsStore {
    data: NewsType[] = []

    constructor() {
        makeObservable(this, {
            data: observable,
            getData: action
        })
    }
    
    async getData() {
        const response = await axios.request({
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/get-news',
            params: { tconst: 'tt4154664', limit: '25' },
            headers: {
                'x-rapidapi-key': '5468c0a103msh64953c2e914c3fdp112d8fjsn518aad43795b',
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        })

        this.data = response.data.items.map((item: NewsServerType, index: number) => ({
            title: item.head,
            text: item.body,
            date: item.publishDateTime,
            img: item.image.url,
            key: index
        }))
        console.log("GOT DATA FROM API 1 TIME")
    }
}