import comments from "./fakedata/fakeComment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const CommentView = () => {
  return (
    <section className="home_view_container3">
      <aside className="view3_left">
        <h3>사용해 보신 분들의 후기입니다.</h3>
      </aside>
      <aside className="view3_right">
        <ul className="comments_container">
          {comments.map((data, idx) => (
            <li key={idx} className="comments_list">
              <div className="profile_image">
                <div className="user_image"></div>
              </div>
              <span>
                <h1 className="comments_title">{data.commentsTitle}</h1>
                <p className="comments_user">{data.user}</p>
                <p className="comments_contents">{data.contents}</p>
              </span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default CommentView;
