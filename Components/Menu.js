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

          <div className="col-md-4">
            <div className="card">
              <img src="food-item-2.jpg" alt="Food Item 2" />
              <div className="card-body">
                <h5 className="card-title">Food Item 2</h5>
                <p className="card-text">Price: $12</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="food-item-3.jpg" alt="Food Item 3" />
              <div className="card-body">
                <h5 className="card-title">Food Item 3</h5>
                <p className="card-text">Price: $15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

