const app = require('../api/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", ()=>{
    describe("GET /rickandmorty/character/:id", ()=>{
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            let response = (await agent.get('/rickandmorty/character/1')).text
            response = JSON.parse(response)

            expect(response).toHaveProperty('id')
            expect(response).toHaveProperty('name')
            expect(response).toHaveProperty('status')
            expect(response).toHaveProperty('species')
            expect(response).toHaveProperty('type')
            expect(response).toHaveProperty('gender')
            expect(response).toHaveProperty('origin')
            expect(response).toHaveProperty('originUrl')
            expect(response).toHaveProperty('location')
            expect(response).toHaveProperty('locationUrl')
            expect(response).toHaveProperty('image')
            expect(response).toHaveProperty('episode')
        });

        it('Si hay un error responde con status: 500', async () => {
            const response = (await agent.get('/rickandmorty/character/1000')).status

            expect(response).toBeGreaterThanOrEqual(400);
        });
    })

    describe('GET /rickandmorty/login', () => {
        it('Debe regresar un objeto con la propiedad "access" en true ', async () => {
            const response = (await agent.get('/rickandmorty/login?email=leocodedev@gmail.com&password=123Sal$.')).body

            expect(response.access).toBeTruthy()
        });
        
        it('Debe regresar un objeto con la propiedad "access" en false ', async () => {
            const response = (await agent.get('/rickandmorty/login')).body

            expect(response.access).toBeFalsy()
        });
    });

    describe("POST /rickandmorty/fav", () => {
        const character1 = { id:'1', name:'Rick' }
        const character2 = { id:'2', name:'Pepito'}
        it('Devuelve el personaje enviado por body', async () => {
            const response = (await agent.post('/rickandmorty/fav').send(character1)).body;
            expect(response).toContainEqual(character1)
        })

        it('Debe devolver el o los personajes previos y el actual', async () => {
            const response = (await agent.post('/rickandmorty/fav').send(character2)).body;

            expect(response).toContainEqual(character1)
            expect(response).toContainEqual(character2)
        })
    })

    describe("DELETE /rickandmorty/fav/:id", () => {
        const character1 = { id:'1', name:'Rick' }
        const character2 = { id:'2', name:'Pepito'}

        it('Devuelve el arreglo completo si no se eliminan personajes', async () => {
            const response = (await agent.delete('/rickandmorty/fav/50')).body;

            expect(response).toContainEqual(character1)
            expect(response).toContainEqual(character2)
        })

        it('Elimina correctamente el personaje', async () => {
            const response = (await agent.delete('/rickandmorty/fav/2')).body;

            expect(response).not.toContainEqual(character2)
        })
    })
})