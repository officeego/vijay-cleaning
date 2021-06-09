import React from "react";
import "./MenuScreen.css";
import MenuHeader from "../MenuHeader";
import MenuList from "../MenuList";
import MenuItem from "../MenuItem";
import menuList from "../menuList.json";

function MenuScreen() {
  return (
    <div className="menuScreen">
      <MenuHeader />
      <div className="menuScreen__container">
        <div className="menuScreen__left">
          <MenuList />
        </div>
        <div className="menuScreen__right">
          <h1>TazzerCleaner</h1>
          <div className="menuScreen__category">
            <h2>TOP RATED CLEANER EXPERT</h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.drinks.map(({ type, path, image, price }) => (
                  <MenuItem type={type} image={image} price={price}/>
                ))
              )}
            </div>
          </div>

          <div className="menuScreen__category">
            <h2>Specialty Services</h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.food.map(({ type, path, image, price }) => (
                  <MenuItem type={type} image={image} price={price} />
                ))
              )}
            </div>
          </div>

          <div className="menuScreen__category">
            <h2>Splash back Services</h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.atHomeCoffee.map(({ type, path, image, price }) => (
                  <MenuItem type={type} image={image} price={price} />
                ))
              )}
            </div>
          </div>

          <div className="menuScreen__category">
            <h2>Duct & Vent Cleaning</h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.merchandise.map(({ type, path, image, price }) => (
                  <MenuItem type={type} image={image} price={price} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuScreen;
