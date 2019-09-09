import { createStore } from "redux"

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Franklin Calixto",
        foto: "https://scontent.flim4-2.fna.fbcdn.net/v/t1.0-9/35159280_1722488997840978_5500904889066192896_n.jpg?_nc_cat=102&_nc_oc=AQnD9mPbi0A4kXfZGPmVkgNykqHCrcG5BffvepplEg1_Sb4G1rM8IYQOIbBLnSK0TYs&_nc_ht=scontent.flim4-2.fna&oh=e7d65f1670eef0719e101f0b206bbbed&oe=5DF47BFD"
    },{
        id: 2,
        nombre: "Luis Quinto",
        foto: "https://scontent.flim4-2.fna.fbcdn.net/v/t1.0-9/37956627_1543743805731953_1101349530181304320_n.jpg?_nc_cat=100&_nc_oc=AQnJWjBToEn_MsGnwOodxZvTntjyXsT39dPDiwisqASwRJg1OfYYcdvqXihmIfYwct4&_nc_ht=scontent.flim4-2.fna&oh=2141561448f748acfa2e66dcf030de5f&oe=5E075B9F"
    },{
        id: 3,
        nombre: "Johan Salas",
        foto: "https://scontent.flim4-2.fna.fbcdn.net/v/t1.0-9/20882182_495592700800998_6921448815071653255_n.jpg?_nc_cat=107&_nc_oc=AQnAWXGuwJdY6IFJrDA4U402BfdQ4Hbq05hjAflAXg8TkFc5ZKKiDfRuSLZI5Frim6Y&_nc_ht=scontent.flim4-2.fna&oh=a240457044a0c3f337b309eda029c763&oe=5E0873E0"
    }],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState , action) => {

    console.log(action)
    return state
}

export default createStore(reducerEntrenador)