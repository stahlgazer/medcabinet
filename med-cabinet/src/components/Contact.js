import React from "react";

export default function Contact(props) {
  console.log(props, 'contact props')
  return (
    <div>
      <form
        action="https://formspree.io/xgeyzgpb"
        target="_blank"
        method="POST"
        encType="multipart/form-data"
      >
        <label>Full Name: </label>
        <input
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last"
          required
        />
        <label>Enter Your Email: </label>
        <input
          type="text"
          name="_replyto"
          required
          placeholder="JohnSmith@email.com"
        />
        <label>Enter Your Message: </label>
        <input type="text" name="message" required />

        <label>Attach a file: </label>
        <input type="file" name="upload" />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
