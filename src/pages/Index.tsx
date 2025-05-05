import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { MilkshakeSection } from "@/components/home/MilkshakeSection";
import { BlogSection } from "@/components/home/BlogSection";
import { GamificationSection } from "@/components/home/GamificationSection";
import { NewsletterSection } from "@/components/home/NewsletterSection"; // Import NewsletterSection

const Index = () => {
  return (
    <Layout>
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-12 md:py-24"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1482049016688-2d3617594f21?q=80&w=3172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[calc(100vh-100px)] lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Welcome to Lisa's Cafe
              <strong className="block font-extrabold text-rose-700">
                Your Daily Delight!
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
              Indulge in our unique coffee creations, handcrafted pastries, and
              savory snacks. Lisa's Cafe is your perfect escape.
            </p>
          </div>
        </div>
      </section>
      <HeroSection />
      <FeaturedProducts />
      <MilkshakeSection />
      <BlogSection />
      <GamificationSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
