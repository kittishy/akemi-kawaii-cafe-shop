import { Skeleton } from "@/components/ui/skeleton";

export function ProductInfoSkeleton() {
  return (
    <div className="space-y-6">
      {/* Categoria e título */}
      <div>
        <Skeleton className="h-6 w-24 mb-2" />
        <Skeleton className="h-10 w-3/4 mb-4" />
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-4" />
            ))}
          </div>
          <Skeleton className="h-4 w-24" />
        </div>
      </div>

      {/* Preço */}
      <Skeleton className="h-8 w-32" />

      {/* Descrição */}
      <div className="border-t border-b py-6 my-6">
        <Skeleton className="h-6 w-32 mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      {/* Disponibilidade */}
      <div>
        <Skeleton className="h-6 w-32 mb-2" />
        <Skeleton className="h-4 w-48" />
      </div>

      {/* Controles de quantidade */}
      <div className="pt-4">
        <div className="flex items-center gap-4 mb-6">
          <Skeleton className="h-6 w-24" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-16" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>

        {/* Botões */}
        <div className="flex gap-3 mt-4">
          <Skeleton className="h-12 flex-1" />
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>
        
        {/* Compartilhamento */}
        <div className="flex items-center gap-2 mt-4">
          <Skeleton className="h-4 w-24" />
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-8 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}