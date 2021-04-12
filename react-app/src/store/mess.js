const createMessage = (messageInput, user, meeting) => {
    fetch("/api/message/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messageInput, user, meetingId: meeting.id }),
    });
  };

  export default createMessage;
