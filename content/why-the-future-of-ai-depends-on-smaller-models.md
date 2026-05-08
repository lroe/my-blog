![Pasted Image](../assets/upload_1778221510.png)
Imagine a drone searching for survivors in a natural disaster zone. 

It can’t rely on the internet,
because connectivity may be unstable or completely unavailable.

So the AI has to run directly
on the device itself.

But there’s a problem. Modern large language models require huge amounts of memory and
compute, often needing powerful GPUs or even entire data centers to run.

So the question becomes, how do we make these models efficient enough to run on everyday
PCs, or even edge devices like drones?

We do this through a process called "quantization"

Before talking about it,lets refresh how numbers are represented on computers.

We know computers only understand 0s and 1s. On or Off. So every number needs to be
converted into base 2.

For example :

Decimal 13 → Binary 1101
Because:
1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 13

Once computers could store raw bits, we needed a standard way to interpret them.

Programming languages introduced data types like int8, int16, and int32, each defining how
many bits are used and how they represent numbers.

int8 is just a way of saying:

“this value is an integer stored using exactly 8 bits”

Range
1 bit is used for the sign
7 bits for the value
-128 to 127

Now we have a data type to store integers.

We need to define a datatype to store decimals.

If we look at a decimal number in base 10, we can represent it as a multiplication of powers of
10.

123.45 = 1×10² + 2×10¹ + 3×10⁰ + 4×10⁻¹ + 5×10⁻²

we can do the same thing, but with powers of 2.

This gave us binary fractions.

Example:

decimal binary
0.5 → 0.1 (because 1 × 2⁻¹)
0.25 → 0.01 (because 1 × 2⁻²)

So now ne need a way to define a data type to represent a decimal system.

We could define a data type by saying, we will store five digits in total, and we will place the
decimal point here.

so we can store something like this number
123.45
but in this case we can only store numbers between
-999.99 and 999.99

We can't store
1,000,000 or
0.000001 
We simply run out of space

Engineers needed a system that could handle both
very big numbers
very small numbers
without needing tons of bits.

So they borrowed scientific notation:

1.0 × 10⁶
1.0 × 10⁻⁶

It has the same number of digits but a different exponent

Take a single number, say 5.5
In decimal scientific notation, we write it like this

5.5 = 5.5 × 10⁰

In binary:

5.5 = 101.1

Now normalize it:

101.1 = 1.011 × 2²

Now these two represent the same value:

5.5 = 1.011 × 2²

so we represent each number in the form **mantissa × base^exponent**

Once we store numbers like this, we’re no longer saying:

“this is where the point lives”

Instead, we’re saying:

“here are the digits”
“here’s how much to scale them”

And that scaling is what moves the point.

Take this binary number:

1.011 × 2²

If we expand it, we get:
101.1

Now change only the exponent:
1.011 × 2⁻¹
and we get:
0.1011

Even though both these numbers has the same amount of digits, the scale has changed.

Which means… the point has moved.

And that’s the entire reason behind the name.

Earlier systems tried to keep the point fixed, like:

xxxxx.yy
But that locks us into a narrow range.

This new system broke that restriction.
The point is no longer tied to a position in memory,
it shifts based on the exponent

it floats...
and thats how it got the name floating point.
.....okay so now we can represent decimal numbers in floating point representation.

how many bits do we actually use to store it?
That’s where data types come in.

Think of it like this.

Floating point is the idea

Data types are the containers

Different containers may have different sizes and different precision.

lets look at two such containers.

## 1. float (32-bit floating point)

This is the smaller container.

It splits 32 bits into three parts:
• 1 bit → sign
• 8 bits → exponent
• 23 bits → mantissa

This means:
• less precision (fewer digits you can trust)
• smaller range

But it’s faster and uses less memory.
## 
2. double (64-bit floating point)

This is the bigger container.

• 1 bit → sign
• 11 bits → exponent
• 52 bits → mantissa

Now we get:
• much higher precision
• much larger range

But it costs more memory.

Lets see how 0.1 decimal number is stored using float32.

if we try to store and then print the number, we will get this : 0.1000000.01490116119384765625
Lets see why it happens.

# 1 The Conversion (Infinite Loop)

0.1 in binary is a rational number .... it repeats forever 0.0001100110011. . ..

To store this in Single Precision (float32), the computer normalizes it to scientific notation:
1.10011001100110011001100. . . ×2^−4

The IEEE 754 standard gives us exactly 23 bits for that fractional part (the mantissa).

# 2 The Truncation (The "Storage" Act)

The computer can't store "forever." It has to chop the tail off at bit 23.

Infinite binary: 1.10011001100110011001100 1100

Stored binary: 1.10011001100110011001101 (Note: the last bit is rounded up because the
next bit was a 1).

# 3. Reconstructing the Number


Now, here is where the 0.10000000149... comes from.

 When we ask the computer to tell us what is stored in that memory slot, it performs the following calculation:


Take the mantissa:
1 × 2⁻¹ + 1 × 2⁻² + 0 × 2⁻³ + 0 × 2⁻⁴ ... (continuing out to 23 bits).

Multiply by the exponent (2⁻⁴).

The result of that specific sum is exactly:
0.10000000140111142

### Why didn't it store 0.1?

Because in base-2, 0.1 does not exist. 

It is impossible to represent 0.1 with bits, just like it is
impossible to represent 1 (0.. . .) with a finite number of decimal digits.

The number we got (0.1000000014. . .) is the binary value of 0.1 converted back to decimal.

It's the closest the hardware can possibly get to our "0.1" using 32 bits.

Now lets come back to large language models.

Lets consider a 7b parameter LLM.

We know that there are 7b weights present in this having values between 1 and -1 .

Standard LLMs (like GPT-3 or Llama) were traditionally trained using Float32 (Single
Precision).

Let’s do the math for a 7 Billion Parameter model (a relatively "small" modern LLM).

Parameters: 7 000 000 000
Size per parameter: 4 bytes (32 bits)
Total Memory: 7 000 000 000 × 4 bytes.
That is roughly 28 GB of VRAM just to load the model.

# The Problem

Oour average consumer drone or laptop doesn't have 28 GB of dedicated video memory. 
Most high-end gaming laptops have 8 GB or 16 GB.

If we want that drone to "think" using a 7B model, we have to find a way to shrink those 28 GB
without making the AI "stupid."

If 32 bits is "Full Precision," the most obvious move is to just cut the bits in half. This gives us
16-bit floating point numbers.

# The Math of the Shrink

By moving from Float32 to Float16 (FP16), we immediately cut the memory requirement in half.
7B Model in FP32: ~28 GB
7B Model in FP16: ~14 GB

14 GB is much better! It fits on a high-end consumer GPU. But how do we lose 16 bits without
the model forgetting everything it learned?

# The Trade-off: Precision vs. Range

In FP16, we rearrange the bits like this:

1 bit for the sign.
5 bits for the exponent (the "scale").
10 bits for the mantissa (the "precision").

The Catch: Because we only have 10 bits for the mantissa (compared to 23 bits in Float32), we
lose a lot of "fine detail." Imagine trying to measure a distance:

Float32 can tell you the distance is exactly 1.234567 meters.
Float16 might only be able to tell you it's 1.23 meters.

# Brain Floating Point (BF16)

Google engineers realized that for AI, the range (how big or small a number can get) is actually
more important than the precision (how many decimals there are).

They created BFloat16.
 It still uses 16 bits, but it keeps 8 bits for the exponent, the exact
same as Float32. 

It just chops the mantissa down to 7 bits.

Analogy: It’s like a telescope that can still see across the entire universe (same range), but
the image is a bit blurrier (less precision).

# Why this works for LLMs

LLMs are surprisingly resilient. We don't need to know a weight is exactly 0.000458392 .
Knowing it's roughly 0.00046 is often enough for the "brain" to function correctly.

Now our 7B model is 14 GB. Still a bit too heavy for a small drone or a basic phone.

# From Floating Point to "Fixed" Integers (INT8)

In the industry, when people say "Quantization," they usually mean ** Integer Quantization**. 

# Concept: The "Rounding" Strategy

Instead of storing weights as complex decimals (like 0.1234 ), we map them onto a much
simpler scale of integers. 

The most common target is INT8 (8-bit integers).

Remember what we said about INT8? It can only store whole numbers from -128 to 127.

# How it works: Scaling and Zero-Points

Imagine all the weights in one layer of our AI model range from -1.0 to +1.0.

We can’t just "convert" them because 0.5 doesn't exist in INT8. Instead, we stretch them.

1)Find the Range: We determine the minimum and maximum weights (for example, -1.0 to 1.0).

2) Scale:  Multiply every value so the maximum absolute value fits within the 8-bit integer range (127).
1.0 × 127 = 127
0.5 × 127 ≈ 64
-1.0 × 127 = -127

3) Store: Instead of storing each value as a 32-bit float, we store the scaled value (for example, 64) as a single 8-bit integer.

# The Result: Massively Smaller

By switching to INT8:

7B Model in FP16: 14 GB
7B Model in INT8: 7 GB

Suddenly, our 7-billion parameter model fits into the RAM of a standard modern smartphone or
a high-end drone!

### The "Cost": Quantization Error

Every time we round 63.5 to 64 , we lose a tiny bit of information. 

This is called Quantization Error.

 If we do this poorly, the AI starts "hallucinating" or losing its ability to speak coherently
because its "volume knobs" (weights) are all slightly out of tune.

We’ve reached the limit of "reasonable" math.

 To get that 7B model onto even smaller devices
—or to make it run lightning-fast on a laptop—we have to go smaller than 8 bits. 

We go to 4-bit quantization.

### The 4-Bit Magic (GPTQ, GGUF, and AWQ)
 
If 8-bit was a "diet," 4-bit is "ultra-light backpacking."

# The Math of 4 Bits

A 4-bit number (a **nibble**) can only represent 2^4 values. 
That is exactly 16 possible numbers (usually -8 to 7).

Think about that: We are taking those incredibly precise decimals (like 0.10000000149... ) and
forcing them to choose between only 16 possible options.

# The Payoff:

7B Model in INT8: 7 GB
7B Model in 4-bit: ~3.5 GB to 4 GB

Now, the model fits on almost any modern device. But how does it stay smart when it only has
16 "levels" for its weights?

# The "Secret Sauce": Grouping and Outliers
Engineers realized that weights in a model aren't distributed evenly. 

Most of them are near zero, but a few "outlier" weights are incredibly important. 

If you mess up those few important weights,
the whole model breaks.

**1)Block-wise Quantization:** Instead of one scale for the whole model, we split the weights
into small groups (e.g., blocks of 32 or 128). Each block gets its own "scale" factor to keep the numbers as accurate as possible within that small range.

** 2)Post-Training Quantization (PTQ):** We use techniques like GPTQ. We "calibrate" the
model by showing it a small amount of data. The algorithm then adjusts the 4-bit values to
minimize the error in the model's actual output, rather than just rounding the numbers
blindly

# The "GGUF" Revolution

If you’ve ever downloaded a model from Hugging Face to run locally, you’ve likely seen the
GGUF format. This is the gold standard for "running AI on everyday gear."

It uses k-quants, which is a hybrid approach. It might use 4 bits for most weights, but 6 bits
for the most "critical" layers.

It allows the CPU and RAM to do the heavy lifting if you don't have a powerful GPU.

### The "So What?" for the Drone

Back to our disaster-zone drone.

Because of 4-bit quantization, that drone isn't carrying a 28 GB "brain" it can't power. It’s
carrying a 3.8 GB file.

It uses less battery because it moves less data from memory to the chip.
It reacts faster because 4-bit math is incredibly efficient for modern processors to crunch

If we’re chopping off 90% of the data used to represent a weight, shouldn't the AI become a
total "smooth-brain"?

The short answer: Surprisingly, no. But there is a catch.

# Why it doesn't get "Dumb" (The Resilience of AI)

### 1. The "Big Model" Advantage

There is a famous rule in AI: **A large model quantized to 4 bits is almost always smarter
than a small model at full precision.** * 

A 30B model at 4 bits (roughly 15 GB) will destroy a
7B model at 16 bits (also 14 GB) in almost every test.

It turns out that having more "neurons" is more important than having high-precision
"volume knobs."

### 2. The Resilience of Neural Networks
Think of a neural network like a massive democratic vote.

 To decide if an image is a "cat," thousands of weights contribute a tiny bit to the answer.
 If one weight is slightly off (because we rounded 0.1001 to 0.1 ), the other 999 weights "vote" correctly and drown out the error. 

The intelligence is stored in the patterns and connections, not in the 10th decimal place of a single
number.

### 3. The "Sweet Spot" (4-bit)

Research (and benchmarks like Perplexity) shows a very interesting curve:

**16-bit to 8-bit: **Virtually zero loss in "IQ."

**8-bit to 4-bit: ** A tiny drop (maybe 1–3%), usually imperceptible to a human.

**Below 4-bit (3-bit or 2-bit): **The Cliff. This is where the model starts to "fall apart." Logic
loops happen, it loses its ability to follow complex instructions, and it starts repeating itself.

### The Future: 1.58-bit (The BitNet Revolution)

We used to think 4-bit was the limit, but recently, researchers (Microsoft/BitNet) found a way to
train models from scratch using only 1.58 bits. In these models, every weight can only be one
of three values:

**-1, 0, or 1**

log₂(3) ≈ 1.58, which is why it’s called 1.58-bit.

They aren't just rounding an old model; they are teaching the AI to think in "tri-state" logic from
day one. 

These models are incredibly fast and use almost no energy, yet they perform nearly as
well as the "high precision" giants.

# Wrap-up: Back to the Drone

So, does our drone get "dumb"? If we use 4-bit quantization with a modern technique like
GPTQ or GGUF, the drone stays just as capable of finding survivors as it would be if it were tethered to a massive supercomputer.

Quantization isn't just a compression trick; it's the reason AI is moving out of the cloud and into
our pockets, our laptops, and our drones.