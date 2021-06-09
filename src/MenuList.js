import React from 'react'
import { Link } from 'react-router-dom'
import './MenuList.css'
import menuList from './menuList.json'

function MenuList() {
  return (
    <div className='menuList'>
      {/* one */}
      <div className='menuList__container'>
        <h4>CLEANING SERVICES</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.drinks.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      <div className='menuList__container'>
        <h4>Specialty Services</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.food.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      <div className='menuList__container'>
        <h4>Splash back Services</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.atHomeCoffee.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      <div className='menuList__container'>
        <h4>Domestic home Deep</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.merchandise.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      
      {/* two */}
      <div className='menuList__container'>
        <h4>Air Ducting Cleaning </h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.drinks.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      <div className='menuList__container'>
        <h4>Oven BBQ Deep Clean</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.food.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      <div className='menuList__container'>
        <h4>Factories cleaning</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.atHomeCoffee.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      <div className='menuList__container'>
        <h4>Public area cleaning</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.merchandise.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>

      {/* three */}
       {/* <div className='menuList__container'>
        <h4>Drinks</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.drinks.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      <div className='menuList__container'>
        <h4>Food</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.food.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      <div className='menuList__container'>
        <h4>At Home Coffee</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.atHomeCoffee.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      <div className='menuList__container'>
        <h4>Merchandise</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.merchandise.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div> */}

      {/* Four */}
      {/* <div className='menuList__container'>
        <h4>Drinks</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.drinks.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      <div className='menuList__container'>
        <h4>Food</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.food.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      <div className='menuList__container'>
        <h4>At Home Coffee</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.atHomeCoffee.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      <div className='menuList__container'>
        <h4>Merchandise</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.merchandise.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div> */}
    </div>
  )
}

export default MenuList
