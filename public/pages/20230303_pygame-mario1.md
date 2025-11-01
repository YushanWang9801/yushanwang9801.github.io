## Pygame: Mario Run (Part I)

#### Written at Mar 3, 2023

![Demo of Mario Run](https://miro.medium.com/v2/resize:fit:1200/format:webp/1*GCw3byAR0bXeq2-k4iSeFg.gif)

Hello, this article will show how to use Pygame to build a simple Mario run game. Again, the complete code could be found in the below Github repo:

[https://github.com/YushanWang9801/pygame_mario](https://github.com/YushanWang9801/pygame_mario)

Firstly, make sure you have python3 and Pygame installed. In the start-code branch, you could download only the images and font component used by this project.

### Screen Initialization

=====================

```python
import pygame
import Components as Com   # This is a separate file contain all the game components later be used.

pygame.init()
pygame.font.init()
pygame.mixer.init()

screen = pygame.display.set_mode((Com.WIDTH, Com.HEIGHT)) # 800, 400
pygame.display.set_caption("Mario Runner")
clock = pygame.time.Clock()

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()

    pygame.display.update()
    clock.tick(60)
```

### Create Mario

============

Now we should have a screen running on, then we would like now to add our Mario avatar and obstacle monsters to the screen. Then to open the Component file, let us write the below code:

```python
class Player(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        img_1_path = 'images/Capture1.png'
        img_2_path = 'images/Capture3.png'
        img_3_path = 'images/Capture4.png'
        self.player_img_list = [img_1_path, img_2_path, img_3_path]
        self.player_index = 0

        player_surface = pygame.image.load(self.player_img_list[self.player_index])
        self.image = pygame.transform.scale(player_surface,(PLAYER_SIZE,PLAYER_SIZE))
        self.rect = self.image.get_rect(midbottom=(100,GROUND_LEVEL))

        self.jump_sound = pygame.mixer.Sound('images/jump.mp3')
        self.jump_sound.set_volume(0.5)
        self.gravity = 0

    def player_input(self):
        keys = pygame.key.get_pressed()
        if keys[pygame.K_SPACE] and self.rect.bottom >= GROUND_LEVEL:
            self.gravity = INIT_GRAVITY
            self.jump_sound.play()

    def apply_gravity(self):
        self.gravity += 1
        self.rect.y += self.gravity
        if self.rect.bottom >= GROUND_LEVEL:
            self.rect.bottom = GROUND_LEVEL

    def player_animation(self):
        self.player_index += 0.1
        if self.player_index >= len(self.player_img_list):
            self.player_index = 0
        player_surface = pygame.image.load(self.player_img_list[int(self.player_index)])
        self.image = pygame.transform.scale(player_surface,(PLAYER_SIZE,PLAYER_SIZE))

    def update(self):
        self.player_input()
        self.apply_gravity()
        self.player_animation()
```

I know the Mario code looks quite crazy when we write everything together. Firstly, the walking animation is composed of three images with different images and the player_animation function to form the walking pose on our game screen.

We also need to set the image to the assigned size, the number for these constants could be found in my code. The self.rect will be used to determine if there is any interaction between Mario and other obstacles.

I only assigned one action that could be performed by the user which is the jump function by using the SPACE key. If the space key is hit then, for the _player_input_ function, the player would change its position.

The apply_gravity function is to make the fall of Mario after jump more physically practicable.

### Obstacles and Coins

===================

Similarly, we used a similar code to define the Coin and obstacles.

For obstacles, there are three different types of obstacles I created. Two of them will be set on the ground space of the game floor and the flying yellow turtle will be set on the sky level of the game space.

```python
class Obstacle(pygame.sprite.Sprite):
    def __init__(self, type):
        super().__init__()
        if type == 1:
            self.surface = pygame.image.load('images/obstacle1.png')
            self.y_pos = SKY_LEVEL
        elif type == 2:
            self.surface = pygame.image.load('images/obstacle2.png')
            self.y_pos = GROUND_LEVEL
        else:
            self.surface = pygame.image.load('images/obstacle3.png')
            self.y_pos = GROUND_LEVEL

        self.image = pygame.transform.scale(self.surface,(OBS_SIZE, OBS_SIZE))
        self.rect = self.image.get_rect(
            bottomright=(randint(900,1100), self.y_pos))
        self.speed = 5
        self.facing_right = False

    def update(self):
        self.rect.left -= self.speed
        if self.rect.x <= -100:
            self.kill()
```

As one may notice, the difference between Mario and Obstacles is their movement. Mario can only move vertically which is jump or stay on the ground. Obstacles, on the other hand, can only move horizontally. For simplicity, the obstacles will be generated on the right-hand side of the screen and moved to the left (kind of like Flappy Bird).

Then for the coin:

```python
class Coin(pygame.sprite.Sprite):
    def __init__(self, type, coin_num):
        super().__init__()
        self.surface = pygame.image.load('images/coin.png')
        if type == 1:
            self.y_pos = SKY_LEVEL
        else:
            self.y_pos = GROUND_LEVEL

        self.image = pygame.transform.scale(self.surface,(COIN_SIZE, COIN_SIZE))
        self.rect = coin_surface.get_rect(
            bottomright=(1000 + COIN_SIZE*coin_num, self.y_pos))
        self.speed = 5

    def update(self):
        self.rect.left -= self.speed
        if self.rect.x <= -100:
            self.kill()
```

This is very similar to the obstacles which can only move to the left but coins will be randomly generated with a number of groups on either sky level or ground level.

Later in part II, we will define how Mario interacts with Obstacles and coins.
