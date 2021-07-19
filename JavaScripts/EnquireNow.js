const enquiry_button = document.querySelector('#home-enquiry-button');
const enquiry_wrapper = document.querySelector('.enquiry-wrapper');
const close = document.querySelector('.close');

enquiry_button.addEventListener('click', function(){
    enquiry_openModal();
});

close.addEventListener('click', function(){
    enquiry_closeModal();
});

enquiry_wrapper.addEventListener('click', function(e){
    if(e.target !== this) return;
    enquiry_closeModal();
});

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') {
        enquiry_closeModal();
    }
})
function enquiry_openModal(){
    enquiry_wrapper.classList.add('enquiry-active');
}
function enquiry_closeModal() {
    enquiry_wrapper.classList.remove('enquiry-active');
}
