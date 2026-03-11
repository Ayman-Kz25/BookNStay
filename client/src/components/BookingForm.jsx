import { Calendar, CalendarMinus2, Search } from "lucide-react";
import { cities } from "../data/data";

const BookingForm = () => {

    return (
        <form className='booking-form'>

            <div>
                <div className='flex items-center gap-2'>
                    <CalendarMinus2 size={14}/>
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                <datalist id='destinations'>
                    {cities.map((city, index)=>(
                        <option value={city} key={index} />
                    ))}
                </datalist>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <CalendarMinus2 size={14}/>
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <CalendarMinus2 size={14}/>
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-2 rounded-md bg-[var(--primary)] py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1 hover:bg-[var(--secondary)]' >
                <Search size={18}/>
                <span>Search</span>
            </button>
        </form>
    );
}

export default BookingForm