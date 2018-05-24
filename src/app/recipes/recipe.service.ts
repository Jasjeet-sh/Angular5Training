import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  constructor( private slService: ShoppingListService){}

  private recipes: Recipe[] = [
    new Recipe('Pasta with pea pesto',
      'The peas and blanched almonds add a touch of earthy sweetness to a fresh and aromatic pesto mix.',
      'http://cdnwp.audiencemedia.com/wp-content/uploads/2017/03/797967-1-eng-GB_pasta-with-pea-pesto-470x540.jpg',
      [
        new Ingredient('Shelled Peas', 400),
        new Ingredient('Almonds', 15)
      ]
    ),
    new Recipe('Tomato and brie tart',
      'The classic pairing of tomato and brie gives this vegetarian tart recipe universal appeal.',
      'http://cdnwp.audiencemedia.com/wp-content/uploads/2016/04/658822-1-eng-GB_one-hour-vegetarian-menu-470x540.jpg',
      [
        new Ingredient('Ready-rolled shortcrust pastry', 300),
        new Ingredient('Cherry tomatoes', 200)
      ]
    )
  ];

  getRecipes() {
    return this.recipes;
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }

}
