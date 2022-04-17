import React from 'react'
import { NavLink } from 'react-router-dom'
import './listing.css'

const List = () => {
  return (
    <>
      {/* <div>
        <div>
          <a href=''>
            <img src={hotelImg} alt='' />
          </a>
        </div>
        <div>
          <a href=''>
            <h1>{hotelName}</h1>
          </a>
          <a href=''>
            <address>{address}</address>
          </a>
          <p>{property}</p>
          <button>Gateway Deal</button>
          <p>{roomName}</p>
          <p>{roomType}</p>
          <p>{facilities}</p>
          <p>{cancellation}</p>
          <p>{cancellationTime}</p>
          <p>{leftRooms}</p>
          <p>{roomPrice}</p>
          <p>{taxes}</p>
          <button>See Availability</button>
        </div>
      </div> */}
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
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='villas'
                  name='villas'
                  value='villas'
                />
                <label for='villas'>Villas</label>
              </NavLink>
            </div>
            <div className='para'>
              <NavLink to=''>
                <p>5</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='homestays'
                  name='homestays'
                  value='homestays'
                />
                <label for='homestays'>Homestays</label>
              </NavLink>
            </div>
            <div className='para-2'>
              <NavLink to=''>
                <p>8</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='bed and brakfast'
                  name='bed and breakfast'
                  value='bed and breakfast'
                />
                <label for='homestays'>Bed and Breakfasts</label>
              </NavLink>
            </div>
            <div className='para-3'>
              <NavLink to=''>
                <p>4</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 3rd div */}
        <div className='budget'>
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
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='0 - 10,000'
                  name='0 - 10,000'
                  value='0 - 10,000'
                />
                <label for='homestays'>PKR 0 – PKR 10,000</label>
              </NavLink>
            </div>
            <div className='switch-para'>
              <NavLink to=''>
                <p>41</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='10,000 - 20,000'
                  name='10,000 - 20,000'
                  value='10,000 - 20,000'
                />
                <label for='homestays'>PKR 10,000 – PKR 20,000</label>
              </NavLink>
            </div>
            <div className='switch-para1'>
              <NavLink to=''>
                <p>27</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='20,000 - 30,000'
                  name='20,000 - 30,000'
                  value='20,000 - 30,000'
                />
                <label for='homestays'>PKR 20,000 – PKR 30,000</label>
              </NavLink>
            </div>
            <div className='switch-para2'>
              <NavLink to=''>
                <p>8</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='30,000 - 40,000'
                  name='30,000 - 40,000'
                  value='30,000 - 40,000'
                />
                <label for='homestays'>PKR 30,000 – PKR 40,000</label>
              </NavLink>
            </div>
            <div className='switch-para2'>
              <NavLink to=''>
                <p>4</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='40,000+'
                  name='40,000+'
                  value='40,000+'
                />
                <label for='homestays'>PKR 40,000 +</label>
              </NavLink>
            </div>
            <div className='switch-para3'>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 4th div */}
        <div className='popular_filter'>
          <div>
            <h1>Popular Filters</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='hotels'
                  name='hotels'
                  value='hotels'
                />
                <label for='hotels'>Hotels</label>
              </NavLink>
            </div>
            <div className='popular_para1'>
              <NavLink to=''>
                <p>50</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='4 stars'
                  name='4 stars'
                  value='4 stars'
                />
                <label for='4 stars'>4 Stars</label>
              </NavLink>
            </div>
            <div className='popular_para2'>
              <NavLink to=''>
                <p>15</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='breakfast'
                  name='breakfast'
                  value='breakfast'
                />
                <label for='breakfast'>Breakfast Included</label>
              </NavLink>
            </div>
            <div className='popular_para3'>
              <NavLink to=''>
                <p>11</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='guesthouses'
                  name='guesthouses'
                  value='guesthouses'
                />
                <label for='guesthouses'>Guesthouses</label>
              </NavLink>
            </div>
            <div className='popular_para4'>
              <NavLink to=''>
                <p>69</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='centaurus mall'
                  name='centaurus mall'
                  value='centaurus mall'
                />
                <label for='centaurus mall'>The Centaurus Mall</label>
              </NavLink>
            </div>
            <div className='popular_para5'>
              <NavLink to=''>
                <p>2</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='credit card'
                  name='credit card'
                  value='credit card'
                />
                <label for='credit card'>Book without credit card</label>
              </NavLink>
            </div>
            <div className='popular_para6'>
              <NavLink to=''>
                <p>46</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='bed and breakfasts'
                  name='bed and breakfasts'
                  value='bed and breakfasts'
                />
                <label for='bed and breakfasts'>Bed and Breakfasts</label>
              </NavLink>
            </div>
            <div className='popular_para7'>
              <NavLink to=''>
                <p>8</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='F-6 sector'
                  name='F-6 sector'
                  value='F-6 sector'
                />
                <label for='F-6 sector'>F-6 Sector</label>
              </NavLink>
            </div>
            <div className='popular_para8'>
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
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='health and saftey'
                  name='health and saftey'
                  value='health and saftey'
                />
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
        <div className='sustainability'>
          <div>
            <h1>Sustainability</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='sustainable properties'
                  name='sustainable properties'
                  value='sustainable properties'
                />
                <label for='sustainable properties'>
                  Travel Sustainable properties
                </label>
              </NavLink>
            </div>
            <div className='sustainability_para'>
              <NavLink to=''>
                <p>15</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 7th div */}
        <div className='star_rating'>
          <div>
            <h1>Star Rating</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='3 stars'
                  name='3 stars'
                  value='3 stars'
                />
                <label for='sustainable properties'>3 stars</label>
              </NavLink>
            </div>
            <div className='rating_para'>
              <NavLink to=''>
                <p>16</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='4 stars'
                  name='4 stars'
                  value='4 stars'
                />
                <label for='sustainable properties'>4 stars</label>
              </NavLink>
            </div>
            <div className='rating_para1'>
              <NavLink to=''>
                <p>15</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='5 stars'
                  name='5 stars'
                  value='5 stars'
                />
                <label for='sustainable properties'>5 stars</label>
              </NavLink>
            </div>
            <div className='rating_para2'>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='unrated'
                  name='unrated'
                  value='unrated'
                />
                <label for='sustainable properties'>Unrated</label>
              </NavLink>
            </div>
            <div className='rating_para3'>
              <NavLink to=''>
                <p>33</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 8th div */}
        <div className='distance'>
          <div>
            <h1>Distance from center of Islamabad</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input type='checkbox' id='3 km' name='3 km' value='3 km' />
                <label for='sustainable properties'>Less than 3 km</label>
              </NavLink>
            </div>
            <div className='distance_para'>
              <NavLink to=''>
                <p>2</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input type='checkbox' id='5 km' name='5 km' value='5 km' />
                <label for='sustainable properties'>Less than 5 km</label>
              </NavLink>
            </div>
            <div className='distance_para1'>
              <NavLink to=''>
                <p>3</p>
              </NavLink>
            </div>
          </div>
          <div className='distance_para2'>
            <NavLink to=''>
              <p>Distance from center of Islamabad</p>
            </NavLink>
          </div>
        </div>
        {/* 9th div */}
        <div className='fun_things'>
          <div>
            <h1>Fun Things To Do</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='hiking'
                  name='hiking'
                  value='hiking'
                />
                <label for='hiking'>Hiking</label>
              </NavLink>
            </div>
            <div className='fun_things_para'>
              <NavLink to=''>
                <p>17</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='bowling'
                  name='bowling'
                  value='bowling'
                />
                <label for='bowling'>Bowling</label>
              </NavLink>
            </div>
            <div className='fun_things_para1'>
              <NavLink to=''>
                <p>12</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='tennis'
                  name='tennis'
                  value='tennis'
                />
                <label for='tennis'>Tennis court</label>
              </NavLink>
            </div>
            <div className='fun_things_para2'>
              <NavLink to=''>
                <p>11</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input type='checkbox' id='golf' name='golf' value='golf' />
                <label for='golf'>Golf course (within 2 miles)</label>
              </NavLink>
            </div>
            <div className='fun_things_para3'>
              <NavLink to=''>
                <p>11</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='mini golf'
                  name='mini golf'
                  value='mini golf'
                />
                <label for='mini golf'>Mini golf</label>
              </NavLink>
            </div>
            <div className='fun_things_para4'>
              <NavLink to=''>
                <p>11</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input type='checkbox' id='spa' name='spa' value='spa' />
                <label for='spa'>Spa</label>
              </NavLink>
            </div>
            <div className='fun_things_para5'>
              <NavLink to=''>
                <p>5</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='entertainment'
                  name='entertainment'
                  value='entertainment'
                />
                <label for='entertainment'>Evening entertainment</label>
              </NavLink>
            </div>
            <div className='fun_things_para6'>
              <NavLink to=''>
                <p>4</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input type='checkbox' id='tub' name='tub' value='tub' />
                <label for='tub'>Hot tub/Jacuzzi</label>
              </NavLink>
            </div>
            <div className='fun_things_para7'>
              <NavLink to=''>
                <p>3</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input type='checkbox' id='sauna' name='sauna' value='sauna' />
                <label for='sauna'>Sauna</label>
              </NavLink>
            </div>
            <div className='fun_things_para8'>
              <NavLink to=''>
                <p>2</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input type='checkbox' id='bath' name='bath' value='bath' />
                <label for='bath'>Turkish/Steam Bath</label>
              </NavLink>
            </div>
            <div className='fun_things_para9'>
              <NavLink to=''>
                <p>2</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='fitness'
                  name='fitness'
                  value='fitness'
                />
                <label for='fitness'>Fitness</label>
              </NavLink>
            </div>
            <div className='fun_things_para10'>
              <NavLink to=''>
                <p>2</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input type='checkbox' id='pool' name='pool' value='pool' />
                <label for='pool'>Indoor pool</label>
              </NavLink>
            </div>
            <div className='fun_things_para11'>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='spring bath'
                  name='spring bath'
                  value='spring bath'
                />
                <label for='spring bath'>Hot spring bath</label>
              </NavLink>
            </div>
            <div className='fun_things_para12'>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='open-air bath'
                  name='open-air bath'
                  value='open-air bath'
                />
                <label for='open-air bath'>Open-air bath</label>
              </NavLink>
            </div>
            <div className='fun_things_para13'>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='massage'
                  name='massage'
                  value='massage'
                />
                <label for='massage'>Couples' massage</label>
              </NavLink>
            </div>
            <div className='fun_things_para14'>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='full-body massage'
                  name='full-body massage'
                  value='full-body massage'
                />
                <label for='full-body massage'>Full-body massage</label>
              </NavLink>
            </div>
            <div className='fun_things_para15'>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input type='checkbox' id='music' name='music' value='music' />
                <label for='music'>Live music/Performance</label>
              </NavLink>
            </div>
            <div className='fun_things_para16'>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 10th div */}
        <div className='deal'>
          <div>
            <h1>Deals</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input type='checkbox' id='deals' name='deals' value='deals' />
                <label for='deals'>All Deals</label>
              </NavLink>
            </div>
            <div className='deals_para'>
              <NavLink to=''>
                <p>5</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 11th div */}
        <div className='policy'>
          <div>
            <h1>Cancellation Policy</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='policy'
                  name='policy'
                  value='policy'
                />
                <label for='policy'>Free cancellation</label>
              </NavLink>
            </div>
            <div className='policy_para'>
              <NavLink to=''>
                <p>63</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input type='checkbox' id='card' name='card' value='card' />
                <label for='card'>Book without credit card</label>
              </NavLink>
            </div>
            <div className='policy_para1'>
              <NavLink to=''>
                <p>47</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='prepayment'
                  name='prepayment'
                  value='prepayment'
                />
                <label for='prepayment'>No prepayment</label>
              </NavLink>
            </div>
            <div className='policy_para2'>
              <NavLink to=''>
                <p>49</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 12th div */}
        <div className='meals'>
          <div>
            <h1>Meals</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='kitchen'
                  name='kitchen'
                  value='kitchen'
                />
                <label for='kitchen'>Kitchen facilities</label>
              </NavLink>
            </div>
            <div className='meals_para'>
              <NavLink to=''>
                <p>64</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='breakfast included'
                  name='breakfast included'
                  value='breakfast included'
                />
                <label for='breakfast included'>Breakfast Included</label>
              </NavLink>
            </div>
            <div className='meals_para1'>
              <NavLink to=''>
                <p>11</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 13th div */}
        <div className='entire_places'>
          <div>
            <h1>Entire places</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='entire homes'
                  name='entire homes'
                  value='entire homes'
                />
                <label for='entire homes'>Entire homes & apartments</label>
              </NavLink>
            </div>
            <div className='entire_places_para'>
              <NavLink to=''>
                <p>11</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 14th div */}
        <div className='property_type'>
          <div>
            <h1>Property Type</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='guesthouses'
                  name='guesthouses'
                  value='guesthouses'
                />
                <label for='guesthouses'>Guesthouses</label>
              </NavLink>
            </div>
            <div className='property_type_para'>
              <NavLink to=''>
                <p>71</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='apartments'
                  name='apartments'
                  value='apartments'
                />
                <label for='apartments'>Apartments</label>
              </NavLink>
            </div>
            <div className='property_type_para1'>
              <NavLink to=''>
                <p>64</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='hotels'
                  name='hotels'
                  value='hotels'
                />
                <label for='hotels'>Hotels</label>
              </NavLink>
            </div>
            <div className='property_type_para2'>
              <NavLink to=''>
                <p>50</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='bed and breakfasts'
                  name='bed and breakfasts'
                  value='bed and breakfasts'
                />
                <label for='bed and breakfasts'>Bed and Breakfasts</label>
              </NavLink>
            </div>
            <div className='property_type_para3'>
              <NavLink to=''>
                <p>8</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='villas'
                  name='villas'
                  value='villas'
                />
                <label for='villas'>Villas</label>
              </NavLink>
            </div>
            <div className='property_type_para4'>
              <NavLink to=''>
                <p>5</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='homestays'
                  name='homestays'
                  value='homestays'
                />
                <label for='homestays'>Homestays</label>
              </NavLink>
            </div>
            <div className='property_type_para5'>
              <NavLink to=''>
                <p>4</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='vacation homes'
                  name='vacation homes'
                  value='vacation homes'
                />
                <label for='vacation homes'>Vacation Homes</label>
              </NavLink>
            </div>
            <div className='property_type_para6'>
              <NavLink to=''>
                <p>2</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='lodges'
                  name='lodges'
                  value='lodges'
                />
                <label for='lodges'>Lodges</label>
              </NavLink>
            </div>
            <div className='property_type_para7'>
              <NavLink to=''>
                <p>2</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 15th div */}
        <div className='landmarks'>
          <div>
            <h1>Landmarks</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='centaurus mall'
                  name='centaurus mall'
                  value='centaurus mall'
                />
                <label for='centaurus mall'>The Centaurus Mall</label>
              </NavLink>
            </div>
            <div className='landmarks_para'>
              <NavLink to=''>
                <p>2</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 16th div */}
        <div className='preference'>
          <div>
            <h1>Bed Preference</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='double bed'
                  name='double bed'
                  value='double bed'
                />
                <label for='double bed'>Double bed</label>
              </NavLink>
            </div>
            <div className='preference_para'>
              <NavLink to=''>
                <p>29</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 17th div */}
        <div className='review'>
          <div>
            <h1>Review Score</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='wonderful'
                  name='wonderful'
                  value='wonderful'
                />
                <label for='wonderful'>Wonderful: 9+</label>
              </NavLink>
            </div>
            <div className='review_para'>
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
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='very good'
                  name='very good'
                  value='very good'
                />
                <label for='very good'>Very Good: 8+</label>
              </NavLink>
            </div>
            <div className='review_para2'>
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
              <NavLink to=''>
                <input type='checkbox' id='good' name='good' value='good' />
                <label for='good'>Good: 7+</label>
              </NavLink>
            </div>
            <div className='review_para3'>
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
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='pleasant'
                  name='pleasant'
                  value='pleasant'
                />
                <label for='pleasant'>Pleasant: 6+</label>
              </NavLink>
            </div>
            <div className='review_para4'>
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
        <div className='facility'>
          <div>
            <h1>Facilities</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='parking'
                  name='parking'
                  value='parking'
                />
                <label for='parking'>Parking</label>
              </NavLink>
            </div>
            <div className='facilities_para'>
              <NavLink to=''>
                <p>62</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input type='checkbox' id='wifi' name='wifi' value='wifi' />
                <label for='wifi'>Free WiFi</label>
              </NavLink>
            </div>
            <div className='facilities_para1'>
              <NavLink to=''>
                <p>40</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='airport'
                  name='airport'
                  value='airport'
                />
                <label for='airport'>Airport shuttle</label>
              </NavLink>
            </div>
            <div className='facilities_para2'>
              <NavLink to=''>
                <p>19</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='family rooms'
                  name='family rooms'
                  value='family rooms'
                />
                <label for='family rooms'>Family rooms</label>
              </NavLink>
            </div>
            <div className='facilities_para3'>
              <NavLink to=''>
                <p>58</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='non-smoking rooms'
                  name='non-smoking rooms'
                  value='non-smoking rooms'
                />
                <label for='non-smoking rooms'>Non-smoking rooms</label>
              </NavLink>
            </div>
            <div className='facilities_para4'>
              <NavLink to=''>
                <p>41</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='pet friendly'
                  name='pet friendly'
                  value='pet friendly'
                />
                <label for='pet friendly'>Pet friendly</label>
              </NavLink>
            </div>
            <div className='facilities_para5'>
              <NavLink to=''>
                <p>21</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='front desk'
                  name='front desk'
                  value='front desk'
                />
                <label for='front desk'>24-hour front desk</label>
              </NavLink>
            </div>
            <div className='facilities_para6'>
              <NavLink to=''>
                <p>20</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='room service'
                  name='room service'
                  value='room service'
                />
                <label for='room service'>Room service</label>
              </NavLink>
            </div>
            <div className='facilities_para7'>
              <NavLink to=''>
                <p>16</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='disabled guests'
                  name='disabled guests'
                  value='disabled guests'
                />
                <label for='disabled guests'>
                  Facilities for disabled guests
                </label>
              </NavLink>
            </div>
            <div className='facilities_para8'>
              <NavLink to=''>
                <p>16</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='restaurant'
                  name='restaurant'
                  value='restaurant'
                />
                <label for='restaurant'>Restaurant</label>
              </NavLink>
            </div>
            <div className='facilities_para9'>
              <NavLink to=''>
                <p>9</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='fitness center'
                  name='fitness center'
                  value='fitness center'
                />
                <label for='fitness center'>Fitness center</label>
              </NavLink>
            </div>
            <div className='facilities_para10'>
              <NavLink to=''>
                <p>6</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input type='checkbox' id='spa' name='spa' value='spa' />
                <label for='spa'>Spa</label>
              </NavLink>
            </div>
            <div className='facilities_para11'>
              <NavLink to=''>
                <p>5</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='swimming pool'
                  name='swimming pool'
                  value='swimming pool'
                />
                <label for='swimming pool'>Swimming pool</label>
              </NavLink>
            </div>
            <div className='facilities_para12'>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='airport shuttle (free)'
                  name='airport shuttle (free)'
                  value='airport shuttle (free)'
                />
                <label for='airport shuttle (free)'>
                  Airport shuttle (free)
                </label>
              </NavLink>
            </div>
            <div className='facilities_para13'>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 19th div */}
        <div className='room_facility'>
          <div>
            <h1>Room Facilities</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='private bathroom'
                  name='private bathroom'
                  value='private bathroom'
                />
                <label for='private bathroom'>Private bathroom</label>
              </NavLink>
            </div>
            <div className='room_facility_para'>
              <NavLink to=''>
                <p>61</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='balcony'
                  name='balcony'
                  value='balcony'
                />
                <label for='balcony'>Balcony</label>
              </NavLink>
            </div>
            <div className='room_facility_para1'>
              <NavLink to=''>
                <p>50</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='air conditioning'
                  name='air conditioning'
                  value='air conditioning'
                />
                <label for='air conditioning'>Air conditioning</label>
              </NavLink>
            </div>
            <div className='room_facility_para2'>
              <NavLink to=''>
                <p>62</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='bathtub'
                  name='bathtub'
                  value='bathtub'
                />
                <label for='bathtub'>Bathtub</label>
              </NavLink>
            </div>
            <div className='room_facility_para3'>
              <NavLink to=''>
                <p>23</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='kitchen'
                  name='kitchen'
                  value='kitchen'
                />
                <label for='kitchen'>Kitchen/Kitchenette</label>
              </NavLink>
            </div>
            <div className='room_facility_para4'>
              <NavLink to=''>
                <p>64</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input type='checkbox' id='view' name='view' value='view' />
                <label for='view'>View</label>
              </NavLink>
            </div>
            <div className='room_facility_para5'>
              <NavLink to=''>
                <p>52</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='terrace'
                  name='terrace'
                  value='terrace'
                />
                <label for='terrace'>Terrace</label>
              </NavLink>
            </div>
            <div className='room_facility_para6'>
              <NavLink to=''>
                <p>44</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='spa tub'
                  name='spa tub'
                  value='spa tub'
                />
                <label for='spa tub'>Spa tub</label>
              </NavLink>
            </div>
            <div className='room_facility_para7'>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='hot tub'
                  name='hot tub'
                  value='hot tub'
                />
                <label for='hot tub'>Hot tub</label>
              </NavLink>
            </div>
            <div className='room_facility_para8'>
              <NavLink to=''>
                <p>3</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='flat-screen tv'
                  name='lat-screen tv'
                  value='lat-screen tv'
                />
                <label for='lat-screen tv'>Flat-screen TV</label>
              </NavLink>
            </div>
            <div className='room_facility_para9'>
              <NavLink to=''>
                <p>65</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='kitchen'
                  name='kitchen'
                  value='kitchen'
                />
                <label for='kitchen'>Kitchen</label>
              </NavLink>
            </div>
            <div className='room_facility_para10'>
              <NavLink to=''>
                <p>62</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='soundproof'
                  name='soundproof'
                  value='soundproof'
                />
                <label for='soundproof'>Soundproof</label>
              </NavLink>
            </div>
            <div className='room_facility_para11'>
              <NavLink to=''>
                <p>14</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='washing machine'
                  name='washing machine'
                  value='washing machine'
                />
                <label for='washing machine'>Washing machine</label>
              </NavLink>
            </div>
            <div className='room_facility_para12'>
              <NavLink to=''>
                <p>27</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='coffee/tea maker'
                  name='coffee/tea maker'
                  value='coffee/tea maker'
                />
                <label for='coffee/tea maker'>Coffee/Tea maker</label>
              </NavLink>
            </div>
            <div className='room_facility_para13'>
              <NavLink to=''>
                <p>41</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='electric kettle'
                  name='electric kettle'
                  value='electric kettle'
                />
                <label for='electric kettle'>Electric kettle</label>
              </NavLink>
            </div>
            <div className='room_facility_para14'>
              <NavLink to=''>
                <p>40</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='laptop-friendly workspace'
                  name='laptop-friendly workspace'
                  value='laptop-friendly workspace'
                />
                <label for='laptop-friendly workspace'>
                  Laptop-friendly workspace
                </label>
              </NavLink>
            </div>
            <div className='room_facility_para15'>
              <NavLink to=''>
                <p>24</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='coffee machine'
                  name='coffee machine'
                  value='coffee machine'
                />
                <label for='coffee machine'>Coffee machine</label>
              </NavLink>
            </div>
            <div className='room_facility_para16'>
              <NavLink to=''>
                <p>6</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input type='checkbox' id='patio' name='patio' value='patio' />
                <label for='patio'>Patio</label>
              </NavLink>
            </div>
            <div className='room_facility_para17'>
              <NavLink to=''>
                <p>11</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 20th div */}
        <div className='neighborhood'>
          <div>
            <h1>Neighborhood</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='E-11 sector'
                  name='E-11 sector'
                  value='E-11 sector'
                />
                <label for='E-11 sector'>E-11 Sector</label>
              </NavLink>
            </div>
            <div className='neighborhood_para'>
              <NavLink to=''>
                <p>21</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='F-6 sector'
                  name='F-6 sector'
                  value='F-6 sector'
                />
                <label for='F-6 sector'>F-6 Sector</label>
              </NavLink>
            </div>
            <div className='neighborhood_para1'>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='blue area'
                  name='blue area'
                  value='blue area'
                />
                <label for='blue area'>Blue Area</label>
              </NavLink>
            </div>
            <div className='neighborhood_para2'>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='G-8 sector'
                  name='G-8 sector'
                  value='G-8 sector'
                />
                <label for='G-8 sector'>G-8 Sector</label>
              </NavLink>
            </div>
            <div className='neighborhood_para3'>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='H-8 sector'
                  name='H-8 sector'
                  value='H-8 sector'
                />
                <label for='H-8 sector'>H-8 Sector</label>
              </NavLink>
            </div>
            <div className='neighborhood_para4'>
              <NavLink to=''>
                <p>1</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* 21th div */}
        <div className='property_accessibility'>
          <div>
            <h1>Property Accessibility</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='wheelchair accessible'
                  name='wheelchair accessible'
                  value='wheelchair accessible'
                />
                <label for='wheelchair accessible'>Wheelchair accessible</label>
              </NavLink>
            </div>
            <div className='property_accessibility_para'>
              <NavLink to=''>
                <p>12</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='toilet'
                  name='toilet'
                  value='toilet'
                />
                <label for='toilet'>Toilet with grab rails</label>
              </NavLink>
            </div>
            <div className='property_accessibility_para1'>
              <NavLink to=''>
                <p>7</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='raised toilet'
                  name='raised toilet'
                  value='raised toilet'
                />
                <label for='raised toilet'>Raised toilet</label>
              </NavLink>
            </div>
            <div className='property_accessibility_para2'>
              <NavLink to=''>
                <p>9</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='lowered sink'
                  name='lowered sink'
                  value='lowered sink'
                />
                <label for='lowered sink'>Lowered sink</label>
              </NavLink>
            </div>
            <div className='property_accessibility_para3'>
              <NavLink to=''>
                <p>6</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='bathroom emergency cord'
                  name='bathroom emergency cord'
                  value='bathroom emergency cord'
                />
                <label for='bathroom emergency cord'>
                  Bathroom emergency cord
                </label>
              </NavLink>
            </div>
            <div className='property_accessibility_para4'>
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
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='unit located'
                  name='unit located'
                  value='unit located'
                />
                <label for='unit located'>
                  Entire unit located on ground floor
                </label>
              </NavLink>
            </div>
            <div className='room_accessibility_para'>
              <NavLink to=''>
                <p>7</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='upper floors'
                  name='upper floors'
                  value='upper floors'
                />
                <label for='upper floors'>
                  Upper floors accessible by elevator
                </label>
              </NavLink>
            </div>
            <div className='room_accessibility_para1'>
              <NavLink to=''>
                <p>44</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='entire unit'
                  name='entire unit'
                  value='entire unit'
                />
                <label for='entire unit'>
                  Entire unit wheelchair accessible
                </label>
              </NavLink>
            </div>
            <div className='room_accessibility_para2'>
              <NavLink to=''>
                <p>32</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='toilet with grab rails'
                  name='toilet with grab rails'
                  value='toilet with grab rails'
                />
                <label for='toilet with grab rails'>
                  Toilet with grab rails
                </label>
              </NavLink>
            </div>
            <div className='room_accessibility_para3'>
              <NavLink to=''>
                <p>6</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='adapted bath'
                  name='adapted bath'
                  value='adapted bath'
                />
                <label for='adapted bath'>Adapted bath</label>
              </NavLink>
            </div>
            <div className='room_accessibility_para4'>
              <NavLink to=''>
                <p>2</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='roll-in shower'
                  name='roll-in shower'
                  value='roll-in shower'
                />
                <label for='roll-in shower'>Roll-in shower</label>
              </NavLink>
            </div>
            <div className='room_accessibility_para5'>
              <NavLink to=''>
                <p>9</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='walk-in shower'
                  name='walk-in shower'
                  value='walk-in shower'
                />
                <label for='walk-in shower'>Walk-in shower</label>
              </NavLink>
            </div>
            <div className='room_accessibility_para6'>
              <NavLink to=''>
                <p>12</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='raised toilet'
                  name='raised toilet'
                  value='raised toilet'
                />
                <label for='raised toilet'>Raised toilet</label>
              </NavLink>
            </div>
            <div className='room_accessibility_para7'>
              <NavLink to=''>
                <p>9</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='lower sink'
                  name='lower sink'
                  value='lower sink'
                />
                <label for='lower sink'>Lower sink</label>
              </NavLink>
            </div>
            <div className='room_accessibility_para8'>
              <NavLink to=''>
                <p>7</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='emergency cord in bathroom'
                  name='emergency cord in bathroom'
                  value='emergency cord in bathroom'
                />
                <label for='emergency cord in bathroom'>
                  Emergency cord in bathroom
                </label>
              </NavLink>
            </div>
            <div className='room_accessibility_para9'>
              <NavLink to=''>
                <p>3</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='shower chair'
                  name='shower chair'
                  value='shower chair'
                />
                <label for='shower chair'>Shower chair</label>
              </NavLink>
            </div>
            <div className='room_accessibility_para10'>
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

export default List
