document.addEventListener('DOMContentLoaded', function(){
    input = document.getElementById("chat-input");
    button = document.getElementById("button");
    button.addEventListener('click', function(){
        content = input.value;
        App.room.speak(content);
        input.value = '';
    })
});