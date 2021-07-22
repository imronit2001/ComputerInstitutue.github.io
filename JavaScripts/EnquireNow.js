const enquiry_button = document.querySelector('#home-enquiry-button');
const enquiry_wrapper = document.querySelector('.enquiry-wrapper');
const close = document.querySelector('.close');
const enquire_submit = document.querySelector('.enquire-submit');

enquiry_button.addEventListener('click', function(){
    enquiry_openModal();
});

close.addEventListener('click', function(){
    enquiry_closeModal();
});
enquire_submit.addEventListener('click' , function(){
    enquiry_closeModal();
})
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



// var audio = document.getElementsByClassName('.enquire-submit');
// var count = 0;
// function playpause(){
//     if(count==0){
//         count=1;
//         audio.play();
//     }else{
//         count=0;
//         // audio.pause();
//     }
// }