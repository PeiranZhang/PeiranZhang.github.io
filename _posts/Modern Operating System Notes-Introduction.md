---
layout: post
title: Modern Operating System Notes-Introdution
---

1.Most CPUs have two modes, kernel mode and user mode. Usually, a bit in the PSW controls the mode. When running in kernel mode, the CPU can excute every instruction in its instruction set and use every feature of the hardware. The operating system runs in kernel mode, giving it access to the complete hardware.In contrast, user programs run in user mode, which permits only a subset of the instructions to be executed ans a subset of the features to be accessed. To obtain services from the operating system, a user program must make a system call, which traps into the kernel and invokes the operationg system. The TRAP instruction switches from user mode to kernel mode and starts the operating system.

2.Main memory is divided up into cache lines, typically 64 bytes, with address 0 to 63 in cache line 0, address 64 to 127 in cache line 1, and so on. When the programs needs to read a memory word, the cache hardware checks to see if the line needed is in the cache.
