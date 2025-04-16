'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {generateMealPlan, MealPlanOutput} from '@/ai/flows/meal-plan-generation';
import {useState} from 'react';

export default function Home() {
  const [mealPlanRequest, setMealPlanRequest] = useState('');
  const [mealPlan, setMealPlan] = useState<MealPlanOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateMealPlan = async () => {
    setIsLoading(true);
    try {
      const result = await generateMealPlan({mealPlanRequest});
      setMealPlan(result);
    } catch (error) {
      console.error('Error generating meal plan:', error);
      // Handle error appropriately (e.g., display an error message)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>MealMate</CardTitle>
          <CardDescription>
            Enter your meal plan request and dietary preferences below.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Textarea
              placeholder="What would you like your meal plan to be?"
              value={mealPlanRequest}
              onChange={(e) => setMealPlanRequest(e.target.value)}
            />
          </div>
          <Button onClick={handleGenerateMealPlan} disabled={isLoading}>
            {isLoading ? 'Generating...' : 'Generate Meal Plan'}
          </Button>

          {mealPlan && (
            <div className="mt-4 grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Generated Meal Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{mealPlan.mealPlan}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recipes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{mealPlan.recipes}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cooking Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{mealPlan.cookingSteps}</p>
                </CardContent>
              </Card>

              {mealPlan.groceryList && (
                <Card>
                  <CardHeader>
                    <CardTitle>Grocery List</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{mealPlan.groceryList}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
