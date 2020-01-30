import React, { Component } from 'react';
import './style.css';

class SidebarRight extends Component {
render() {
return (
<div class="col-sm-3">
    <div class="card sidebar">
        <h3>New to Twitter?</h3>
        <p>Sign up now to get your own personalized temeline</p>
        <button className=" btn btn-primary rounded-pill">Sign up</button>
    </div>

    <div className="kotaksidebar row">
        <div class="col-sm-4 ">
            <img src={require('../../gambar/sidebar/sidebar.PNG')} alt="" />
        </div>

    </div>
    <div class="card sidebar bg-light card-header">
        <div class=" row">
            <div class="listsidebar col-sm-2">
                <img src={require('../../gambar/sidebar/ps1.PNG')} alt="" />
            </div>
            <div className="para col-sm-6">
                <h6>Adobe Photoshop</h6>
                <p>@Photoshop</p>
            </div>
            <div class="col">
                <button className=" btn btn-outline-primary rounded-pill">Follow</button>
            </div>
        </div>
        <hr />
        <div class=" row">
            <div class="listsidebar col-sm-2">
                <img src={require('../../gambar/sidebar/ps2.PNG')} alt="" />
            </div>
            <div className="para col-sm-6">
                <h6>Adobe Photoshop</h6>
                <p>@Photoshop</p>
            </div>
            <div class="col">
                <button className=" btn btn-outline-primary rounded-pill">Follow</button>
            </div>
        </div>
        <hr />
        <div class=" row">
            <div class="listsidebar col-sm-2">
                <img src={require('../../gambar/sidebar/ps3.PNG')} alt="" />
            </div>
            <div className="para col-sm-6">
                <h6>Adobe Photoshop</h6>
                <p>@Photoshop</p>
            </div>
            <div class="col">
                <button className=" btn btn-outline-primary rounded-pill">Follow</button>
            </div>
        </div>
        <hr />
        <a class="nav-link" href="">Show More</a>

    </div>

    

</div>

);
}
}

export default SidebarRight;