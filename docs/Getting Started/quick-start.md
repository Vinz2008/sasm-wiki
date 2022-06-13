---
title: Quick Start
id: quick_start
---


if you haven't already, install Sasm with this : [Installation](installation)  
Create a file with a .sasm extension.
Then write in it with your favorite editor this hello world example. 

```
data section
# message string
    msg char "Hello world"
# length message
	asm len equ $-msg

text section

# start function
start:
	move edx <= len
	move ecx <= msg
# file descriptor
	move ebx <= 1
# system call number sys_write
	move eax <= 4
	interrupt 0x80
	move eax <= 1
	interrupt 0x80
```

## Explication of the code
```data section``` start the data section where we put out constants.  
```msg char "Hello world"``` declares a hello world string named "message".  
```asm len equ $-msg``` put the length of the message in a variable named "len" (the ```asm``` keyword just insert a normal assembly line, ```equ``` is just for assigning variable, ```$-``` select the length of the "msg" variable)  
```start:``` start the main function.
```move edx <= len``` put the length of the message in the edx register.  
```move ecx <= msg``` put the message in the ecx register.  
```move ebx <= 1``` put 1 in the ebx register that mean to write to stdout.  
```move eax <= 4``` put 4 in the eax register that select the sys_write syscall.  
```interrupt 0x80``` do an interrupt to the OS kernel (for Linux and other Unix-like OS, you need to do an interrupt 0x80, but I don't know what it would be for Windows and MacOS)
