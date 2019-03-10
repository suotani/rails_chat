App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(message) {
    const messages = document.getElementById("messages");
    messages.innerHTML += `<p>${message}</p>`
    // Called when there's incoming data on the websocket for this channel
  },

  speak: function(content) {
    // これを実行すると、room_channel.rb#speakが実行される
    return this.perform('speak',{message: content}); 
  }
});
