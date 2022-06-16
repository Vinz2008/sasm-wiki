---
title: Compare
id: compare_instruction
---

# Compare

The compare instruction compare two arguments to do after that something depending on if the two arguments are the same. This instruction really do a substraction and see if the result is 0.

## Example

```
start:
    move edx <= 20
    compare edx <= 20
```

## Equivalent in assembly

The equivalent in asembly is ```cmp```