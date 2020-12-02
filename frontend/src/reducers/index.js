// Un reducer est une fonction qui accepte un state et qui accepte une action
// Ensuite basé sur une action.type = create alors on veut retourner soit une action soit un state qui a été changé par une ation

import {combineReducers} from 'redux'; // sert à combiner TOUTES nos fonctions reducer en une seul pour ensuite le passé à notre store

import posts from './posts'

export default combineReducers({
    posts: posts, // ici on donne assigne la fonction défini dans /posts.js à posts
})