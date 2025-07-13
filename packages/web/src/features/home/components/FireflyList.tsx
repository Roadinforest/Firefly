// src/features/home/components/FireflyList.tsx
import { useFireflies } from '../api/useFireflies';
import { Card, CardContent } from '@/components/ui/card';

const FireflyList = () => {
  const { data } = useFireflies();
  const fireflies = data?.fireflies || [];
  return (
    <div className="space-y-4">
      {fireflies.map((firefly) => (
        <Card key={firefly.id}>
          <CardContent className="pt-4 pb-4">
            <p className="text-base font-medium mb-2">{firefly.content}</p>
            {firefly.author && (
              <p className="text-sm text-muted-foreground">
                作者: {firefly.author.email}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              {new Date(firefly.createdAt).toLocaleString()}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FireflyList; 