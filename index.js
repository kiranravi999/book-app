let titleElement=document.getElementById('titleElement');
let authorElement=document.getElementById('authorElement');
let publicationElement=document.getElementById('publicationElement');
let addBook=document.getElementById('addBook');
let booksContainer=document.getElementById('booksContainer');

addBook.onclick=function(){
    onAddBook();
}

function onRemoveBook(bookItemId){
     let removableBook= document.getElementById(bookItemId);
    booksContainer.removeChild(removableBook);
}

function onAddBook(){

    let titleData=titleElement.value;
    let authorData= authorElement.value ;
    let publicationYear= publicationElement.value ;

    if(!titleData|| !authorData || isNaN(publicationYear)){
       alert('Please enter valid book details.');
    return;
    }

    let bookItem=document.createElement('li');
    let bookItemId=Date.now();
    bookItem.id=bookItemId;
    bookItem.classList.add('list-group-item','d-flex', 'justify-content-between', 'align-items-center' );
    booksContainer.appendChild(bookItem);
    

    let title=document.createElement('p');
    title.classList.add('font-weight-bold');
    title.textContent=titleData;
    bookItem.appendChild(title);

    let author=document.createElement('p');
    author.textContent= `by ${authorData}, Year:${publicationYear}`;
    bookItem.appendChild(author);

    let removeButton=document.createElement('button');
    removeButton.textContent='Remove';
    removeButton.classList.add('btn', 'btn-danger');
    removeButton.onclick=function(){
        onRemoveBook(bookItemId)
    }
    bookItem.appendChild(removeButton);

    titleElement.value='';
    authorElement.value ='';
    publicationElement.value='';

}