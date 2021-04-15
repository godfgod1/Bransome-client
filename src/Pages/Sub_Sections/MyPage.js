import logos from "../../logos/brandlogo/logo";
import BrandItem from "../../components/BrandsItem";
import FooterContent from "../../components/FooterContent";
import SearchBar from "../../components/SearchBar";
import profileimg from "../../images/profile.png";

const MyPage = () => {
  return (
    <>
      <div id="myPage_container">
        <section className="myPage_Auth_profile_box">
          <div className="profile_card">
            <h1>UserInfo</h1>
            <article className="profile_content">
              <div className="profile_picbox">
                <img src={profileimg} className="profile_img" />
              </div>
              <div className="profile_email">
                <h2>Email</h2>
                <p>direct@gmail.com</p>
                <button> 로그아웃 </button>
              </div>
            </article>
            <SearchBar />
          </div>
        </section>
        <section className="myPage_my_favorite_box">
          <h1>My Favorite</h1>
          <ul className="brands_item_list">
            {logos.map((item, idx) => {
              return <BrandItem key={idx} item={item} />;
            })}
          </ul>
        </section>
      </div>
      <FooterContent />
    </>
  );
};

export default MyPage;
