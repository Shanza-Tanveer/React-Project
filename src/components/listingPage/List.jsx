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
      </div>
    </>
  )
}

export default List
