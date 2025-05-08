import { Skeleton } from "@/components/ui/skeleton";

interface ProductSkeletonProps {
  count?: number;
}

export function ProductSkeleton({ count = 6 }: ProductSkeletonProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="rounded-2xl border border-border/50 overflow-hidden">
            {/* Imagem do produto */}
            <Skeleton className="aspect-square w-full" />
            
            {/* Conteúdo do card */}
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-start">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-16" />
              </div>
              
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              
              <div className="flex items-center justify-between pt-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-9 w-28 rounded-full" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}