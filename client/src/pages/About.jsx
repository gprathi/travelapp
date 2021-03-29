import React from "react"
import "../styles/about.css"
import * as peace from "../images/noun_peace of mind_1910859.png"
import * as value from "../images/value_Added.png"
import * as advisor from "../images/travel_Advisor.png"

export default function About() {
    return <div className="container">
        <div className="main">
            <h1>Why use a Travel Advisor</h1>

            <p>
                At Tides&Travels , we believe travel is a life long journey. We help you build
                memorable vacations and travel experiences .
        </p>
            <p>
                In today’s world, we've truly seen the benefits of having a Tides&Travels Travel Advisor.
                With COVID-19 disrupting plans, those who booked with their Tides&Travels Travel Advisor received
                personal attention, with travel and communications handled on their behalf.
                At Tides & Travels, you'll speak with a real person with real value, at real ease.
    </p>
            <p>
                Travelers can save time, money and a whole lot of headaches by using a travel advisor.
                Tides&Travels Travel Advisors can provide everything you need to book a perfect vacation:

            <ul>
                    <li>Advise on Travel Ideas and educate you the travel trends</li>
                    <li>Detailed Itienary Planning saving you hours of planning & re-planning</li>
                    <li>24/7 access to travel advisor during travel</li>
                    <li>Exclusive Travel Insurance Coverage Options</li>
                    <li>Insider access to deals</li>
                    <li>Group space and upgraded amenities</li>
                    <li>Early booking discounts</li>
                    <li>Special fares</li>
                    <li>Hotel deals</li>
                    <li>various modes of transportation</li>
                    <li>quickly and easily rebook canceled vacations</li>
                </ul>
            </p>

        </div>

        <div className="cards">

            <div className="card">
                <h2>PEACE OF MIND</h2>
                <img src={peace} alt="Peace Of Mind" />
                <p>
                    We are here for you. We stay abreast of the most current and timely promotions.
                    No two travelers are alike. Through our knowledge and research,
                    we make sure you get the best value at the best price for the trip that is right for you.
                    We are destination specialists and experienced travelers and can give you insider tips based
                    on our experiences and connections.
                </p>
            </div>



            <div className="card">
                <h2>Value-Added Benefits and Amenities</h2>
                <img src={value} alt="Value Added Benefits" />
                <p>
                    As an American Express Travel Representative, we are a selected few that offer
                    American Express credit cardmember benefits such as Pay with Points which allows
                    American Express Card members to use their points towards their vacation costs.
                    In addition, we are top producers with the best brands in travel and can offer
                    you the most unique travel experience at a very competitive price and added value
                    - plus exclusive vacation packages, low fares and special amenities.
                    We know life can be unpredictable, that's why we offer some of the
                    best travel insurance options so you can relax and enjoy your next getaway.
                </p>
            </div>

            <div className="card">
                <h2>TRAVEL ADVISOR</h2>
                <img src={advisor} alt="TRAVEL ADVISOR" />
                <p>
                    Travel is complex especially if you are not sure where you want to go, traveling abroad,
                    with little ones, or in a group.
                    There are literally hundreds of details that go into every trip - land or cruise.
                    We’ll guide you through the entire travel planning process.
                    We have exclusive tools that will guide you through packing for the right trip,
                    book the best shore excursions for your activity level,
                    plus provide you with social media tools that help you share your plans
                    with other members in your traveling group and so much more.
                    All this is accessible from your computer and the palm of your hands with our free
                    Tides&Travels Mobile ™ app.
                </p>
            </div>

            <div className="card">
                <h2>ONE STOP SHOP</h2>
                <div className="callout">
                    ONE-STOP SHOP
                </div>
                <p>
                    Like a personal shopper, we can provide one-stop travel shopping for you.
                    We can handle air arrangements, rental cars, shore excursions, cruise accommodations
                    and hotel stays, tours, weddings and events, honeymoon and celebration registries,
                    travel insurance, passport and visa services and so much more - with suggestions
                    that are in the best interest of you, not the supplier.
                </p>
            </div>

        </div>

    </div>




}