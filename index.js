
//const notes = require('./notes');


//let salary = [23,4,3,5,4,3,434]
////console.log(salary.reduce = (a,b)=> a+b )


// map making copy of origin array

// foreach make changes to orginal array

// array.from  making an array of every thing
//const name = 'ahmad'

//Array.from(name.join)
let notes;
const notTitle = document.querySelector('#Note-Title')
const noteBody = document.querySelector('#Note-body')
const noteList = document.querySelector('.Note-list')

const addBTN = document.querySelector('.addBTN')

const Pre_notes = []

addBTN.addEventListener('click', ()=>{
    const Title = notTitle.value
    const body = noteBody.value
    //notes.addNotes(Title, body)
   const Note = document.createElement('div')
    const upper = document.createElement('div')
    upper.classList.add('upper')
    const buttom = document.createElement('div')
    buttom.classList.add("buttom")
    const p = document.createElement("p")
    const bodyP = document.createElement('p')
    p.innerText = Title 
    bodyP.innerText = body;


    //geting prevois notes
     notes = JSON.parse(localStorage.getItem('note'))


    if(!notes ){
        
    }else {
 // making new input data as array object
    let data = [{
    Title,
    body
    }]

    notes.push(data)
    localStorage.setItem(notes,JSON.stringify(notes))
    }
    console.log(notes)

   
    //JSON.stringiy

    
  

    
   

    upper.appendChild(p)
    buttom.appendChild(bodyP)
    Note.appendChild(upper)
    Note.appendChild(buttom)
    

    p.innerText = Title
    bodyP.innerText = body


    
    Note.classList.add('Note')
    noteList.appendChild(Note)
})


const displayData = ()=>{
    let data = JSON.parse(localStorage.getItem('note'))
    
    const Note = document.createElement('div')
    const upper = document.createElement('div')
    upper.classList.add('upper')
    const buttom = document.createElement('div')
    buttom.classList.add("buttom")
    const p = document.createElement("p")
    const bodyP = document.createElement('p')
    if(data.length === 0){
        console.log('data is not avialable')
        let data = [{
            Title: p,
            body: bodyP
            }]
        
            notes.push(data)
            localStorage.setItem(new_note,JSON.stringify(data))
            }

    else{
        p.innerText = data.Title 
        bodyP.innerText = data.body;
    
    
    upper.appendChild(p)
    buttom.appendChild(bodyP)
    Note.appendChild(upper)
    Note.appendChild(buttom)

    Note.classList.add('Note')
    noteList.appendChild(Note)
}
}
displayData()