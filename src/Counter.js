import { useState } from "react";


export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      {/* onClick - camelCase */}
      <button className="btn-like" onClick={() => setLike(like + 1)}>
        👍 {like}
      </button>
      {/* create a dislike button */}
      <button className="btn-dislike" onClick={() => setDislike(dislike + 1)}>
        👎 {dislike}
      </button>
    </div>
  );
}
