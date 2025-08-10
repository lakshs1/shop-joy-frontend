import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { Search, Filter, Grid, List, SlidersHorizontal } from 'lucide-react';

// Import product images
import headphonesImg from '@/assets/headphones.jpg';
import smartwatchImg from '@/assets/smartwatch.jpg';
import smartphoneImg from '@/assets/smartphone.jpg';
import laptopImg from '@/assets/laptop.jpg';

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Mock product data - in real app this would come from API
  const products = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 199.99,
      originalPrice: 299.99,
      image: headphonesImg,
      rating: 4.8,
      reviewCount: 1247,
      isOnSale: true,
      isFeatured: true,
    },
    {
      id: '2',
      name: 'Smart Fitness Watch',
      price: 249.99,
      image: smartwatchImg,
      rating: 4.6,
      reviewCount: 892,
      isFeatured: true,
    },
    {
      id: '3',
      name: 'Latest Smartphone Pro',
      price: 899.99,
      originalPrice: 999.99,
      image: smartphoneImg,
      rating: 4.9,
      reviewCount: 2156,
      isOnSale: true,
    },
    {
      id: '4',
      name: 'Ultra Gaming Laptop',
      price: 1299.99,
      image: laptopImg,
      rating: 4.7,
      reviewCount: 634,
      isFeatured: true,
    },
    // Duplicate for demo
    {
      id: '5',
      name: 'Premium Wireless Headphones Pro',
      price: 249.99,
      originalPrice: 349.99,
      image: headphonesImg,
      rating: 4.9,
      reviewCount: 567,
      isOnSale: true,
    },
    {
      id: '6',
      name: 'Smart Health Watch',
      price: 179.99,
      image: smartwatchImg,
      rating: 4.5,
      reviewCount: 423,
    },
  ];

  const categories = [
    { name: 'Electronics', count: 1250 },
    { name: 'Audio', count: 890 },
    { name: 'Computers', count: 675 },
    { name: 'Wearables', count: 420 },
    { name: 'Gaming', count: 780 },
  ];

  const brands = [
    { name: 'Apple', count: 156 },
    { name: 'Samsung', count: 142 },
    { name: 'Sony', count: 98 },
    { name: 'Microsoft', count: 87 },
    { name: 'Google', count: 76 },
  ];

  const priceRanges = [
    { label: 'Under $100', min: 0, max: 100, count: 245 },
    { label: '$100 - $300', min: 100, max: 300, count: 567 },
    { label: '$300 - $500', min: 300, max: 500, count: 343 },
    { label: '$500 - $1000', min: 500, max: 1000, count: 234 },
    { label: 'Over $1000', min: 1000, max: 9999, count: 123 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            All Products
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover our complete collection of premium tech products
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card className="sticky top-4 bg-gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <Button variant="ghost" size="sm">
                    Clear All
                  </Button>
                </div>

                {/* Search */}
                <div className="space-y-4 mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search products..."
                      className="pl-10"
                    />
                  </div>
                </div>

                <Separator className="mb-6" />

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-medium mb-4">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div key={category.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox id={category.name} />
                          <Label htmlFor={category.name} className="text-sm">
                            {category.name}
                          </Label>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="mb-6" />

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-medium mb-4">Price Range</h3>
                  <div className="space-y-3">
                    {priceRanges.map((range) => (
                      <div key={range.label} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox id={range.label} />
                          <Label htmlFor={range.label} className="text-sm">
                            {range.label}
                          </Label>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {range.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="mb-6" />

                {/* Brands */}
                <div className="mb-6">
                  <h3 className="font-medium mb-4">Brands</h3>
                  <div className="space-y-3">
                    {brands.map((brand) => (
                      <div key={brand.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox id={brand.name} />
                          <Label htmlFor={brand.name} className="text-sm">
                            {brand.name}
                          </Label>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {brand.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="mb-6" />

                {/* Rating */}
                <div>
                  <h3 className="font-medium mb-4">Customer Rating</h3>
                  <div className="space-y-3">
                    {[4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <Label htmlFor={`rating-${rating}`} className="text-sm flex items-center">
                          {rating}+ ⭐
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    Showing {products.length} of 1,234 products
                  </span>
                  <Badge variant="secondary">
                    Electronics
                  </Badge>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Customer Rating</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Previous
                </Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <span className="text-muted-foreground">...</span>
                <Button variant="outline" size="sm">12</Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;