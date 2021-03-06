import React, {useContext,useEffect} from 'react'
import GuestContext from '../../context/guestContext/guestContext'
import Guest from './Guest'

const Guests = () => {
  const {guests,filterGuest,search,getGuests} = useContext(GuestContext)
  useEffect(()=>{
    getGuests()
  },[])
  return (
    <div className="guests">
      { search !== null ? search.map(guest => < Guest key={guests._id}  guest={guest} /> ) :
      guests.filter(guest=> !filterGuest || guest.isconfirmed).map(guest => < Guest key={guests._id}  guest={guest} /> )}
    </div>
  )
}
export default Guests 