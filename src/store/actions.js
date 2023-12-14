import axiosClient from "../axiosClient";
export function searchBooks({commit }, keyword){
   
        axiosClient.get(`search.php?s=${keyword}`)
        .then(({data})=>{
            commit('setSearchedBooks', data.meals)
        })
        
}
export function searchBooksByLetter({commit }, letter){
   
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data})=>{
        commit('setBooksByLetter', data.meals)
    })
    
}
export function searchBooksByAuthor({commit }, ing){
    axiosClient.get(`filter.php?i=${ing}`)
    .then(({data})=>{
        commit('setBooksByAuthors', data.meals)
    })
    
}