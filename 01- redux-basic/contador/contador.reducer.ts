import { Action } from "../ngrx-fake/ng-rx";


export function contadorReducer(state = 10, action: Action) {

    switch(action.type){
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state *= action.payload;
        case 'DIVIDIR': 
            return state /= action.payload;
        case 'RESET':
            return state = 0;
        default:
            return state;
    }
}