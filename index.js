let books =[]
let totalAmount =0;

const categorySelect = document.getElementById('category-select')
const amountInput= document.getElementById('amount-input')
const dateInput= document.getElementById('date-input')
const addBtn = document.getElementById('add-btn')
const bookTableBody = document.getElementById('book-table-body')
const totalAmountCell = document.getElementById('total-amount')

addBtn.addEventListener('click',function(){
    const category= categorySelect.value;
    const amount = Number(amountInput.value)
    const date =dateInput.value

    if(category ===""){
        alert('please select a category')
        return;
    }
 if(isNaN(amount) || amount <=0){
    alert("please enter correct amount")
    return 
 }
 if (date ===''){
    alert("please select a date ")
    return
 }
 books.push({category , amount ,date})
 totalAmount +=amount;
 totalAmountCell.textContent = totalAmount;

 const newRow = bookTableBody.insertRow();

 const categoryCell= newRow.insertCell()
 const amountCell = newRow.insertCell()
 const dateCell = newRow.insertCell();
 const deleteCell = newRow.insertCell()
 const deleteBtn = document.createElement('button')

 deleteBtn.textContent='Delete'
 deleteBtn.classList.add('delete-btn')
 deleteBtn.addEventListener('click' , function(){
    books.splice(books.indexOf(book),1)

    totalAmount -= book.amount;
    totalAmountCell.textContent = totalAmount;
    bookTableBody.removeChild(newRow)

 })
 const book = books[books.length-1]
 categoryCell.textContent= book.category;
 amountCell.textContent = book.amount;
 dateCell.textContent=book.date;
 deleteCell.appendChild(deleteBtn)
})

for(const book of books){
    totalAmount+= book.amount;
    totalAmountCell.textContent =totalAmount
   
    const newRow = bookTableBody.insertRow()
    const categoryCell= newRow.insertCell()
    const amountCell = newRow.insertCell()
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell()
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent='Delete'
 deleteBtn.classList.add('delete-btn')
 deleteBtn.addEventListener('click' , function(){
    books.splice(books.indexOf(book),1)

    totalAmount -= book.amount;
    totalAmountCell.textContent = totalAmount;
    bookTableBody.removeChild(newRow)
 })
 categoryCell.textContent= book.category;
 amountCell.textContent = book.amount;
 dateCell.textContent=book.date;
 deleteCell.appendChild(deleteBtn)
}