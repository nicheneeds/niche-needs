import { useState } from "react";

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
    name: "Revitalizing Night Serum",
    description: "Advanced anti-aging night serum with retinol",
    price: 89,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1751831798147-a8c0b2bd9464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3NtZXRpY3MlMjBzZXJ1bXxlbnwxfHx8fDE3NjU1MjAwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    brand: "Chanel",
    name: "Luxury Foundation",
    description: "Full coverage foundation with SPF 30",
    price: 68,
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1523634118614-82b2685ee3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXBzdGljayUyMG1ha2V1cHxlbnwxfHx8fDE3NjU1MDIyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    brand: "Dior",
    name: "Signature Fragrance",
    description: "Elegant floral fragrance with lasting power",
    price: 125,
    category: "Fragrance",
    image: "https://images.unsplash.com/photo-1586195831800-24f14c992cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaG9jb2xhdGUlMjBkZXNzZXJ0fGVufDF8fHx8MTc2NTUyMDAzNXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    brand: "Estée Lauder",
    name: "Hydrating Face Cream",
    description: "Intensive hydrating cream for dry skin",
    price: 75,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1739950839930-ef45c078f316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMGNyZWFtfGVufDF8fHx8MTc2NTQzNzg2NXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    brand: "Chanel",
    name: "Luxury Foundation",
    description: "Full coverage foundation with SPF 30",
    price: 68,
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1523634118614-82b2685ee3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXBzdGljayUyMG1ha2V1cHxlbnwxfHx8fDE3NjU1MDIyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    brand: "Tom Ford",
    name: "Velvet Orchid",
    description: "Luxurious oriental fragrance",
    price: 145,
    category: "Fragrance",
    image: "https://images.unsplash.com/photo-1739190940453-20900e9d18fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwZnJhZ3JhbmNlfGVufDF8fHx8MTc2NTUxNjc0OHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 7,
    brand: "Estée Lauder",
    name: "Revitalizing Night Serum",
    description: "Advanced anti-aging night serum with retinol",
    price: 89,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1751831798147-a8c0b2bd9464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3NtZXRpY3MlMjBzZXJ1bXxlbnwxfHx8fDE3NjU1MjAwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 8,
    brand: "Dior",
    name: "Signature Fragrance",
    description: "Elegant floral fragrance with lasting power",
    price: 125,
    category: "Fragrance",
    image: "https://images.unsplash.com/photo-1586195831800-24f14c992cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaG9jb2xhdGUlMjBkZXNzZXJ0fGVufDF8fHx8MTc2NTUyMDAzNXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 9,
    brand: "Chanel",
    name: "Luxury Foundation",
    description: "Full coverage foundation with SPF 30",
    price: 68,
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1527632911563-ee5b6d53465b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmb3VuZGF0aW9uJTIwbWFrZXVwfGVufDF8fHx8MTc2NTUxNjYxMHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 10,
    brand: "La Mer",
    name: "The Renewal Oil",
    description: "Lightweight facial oil for radiance",
    price: 135,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1739950839930-ef45c078f316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMGNyZWFtfGVufDF8fHx8MTc2NTQzNzg2NXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 11,
    brand: "Tom Ford",
    name: "Velvet Orchid",
    description: "Luxurious oriental fragrance",
    price: 145,
    category: "Fragrance",
    image: "https://images.unsplash.com/photo-1739190940453-20900e9d18fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwZnJhZ3JhbmNlfGVufDF8fHx8MTc2NTUxNjc0OHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 12,
    brand: "Chanel",
    name: "Luxury Foundation",
    description: "Full coverage foundation with SPF 30",
    price: 68,
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1523634118614-82b2685ee3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXBzdGljayUyMG1ha2V1cHxlbnwxfHx8fDE3NjU1MDIyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 13,
    brand: "La Mer",
    name: "The Renewal Oil",
    description: "Lightweight facial oil for radiance",
    price: 135,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1751831798147-a8c0b2bd9464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3NtZXRpY3MlMjBzZXJ1bXxlbnwxfHx8fDE3NjU1MjAwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 14,
    brand: "Estée Lauder",
    name: "Hydrating Face Cream",
    description: "Intensive hydrating cream for dry skin",
    price: 75,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1739950839930-ef45c078f316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMGNyZWFtfGVufDF8fHx8MTc2NTQzNzg2NXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 15,
    brand: "Dior",
    name: "Signature Fragrance",
    description: "Elegant floral fragrance with lasting power",
    price: 125,
    category: "Fragrance",
    image: "https://images.unsplash.com/photo-1586195831800-24f14c992cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaG9jb2xhdGUlMjBkZXNzZXJ0fGVufDF8fHx8MTc2NTUyMDAzNXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 16,
    brand: "Tom Ford",
    name: "Velvet Orchid",
    description: "Luxurious oriental fragrance",
    price: 145,
    category: "Fragrance",
    image: "https://images.unsplash.com/photo-1739190940453-20900e9d18fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwZnJhZ3JhbmNlfGVufDF8fHx8MTc2NTUxNjc0OHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const brands = [
  { name: "Estée Lauder", count: 4 },
  { name: "Chanel", count: 3 },
  { name: "Dior", count: 2 },
  { name: "Tom Ford", count: 3 },
  { name: "La Mer", count: 3 }
];

export function AssistantsPage() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);

  const handleBrandToggle = (brandName: string) => {
    setSelectedBrands(prev =>
      prev.includes(brandName)
        ? prev.filter(b => b !== brandName)
        : [...prev, brandName]
    );
  };

  const handlePriceRangeSelect = (range: string) => {
    setSelectedPriceRange(range);
    /* 
    if (range === "under50") {
      setPriceRange([5, 50]);
    } else if (range === "50-100") {
      setPriceRange([50, 100]);
    } else if (range === "150+") {
      setPriceRange([150, 300]);
    } 
    */
  };

  const handleResetFilters = () => {
    // setPriceRange([5, 300]);
    setSelectedBrands([]);
    setSelectedPriceRange(null);
  };

  return (
    <div className="w-full bg-[rgb(236,230,232)]">
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:px-12 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-8">
              {/* Filter Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium">Filters</h2>
                <button
                  onClick={handleResetFilters}
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-[#878787] hover:text-black transition-colors underline cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>

              {/* Quick Select */}
              <div className="mb-8">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium mb-4">Category:</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handlePriceRangeSelect("under50")}
                    className={`px-4 py-2 rounded-full border transition-colors cursor-pointer ${selectedPriceRange === "under50"
                      ? "bg-black text-white border-black"
                      : "border-[#d1d1d1] hover:border-black"
                      }`}
                  >
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-sm">For Local Businesses</span>
                  </button>
                  <button
                    onClick={() => handlePriceRangeSelect("50-100")}
                    className={`px-4 py-2 rounded-full border transition-colors cursor-pointer ${selectedPriceRange === "50-100"
                      ? "bg-black text-white border-black"
                      : "border-[#d1d1d1] hover:border-black"
                      }`}
                  >
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-sm">For Locals</span>
                  </button>
                  <button
                    onClick={() => handlePriceRangeSelect("150+")}
                    className={`px-4 py-2 rounded-full border transition-colors cursor-pointer ${selectedPriceRange === "150+"
                      ? "bg-black text-white border-black"
                      : "border-[#d1d1d1] hover:border-black"
                      }`}
                  >
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-sm">Just For Fun</span>
                  </button>
                </div>
              </div>

              {/* Luxury Brands */}
              <div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium mb-4">Luxury Brands</h3>
                <div className="flex flex-col gap-3">
                  {brands.map((brand) => (
                    <label key={brand.name} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand.name)}
                        onChange={() => handleBrandToggle(brand.name)}
                        className="w-4 h-4 accent-black cursor-pointer"
                      />
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-sm group-hover:text-black transition-colors">
                        {brand.name}
                      </span>
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-[#878787] ml-auto">
                        {brand.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-3xl mb-2">Assistants Showcase</h1>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#878787] text-sm">
                Showing {products.length} assistants
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                    <div className="flex items-center justify-between">
                      <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#878787]">
                        {product.brand}
                      </p>
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs px-2 py-1 bg-[#f5f5f5] rounded">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium">
                      {product.name}
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-[#878787] line-clamp-2">
                      {product.description}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium mt-auto">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}