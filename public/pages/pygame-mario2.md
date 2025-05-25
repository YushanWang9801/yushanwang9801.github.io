## Pygame: Mario Run (Part II)

#### Written at Mar 4, 2023

![Demo of Mario Run](https://miro.medium.com/v2/resize:fit:1200/format:webp/1*GCw3byAR0bXeq2-k4iSeFg.gif)

For Part I we created the Mario player, obstacles, and coins, now it's time to display them on the screen and play with them. However, we need to set up the background and a few key elements on the screen first.

Background and Scoreboard
=========================

```
background_img_path = 'images/backg.jpg'
background_surface  = pygame.image.load(background_img_path)
background_surface  = pygame.transform.scale(background_surface,
                                                (WIDTH, HEIGHT))  #(800, 400)
```

The background image file could be found in my GitHub repo as I posted in part I. Then for our scoreboard:

```
# Texts
font_path = 'fonts/Pixeltype.ttf'
test_font = pygame.font.Font(font_path, FONT_SIZE)
text_score_surface = test_font.render("Scores: ", False, "Green")
text_score_rect    = text_score_surface.get_rect(center= (FONT_POS_X, FONT_SIZE))
text_life_surface = test_font.render("Life: ", False, "Green")
text_life_rect = text_score_surface.get_rect(center= (FONT_POS_X, FONT_SIZE*2))
```

Define Collision
================

Now we need to define what would happen if the player collides with the obstacles and I wrote this function in my engine.py file. Please feel free to change them.

```
import pygame
import Components as Com
def obstacle_collision_sprite():
    if pygame.sprite.spritecollide(Com.player.sprite,Com.obstacle_group,False):
        Com.obstacle_group.empty()
        return True
    else: return False
```

Then the coin is basically the same:

```
def coin_collision_sprite():
    coin_hit_list = pygame.sprite.spritecollide(\
                    Com.player.sprite,Com.coins_group, True)
    return len(coin_hit_list)
```

Then we need to have a display score function to dynamically change the score and add the coin to the score.

```
def display_score(start_time):
    current_time = int(pygame.time.get_ticks() / 1000) - start_time
    Com.text_score_surface = Com.test_font.render(
                        "Scores: " + f'{current_time}', False, "Green")
    Com.text_score_rect = Com.text_score_surface.\
                                get_rect(center= 
                                  (Com.FONT_POS_X, Com.FONT_SIZE))
    return current_time
```

```
def add_coin_score(start_time, hit_score):
    current_time = int(pygame.time.get_ticks() / 1000) - start_time
    current_time += hit_score*10
    Com.text_score_surface = Com.test_font.render(
                "Scores: " + f'{current_time}', False, "Green")
    Com.text_score_rect = Com.text_score_surface.get_rect(
                                    center = (Com.FONT_POS_X, Com.FONT_SIZE))
    return current_time
```

After displaying the score, we also need to assign one function to dynamically change the number of lives left in the game.

```
def render_life(life):
    Com.text_life_surface = Com.test_font.render(
                        "Life: " + f'{life}', False, "Green")
    Com.text_life_rect = Com.text_life_surface.\
                            get_rect(center= (Com.FONT_POS_X, Com.FONT_SIZE*2)) 
```

Display Everything on the Screen
================================

Now we have everything we need for the game interface, let’s start to place these components on the screen.

```
game_over = False
push_obstacle = False
start_time = 0
score = 0
hit_score = 0
life = 2
bg_music = pygame.mixer.Sound('images/bg.mp3')
bg_music.play(loops = -1)
obstacle_timer = pygame.USEREVENT + 1
pygame.time.set_timer(obstacle_timer, 800)
obstacle_group = pygame.sprite.Group()    # Place these in Component file

# Player                                  # Place these in Component file
player = pygame.sprite.GroupSingle()      # Place these in Component file
player.add(Player())                      # Place these in Component file

# Coins                                   # Place these in Component file
coins_group = pygame.sprite.Group()       # Place these in Component file

def game_render(start_time, life, hit_score):
    screen.blit(Com.background_surface, (0,0))
    # Player
    Com.player.draw(screen)
    Com.player.update()
    # obstacles
    Com.obstacle_group.draw(screen)
    Com.obstacle_group.update()
    # Coins
    Com.coins_group.draw(screen)
    Com.coins_group.update()
    collision = engine.obstacle_collision_sprite()
    
    hit_score += engine.coin_collision_sprite()
    score = engine.add_coin_score(start_time, hit_score)
    engine.render_life(life)
    screen.blit(Com.text_score_surface, Com.text_score_rect)
    screen.blit(Com.text_life_surface, Com.text_life_rect)
    is_game_over = False
    if collision: 
        life -= 1
        if life == 0: is_game_over = True
        else: pygame.time.delay(1000)
    return is_game_over, score, life, hit_score
```

I used sprite.Group for the player and obstacles. We add one player to the group. In the game render, we randomly assign new obstacles to the obstacles group by game time.

Then we add the below code to replace the earlier While TRUE

```
while True:
  for event in pygame.event.get():
          if event.type == pygame.QUIT:
              pygame.quit()
              exit()
          if game_over == True:
              if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
                  start_time = pygame.time.get_ticks() // 1000
                  game_over, life, hit_score = False, 2 , 0
              elif event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
                  start_time = pygame.time.get_ticks() // 1000
                  game_over, life, hit_score = False, 2 , 0
          else:
              if event.type == obstacle_timer:
                  if push_obstacle:
                      Com.obstacle_group.add(Com.Obstacle(choice([1,1,1,2,2,2,2
                                                                  ,3,3,3,3])))
                      push_obstacle = False
                  else:
                      type = choice([1,2])
                      for i in range(randint(1,4)):
                          Com.coins_group.add(Com.Coin(type,i))
                      push_obstacle = True
  if game_over == True:
        score = game_over_render()
  else:
        game_over, score, life, hit_score = game_render(start_time, life, hit_score)
  pygame.display.update()
  clock.tick(60)
```

Now if you try to run the code you will find the game_over_render() has not yet been defined. since we have not set our game what to do if the game is over. Let us fix this in Part III.

Thank you so much for reading this so far and tolerating my terrible medium writing skill.