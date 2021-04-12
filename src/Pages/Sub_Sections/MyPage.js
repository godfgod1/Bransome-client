import FooterContent from "../../components/FooterContent";

const MyPage = () => {
  return (
    <>
      <div id="myPage_container">
        <section className="myPage_Auth_profile_box">
          <h1>UserInfo</h1>
        </section>
        <section className="myPage_my_favorite_box">
          <h1>My Favorite</h1>
        </section>
      </div>
      <FooterContent />
    </>
  );
};

export default MyPage;
