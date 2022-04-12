import React from "react";
import Card from './Card';
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { IoIosBriefcase } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BiTimer } from "react-icons/bi";
import { FaListUl } from "react-icons/fa";
import { BsTagsFill } from "react-icons/bs";
import SideNav from "./SideNav";
import ActivitiesTable from "./ActivitiesTable";
import OffersTab from './OffersTab';
import ListTab from './ListTab';

const TabPanel = () => {
  return (
    <>
      <div
        style={{ marginTop: "230px", marginLeft: "10px", marginRight: "10px" }}
      >
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <h5>
                <BsFillMenuButtonWideFill />
                <span style={{ marginLeft: "15px" }}>Collected</span>
              </h5>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              <h5>
                <IoIosBriefcase />
                <span style={{ marginLeft: "15px" }}>Created</span>
              </h5>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#contact"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <h5>
                <MdOutlineFavorite />
                <span style={{ marginLeft: "15px" }}>Favorited</span>
              </h5>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="hidden-tab"
              data-toggle="tab"
              href="#hidden"
              role="tab"
              aria-controls="hidden"
              aria-selected="false"
            >
              <h5>
                <AiFillEyeInvisible />
                <span style={{ marginLeft: "15px" }}>Hidden</span>
              </h5>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="activity-tab"
              data-toggle="tab"
              href="#activity"
              role="tab"
              aria-controls="activity"
              aria-selected="false"
            >
              <h5>
                <BiTimer />
                <span style={{ marginLeft: "15px" }}>Activity</span>
              </h5>
            </a>
          </li>

          {/* dropdowns */}

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#offers"
              role="tab"
              aria-expanded="false"
            >
              <h5>
                <FaListUl />
                <span style={{ marginLeft: "15px" }}>Offers</span>
              </h5>
            </a>
            <ul class="dropdown-menu">
            <li class="nav-item">
            <a
              class="nav-link dropdown-item text-center"
              id="offersReceived"
              data-bs-toggle="tab"
              href="#offersR"
              role="tab"
              aria-controls="offersR"
              aria-selected="false"
            >
              Offers received
            </a>
            </li>

              <li class="nav-item">
            <a
              class="nav-link dropdown-item text-center"
              id="offersMade"
              data-bs-toggle="tab"
              href="#offersM"
              role="tab"
              aria-controls="offersM"
              aria-selected="false"
            >
              Offers made
            </a>
            </li>
   
            </ul>
          </li>
{/* listing */}
<li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#listings"
              role="tab"
              aria-expanded="false"
            >
              <h5>
              <BsTagsFill />
                <span style={{ marginLeft: "15px" }}>Listings</span>
              </h5>
            </a>
            <ul class="dropdown-menu">
            <li class="nav-item">
            <a
              class="nav-link dropdown-item text-center"
              id="listingActive"
              data-bs-toggle="tab"
              href="#listA"
              role="tab"
              aria-controls="listA"
              aria-selected="false"
            >
              Active
            </a>
            </li>

              <li class="nav-item">
            <a
              class="nav-link dropdown-item text-center"
              id="listingInactive"
              data-bs-toggle="tab"
              href="#listI"
              role="tab"
              aria-controls="listI"
              aria-selected="false"
            >
              Inactive
            </a>
            </li>
   
            </ul>
          </li>
{/* ends */}
          
          {/* ends */}
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="row">
              <div className="col-2">
                <SideNav />
              </div>
              <div className="col-10 mt-2" style={{display:"flex", flexDirection:"row", flexWrap: "wrap"}}>
              <Card nftName="Srijan Verma" nftSrc="https://strugend.com/assets/images/team/team4.png"/>
              <Card nftName="Srijan Verma" nftSrc="https://strugend.com/assets/images/team/team4.png"/>
              <Card nftName="Srijan Verma" nftSrc="https://strugend.com/assets/images/team/team4.png"/>
              <Card nftName="Srijan Verma" nftSrc="https://strugend.com/assets/images/team/team4.png"/>
              <Card nftName="Srijan Verma" nftSrc="https://strugend.com/assets/images/team/team4.png"/>
              <Card nftName="Srijan Verma" nftSrc="https://strugend.com/assets/images/team/team4.png"/>
              <Card nftName="Srijan Verma" nftSrc="https://strugend.com/assets/images/team/team4.png"/>
              <Card nftName="Srijan Verma" nftSrc="https://strugend.com/assets/images/team/team4.png"/>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="row">
              <div className="col-2">
                <SideNav />
              </div>
              <div className="col-10">TAB2
              <Card nftName="Jaydeep Bairagi" nftSrc="https://strugend.com/assets/images/team/team6.png"/>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div className="row">
              <div className="col-2">
                <SideNav />
              </div>
              <div className="col-10">TAB3
              <Card nftName="Aman Raj" nftSrc="https://strugend.com/assets/images/team/team5.png"/>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="hidden"
            role="tabpanel"
            aria-labelledby="hidden-tab"
          >
            <div className="row">
              <div className="col-2">
                <SideNav />
              </div>
              <div className="col-10">TAB4
              <Card nftName="Triyambaka Mishra" nftSrc="https://strugend.com/assets/images/team/team2.png"/>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="activity"
            role="tabpanel"
            aria-labelledby="hidden-tab"
          >
            <div className="row">
              <div className="col-2">
                <SideNav />
              </div>
              <div className="col-10">TAB5
              <ActivitiesTable/>
              </div>
            </div>
          </div>

          {/* trying */}
          <div
            class="tab-pane fade"
            id="offersR"
            role="tabpanel"
            aria-labelledby="hidden-tab"
          >
            <div className="row">
              <div className="col-2">
                <SideNav />
              </div>
              <div className="col-10">TAB6
              <OffersTab offerType="Offers Received"/>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="offersM"
            role="tabpanel"
            aria-labelledby="hidden-tab"
          >
            <div className="row">
              <div className="col-2">
                <SideNav />
              </div>
              <div className="col-10">TAB7
              <OffersTab offerType="Offers Made"/>
              </div>
            </div>
          </div>
          {/* ends */}
          <div
            class="tab-pane fade"
            id="listA"
            role="tabpanel"
            aria-labelledby="hidden-tab"
          >
            <div className="row">
              <div className="col-2">
                <SideNav />
              </div>
              <div className="col-10">TAB8
              <ListTab list="Active listings"/>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="listI"
            role="tabpanel"
            aria-labelledby="hidden-tab"
          >
            <div className="row">
              <div className="col-2">
                <SideNav />
              </div>
              <div className="col-10">TAB9
              <ListTab list="Inactive listings"/>
              </div>
            </div>
          </div>
          {/* end of list */}
        </div>
      </div>
    </>
  );
};

export default TabPanel;
