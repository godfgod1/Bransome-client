import comments from "./fakedata/fakeComment";
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
              <div className="profile_image">프로필사진</div>
              <span>
                <h1 className="comments_title">{data.commentsTitle}</h1>
                <p>{data.user}</p>
                <div className="comments_contents">{data.contents}</div>
              </span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default CommentView;
