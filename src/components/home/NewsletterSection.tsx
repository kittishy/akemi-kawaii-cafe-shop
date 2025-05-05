import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulated API call
        setTimeout(() => {
            toast({
                title: "Subscribed Successfully!",
                description:
                    "Thank you for subscribing to our newsletter.",
            });
            setEmail("");
            setIsLoading(false);
        }, 1000);
    };

    return (
        <section className="py-16 bg-primary/10 dark:bg-primary/5">
            <div className="container max-w-4xl">
                <div className="rounded-3xl bg-white dark:bg-gray-800 p-8 md:p-12 shadow-lg relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-accent/30 dark:bg-accent/10"></div>
                    <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-primary/30 dark:bg-primary/10"></div>

                    <div className="relative z-10 text-center">
                        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                            Stay Updated with Lisa's Café
                        </h2>
                        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                            Get exclusive offers, coffee tips, and updates about Lisa's Café directly in your inbox.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <Input type="email" placeholder="Your best email" value={email} onChange={(e) => setEmail(e.target.value)} required className="rounded-full" />
                            <Button type="submit" disabled={isLoading} className="rounded-full">
                                {isLoading ? "Subscribing..." : "Subscribe"}
                            </Button>
                        </form>

                        <p className="text-xs text-muted-foreground mt-4">By subscribing, you agree to our Privacy Policy.<br />We don't send spam, we promise!</p>
                    </div>

                    {/* Floating cat paws */}
                    <div className="absolute top-5 left-5 text-2xl opacity-20 dark:opacity-10 animate-bounce">🐾</div>
                    <div className="absolute bottom-8 right-8 text-2xl opacity-20 dark:opacity-10 animate-bounce delay-300">🐾</div>
                </div>
            </div>
        </section>
    );
}
        </div>
      </div>
    </section>
  );
}
