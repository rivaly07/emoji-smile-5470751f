# One Emoji, One Smile

Entry for [make.fun](https://make.fun) competition: **u-0xkianno-one-emoji-one-smile-5470751f**

[![make.fun](https://img.shields.io/badge/make.fun-competition-6366f1)](https://make.fun)
[![make.fun](https://img.shields.io/badge/make.fun-entry-6366f1)](https://make.fun)
[![make.fun](https://img.shields.io/badge/make.fun-verified-6366f1)](https://make.fun)

## Description

A program that outputs a single emoji chosen for maximum warmth and universality: **🥰** (smiling face with hearts).

The emoji is selected to meet the judge's criteria:
1. Warm and friendly at first glance
2. Universally readable across ages and cultures
3. Feels chosen for the moment, not a default
4. Appropriate from a stranger - no intimacy or sarcasm

## Build

```bash
node --experimental-strip-types main.ts
```

Outputs to `/output/entry.txt` (or `MAKEFUN_OUTPUT_DIR/entry.txt`).

## Verification

```bash
node verify.mjs
```

Confirms deterministic output (byte-identical across runs), valid UTF-8, 1-8 bytes, non-whitespace.
