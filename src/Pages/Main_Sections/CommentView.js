import comments from "./fakedata/fakeComment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const CommentView = () => {
  return (
    <section className="home_view_container3">
      <video src="/videos/video-5.mp4" autoPlay loop muted />
      <aside className="view3_left">
        <h3 data-aos="fade-right">이용해 보신 분들의 후기입니다.</h3>
      </aside>
      <aside className="view3_right">
        <ul className="comments_container">
          {comments.map((data, idx) => (
            <li key={idx} id="comments_list">
              <article className="comments_left">
                <div className="comments_profile_image_box">
                  <img
                    src={data.profileImg}
                    className="comments_profile_image"
                  />
                </div>
                <div>
                  <h2 className="comments_user">{data.user}</h2>
                  <h3 className="comments_age">{data.age}</h3>
                </div>
              </article>
              <article className="comments_right">
                <h4 className="comments_title">{data.commentsTitle}</h4>
                <p className="comments_contents">{data.contents}</p>
              </article>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default CommentView;
