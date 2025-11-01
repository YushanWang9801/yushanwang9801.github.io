
## CCC Junior 2023 Solutions: Complete Python Walkthrough

#### Written at Jun 26, 2023

> *"You don't learn to walk by following rules. You learn by doing, and by falling over."*  
> - Richard Branson (Perfect advice for programming competitions!)

### Competition Overview
The 2023 Canadian Computing Competition Junior division featured 5 problems testing fundamental programming skills. In this guide, we'll break down each problem with:
- 🔍 Problem analysis
- 🧠 Step-by-step solution approach
- 💻 Optimized Python code
- ⚠️ Common pitfalls to avoid

Let's dive in!

---

### J1: Deliv-e-droid

#### Problem Statement
A delivery robot earns **50 points per package** delivered and loses **10 points per collision** with obstacles. If it delivers more packages than collisions, it gets an **additional 500 points**. Calculate the final score.

#### Solution Approach
1. Read two integers: packages delivered (P) and collisions (C)
2. Calculate base score: P × 50 - C × 10
3. If P > C, add bonus 500 points
4. Output final score

#### Python Code
```python
def j1_solution():
    P = int(input())
    C = int(input())
    score = P * 50 - C * 10
    if P > C:
        score += 500
    return score

print(j1_solution())
```

**Key Points:**  
- Simple arithmetic operations
- Single conditional check
- Straightforward input handling

---

### J2: Password Validator

#### Problem Statement
Validate password strength with these requirements:
1. Minimum 8 characters
2. At least one uppercase letter
3. At least one lowercase letter
4. At least one digit (0-9)
5. At least one special character from [!@#$%^&*]

#### Solution Approach
1. Read password string
2. Check length requirement
3. Verify each character category using:
   - `any()` with generator expressions
   - String methods: isupper(), islower(), isdigit()
   - Membership check for special characters

#### Python Code
```python
def j2_solution():
    password = input().strip()
    
    if len(password) < 8:
        return "Invalid"
        
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    has_special = any(c in "!@#$%^&*" for c in password)
    
    return "Valid" if all([has_upper, has_lower, has_digit, has_special]) else "Invalid"

print(j2_solution())
```

**Key Points:**  
- Efficient character checking using built-in methods
- Early termination for short passwords
- Readable validation logic

---

### J3: Garden Analysis

#### Problem Statement
Given a grid of plant heights and a threshold value:
1. Count plants taller than threshold
2. Calculate average height of these plants
3. Output positions (row, column) of qualifying plants

#### Solution Approach
1. Read grid dimensions (rows, columns)
2. Read threshold value
3. Process grid row by row:
   - Track count and sum of qualifying plants
   - Record positions in output list
4. Calculate average
5. Format and output results

#### Python Code
```python
def j3_solution():
    rows = int(input())
    cols = int(input())
    threshold = int(input())
    
    grid = []
    qualifying = []
    total = 0
    
    for r in range(rows):
        row = list(map(int, input().split()))
        grid.append(row)
        for c, value in enumerate(row):
            if value > threshold:
                qualifying.append((r, c))
                total += value
                
    count = len(qualifying)
    avg = total / count if count > 0 else 0
    
    print(f"{count} plants above threshold")
    print(f"Average height: {avg:.2f}")
    print("Positions:")
    for pos in qualifying:
        print(f"({pos[0]},{pos[1]})")

# Sample usage:
# Input: 
# 2
# 3
# 5
# 4 6 8
# 2 7 3
j3_solution()
```

**Key Points:**  
- 2D grid processing
- Simultaneous counting and summing
- Formatting decimals to 2 places
- Handling empty result case

---

### J4: Balanced Brackets

#### Problem Statement
Determine if a string containing parentheses () has:
1. Matching pairs
2. Correct nesting
3. No unmatched brackets

#### Solution Approach
1. Use stack data structure
2. Scan each character:
   - Push opening brackets to stack
   - When closing bracket found:
     * If stack empty → invalid
     * If matches last opening bracket → pop stack
     * Else → invalid
3. At end: valid only if stack empty

### Python Code
```python
def j4_solution():
    s = input().strip()
    stack = []
    mapping = {')': '(', ']': '[', '}': '{'}
    
    for char in s:
        if char in mapping.values():
            stack.append(char)
        elif char in mapping:
            if not stack or mapping[char] != stack.pop():
                return "Invalid"
    
    return "Valid" if not stack else "Invalid"

print(j4_solution())
```

**Key Points:**  
- Classic stack application
- Dictionary for bracket mapping
- Efficient single-pass solution
- Clean conditional logic

---

## J5: Treasure Maze

### Problem Statement
Given a grid:
- '.' = passable path
- '#' = obstacle
- Start at top-left (0,0)
- End at bottom-right (R-1,C-1)
- Can only move right or down

Calculate number of distinct paths from start to end.

### Solution Approach
1. Use dynamic programming (DP):
   - Create DP grid matching dimensions
2. Base case: start position = 1 valid path
3. Fill DP grid:
   - If obstacle, 0 paths
   - Else: paths = paths from left + paths from above
4. Return value at bottom-right cell

### Python Code
```python
def j5_solution():
    rows = int(input())
    cols = int(input())
    
    grid = []
    for _ in range(rows):
        grid.append(list(input().strip()))
    
    dp = [[0]*cols for _ in range(rows)]
    dp[0][0] = 1
    
    # Fill first row
    for c in range(1, cols):
        dp[0][c] = dp[0][c-1] if grid[0][c] == '.' else 0
    
    # Fill first column
    for r in range(1, rows):
        dp[r][0] = dp[r-1][0] if grid[r][0] == '.' else 0
    
    # Fill DP table
    for r in range(1, rows):
        for c in range(1, cols):
            if grid[r][c] == '.':
                dp[r][c] = dp[r-1][c] + dp[r][c-1]
            else:
                dp[r][c] = 0
    
    return dp[-1][-1]

print(j5_solution())
```

**Key Points:**  
- Dynamic programming approach
- Efficient O(R×C) solution
- Handle obstacles gracefully
- Edge case handling for first row/column

---

## Competition Strategy Guide

### General Tips
1. **Input/Output First**:
   ```python
   import sys
   data = sys.stdin.read().split()
   ```

2. **Problem Selection Order**:
   - Start with J1/J2 (usually simplest)
   - Tackle J3/J4 next
   - Attempt J5 last

3. **Debugging Techniques**:
   - Print intermediate values
   - Use small test cases
   - Verify edge cases (0, empty input)

### Practice Resources
1. [Official Past Contests](https://www.cemc.uwaterloo.ca/contests/past_contests.html)
2. [DMOJ CCC Practice](https://dmoj.ca/problems/?category=4)
3. [Programming Competition Playground](https://github.com/CCC-Coding-Hub)

---

> *Remember: The best programmers weren't born with skills – they built them through countless errors and persistence. Keep coding!* 🚀  
