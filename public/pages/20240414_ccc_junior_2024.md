## CCC Junior 2024 Solutions: Complete Python Walkthrough

#### Written at Apr 14, 2024

> *"The more you practice, the better you debug."*  
> – CCC mindset 🔧

### Competition Overview  
The 2024 Canadian Computing Competition (Junior) featured five problems testing basics like arithmetic, loops, sorting, string manipulation, and graph traversal.

---

### J1: Conveyor Belt Sushi

#### Problem Statement  
Compute the total cost of a sushi meal given the number of plates: red = \$3, green = \$4, blue = \$5. Input three non-negative integers `R, G, B`, output the total cost.

#### Solution Approach  
1. Read `R, G, B`  
2. Calculate total cost: `R*3 + G*4 + B*5`  
3. Print the result

```python
def j1_solution():
    R = int(input().strip())
    G = int(input().strip())
    B = int(input().strip())
    return R*3 + G*4 + B*5

print(j1_solution())
````

**Key Points:** Straightforward arithmetic and input reading.  

---

### J2: Dusa And The Yobis

#### Problem Statement

Dusa (initial size `D`) eats Yobis in sequence; if Yobi size < D, Dusa grows by that size, else stops. Input ends once Dusa can’t eat the next Yobi. Output Dusa’s final size.

#### Solution Approach

1. Read initial size `D`
2. Loop reading Yobi sizes until one ≥ `D`
3. Each time `D` increases by eaten Yobi size
4. Stop and output final `D`

```python
def j2_solution():
    import sys
    data = sys.stdin.read().split()
    D = int(data[0])
    for y in map(int, data[1:]):
        if y >= D:
            break
        D += y
    return D

print(j2_solution())
```

**Key Points:** Use an open-ended loop (`while` or `for`) since input length isn’t known in advance.

---

### J3: Bronze Count

#### Problem Statement

Given `N` student scores (0–75) with at least 3 distinct values, find the **third-highest score** (bronze) and count how many got it.

#### Solution Approach

1. Read `N`, then `scores` list
2. Extract unique scores; sort descending
3. `bronze = unique_scores[2]`
4. Count occurrences of bronze in full list

```python
def j3_solution():
    N = int(input().strip())
    scores = [int(input().strip()) for _ in range(N)]
    bronze = sorted(set(scores), reverse=True)[2]
    count = scores.count(bronze)
    print(bronze, count)

j3_solution()
```

**Key Points:** Efficient set and sort operations; counting is O(N).

---

### J4: Troublesome Keys

#### Problem Statement

A keyboard has a **silly key** (always outputs a wrong letter) and optionally a **quiet key** (no output). Given the actual keys pressed vs displayed, identify these keys.

#### Solution Approach

1. Read pressed string `og` and displayed `after`
2. Count frequencies (`Counter`) of both strings
3. **Silly key**: appears more in `og` than `after`; its wrong output is vice versa
4. **Quiet key**: appears in `og` but absent or less in `after`, not silly
5. Print results

```python
def j4_solution():
    from collections import Counter
    og = input().strip()
    after = input().strip()
    cp, cd = Counter(og), Counter(after)
    # silly: pressed more than displayed; wrong letter: displayed more
    silly = (cp - cd).most_common(1)[0][0]
    wrong = (cd - cp).most_common(1)[0][0]
    quiet = '-'
    if len(og) > len(after):
        for k, v in (cp - cd).items():
            if k != silly and v > 0:
                quiet = k
                break
    print(silly, wrong)
    print(quiet)

print(j4_solution())
```

**Key Points:** Frequency analysis solves in O(N) even for N up to 500 k.

---

### J5: Harvest Waterloo

#### Problem Statement

On an `R×C` grid, cells have pumpkins of sizes: `S`=1, `M`=5, `L`=10, or obstacles `*`. Starting from `(A, B)`, move 4-directionally (no diagonals), avoid obstacles, sum all reachable pumpkin values.

#### Solution Approach

1. Read `R, C`, then grid, and start `(A, B)`
2. Use DFS/BFS from start, mark visited, add values for `S/M/L`
3. Skip obstacles and bounds
4. Output the total

```python
def j5_solution():
    import sys
    sys.setrecursionlimit(10**7)
    R, C = int(input()), int(input())
    grid = [input().strip() for _ in range(R)]
    A, B = int(input()), int(input())

    val = {'S':1, 'M':5, 'L':10}
    visited = [[False]*C for _ in range(R)]
    total = 0

    def dfs(r, c):
        nonlocal total
        if not (0 <= r < R and 0 <= c < C): return
        if visited[r][c] or grid[r][c] == '*': return
        visited[r][c] = True
        total += val.get(grid[r][c], 0)
        for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):
            dfs(r+dr, c+dc)

    dfs(A, B)
    return total

print(j5_solution())
```

**Key Points:** DFS with recursion or BFS works; ensure enough recursion depth or switch to stack.

---

## Competition Strategy Guide

**How to tackle CCC Junior effectively:**

1. **Quick wins first (J1–J2):** low-hanging fruit to build confidence.
2. For unknown input lengths (like in J2), use `sys.stdin.read()` or `while True`.
3. Use **set + sort** for top-K problems (like J3).
4. **Frequency analysis** is powerful for string-diff scenarios (like J4).
5. For grids, leverage **DFS/BFS with visited tracking**.
6. Always **anticipate edge cases**, e.g., no quiet key, no reachable pumpkins, etc.

---

> *Debugging is the discipline of questioning your assumptions.* Keep practicing, and keep leveling up. 🧠✨

