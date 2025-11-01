## CCC Junior 2022 Solutions: Complete Python Walkthrough

#### Written at Jun 27, 2023

> *"The beautiful thing about learning is that nobody can take it away from you."*  
> - B.B. King (Perfect mindset for programming competitions!)

### Competition Overview
The 2022 Canadian Computing Competition Junior division featured innovative problems that tested fundamental algorithmic thinking. Here's our complete breakdown:

---

### J1: Cupcake Party

#### Problem Statement
A class is having a cupcake party. Boxes contain 8 cupcakes each. Each student gets 2 cupcakes. If there are extra cupcakes, they're donated. Calculate donated cupcakes.

#### Solution Approach
1. Read number of regular boxes (R) and mini boxes (M)
2. Calculate total cupcakes: R×8 + M×3
3. Calculate remainder when divided by number of students (always 28)
4. Output remainder (donated cupcakes)

#### Python Code
```python
def j1_solution():
    R = int(input())
    M = int(input())
    total = R * 8 + M * 3
    donated = total - 28  # 28 students × 2 cupcakes each
    return donated if donated > 0 else 0

print(j1_solution())
```

**Key Points:**
- Basic arithmetic operations
- Simple subtraction and remainder logic
- Handling negative results

---

### J2: Fergusonball Ratings

#### Problem Statement
Players receive gold (positive) and silver (negative) ratings. Determine how many players are "star players" (rating ≥ 40).

#### Solution Approach
1. Read number of players (N)
2. For each player:
   - Read points (P) and fouls (F)
   - Calculate rating: P×5 - F×3
   - Count if rating ≥ 40
3. Output star count + if all are stars

#### Python Code
```python
def j2_solution():
    n = int(input())
    star_count = 0

    for _ in range(n):
        p = int(input())
        f = int(input())
        rating = p * 5 - f * 3
        if rating >= 40:
            star_count += 1

    result = f"{star_count}+" if star_count == n else star_count
    return result

print(j2_solution())
```

**Key Points:**
- Loop structure for player data
- Conditional counting
- Special output formatting

---

### J3: Harp Tuning

#### Problem Statement
Harp strings need tightening (T) or loosening (L) by a specific number of turns. Process instructions like "A3T2L5" to output tuning steps.

#### Solution Approach
1. Read instruction string
2. Traverse the string:
   - Identify letter groups (A, B, C)
   - Detect direction (T/L) following numbers
   - Extract the count after direction
3. Format output per instruction

#### Python Code
```python
def j3_solution():
    s = input().strip()
    output = []
    i = 0

    while i < len(s):
        # Extract letter identifier
        ident = ""
        while i < len(s) and s[i].isalpha():
            ident += s[i]
            i += 1

        # Extract number
        num = ""
        while i < len(s) and s[i].isdigit():
            num += s[i]
            i += 1

        # Extract direction and count
        if i < len(s):
            direction = "tighten" if s[i] == 'T' else "loosen"
            i += 1

            count = ""
            while i < len(s) and s[i].isdigit():
                count += s[i]
                i += 1

            output.append(f"{ident} {direction} {count}")

    return "
".join(output)

print(j3_solution())
```

**Key Points:**
- String parsing techniques
- Sequential character analysis
- Dynamic output building

---

### J4: Good Groups

#### Problem Statement
Verify if student groups satisfy given constraints:
- Must-together constraints (students should be in same group)
- Must-apart constraints (students should be in different groups)

#### Solution Approach
1. Read constraints:
   - Number of must-together constraints
   - Must-together pairs
   - Number of must-apart constraints
   - Must-apart pairs
2. Read groups (list of triplets)
3. Check constraints:
   - For must-together: ensure both in same group
   - For must-apart: ensure not in same group
4. Count violations

#### Python Code
```python
def j4_solution():
    # Read constraints
    together_count = int(input())
    together = [input().split() for _ in range(together_count)]

    apart_count = int(input())
    apart = [input().split() for _ in range(apart_count)]

    group_count = int(input())
    groups = [input().split() for _ in range(group_count)]

    violations = 0
    # Map students to groups
    student_group = {}
    for i, group in enumerate(groups):
        for student in group:
            student_group[student] = i

    # Check together constraints
    for a, b in together:
        if student_group[a] != student_group[b]:
            violations += 1

    # Check apart constraints
    for a, b in apart:
        if student_group[a] == student_group[b]:
            violations += 1

    return violations

print(j4_solution())
```

**Key Points:**
- Dictionary mapping for group identification
- Constraint checking logic
- Double validation pass

---

### J5: Rail Fence Cipher

#### Problem Statement
Implement encoding and decoding of the rail fence cipher. For given rails and message, output the encoded/decoded text.

#### Solution Approach
1. For encoding:
   - Create rails (lists)
   - Populate in zigzag pattern
   - Concatenate rails
2. For decoding:
   - Calculate pattern positions
   - Reconstruct original message

#### Python Code
```python
def encode_rail_fence(msg, rails):
    fence = [[] for _ in range(rails)]
    rail = 0
    direction = 1

    for char in msg:
        fence[rail].append(char)
        rail += direction
        if rail == rails - 1 or rail == 0:
            direction *= -1

    return ''.join(''.join(row) for row in fence)

def decode_rail_fence(cipher, rails):
    # Calculate lengths of each rail
    lengths = [0] * rails
    rail = 0
    direction = 1
    for _ in cipher:
        lengths[rail] += 1
        rail += direction
        if rail == rails - 1 or rail == 0:
            direction *= -1

    # Rebuild rails
    fence = []
    start = 0
    for length in lengths:
        fence.append(list(cipher[start:start+length]))
        start += length

    # Traverse pattern to decode
    rail = 0
    direction = 1
    plain = []
    for _ in cipher:
        plain.append(fence[rail].pop(0))
        rail += direction
        if rail == rails - 1 or rail == 0:
            direction *= -1

    return ''.join(plain)

# Main solution
def j5_solution():
    task = input().strip()
    rails = int(input())
    text = input().strip()

    if task == "encode":
        return encode_rail_fence(text, rails)
    else:
        return decode_rail_fence(text, rails)

print(j5_solution())
```

**Key Points:**
- Direction switching with multiplier
- List manipulation for rail storage
- Text reconstruction techniques
- Dual function architecture

---

### Key Competition Strategies

#### Input/Output Patterns
**Common input format handling:**
```python
import sys

def main():
    data = sys.stdin.read().splitlines()
    n = int(data[0])
    # Process remaining lines
```

#### Time Management
1. **Problem Distribution**:
   | Question | Recommended Time |
   |----------|------------------|
   | J1, J2   | 5-10 minutes    |
   | J3       | 10-15 minutes   |
   | J4       | 15-20 minutes   |
   | J5       | 25-30 minutes   |

#### Practice Resources
1. [CEMC Online Judge](https://cemc.uwaterloo.ca/contests/computing.html)
2. [CCC Solution Repository](https://github.com/ccc-solutions)
3. [Algorithm Visualization](https://visualgo.net)

---

> *Remember: The best programmers weren't born with skills – they built them through countless errors and persistence. Keep coding!* 🚀  

