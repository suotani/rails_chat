class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    m = Message.create(content: data['message'])
    template = ApplicationController.renderer.render(partial: 'messages/message', locals: {message: m})
    ActionCable.server.broadcast 'room_channel', template
  end
end
