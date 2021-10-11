import React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {
    return (
        <main role="main" className="flex-shrink-0">
  <div className="container">
    <h1 className="mt-5">Welcome to the Eduqii Community</h1>
    <p className="lead">The first and the best education service platform in Ghana. This platform was created with <span style={{ color: "#0000ff" }}><strong>You</strong></span> in mind. Practice makes perfect so let's Begin. <br />
       <em>Education is the fundamental keys to success.</em>
      <strong>Browse the courses</strong>
    </p>
      <div className="dropdown">
            <button className="btn btn-primary btn-lg dropdown-toggle" type="button" id="dropdownMenuButtonLG" data-bs-toggle="dropdown" aria-expanded="false">
              Browse Level &raquo; <i className="fas fa-book"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonLG">
              <li><h6 className="dropdown-header">Level</h6></li>
              <li><link className="dropdown-item" to="/primary" target="_blank">Primary</link></li>
              <li><link className="dropdown-item" to="/juniorhigh" target="_blank" id="junior_high">Junior High School</link></li>
			  <li><link className="dropdown-item" to="/highschool">High School</link></li>
            </ul>
          </div>
    <br/>
     <table border="0%">
       <tr>
        <td>
  <span style={{ color: "blue" }}>Info:</span>
        </td>
        <td width="100%">
</td>
  </tr>
  </table>
</div>
</main>

    )
}

export default Landing