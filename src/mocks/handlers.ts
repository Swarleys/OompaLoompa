import { http, HttpResponse } from 'msw'

const ESTEBAN = {
    id: 1,
    image: "test-image.jpg",
    first_name: "Esteban",
    last_name: "Ramos",
    gender: "M",
    profession: "Frontend developer",
    email: "test@test.com",
    age: 38,
    country: "Spain",
    height: 170,
    favorite: {
        color: "red",
        food: "chocolate",
        random_string: "testing with vitest",
        song: "let's sing a song",
    },
    description: "test description",
};

const ANTHONY = {
    id: 2,
    image: "test-image.jpg",
    first_name: "Anthony",
    last_name: "Dinozzo",
    gender: "M",
    profession: "Frontend developer",
    email: "test@test.com",
    age: 42,
    country: "United States",
    height: 170,
    favorite: {
        color: "red",
        food: "pizza",
        random_string: "testing with vitest",
        song: "hey ya",
    },
    description: "test description",
};

export const handlers = [
    http.get('https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas', () => {        
        return HttpResponse.json({
            current: 1, total: 2, results: [ESTEBAN, ANTHONY]
        })
    }),
    http.get('https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/1', () => {
        return HttpResponse.json(ESTEBAN)
    }),
    http.get('https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/2', () => {
        return HttpResponse.json(ANTHONY)
    }),
]