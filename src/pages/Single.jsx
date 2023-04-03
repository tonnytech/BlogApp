import React from "react";
import { Link } from "react-router-dom";
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
              <Link to={`write?edit=2`} >
              <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" className="delete" />
          </div>
        </div>
        <h1>Lorem ipsu Aperiam pariatur soluta, tempore</h1>

        <p>
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quidem nesciunt,
           corrupti in accusamus repellat autem pariatur sunt ab deserunt tempore sed 
           a incidunt odio illum, perferendis maxime? Quasi, voluptate.
           <br />
           <br />
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quidem nesciunt,
           corrupti in accusamus repellat autem pariatur sunt ab deserunt tempore sed 
           a incidunt odio illum, perferendis maxime? Quasi, voluptate.

           <br />
           <br />

           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quidem nesciunt,
           corrupti in accusamus repellat autem pariatur sunt ab deserunt tempore sed 
           a incidunt odio illum, perferendis maxime? Quasi, voluptate.

           <br />
           <br />

           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quidem nesciunt,
           corrupti in accusamus repellat autem pariatur sunt ab deserunt tempore sed 
           a incidunt odio illum, perferendis maxime? Quasi, voluptate.
           
           <br />
           <br />

           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quidem nesciunt,
           corrupti in accusamus repellat autem pariatur sunt ab deserunt tempore sed 
           a incidunt odio illum, perferendis maxime? Quasi, voluptate.
           
           <br />
           <br />

           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quidem nesciunt,
           corrupti in accusamus repellat autem pariatur sunt ab deserunt tempore sed 
           a incidunt odio illum, perferendis maxime? Quasi, voluptate.
        </p>
      </div>
      <Menu/>
    </div>
  );
};

export default Single;
