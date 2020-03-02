import React from "react";

export default function Contact(props) {
  return (
    <div>
      <form
        action="https://formspree.io/xgeyzgpb"
        target="_blank"
        method="POST"
        encType="multipart/form-data"
      >
        <label>Enter Your Email: </label>
        <input type="text" name="_replyto" required/>
        <label>Enter Your Message: </label>
        <input type="text" name="message" required/>

        <label>Attach a file: </label>
        <input type="file" name="upload" />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
