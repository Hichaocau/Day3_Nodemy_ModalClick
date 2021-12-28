const btn = document.querySelector('.open-modal-btn')
const closeIcon = document.querySelector('.modal__header i')
const closeBtn = document.querySelector('.modal__footer button')
const modal = document.querySelector('.modal')

// cach1
btn.onclick = function() {
    modal.classList.toggle('hide')
}
closeIcon.onclick = function() {
    modal.classList.toggle('hide')
}
closeBtn.onclick = function() {
    modal.classList.toggle('hide')
}
modal.onclick = function(e) {
    console.log(e.currentTarget)
    console.log(e.target)
    if(e.target === e.currentTarget) {
        modal.classList.toggle('hide')
    }
}
// currentTarget: là nơi mà phần tử 
// đã được gắn 1 trình xử lý sự kiện rõ ràng (modal ẩn/hiện)

// target: là nơi mà phần tử có sự kiện xảy ra

// cach2
var modalChange = function(){
    modal.classList.toggle('hide')
}
btn.addEventListener('click', modalChange)
closeIcon.addEventListener('click', modalChange)
closeBtn.addEventListener('click', modalChange)
modal.addEventListener('click', function(e){
    if(e.target === e.currentTarget){
        modalChange()
    }
})
