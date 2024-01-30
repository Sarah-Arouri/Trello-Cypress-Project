import {APIKey,APIToken} from "../../support/constants.cy";
class sharedDataUtils {
    createNewBoard = (boardName)=>{
        return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
    };

    deleteBoard = (boardId)=>{
        return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`)
    };
    
    getList = (boardId)=>{
        return cy.request({
            method :"GET",
            url : `https://api.trello.com/1/boards/${boardId}/lists?key=${APIKey}&token=${APIToken}`,
            header :'Accept: application/json'});
    };

    createCard = (listId)=>{
       return cy.request({
        method : "POST",
        url : `https://api.trello.com/1/cards?idList=${listId}&key=${APIKey}&token=${APIToken}`,
        header : 'Accept: application/json'} )
    };

    createNewCard = (listId, cardName , isTemplate)=>{
        return cy.request({
            method : "POST",
            url : `https://api.trello.com/1/cards?idList=${listId}&key=${APIKey}&token=${APIToken}`,
            header : 'Accept: application/json',
            body : {name : cardName, isTemplate: isTemplate} 
        })
       
    }
    

  

    
}
export default sharedDataUtils;