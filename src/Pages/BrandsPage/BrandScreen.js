import React from "react";

const BrandScreen = ({ showBrand }) => {
  return (
    <div className="brand_scroll_content">
      <React.Fragment>
        {showBrand.map((item, idx) => {
          return (
            <td key={item.idx} className="brand_img_box">
              <img className="brand_img" src={item.brand_main_image} />
            </td>
          );
        })}
      </React.Fragment>
    </div>
  );
};

export default BrandScreen;
