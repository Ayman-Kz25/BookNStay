import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <div className="py-16 px-6 md:px-16 lg:px-24 xl:px-32 lg:mt-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <SectionTitle
          title="About Book & Stay"
          subtitle="Book & Stay helps travelers find the perfect place to stay anywhere
          in Pakistan — from luxury resorts to affordable guesthouses."
          align="center"
        />
      </div>

      {/* Section 1 */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mt-16">
        <img
          className="max-w-md w-full rounded-xl"
          src="https://res.cloudinary.com/dhjf7rok5/image/upload/v1774850664/rooms/677425040_l1ytfd.jpg"
          alt="hotel room"
        />

        <div>
          <h2 className="text-3xl font-semibold">Discover Amazing Hotels</h2>

          <p className="text-slate-500 mt-3">
            Our platform connects travelers with the best hotels, resorts, and
            guesthouses across Pakistan. Whether you're planning a relaxing
            getaway or a business trip, finding the right place to stay has
            never been easier.
          </p>

          <div className="flex flex-col gap-8 mt-8">
            <div className="flex gap-4">
              <div className="size-10 flex items-center justify-center bg-indigo-50 border border-indigo-200 rounded">
                🏨
              </div>
              <div>
                <h3 className="font-medium">Wide Selection of Hotels</h3>
                <p className="text-sm text-slate-500">
                  From budget guesthouses to luxury resorts.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="size-10 flex items-center justify-center bg-indigo-50 border border-indigo-200 rounded">
                🔎
              </div>
              <div>
                <h3 className="font-medium">Easy Search & Filters</h3>
                <p className="text-sm text-slate-500">
                  Quickly find rooms by price, location, and amenities.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="size-10 flex items-center justify-center bg-indigo-50 border border-indigo-200 rounded">
                ⭐
              </div>
              <div>
                <h3 className="font-medium">Real Customer Reviews</h3>
                <p className="text-sm text-slate-500">
                  Make confident decisions with genuine feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 mt-20">
        <img
          className="max-w-md w-full rounded-xl"
          src="https://res.cloudinary.com/dhjf7rok5/image/upload/v1774869048/rooms/entrance_yhiabl.webp"
          alt="hotel view"
        />

        <div>
          <h2 className="text-3xl font-semibold">Travel Across Pakistan</h2>

          <p className="text-slate-500 mt-3">
            Explore beautiful destinations like Hunza, Skardu, Murree, Naran,
            and more. Book & Stay helps travelers easily find comfortable
            accommodations in the country's most stunning locations.
          </p>

          <div className="flex flex-col gap-8 mt-8">
            <div className="flex gap-4">
              <div className="size-10 flex items-center justify-center bg-indigo-50 border border-indigo-200 rounded">
                🗺
              </div>
              <div>
                <h3 className="font-medium">Popular Destinations</h3>
                <p className="text-sm text-slate-500">
                  Discover hotels in Pakistan’s most beautiful cities.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="size-10 flex items-center justify-center bg-indigo-50 border border-indigo-200 rounded">
                💰
              </div>
              <div>
                <h3 className="font-medium">Affordable Options</h3>
                <p className="text-sm text-slate-500">
                  Rooms starting from PKR 1,500 to luxury stays.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="size-10 flex items-center justify-center bg-indigo-50 border border-indigo-200 rounded">
                ⚡
              </div>
              <div>
                <h3 className="font-medium">Fast & Simple Booking</h3>
                <p className="text-sm text-slate-500">
                  Book your next stay in just a few clicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-24">
        <div>
          <h3 className="text-3xl font-semibold">10+</h3>
          <p className="text-slate-500 text-sm mt-1">Cities</p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold">30+</h3>
          <p className="text-slate-500 text-sm mt-1">Hotels</p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold">80+</h3>
          <p className="text-slate-500 text-sm mt-1">Rooms</p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold">100+</h3>
          <p className="text-slate-500 text-sm mt-1">Happy Guests</p>
        </div>
      </div>
    </div>
  );
};
export default About;
