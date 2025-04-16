'use server';
/**
 * @fileOverview Generates a personalized meal plan with recipes and cooking steps based on user input.
 *
 * - generateMealPlan - A function that handles the meal plan generation process.
 * - MealPlanInput - The input type for the generateMealPlan function.
 * - MealPlanOutput - The return type for the generateMealPlan function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const MealPlanInputSchema = z.object({
  mealPlanRequest: z.string().describe('The user\u0027s request for a meal plan, including dietary preferences.'),
});
export type MealPlanInput = z.infer<typeof MealPlanInputSchema>;

const MealPlanOutputSchema = z.object({
  mealPlan: z.string().describe('The generated meal plan.'),
  recipes: z.string().describe('Recipes for the meals in the plan.'),
  cookingSteps: z.string().describe('Cooking steps for the recipes.'),
  groceryList: z.string().optional().describe('Optional grocery list for the meal plan.'),
});
export type MealPlanOutput = z.infer<typeof MealPlanOutputSchema>;

export async function generateMealPlan(input: MealPlanInput): Promise<MealPlanOutput> {
  return generateMealPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'mealPlanPrompt',
  input: {
    schema: z.object({
      mealPlanRequest: z.string().describe('The user\u0027s request for a meal plan, including dietary preferences.'),
    }),
  },
  output: {
    schema: z.object({
      mealPlan: z.string().describe('The generated meal plan.'),
      recipes: z.string().describe('Recipes for the meals in the plan.'),
      cookingSteps: z.string().describe('Cooking steps for the recipes.'),
      groceryList: z.string().optional().describe('Optional grocery list for the meal plan.'),
    }),
  },
  prompt: `You are a meal planning assistant. Generate a meal plan, recipes, cooking steps, and an optional grocery list based on the user\u0027s request.

User Request: {{{mealPlanRequest}}}
`,
});

const generateMealPlanFlow = ai.defineFlow<
  typeof MealPlanInputSchema,
  typeof MealPlanOutputSchema
>({
  name: 'generateMealPlanFlow',
  inputSchema: MealPlanInputSchema,
  outputSchema: MealPlanOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});
