import { useState } from 'react';
import { projectFirestore, timestamp } from '../../firebase/config';
import "../../css/ResponseSection.css"

function ResponseSection({ blogId }) {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const collectionRef = projectFirestore.collection('blogResponses');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    const createdAt = timestamp();
    collectionRef.add({
      blogId,
      message,
      createdAt
    }).then(() => {
      setSubmitted(true);
      setMessage("");
      setTimeout(() => setSubmitted(false), 3000); // success msg disappears
    });
  };

  return (
    <div className="response-section">
      <h3>Let me know what you think</h3>
      <div>If you think my writing is good and want to clap — I’d love to hear it.<br/>
        If you think it's garbage and feel like roasting it — I’m all ears too.<br/>
        Perspective is always welcome!</div>
        <br/>
      <form onSubmit={handleSubmit}>
        <textarea
          className="response-input"
          placeholder="Share your thoughts..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
        {submitted && <div className="success-msg">Thanks for your comment!</div>}
      </form>
    </div>
  );
}

export default ResponseSection;
