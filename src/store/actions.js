import axiosClient from "../axiosClient";

export function searchBooks({commit }, keyword){
   
        axiosClient.get(`api/book?SearchBy=Title&Value=${keyword}`)
        .then(({data})=>{
            commit('setSearchedBooks', data)
        })
        
}
export function searchBooksByLetter({commit }, letter){
   
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data})=>{
        commit('setBooksByLetter', data)
    })
    
}
export function searchBooksByAuthor({commit }, ing){
    axiosClient.get(`filter.php?i=${ing}`)
    .then(({data})=>{
        commit('setBooksByAuthors', data)
    })
    
}

