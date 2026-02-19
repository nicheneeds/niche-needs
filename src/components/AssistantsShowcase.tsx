
interface Product {
    id: number;
    brand: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
}

const products: Product[] = [
    {
        id: 1,
        brand: "Estée Lauder",
        name: "Week 1: Magic Edit",
        description: "One click video editing for busy professionals",
        price: 89,
        category: "Skincare",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWRpdGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 2,
        brand: "Chanel",
        name: "Week 2",
        description: "",
        price: 68,
        category: "Makeup",
        image: "https://plus.unsplash.com/premium_photo-1678216285963-253d94232eb7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww"
    },
    {
        id: 3,
        brand: "Chanel",
        name: "Week 3",
        description: "",
        price: 68,
        category: "Makeup",
        image: "https://plus.unsplash.com/premium_photo-1678216285963-253d94232eb7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww"
    },
    {
        id: 4,
        brand: "Estée Lauder",
        name: "Week 4",
        description: "",
        price: 75,
        category: "Skincare",
        image: "https://plus.unsplash.com/premium_photo-1678216285963-253d94232eb7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww"
    },
    {
        id: 5,
        brand: "Estée Lauder",
        name: "Week 5",
        description: "",
        price: 75,
        category: "Skincare",
        image: "https://plus.unsplash.com/premium_photo-1678216285963-253d94232eb7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww"
    },
    {
        id: 6,
        brand: "Estée Lauder",
        name: "Week 6",
        description: "",
        price: 75,
        category: "Skincare",
        image: "https://plus.unsplash.com/premium_photo-1678216285963-253d94232eb7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww"
    },
    {
        id: 7,
        brand: "Estée Lauder",
        name: "Week 7",
        description: "",
        price: 75,
        category: "Skincare",
        image: "https://plus.unsplash.com/premium_photo-1678216285963-253d94232eb7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww"
    },
    {
        id: 8,
        brand: "Estée Lauder",
        name: "Week 8",
        description: "",
        price: 75,
        category: "Skincare",
        image: "https://plus.unsplash.com/premium_photo-1678216285963-253d94232eb7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww"
    },
    {
        id: 9,
        brand: "Estée Lauder",
        name: "Week 9",
        description: "",
        price: 75,
        category: "Skincare",
        image: "https://plus.unsplash.com/premium_photo-1678216285963-253d94232eb7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww"
    },
    {
        id: 10,
        brand: "Estée Lauder",
        name: "Week 10",
        description: "",
        price: 75,
        category: "Skincare",
        image: "https://plus.unsplash.com/premium_photo-1678216285963-253d94232eb7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww"
    },
    {
        id: 11,
        brand: "Estée Lauder",
        name: "Week 11",
        description: "",
        price: 75,
        category: "Skincare",
        image: "https://plus.unsplash.com/premium_photo-1678216285963-253d94232eb7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww"
    },
    {
        id: 12,
        brand: "Estée Lauder",
        name: "Week 12",
        description: "",
        price: 75,
        category: "Skincare",
        image: "https://plus.unsplash.com/premium_photo-1678216285963-253d94232eb7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww"
    },
    {
        id: 13,
        brand: "Estée Lauder",
        name: "Week 13",
        description: "",
        price: 75,
        category: "Skincare",
        image: "https://plus.unsplash.com/premium_photo-1678216285963-253d94232eb7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww"
    },
    {
        id: 14,
        brand: "Estée Lauder",
        name: "Week 14",
        description: "",
        price: 75,
        category: "Skincare",
        image: "https://plus.unsplash.com/premium_photo-1678216285963-253d94232eb7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww"
    },
    {
        id: 15,
        brand: "Estée Lauder",
        name: "Week 15",
        description: "",
        price: 75,
        category: "Skincare",
        image: "https://plus.unsplash.com/premium_photo-1678216285963-253d94232eb7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww"
    }
];

export function AssistantsShowcase() {
    return (
        <div className="w-full bg-[rgb(236,230,232)]">
            <div className="max-w-[1200px] mx-auto px-6 py-12 md:px-12 lg:px-0">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-[#2e2e2e] font-medium text-3xl mb-2">15-Week MVP Challenge Progress</h1>
                    {/* <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#878787] text-sm"> */}
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-lg leading-relaxed tracking-[0.3px]">
                        {/* Showing {products.length} assistants */}
                        Follow the problem solving process for a new niche problem every week.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="flex flex-col group cursor-pointer">
                            {/* Product Image */}
                            <div className="aspect-square bg-[#f5f5f5] rounded-lg mb-4 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="flex flex-col gap-2">
                                {/* <div className="flex items-center justify-between">
                                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#878787]">
                                        {product.brand}
                                    </p>
                                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs px-2 py-1 bg-[#f5f5f5] rounded">
                                        {product.category}
                                    </span>
                                </div> */}
                                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#2e2e2e] text-lg md:text-xl max-w-[650px] leading-relaxed tracking-[0.3px]">
                                    {product.name}
                                </h3>
                                {/* <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-[#878787] line-clamp-2"> */}
                                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[#878787] text-sm md:text-sm max-w-[650px] leading-relaxed tracking-[0.3px]">
                                    {product.description}
                                </p>
                                {/* <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium mt-auto">
                                    ${product.price}
                                </p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
