## Pygame: Mario Run (Part III)

#### Written at Mar 5, 2023

![Demo of Mario Run](https://miro.medium.com/v2/resize:fit:1200/format:webp/1*GCw3byAR0bXeq2-k4iSeFg.gif)

I hope you survived so far from the Part I and Part II of this Mario Run. In this final part, we are going to build the game over state for the game.

### What to do if Game Over
=======================

At the end of part II, we wrote a function called `game_over_render()` but not defined. This function will help us to handle what the screen would look like if the game is over.

Firstly, we need to add a few new things to the Component file:

```python
game_over_path = 'images/gameOver.png'
game_over_surface = pygame.image.load(game_over_path)
game_over_surface = pygame.transform.scale(game_over_surface, (400, 50))
game_over_rect = game_over_surface.get_rect(center=(400, 100))

player_dead_path = 'images/mariodead.png'
player_dead_surface = pygame.image.load(player_dead_path)
player_dead_surface = pygame.transform.scale(
    player_dead_surface, (PLAYER_SIZE, PLAYER_SIZE))
player_dead_rect = player_dead_surface.get_rect(midbottom=(100, GROUND_LEVEL))

restart_path = 'images/restart.png'
restart_surface = pygame.image.load(restart_path)
restart_surface = pygame.transform.scale(restart_surface, (80, 80))
restart_rect = restart_surface.get_rect(center=(400,220))
```

Then for the `game_over_render` function is in below:

```python
def game_over_render(life=0):
    screen.blit(Com.background_surface, (0,0))
    screen.blit(Com.game_over_surface, Com.game_over_rect)
    screen.blit(Com.player_dead_surface, Com.player_dead_rect)
    screen.blit(Com.restart_surface, Com.restart_rect)
    engine.render_life(life)
    screen.blit(Com.text_score_surface, Com.text_score_rect)
    screen.blit(Com.text_life_surface, Com.text_life_rect)
    return 0, 0
```

Now you should have a runnable Mario game.

This part is quite short. Thank you for your patience to go through all three parts of this Mario Game. If you feel my articles slightly interesting or useful, please follow me and visit my latest personal website:

[https://yushanwang9801.github.io/](https://yushanwang9801.github.io/)