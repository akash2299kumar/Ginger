import React from 'react';
import { Link } from 'react-router-dom';
import './profile.css';

const ProfilePage = () => {
  // Fetch user details from API and store in state

  return (
		<div>
			<div class="container" >
<div class="row" >
    <div class="col-lg-8 col-md-8  col-xs-12">
    <div class="panel panel-default plain profile-panel">
        <div class="panel-heading white-content p-left p-right">
            <img class="profile-image img-responsive" src="https://www.bootdey.com/image/1000x200/FF69B4/000000" alt="profile cover"/>
        </div>
        <div class="panel-body">
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="profile-avatar">
                    <img class="img-responsive" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="profile picture"/>
                </div>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12">
                <div class="user-name">
                    Full name <span class="label label-success">admin</span>
                </div>
                <div class="user-information">
                    <p>Creating awesome snippet for bootdey, bootdey is a gellery of free bootstrap snippets bootdeys</p>
                </div>
                <div class="profile-stats-info">
                    <a href="#/" title="Views">    <i class="glyphicon glyphicon-eye-open">  </i> <strong>2000</strong></a>
                    <a href="#/" title="Comments"> <i class="glyphicon glyphicon-comment">   </i> <strong>120</strong></a>
                    <a href="#/" title="Likes">    <i class="glyphicon glyphicon-thumbs-up"> </i> <strong>60</strong></a>
                </div>
            </div>
        </div>
        <div class="panel-footer white-content">
            <ul class="profile-info">
                <li><i class="glyphicon glyphicon-phone"></i>      +534 354 534</li>
                <li><i class="glyphicon glyphicon-map-marker"></i>  Medellin, colombia</li>
                <li><i class="glyphicon glyphicon-envelope"></i>    snippet@test.com</li>
                <li><i class="glyphicon glyphicon-edit"></i>        Web developer</li>
                <li><i class="glyphicon glyphicon-share"></i>      factory@mail.com</li>
            </ul>
        </div>
    </div>
    </div>
</div>
</div>
		</div>
	);
};

export default ProfilePage;
