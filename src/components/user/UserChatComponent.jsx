import { BsChatDots } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";

import "../../chats.css";
const UserChatComponent = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label className="chat-btn" htmlFor="check">
        <span
          className="position-absolute top-0 start-10 translate-middle p-2 
            bg-danger border border-light rounded-circle"
        ></span>
        <BsChatDots className="icon comment" />
        <ImCancelCircle className="icon close" />
      </label>
      <div className="chat-wrapper">
        <div className="chat-header">
          <h6>Let's Chat - Online</h6>
        </div>
        <div className="chat-form">
          <div className="cht-msg">
            {Array.from({ length: 5 }).map((_, id) => (
              <div key={id}>
                <p className="bg-primary p-3 me-5 text-light single-chat">
                  <b>Admin:</b> Hello, world! This is a toast message.
                </p>
                <p className="bg-secondary p-3 ms-5 text-light single-chat">
                  Hello, world! This is a toast message. Hello, world! This is a toast message. Hello, world! This is a toast message.
                </p>
              </div>
            ))}
          </div>

          <textarea
            id="clientChatMsg"
            className="form-control"
            placeholder="Your Text Message"
          ></textarea>

          <button className="btn btn-success btn-block">Submit</button>
        </div>
      </div>
    </>
  );
};

export default UserChatComponent;
