import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { ChevronRight, Truck, Shield, Headphones, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import product images
import headphonesImg from '@/assets/headphones.jpg';
import smartwatchImg from '@/assets/smartwatch.jpg';
import smartphoneImg from '@/assets/smartphone.jpg';
import laptopImg from '@/assets/laptop.jpg';

const HomePage = () => {
  const featuredProducts = [
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
  ];

  const categories = [
    { name: 'Electronics', count: 1250, icon: '📱' },
    { name: 'Audio', count: 890, icon: '🎧' },
    { name: 'Computers', count: 675, icon: '💻' },
    { name: 'Wearables', count: 420, icon: '⌚' },
    { name: 'Gaming', count: 780, icon: '🎮' },
    { name: 'Accessories', count: 950, icon: '🔌' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            🎉 New Arrivals - Up to 50% OFF
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Discover Amazing
            <br />
            Tech Products
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Shop the latest electronics, gadgets, and accessories from top brands. 
            Quality guaranteed with fast, free shipping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/products">
              <Button variant="hero" size="lg" className="min-w-48">
                Shop Now
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/deals">
              <Button variant="outline" size="lg" className="min-w-48">
                View Deals
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center bg-gradient-card border-0 shadow-soft">
              <CardContent className="pt-6">
                <Truck className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">
                  Free delivery on orders over $50
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-card border-0 shadow-soft">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">
                  Your payment information is safe
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-card border-0 shadow-soft">
              <CardContent className="pt-6">
                <Headphones className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Customer service around the clock
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-card border-0 shadow-soft">
              <CardContent className="pt-6">
                <RefreshCw className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Easy Returns</h3>
                <p className="text-sm text-muted-foreground">
                  30-day return policy on all items
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our wide range of product categories to find exactly what you're looking for.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link to={`/category/${category.name.toLowerCase()}`} key={category.name}>
                <Card className="hover:shadow-medium transition-smooth cursor-pointer bg-gradient-card group">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-bounce">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} products
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
              <p className="text-muted-foreground">
                Hand-picked products just for you
              </p>
            </div>
            <Link to="/products">
              <Button variant="outline">
                View All
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover amazing tech products at unbeatable prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button variant="secondary" size="lg">
                Create Account
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;