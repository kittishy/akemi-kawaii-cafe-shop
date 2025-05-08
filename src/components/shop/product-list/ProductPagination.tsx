
import { Button } from "@/components/ui/button";

export function ProductPagination() {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex gap-1">
        <Button variant="outline" size="icon" disabled>
          &lt;
        </Button>
        <Button variant="default" size="icon">
          1
        </Button>
        <Button variant="outline" size="icon">
          2
        </Button>
        <Button variant="outline" size="icon">
          3
        </Button>
        <Button variant="outline" size="icon">
          &gt;
        </Button>
      </div>
    </div>
  );
}
