import React from 'react'
import { NavLink } from 'react-router-dom'
import './sidefilter.css'

const SideFilter = () => {
  return (
    <>
      <div className='filterlist'>
        {/* 1st div */}
        <div className='filter_h1'>
          <h1>Filter by:</h1>
        </div>
        {/* 2nd div */}
        <div className='filter_items'>
          <div>
            <h1>Your Previous Filters</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='villas' name='villas' value='villas' />
              <NavLink to=''>
                <label for='villas'>Villas</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>5</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='homestays'
                name='homestays'
                value='homestays'
              />
              <NavLink to=''>
                <label for='homestays'>Homestays</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>8</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='bed and brakfast'
                name='bed and breakfast'
                value='bed and breakfast'
              />
              <NavLink to=''>
                <label for='homestays'>Bed and Breakfasts</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>4</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 3rd div */}
        <div className='filter_items'>
          <div>
            <h1>Your Budget (per night)</h1>
          </div>
          <div className='toogle_switch'>
            <div>
              <label className='switch'>
                <input type='checkbox' />
                <span className='slider round'></span>
              </label>
            </div>
            <div>
              <p>Set your own budget</p>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='0 - 10,000'
                name='0 - 10,000'
                value='0 - 10,000'
              />
              <NavLink to=''>
                <label for='homestays'>PKR 0 – PKR 10,000</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>41</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='10,000 - 20,000'
                name='10,000 - 20,000'
                value='10,000 - 20,000'
              />
              <NavLink to=''>
                <label for='homestays'>PKR 10,000 – PKR 20,000</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>27</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='20,000 - 30,000'
                name='20,000 - 30,000'
                value='20,000 - 30,000'
              />
              <NavLink to=''>
                <label for='homestays'>PKR 20,000 – PKR 30,000</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>8</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='30,000 - 40,000'
                name='30,000 - 40,000'
                value='30,000 - 40,000'
              />
              <NavLink to=''>
                <label for='homestays'>PKR 30,000 – PKR 40,000</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>4</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='40,000+'
                name='40,000+'
                value='40,000+'
              />
              <NavLink to=''>
                <label for='homestays'>PKR 40,000 +</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 4th div */}
        <div className='filter_items'>
          <div>
            <h1>Popular Filters</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='hotels' name='hotels' value='hotels' />
              <NavLink to=''>
                <label for='hotels'>Hotels</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>50</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='4 stars'
                name='4 stars'
                value='4 stars'
              />
              <NavLink to=''>
                <label for='4 stars'>4 Stars</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>15</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='breakfast'
                name='breakfast'
                value='breakfast'
              />
              <NavLink to=''>
                <label for='breakfast'>Breakfast Included</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>11</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='guesthouses'
                name='guesthouses'
                value='guesthouses'
              />
              <NavLink to=''>
                <label for='guesthouses'>Guesthouses</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>69</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='centaurus mall'
                name='centaurus mall'
                value='centaurus mall'
              />
              <NavLink to=''>
                <label for='centaurus mall'>The Centaurus Mall</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>2</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='credit card'
                name='credit card'
                value='credit card'
              />
              <NavLink to=''>
                <label for='credit card'>Book without credit card</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>46</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='bed and breakfasts'
                name='bed and breakfasts'
                value='bed and breakfasts'
              />
              <NavLink to=''>
                <label for='bed and breakfasts'>Bed and Breakfasts</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>8</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='F-6 sector'
                name='F-6 sector'
                value='F-6 sector'
              />
              <NavLink to=''>
                <label for='F-6 sector'>F-6 Sector</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 5th div */}
        <div className='health_saftey'>
          <div>
            <h1>Your Previous Filters</h1>
          </div>
          <div className='saftey'>
            <div className='input-2'>
              <input
                type='checkbox'
                id='health and saftey'
                name='health and saftey'
                value='health and saftey'
              />
              <NavLink to=''>
                <label for='health and saftey'>
                  Properties that take health & safety measures
                </label>
              </NavLink>
            </div>
            <div className='health_saftey_para'>
              <NavLink to=''>
                <p>39</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 6th div */}
        <div className='filter_items'>
          <div>
            <h1>Sustainability</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='sustainable properties'
                name='sustainable properties'
                value='sustainable properties'
              />
              <NavLink to=''>
                <label for='sustainable properties'>
                  Travel Sustainable properties
                </label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>15</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 7th div */}
        <div className='filter_items'>
          <div>
            <h1>Star Rating</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='3 stars'
                name='3 stars'
                value='3 stars'
              />
              <NavLink to=''>
                <label for='sustainable properties'>3 stars</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>16</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='4 stars'
                name='4 stars'
                value='4 stars'
              />
              <NavLink to=''>
                <label for='sustainable properties'>4 stars</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>15</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='5 stars'
                name='5 stars'
                value='5 stars'
              />
              <NavLink to=''>
                <label for='sustainable properties'>5 stars</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='unrated'
                name='unrated'
                value='unrated'
              />
              <NavLink to=''>
                <label for='sustainable properties'>Unrated</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>33</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 8th div */}
        <div className='filter_items'>
          <div>
            <h1>Distance from center of Islamabad</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='3 km' name='3 km' value='3 km' />
              <NavLink to=''>
                <label for='sustainable properties'>Less than 3 km</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>2</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='5 km' name='5 km' value='5 km' />
              <NavLink to=''>
                <label for='sustainable properties'>Less than 5 km</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>3</p>
              </NavLink>
            </div>
          </div>
          <div className='distance_para p'>
            <NavLink to=''>
              <p>Distance from center of Islamabad</p>
            </NavLink>
          </div>
        </div>
        {/* 9th div */}
        <div className='filter_items'>
          <div>
            <h1>Fun Things To Do</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='hiking' name='hiking' value='hiking' />
              <NavLink to=''>
                <label for='hiking'>Hiking</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>17</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='bowling'
                name='bowling'
                value='bowling'
              />
              <NavLink to=''>
                <label for='bowling'>Bowling</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>12</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='tennis' name='tennis' value='tennis' />
              <NavLink to=''>
                <label for='tennis'>Tennis court</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>11</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='golf' name='golf' value='golf' />
              <NavLink to=''>
                <label for='golf'>Golf course (within 2 miles)</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>11</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='mini golf'
                name='mini golf'
                value='mini golf'
              />
              <NavLink to=''>
                <label for='mini golf'>Mini golf</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>11</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='spa' name='spa' value='spa' />
              <NavLink to=''>
                <label for='spa'>Spa</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>5</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='entertainment'
                name='entertainment'
                value='entertainment'
              />
              <NavLink to=''>
                <label for='entertainment'>Evening entertainment</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>4</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='tub' name='tub' value='tub' />
              <NavLink to=''>
                <label for='tub'>Hot tub/Jacuzzi</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>3</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='sauna' name='sauna' value='sauna' />
              <NavLink to=''>
                <label for='sauna'>Sauna</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>2</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='bath' name='bath' value='bath' />
              <NavLink to=''>
                <label for='bath'>Turkish/Steam Bath</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>2</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='fitness'
                name='fitness'
                value='fitness'
              />
              <NavLink to=''>
                <label for='fitness'>Fitness</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>2</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='pool' name='pool' value='pool' />
              <NavLink to=''>
                <label for='pool'>Indoor pool</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='spring bath'
                name='spring bath'
                value='spring bath'
              />
              <NavLink to=''>
                <label for='spring bath'>Hot spring bath</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='open-air bath'
                name='open-air bath'
                value='open-air bath'
              />
              <NavLink to=''>
                <label for='open-air bath'>Open-air bath</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='massage'
                name='massage'
                value='massage'
              />
              <NavLink to=''>
                <label for='massage'>Couples' massage</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='full-body massage'
                name='full-body massage'
                value='full-body massage'
              />
              <NavLink to=''>
                <label for='full-body massage'>Full-body massage</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='music' name='music' value='music' />
              <NavLink to=''>
                <label for='music'>Live music/Performance</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 10th div */}
        <div className='filter_items'>
          <div>
            <h1>Deals</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='deals' name='deals' value='deals' />
              <NavLink to=''>
                <label for='deals'>All Deals</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>5</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 11th div */}
        <div className='filter_items'>
          <div>
            <h1>Cancellation Policy</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='policy' name='policy' value='policy' />
              <NavLink to=''>
                <label for='policy'>Free cancellation</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>63</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='card' name='card' value='card' />
              <NavLink to=''>
                <label for='card'>Book without credit card</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>47</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='prepayment'
                name='prepayment'
                value='prepayment'
              />
              <NavLink to=''>
                <label for='prepayment'>No prepayment</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>49</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 12th div */}
        <div className='filter_items'>
          <div>
            <h1>Meals</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='kitchen'
                name='kitchen'
                value='kitchen'
              />
              <NavLink to=''>
                <label for='kitchen'>Kitchen facilities</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>64</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='breakfast included'
                name='breakfast included'
                value='breakfast included'
              />
              <NavLink to=''>
                <label for='breakfast included'>Breakfast Included</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>11</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 13th div */}
        <div className='filter_items'>
          <div>
            <h1>Entire places</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='entire homes'
                name='entire homes'
                value='entire homes'
              />
              <NavLink to=''>
                <label for='entire homes'>Entire homes & apartments</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>11</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 14th div */}
        <div className='filter_items'>
          <div>
            <h1>Property Type</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='guesthouses'
                name='guesthouses'
                value='guesthouses'
              />
              <NavLink to=''>
                <label for='guesthouses'>Guesthouses</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>71</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='apartments'
                name='apartments'
                value='apartments'
              />
              <NavLink to=''>
                <label for='apartments'>Apartments</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>64</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='hotels' name='hotels' value='hotels' />
              <NavLink to=''>
                <label for='hotels'>Hotels</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>50</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='bed and breakfasts'
                name='bed and breakfasts'
                value='bed and breakfasts'
              />
              <NavLink to=''>
                <label for='bed and breakfasts'>Bed and Breakfasts</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>8</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='villas' name='villas' value='villas' />
              <NavLink to=''>
                <label for='villas'>Villas</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>5</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='homestays'
                name='homestays'
                value='homestays'
              />
              <NavLink to=''>
                <label for='homestays'>Homestays</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>4</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='vacation homes'
                name='vacation homes'
                value='vacation homes'
              />
              <NavLink to=''>
                <label for='vacation homes'>Vacation Homes</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>2</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='lodges' name='lodges' value='lodges' />
              <NavLink to=''>
                <label for='lodges'>Lodges</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>2</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 15th div */}
        <div className='filter_items'>
          <div>
            <h1>Landmarks</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='centaurus mall'
                name='centaurus mall'
                value='centaurus mall'
              />
              <NavLink to=''>
                <label for='centaurus mall'>The Centaurus Mall</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>2</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 16th div */}
        <div className='filter_items'>
          <div>
            <h1>Bed Preference</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='double bed'
                name='double bed'
                value='double bed'
              />
              <NavLink to=''>
                <label for='double bed'>Double bed</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>29</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 17th div */}
        <div className='filter_items'>
          <div>
            <h1>Review Score</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='wonderful'
                name='wonderful'
                value='wonderful'
              />
              <NavLink to=''>
                <label for='wonderful'>Wonderful: 9+</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>23</p>
              </NavLink>
            </div>
          </div>
          <div className='review_para1'>
            <NavLink to=''>
              <p>Based on guest reviews</p>
            </NavLink>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='very good'
                name='very good'
                value='very good'
              />
              <NavLink to=''>
                <label for='very good'>Very Good: 8+</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>30</p>
              </NavLink>
            </div>
          </div>
          <div className='review_para1'>
            <NavLink to=''>
              <p>Based on guest reviews</p>
            </NavLink>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='good' name='good' value='good' />
              <NavLink to=''>
                <label for='good'>Good: 7+</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>35</p>
              </NavLink>
            </div>
          </div>
          <div className='review_para1'>
            <NavLink to=''>
              <p>Based on guest reviews</p>
            </NavLink>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='pleasant'
                name='pleasant'
                value='pleasant'
              />
              <NavLink to=''>
                <label for='pleasant'>Pleasant: 6+</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>37</p>
              </NavLink>
            </div>
          </div>
          <div className='review_para1'>
            <NavLink to=''>
              <p>Based on guest reviews</p>
            </NavLink>
          </div>
        </div>
        {/* 18th div */}
        <div className='filter_items'>
          <div>
            <h1>Facilities</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='parking'
                name='parking'
                value='parking'
              />
              <NavLink to=''>
                <label for='parking'>Parking</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>62</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='wifi' name='wifi' value='wifi' />
              <NavLink to=''>
                <label for='wifi'>Free WiFi</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>40</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='airport'
                name='airport'
                value='airport'
              />
              <NavLink to=''>
                <label for='airport'>Airport shuttle</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>19</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='family rooms'
                name='family rooms'
                value='family rooms'
              />
              <NavLink to=''>
                <label for='family rooms'>Family rooms</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>58</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='non-smoking rooms'
                name='non-smoking rooms'
                value='non-smoking rooms'
              />
              <NavLink to=''>
                <label for='non-smoking rooms'>Non-smoking rooms</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>41</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='pet friendly'
                name='pet friendly'
                value='pet friendly'
              />
              <NavLink to=''>
                <label for='pet friendly'>Pet friendly</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>21</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='front desk'
                name='front desk'
                value='front desk'
              />
              <NavLink to=''>
                <label for='front desk'>24-hour front desk</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>20</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='room service'
                name='room service'
                value='room service'
              />
              <NavLink to=''>
                <label for='room service'>Room service</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>16</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='disabled guests'
                name='disabled guests'
                value='disabled guests'
              />
              <NavLink to=''>
                <label for='disabled guests'>
                  Facilities for disabled guests
                </label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>16</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='restaurant'
                name='restaurant'
                value='restaurant'
              />
              <NavLink to=''>
                <label for='restaurant'>Restaurant</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>9</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='fitness center'
                name='fitness center'
                value='fitness center'
              />
              <NavLink to=''>
                <label for='fitness center'>Fitness center</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>6</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='spa' name='spa' value='spa' />
              <NavLink to=''>
                <label for='spa'>Spa</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>5</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='swimming pool'
                name='swimming pool'
                value='swimming pool'
              />
              <NavLink to=''>
                <label for='swimming pool'>Swimming pool</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='airport shuttle (free)'
                name='airport shuttle (free)'
                value='airport shuttle (free)'
              />
              <NavLink to=''>
                <label for='airport shuttle (free)'>
                  Airport shuttle (free)
                </label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 19th div */}
        <div className='filter_items'>
          <div>
            <h1>Room Facilities</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='private bathroom'
                name='private bathroom'
                value='private bathroom'
              />
              <NavLink to=''>
                <label for='private bathroom'>Private bathroom</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>61</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='balcony'
                name='balcony'
                value='balcony'
              />
              <NavLink to=''>
                <label for='balcony'>Balcony</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>50</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='air conditioning'
                name='air conditioning'
                value='air conditioning'
              />
              <NavLink to=''>
                <label for='air conditioning'>Air conditioning</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>62</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='bathtub'
                name='bathtub'
                value='bathtub'
              />
              <NavLink to=''>
                <label for='bathtub'>Bathtub</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>23</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='kitchen'
                name='kitchen'
                value='kitchen'
              />
              <NavLink to=''>
                <label for='kitchen'>Kitchen/Kitchenette</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>64</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='view' name='view' value='view' />
              <NavLink to=''>
                <label for='view'>View</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>52</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='terrace'
                name='terrace'
                value='terrace'
              />
              <NavLink to=''>
                <label for='terrace'>Terrace</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>44</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='spa tub'
                name='spa tub'
                value='spa tub'
              />
              <NavLink to=''>
                <label for='spa tub'>Spa tub</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='hot tub'
                name='hot tub'
                value='hot tub'
              />
              <NavLink to=''>
                <label for='hot tub'>Hot tub</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>3</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='flat-screen tv'
                name='lat-screen tv'
                value='lat-screen tv'
              />
              <NavLink to=''>
                <label for='lat-screen tv'>Flat-screen TV</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>65</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='kitchen'
                name='kitchen'
                value='kitchen'
              />
              <NavLink to=''>
                <label for='kitchen'>Kitchen</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>62</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='soundproof'
                name='soundproof'
                value='soundproof'
              />
              <NavLink to=''>
                <label for='soundproof'>Soundproof</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>14</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='washing machine'
                name='washing machine'
                value='washing machine'
              />
              <NavLink to=''>
                <label for='washing machine'>Washing machine</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>27</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='coffee/tea maker'
                name='coffee/tea maker'
                value='coffee/tea maker'
              />
              <NavLink to=''>
                <label for='coffee/tea maker'>Coffee/Tea maker</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>41</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='electric kettle'
                name='electric kettle'
                value='electric kettle'
              />
              <NavLink to=''>
                <label for='electric kettle'>Electric kettle</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>40</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='laptop-friendly workspace'
                name='laptop-friendly workspace'
                value='laptop-friendly workspace'
              />
              <NavLink to=''>
                <label for='laptop-friendly workspace'>
                  Laptop-friendly workspace
                </label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>24</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='coffee machine'
                name='coffee machine'
                value='coffee machine'
              />
              <NavLink to=''>
                <label for='coffee machine'>Coffee machine</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>6</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='patio' name='patio' value='patio' />
              <NavLink to=''>
                <label for='patio'>Patio</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>11</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 20th div */}
        <div className='filter_items'>
          <div>
            <h1>Neighborhood</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='E-11 sector'
                name='E-11 sector'
                value='E-11 sector'
              />
              <NavLink to=''>
                <label for='E-11 sector'>E-11 Sector</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>21</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='F-6 sector'
                name='F-6 sector'
                value='F-6 sector'
              />
              <NavLink to=''>
                <label for='F-6 sector'>F-6 Sector</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='blue area'
                name='blue area'
                value='blue area'
              />
              <NavLink to=''>
                <label for='blue area'>Blue Area</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='G-8 sector'
                name='G-8 sector'
                value='G-8 sector'
              />
              <NavLink to=''>
                <label for='G-8 sector'>G-8 Sector</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='H-8 sector'
                name='H-8 sector'
                value='H-8 sector'
              />
              <NavLink to=''>
                <label for='H-8 sector'>H-8 Sector</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 21th div */}
        <div className='filter_items'>
          <div>
            <h1>Property Accessibility</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='wheelchair accessible'
                name='wheelchair accessible'
                value='wheelchair accessible'
              />
              <NavLink to=''>
                <label for='wheelchair accessible'>Wheelchair accessible</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>12</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input type='checkbox' id='toilet' name='toilet' value='toilet' />
              <NavLink to=''>
                <label for='toilet'>Toilet with grab rails</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>7</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='raised toilet'
                name='raised toilet'
                value='raised toilet'
              />
              <NavLink to=''>
                <label for='raised toilet'>Raised toilet</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>9</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='lowered sink'
                name='lowered sink'
                value='lowered sink'
              />
              <NavLink to=''>
                <label for='lowered sink'>Lowered sink</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>6</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='bathroom emergency cord'
                name='bathroom emergency cord'
                value='bathroom emergency cord'
              />
              <NavLink to=''>
                <label for='bathroom emergency cord'>
                  Bathroom emergency cord
                </label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>4</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 22th div */}
        <div className='room_accessibility'>
          <div>
            <h1>Room Accessibility</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='unit located'
                name='unit located'
                value='unit located'
              />
              <NavLink to=''>
                <label for='unit located'>
                  Entire unit located on ground floor
                </label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>7</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='upper floors'
                name='upper floors'
                value='upper floors'
              />
              <NavLink to=''>
                <label for='upper floors'>
                  Upper floors accessible by elevator
                </label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>44</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='entire unit'
                name='entire unit'
                value='entire unit'
              />
              <NavLink to=''>
                <label for='entire unit'>
                  Entire unit wheelchair accessible
                </label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>32</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='toilet with grab rails'
                name='toilet with grab rails'
                value='toilet with grab rails'
              />
              <NavLink to=''>
                <label for='toilet with grab rails'>
                  Toilet with grab rails
                </label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>6</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='adapted bath'
                name='adapted bath'
                value='adapted bath'
              />
              <NavLink to=''>
                <label for='adapted bath'>Adapted bath</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>2</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='roll-in shower'
                name='roll-in shower'
                value='roll-in shower'
              />
              <NavLink to=''>
                <label for='roll-in shower'>Roll-in shower</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>9</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='walk-in shower'
                name='walk-in shower'
                value='walk-in shower'
              />
              <NavLink to=''>
                <label for='walk-in shower'>Walk-in shower</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>12</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='raised toilet'
                name='raised toilet'
                value='raised toilet'
              />
              <NavLink to=''>
                <label for='raised toilet'>Raised toilet</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>9</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='lower sink'
                name='lower sink'
                value='lower sink'
              />
              <NavLink to=''>
                <label for='lower sink'>Lower sink</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>7</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='emergency cord in bathroom'
                name='emergency cord in bathroom'
                value='emergency cord in bathroom'
              />
              <NavLink to=''>
                <label for='emergency cord in bathroom'>
                  Emergency cord in bathroom
                </label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>3</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <input
                type='checkbox'
                id='shower chair'
                name='shower chair'
                value='shower chair'
              />
              <NavLink to=''>
                <label for='shower chair'>Shower chair</label>
              </NavLink>
            </div>
            <div>
              <NavLink to=''>
                <p>6</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideFilter
