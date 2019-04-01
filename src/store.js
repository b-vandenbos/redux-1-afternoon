import {createStore} from 'redux';

let initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_AUTHOR_FIRST = 'UPDATE_AUTHOR_FIRST';
export const UPDATE_AUTHOR_LAST = 'UPDATE_AUTHOR_LAST';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION';
export const ADD_RECIPE = 'ADD_RECIPE';
export const CLEAR_FIELDS = 'CLEAR_FIELDS';
export const DELETE_RECIPE = 'DELETE_RECIPE';

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NAME:
            return {...state, name: action.payload};

        case UPDATE_CATEGORY:
            return {...state, category: action.payload};

        case UPDATE_AUTHOR_FIRST:
            return {...state, authorFirst: action.payload};

        case UPDATE_AUTHOR_LAST:
            return {...state, authorLast: action.payload};

        case ADD_INGREDIENT:
            return {...state, ingredients: [...state.ingredients, action.payload]};

        case ADD_INSTRUCTION:
            return {...state, instructions: [...state.instructions, action.payload]};

        case ADD_RECIPE:
            const {name, category, authorFirst, authorLast, ingredients, instructions} = state;
            const recipe = {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            };
            return {...state, recipes: [...state.recipes, recipe]};

        case CLEAR_FIELDS:
            return {...state, name: '', category: '', authorFirst: '', authorLast: '', ingredients: [], instructions: []};

        default:
            return state;
    }
}

export default createStore(reducer);
