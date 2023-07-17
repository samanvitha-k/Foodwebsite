import React from 'react';

const Menu = () => {
  return (
    <div>
      <h1>Menu</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="food-item-1.jpg" alt="Food Item 1" />
              <div className="card-body">
                <h5 className="card-title">Food Item 1</h5>
                <p className="card-text">Price: $10</p>
              </div>
            </div>
          </div>

          {/* Repeat the above card code for the remaining food items */}
        </div>
      </div>
    </div>
  );
};

export default Menu;
