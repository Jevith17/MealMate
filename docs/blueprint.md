# **App Name**: MealMate

## Core Features:

- User Authentication: User authentication and profile management to store dietary preferences.
- Input Request UI: Input text box for users to specify their meal plan requests and dietary preferences (e.g., 'What would you like your meal plan to be?').
- Meal Plan Generation API: Send the user's meal plan request to the specified webhook (https://jevithreddy.app.n8n.cloud/webhook-test/1c1ebba4-3957-4c90-91b3-3aeca12d553d) via a POST request and receive the generated meal plan, recipes, and optional grocery list.
- Meal Plan Display: Display the generated meal plan, recipes, and cooking steps in a clear and organized format. The display should include options for daily or weekly views. Use the AI-generated recipes and cooking steps and show to the user.
- Grocery List Display: Display the optional grocery list generated by the AI, allowing users to easily view and manage the ingredients needed for their meal plan.

## Style Guidelines:

- Primary color: Green (#4CAF50) for a fresh and healthy feel.
- Secondary color: Light gray (#F5F5F5) for backgrounds and neutral elements.
- Accent: Orange (#FF9800) for CTAs and highlights.
- Clear and readable font for recipe steps and meal plans.
- Use food-related icons for different meal categories and ingredients.
- Clean and organized layout for easy navigation and readability.
- Subtle transitions and animations when displaying meal plans and recipes.

## Original User Request:
Build a mobile app that helps users generate meal plans for the day/week, recipes and cooking steps, optional grocery list based on what the user inputs. 
call the app 'MealMate'
App Workflow:
1.User logs in
2.Chooses dietary preferences and available ingredients
3.AI generates:
Meal plan for the day/week
Recipes and cooking steps
Optional grocery list
It needs an input text box asking 'What would you like your meal plan to be?' and button 'Generate Meal Plan'
when the button is pressed, send the input text payload via POST request to:
https://jevithreddy.app.n8n.cloud/webhook-test/1c1ebba4-3957-4c90-91b3-3aeca12d553d
  