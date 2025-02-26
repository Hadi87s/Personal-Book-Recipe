# React Front-End Project: "Personal Recipe Book"

## **Project Overview**

The **Personal Recipe Book** is a front-end application built using React that allows users to save, organize, and explore their favorite recipes. Users can add recipes with detailed information, categorize them, and search through their collection for easy access.

This project is designed to test your understanding of React fundamentals, including components, state, props, event handling, hooks, and routing. It will also help you practice building an interactive and user-friendly interface.

---

## **Project Requirements**

### **General Features**

1. **Homepage:**

   - A welcoming page with a short description of the app and a button to view the recipe collection.

2. **Recipe List Page:**

   - Display all saved recipes in a card-based grid layout.
   - Each card should show:
     - Recipe name.
     - Image.
     - A brief description or preview.
   - Users can click on a card to view detailed information about the recipe.

3. **Recipe Details Page:**

   - Show full details of a selected recipe, including:
     - Title.
     - Image.
     - Ingredients list.
     - Step-by-step instructions.
   - Allow users to edit or delete the recipe from this page.

4. **Add Recipe Page:**

   - A form where users can add new recipes.
   - Input fields for:
     - Recipe name.
     - Image URL.
     - Ingredients (as a multi-line text area or input).
     - Instructions (as a multi-line text area).
     - Category (dropdown for options like Breakfast, Lunch, Dinner, Dessert, etc.).
   - Provide validation for required fields.

5. **Search and Filter:**
   - Implement a search bar to find recipes by name.
   - Filter recipes by category.

---

### **Functional Requirements**

1. **Routing:**

   - Use React Router to handle navigation between pages:
     - `/` (Homepage)
     - `/recipes` (Recipe List)
     - `/recipes/:id` (Recipe Details)
     - `/add-recipe` (Add Recipe)

2. **State Management:**

   - Use `useState` and `useEffect` for managing local state and side effects.
   - Store recipes in local state and persist them using `localStorage`.

3. **Form Handling:**

   - Validate input fields (e.g., show an error message if a required field is empty).
   - Reset form fields after successful submission.

4. **Reusable Components:**

   - Create reusable components like:
     - `RecipeCard`: Displays basic recipe info in the grid.
     - `Header`: Contains navigation links (e.g., Home, Recipe List, Add Recipe).
     - `Footer`: Displays app info or credits.

5. **Styling:**
   - Use CSS modules or styled-components for styling.
   - Ensure the app is fully responsive for both desktop and mobile devices.

---

### **Optional Advanced Features**

1. **Favorites:**

   - Add a feature to mark recipes as "Favorite."
   - Create a separate page to display only favorite recipes.

2. **Drag-and-Drop:**

   - Enable drag-and-drop functionality to reorder recipes on the list page.

3. **Sort Recipes:**

   - Allow users to sort recipes alphabetically or by category.

4. **Rating System:**

   - Add a rating system where users can rate recipes out of 5 stars.

5. **Dark Mode:**
   - Implement a toggle to switch between light and dark themes.

---

## **Technical Requirements**

1. Use React as the primary library.
2. Utilize `useState` for local state management and `useEffect` for side effects.
3. Persist data in `localStorage` to ensure recipes are saved between sessions.
4. Create a clear and modular folder structure:
   - `/components`: Reusable UI components.
   - `/pages`: Pages for routing.
   - `/utils`: Helper functions (e.g., `localStorage` utilities).
5. Write clear comments and organize the code for readability.

---

## **Deliverables**

1. A fully functional **Personal Recipe Book** front-end application.
2. A brief documentation file that includes:
   - Project overview.
   - Features implemented.
   - Any challenges faced and how they were solved.
   - Potential future enhancements.

---

## **Evaluation Criteria**

1. **Functionality:** Does the app fulfill the outlined requirements?
2. **Code Quality:** Is the code well-structured, modular, and readable?
3. **Design:** Is the UI intuitive, responsive, and visually appealing?
4. **Learning Outcomes:** What did you learn while building this project?

---

### **What You'll Learn**

- Building reusable and dynamic components.
- Managing state and side effects with hooks.
- Implementing navigation with React Router.
- Handling forms and validating user input.
- Persisting data in `localStorage`.
- Building responsive layouts with CSS.

Good luck building your **Personal Recipe Book**! 🍲
