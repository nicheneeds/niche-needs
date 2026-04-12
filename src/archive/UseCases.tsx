import image_7b9e7579c82436581d5d5e2e9b430794c6a2e561 from '../assets/7b9e7579c82436581d5d5e2e9b430794c6a2e561.png';
import image_1b88bfd234ed8d09158e118f391b36e579f8d9e1 from '../assets/1b88bfd234ed8d09158e118f391b36e579f8d9e1.png';
import image_3404ea242111dcee07077b33c8f1eb1322fcb9c7 from '../assets/3404ea242111dcee07077b33c8f1eb1322fcb9c7.png';
import image_b0a542b83dd858050847b06ecfb98b383d3f81e5 from '../assets/b0a542b83dd858050847b06ecfb98b383d3f81e5.png';
import image_63e45aaf8e77b54c7b5bd419821fd4b0c4e1cecc from '../assets/63e45aaf8e77b54c7b5bd419821fd4b0c4e1cecc.png';
import image_942e5581628d96db32540b522d194b3634e0a6ac from '../assets/942e5581628d96db32540b522d194b3634e0a6ac.png';

export function UseCases() {

  return (
    <section className="w-full bg-[#ece6e8] px-6 py-16 md:py-24 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-2xl md:text-3xl lg:text-4xl text-center mb-16">
          Hand-Crafted AI Solutions For <span className="font-['Playfair_Display',sans-serif] italic font-normal">Any</span> Niche
        </h2>

        {/* Use Cases Grid - Now 2 Rows of 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Use Case 1 */}
          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-64 h-64 rounded-full shadow-lg overflow-hidden">
              <img
                src={image_942e5581628d96db32540b522d194b3634e0a6ac}
                alt="Lead Generation for Expat Housing"
                className="w-full h-full object-cover scale-[1]"
              />
            </div>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[rgb(10,10,10)] text-base tracking-[0.28px] text-[18px]">
              Maakelaars & Housing Agencies
              {/* <span className="font-bold">Service Info</span> For Boat Rentals */}
            </p>
            {/*<button className="flex items-center gap-2 px-[32px] py-[16px] rounded-full border border-[#767676] hover:bg-black/5 transition-colors cursor-pointer">
              <PhoneIcon />
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[#1e1e1e] text-sm text-[16px]">Try It Out</span>
            </button>*/}
          </div>

          {/* Use Case 2 */}
          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-64 h-64 rounded-full shadow-lg overflow-hidden">
              <img
                src={image_7b9e7579c82436581d5d5e2e9b430794c6a2e561}
                alt="Event Booking for Arts & Cultural Venues"
                className="w-full h-full object-cover scale-[1]"
              />
            </div>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[rgb(10,10,10)] text-base tracking-[0.28px] text-[18px]">
              Art, Music & Cultural Venues
            </p>
            {/*<button className="flex items-center gap-2 px-[32px] py-[16px] rounded-full border border-[#767676] hover:bg-black/5 transition-colors cursor-pointer">
              <PhoneIcon />
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[#1e1e1e] text-sm text-[16px]">Try It Out</span>
            </button>*/}
          </div>

          {/* Use Case 3 */}
          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-64 h-64 rounded-full shadow-lg overflow-hidden">
              <img
                src={image_63e45aaf8e77b54c7b5bd419821fd4b0c4e1cecc}
                alt="Problem Triage for Law Firms"
                className="w-full h-full object-cover scale-[1]"
              />
            </div>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[rgb(10,10,10)] text-base tracking-[0.28px] text-[18px]">
              Advocaten
            </p>
            {/*<button className="flex items-center gap-2 px-[32px] py-[16px] rounded-full border border-[#767676] hover:bg-black/5 transition-colors cursor-pointer">
              <PhoneIcon />
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[#1e1e1e] text-sm text-[16px]">Try It Out</span>
            </button>*/}
          </div>
        </div>

        {/* Second Row of Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Use Case 4 */}
          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-64 h-64 rounded-full shadow-lg overflow-hidden">
              <img
                src={image_3404ea242111dcee07077b33c8f1eb1322fcb9c7}
                alt="Appointment Booking for Medical Practices"
                className="w-full h-full object-cover scale-[1]"
              />
            </div>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[rgb(10,10,10)] text-base tracking-[0.28px] text-[18px]">
              Boutique Hospitality
            </p>
            {/*<button className="flex items-center gap-2 px-[32px] py-[16px] rounded-full border border-[#767676] hover:bg-black/5 transition-colors cursor-pointer">
              <PhoneIcon />
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[#1e1e1e] text-sm text-[16px]">Try It Out</span>
            </button>*/}
          </div>

          {/* Use Case 5 */}
          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-64 h-64 rounded-full shadow-lg overflow-hidden">
              <img
                src={image_b0a542b83dd858050847b06ecfb98b383d3f81e5}
                alt="Menu & Reservations for Restaurants"
                className="w-full h-full object-cover scale-[1]"
              />
            </div>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[rgb(10,10,10)] text-base tracking-[0.28px] text-[18px]">
              Canal Cruises & Boat Rentals
            </p>
            {/*<button className="flex items-center gap-2 px-[32px] py-[16px] rounded-full border border-[#767676] hover:bg-black/5 transition-colors cursor-pointer">
              <PhoneIcon />
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[#1e1e1e] text-sm text-[16px]">Try It Out</span>
            </button>*/}
          </div>

          {/* Use Case 6 */}
          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-64 h-64 rounded-full shadow-lg overflow-hidden">
              <img
                src={image_1b88bfd234ed8d09158e118f391b36e579f8d9e1}
                alt="Customer Support for E-commerce"
                className="w-full h-full object-cover scale-[1]"
              />
            </div>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[rgb(10,10,10)] text-base tracking-[0.28px] text-[18px]">
              Your Business
            </p>
            {/*<button className="flex items-center gap-2 px-[32px] py-[16px] rounded-full border border-[#767676] hover:bg-black/5 transition-colors cursor-pointer">
              <PhoneIcon />
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[#1e1e1e] text-sm text-[16px]">Try It Out</span>
            </button>*/}
          </div>
        </div>
      </div>
    </section>
  );
}