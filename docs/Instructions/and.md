---
title: And
id: and_instruction
---

# And

The and instruction do a bitwise AND operation. The bitwise AND operation return for each digit in binary a 1 if the digit of both numbers is 1 or else 0.  
For example, if we want to do an AND bitwise on 17 and 52.  
34 &rarr; 100010  
52 &rarr; 110100

|        | | | | | | |
|--------|-|-|-|-|-|-|
|    34  |1|0|0|0|1|0|
|    52  |1|1|0|1|0|0|
| Result |1|0|0|0|0|0|

100000 &rarr; 32  
So the result is 100000, which is 32 in decimal.


## Example

```
start:
    move eax <= 34
    move ebx <= 52
    and eax <= ebx
```

## Equivalent in assembly

The equivalent in assembly is ```and```