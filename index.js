let tasks = [
  {
      id: '1138465078061',
      completed: false,
      text: 'Посмотреть урок по JavaScript',
  },
  {
      id: '1138465078062',
      completed: false,
      text: 'Выполнить тест после урока',
  },
  {
      id: '1138465078063',
      completed: false,
      text: 'Выполнить ДЗ после урока',
  },
]

const task = tasks.map((task, id) => {
  return (
      `<div class="task-item" data-task-id="${id + 1}">
<div class="task-item__main-container">
    <div class="task-item__main-content">
        <form class="checkbox-form">
            <input class="checkbox-form__checkbox" type="checkbox" id="${"task" + id + 1}" ${task.completed ? checked : ''}>
            <label for="${"task" + id + 1}"></label>
        </form>
        <span class="task-item__text">
            ${task.text}
        </span>
    </div>
    <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
        Удалить
    </button>
</div>
</div>`
  )
})

const main = document.querySelector('.tasks-list')
main.innerHTML = task

const newSpan = document.createElement('span')
newSpan.className = 'error-message-block'
newSpan.textContent = ''
const newSpanMain = document.querySelector('.task-item__main-content')
newSpanMain.append(newSpan) // блок с ошибкой 

const form = document.querySelector('.create-task-block')

form.addEventListener('submit', (event) => {
  event.preventDefault()
    
  const { target } = event
  const task = target.taskName
  const value = task.value
  const taskExist = tasks.find(task => task.text === value) // если находим такой же объект


  if (!value) { // если значение пустая строка
      newSpan.textContent = 'Название задачи не должно быть пустым'
  }

  else if (taskExist) { // тут проверяем есть ли таойже объект
      newSpan.textContent = 'Такое имя уже есть'

  } else {
      newSpan.textContent = ''
      tasks.push({ id: String(Date.now()), completed: false, text: value })
    console.log('проверка массива',tasks);
      const main1 = document.querySelector('.tasks-list')
      main1.insertAdjacentHTML('beforeend', 
      `<div class="task-item" data-task-id="${Date.now()}">
          <div class="task-item__main-container">
              <div class="task-item__main-content">
                  <form class="checkbox-form">
                  <input class="checkbox-form__checkbox" type="checkbox" id="${Date.now()}" ${task.completed ? checked : ''}>
                  <label for="${Date.now()}"></label>
                  </form>
              <span class="task-item__text">
                  ${value}
              </span>
          </div>
          <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
              Удалить
          </button>
          </div>
      </div>`)
  }
})

// начало задачи №3
// Создаем шаблон в DOM дереве
let newDiv = document.createElement('div')
    div2 = document.createElement('div')
    div3 = document.createElement('div')
    btn1 = document.createElement('button')
    btn2 = document.createElement('button')
    h = document.createElement('h3')
newDiv.className = "modal-overlay modal-overlay_hidden"
div2.className = "delete-modal"
div3.className = "delete-modal__buttons"
btn1.className = "delete-modal__button delete-modal__cancel-button"
btn1.textContent = "Отмена"
btn2.className = "delete-modal__button delete-modal__confirm-button"
btn2.textContent = "Удалить"
h.textContent = "Вы действительно хотите удалить эту задачу?"
h.className ="delete-modal__question"

let mainNew = document.querySelector('#tasks')
mainNew.insertAdjacentElement("afterend", newDiv)
    newDiv.append(div2)
    div2.append(h, '', div3)
    div3.append(btn1, '', btn2)

// Начало реализации логики удаления
const button = document.querySelector('.tasks-list')
button.addEventListener('click', (event)=>{
  const {target} = event
  const taskItemHTML = target.closest('.task-item')
  const taskId = taskItemHTML.dataset.taskId
  // console.log('taskId:', taskId);
  const taskItem = document.querySelectorAll('.task-item') 
  const arrChange = [...taskItem]
  //console.log('arrChange', arrChange);
  //console.log('taskItem', taskItem)  
    if(taskId){
      const hidden = document.querySelector('.modal-overlay')
      hidden.className = 'modal-overlay'
      // назначение кнопок удаление и отмена
      const btnCancel = document.querySelector('.delete-modal__cancel-button')
      const btnConfirm = document.querySelector('.delete-modal__confirm-button')
      const deleteModal = document.querySelector('.delete-modal__buttons')
      //console.log('btnConfirm:', btnConfirm);
      //console.log('Первоначальный массив', tasks);
      deleteModal.addEventListener('click', (event)=>{
        // if(btnCancel) {
        //   console.log('Отменено');
        //   hidden.className = "modal-overlay modal-overlay_hidden"
        // } 
        // else 
        if (btnConfirm) {
          //console.log('Удалено');
          hidden.className = "modal-overlay modal-overlay_hidden"
          // console.log(tasks);
          const taskExist1 = tasks.findIndex(index => Number(index)+1 === taskId)
          // console.log('taskId', Number(taskId)-1 )
          // console.log('taskExist1', taskExist1 );
            if(taskExist1){
              tasks.splice(Number(taskId)-1, 1)
            // console.log('массив после удаления', tasks);

              const taskExist2 = arrChange.findIndex((name, index) => index
              )
              //console.log('taskExist1', taskExist1);
              //console.log('taskId', taskId );
               if(taskExist2){
                const element = document.querySelector(`[data-task-id ='${taskId}']`)
                console.log(element);
                element.remove()
                    }
              }
        }
      })
    }
  })
  
// начало задачи №4
  const topic = document.addEventListener('keydown', (event)=>{
    const{key} = event
    console.log(key)
    const body = document.querySelector('body')
    const stringDelete = document.querySelector('.tasks-list')
    const buttonDelete = document.querySelectorAll('button')
    console.log('stringDelete', stringDelete)
    console.log(body)
    if(event.key === 'Tab'){
      function changeTheme(flag = 'false') { // flag можно определить глобально и мутировать
        const lightTheme = () => {
          console.log('Светлая тема');
            body.style.background = 'initial'
            stringDelete.style.cssText = 'color: initial'
            buttonDelete.forEach((btn)=>{
            btn.style.cssText = ''
            })
        }
        const darkTheme = () => {
          console.log('Темная тема');
              body.style.background = '#24292E'
              stringDelete.style.cssText = 'color: #ffffff'
              buttonDelete.forEach((btn)=>{
              btn.style.cssText = 'border: 1px solid #ffffff'
              })
        }
        flag ? lightTheme() : darkTheme()
        let isDarkTheme = darkTheme (true)
        // let islightTheme = lightTheme (false)
      }
      changeTheme()
    } 
})



///////////
  //     if(body){
  //       console.log('Темная тема');
  //       body.style.background = '#24292E'
  //       stringDelete.style.cssText = 'color: #ffffff'
  //       buttonDelete.forEach((btn)=>{
  //       btn.style.cssText = 'border: 1px solid #ffffff'
  //       })

  //     }
  //     else if (body === body.style){
  //       console.log('Светлая тема');
  //     body.style.background = 'initial'
  //     stringDelete.style.cssText = 'color: initial'
  //     buttonDelete.forEach((btn)=>{
  //       //console.log('btn', btn);
  //       btn.style.cssText = ''
  //     })
  //     //buttonDelete.style.cssText = 'none'
      
  // }