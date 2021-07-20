const crb1 = document.querySelector('.crb1');
const course_register_wrapper = document.querySelector('.course-register-wrapper');
const course_register_close = document.querySelector('.course-register-close');

crb1.addEventListener('click', function(){
    course_register_openModal();
});

course_register_close.addEventListener('click', function(){
    course_register_closeModal();
});

course_register_wrapper.addEventListener('click', function(e){
    if(e.target !== this) return;
    course_register_closeModal();
});

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') {
        course_register_closeModal();
    }
})
function course_register_openModal(){
    course_register_wrapper.classList.add('course-register-active');
}
function course_register_closeModal() {
    course_register_wrapper.classList.remove('course-register-active');
}


const crb2 = document.querySelector('.crb2');

crb2.addEventListener('click', function(){
    course_register_openModal();
});

const crb3 = document.querySelector('.crb3');

crb3.addEventListener('click', function(){
    course_register_openModal();
});

const crb4 = document.querySelector('.crb4');

crb4.addEventListener('click', function(){
    course_register_openModal();
});


