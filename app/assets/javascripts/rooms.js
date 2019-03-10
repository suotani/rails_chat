document.addEventListener('DOMContentLoaded', function(){
    const input = document.getElementById("chat-input");
    const button = document.getElementById("button");
    button.addEventListener('click', function(){
        const content = input.value;
        App.room.speak(content);
        input.value = '';
    })
});