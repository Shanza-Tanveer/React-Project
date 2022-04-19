import React from 'react'
import { Badge } from 'react-bootstrap'
import './listing.css'

const RoomsList = ({
  hotelImg,
  hotelName,
  hotelAddress,
  property,
  appartmentType,
  entireAppartment,
  roomType,
  facilities,
  cancellation,
  cancellationTime,
  stay,
  roomPrice,
  taxes,
}) => {
  return (
    <>
      <div className='outer_div'>
        <div className='inner_div'>
          <div className='image_div'>
            <img src={hotelImg} alt='' />
          </div>
          <div className='data_div'>
            {/* 2nd part */}
            <div className='upper_div'>
              <div className='first_div'>
                <div>
                  <h1>{hotelName}</h1>
                </div>
                <div className='first_div_p'>
                  <p>{hotelAddress}</p>
                </div>
                <div>
                  <p>{property}</p>
                </div>
              </div>
              <div className='second_div'>
                <div className='room_reviews'>
                  <div>
                    <div>
                      <h6>Very Good</h6>
                    </div>
                    <div>
                      <p>295 reviews</p>
                    </div>
                  </div>
                  <div>
                    <Badge bg='secondary' className='badge'>
                      9.1
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            {/* 3rd part */}
            <div className='lower_div'>
              <div className='third_div'>
                <div className='third_div_p'>
                  <p>{appartmentType}</p>
                </div>
                <div>
                  <p>{entireAppartment}</p>
                </div>
                <div>
                  <p>{roomType}</p>
                </div>
                <div>
                  <p>{facilities}</p>
                </div>
                <div className='third_div_p1'>
                  <p>{cancellation}</p>
                </div>
                <div className='third_div_p2'>
                  <p>{cancellationTime}</p>
                </div>
              </div>
              <div className='fourth_div'>
                <div>
                  <div className='stays'>
                    <p>{stay}</p>
                  </div>
                  <div>
                    <h2>{roomPrice}</h2>
                  </div>
                  <div>
                    <p>{taxes}</p>
                  </div>
                </div>
                <button>See Availability</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RoomsList
