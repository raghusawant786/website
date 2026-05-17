// Java & OOP Programs - 90 unique programs across 7 categories
export const javaSections = [
  {
    id: 'numbers',
    title: 'Numbers (20 Programs)',
    icon: '🔢',
    content: `
## Numbers Category

A comprehensive collection of number-based algorithms covering basic concepts like odd/even checks, prime numbers, Fibonacci sequences, factorial calculations, and number manipulations.

**Programs Covered:**
- Odd or Even Number
- Prime Number Check
- Fibonacci Series (iterative & recursive)
- Factorial (loop & recursive)
- Reverse a Number
- Armstrong Number Check
- Palindrome Number
- Sum of Digits
- Count Digits
- Swap Two Numbers (No 3rd Variable)
- GCD of Two Numbers
- Prime Numbers in Range
- Decimal to Binary
- Perfect Number
- Leap Year Check
- Sum of First N Natural Numbers
- Simple Calculator
- Pascal's Triangle
- Missing Number in Array

**Key Concepts:**
- Loop structures (for, while)
- Mathematical operations (modulo, division)
- Recursion basics
- Bit manipulation
- Number theory fundamentals

**Senior Focus:**
- Time complexity analysis (O(√n) for prime check)
- Edge case handling
- Optimization techniques
    `
  },
  {
    id: 'strings',
    title: 'Strings (21 Programs)',
    icon: '📝',
    content: `
## Strings Category

String manipulation algorithms covering reversal, anagram checking, character counting, compression, and pattern matching techniques.

**Programs Covered:**
- Reverse a String
- Reverse Each Word
- Palindrome String
- Anagram Check
- Count Vowels and Consonants
- Find Duplicate Characters
- Count Word Occurrences
- Count Words
- All Permutations of a String
- Print Unique Characters
- Remove Spaces
- Character Compression
- Separate Upper and Lowercase
- Separate Alpha and Numeric
- Longest Substring Without Repeating
- Remove Special Characters
- First Non-Repeated Character
- Max Occurring Character
- Double Each Character
- Swap Two Strings
- Print Even Indexed Characters
- String Length, isEmpty, contains
- Count Char Occurrences
- Reverse Words Keeping Digits
- Lambda – Filter Even Numbers
- Simple Login

**Key Concepts:**
- String methods (substring, toCharArray, etc.)
- HashMap for character frequency
- StringBuilder for efficiency
- Regular expressions
- Two-pointer technique

**Senior Focus:**
- Sliding window algorithm
- Character encoding/decoding
- Performance optimization (StringBuilder vs String concatenation)
    `
  },
  {
    id: 'arrays-collections',
    title: 'Arrays & Collections (13 Programs)',
    icon: '📚',
    content: `
## Arrays & Collections Category

Array and collection operations including sorting, searching, duplicate removal, and element manipulation.

**Programs Covered:**
- Sort Array – Built-in
- Selection Sort (No Built-in)
- Bubble Sort
- Largest and Smallest
- Second Largest Element
- Remove Duplicates
- Find Common Elements
- Merge Two Arrays
- Linear Search
- Sum Integers from Mixed Array
- Count Odd and Even
- Non-Repeated Elements
- First and Last of ArrayList
- Find Minimum and Maximum
- Comparable vs Comparator

**Key Concepts:**
- Sorting algorithms (bubble, selection)
- Collections framework (List, Set, Map)
- Search algorithms (linear, binary)
- Time complexity (O(n log n), O(n²))
- HashSet for uniqueness

**Senior Focus:**
- Custom comparators
- Stream API for filtering
- Performance benchmarking
    `
  },
  {
    id: 'oop-core',
    title: 'OOP Core Concepts (6 Programs)',
    icon: '🏛️',
    content: `
## OOP Core Concepts

Object-oriented programming fundamentals including encapsulation, inheritance, polymorphism, and abstraction.

**Programs Covered:**
- Encapsulation (getters/setters, data hiding)
- Inheritance (single & multi-level)
- Polymorphism (method overriding & overloading)
- Abstraction (abstract classes & interfaces)
- Immutable Class (final, private fields)
- String Pool & StringBuilder vs StringBuffer
- Generics (generic classes & methods)

**Key Concepts:**
- Access modifiers (public, private, protected)
- super keyword
- Method overriding vs overloading
- Abstract methods & concrete classes
- Interface contracts
- Generic type parameters

**Senior Focus:**
- Type erasure in generics
- POJO design patterns
- Immutability design
- Thread-safety implications
    `
  },
  {
    id: 'design-patterns',
    title: 'Design Patterns (5 Programs)',
    icon: '🎨',
    content: `
## Design Patterns

Industry-standard design patterns for scalable and maintainable code.

**Programs Covered:**
- **Singleton Pattern:** Ensures only one instance exists (WebDriver, DB connections)
- **Factory Pattern:** Creates objects without exposing creation logic (BrowserFactory)
- **Builder Pattern:** Constructs complex objects step by step (TestData, API requests)
- **Page Object Model (POM):** Encapsulates page elements & actions for test automation
- **Strategy Pattern:** Swaps algorithms at runtime (different sorting/reporting strategies)
- **Observer Pattern:** One-to-many dependency (event listeners, test reporting)

**Key Concepts:**
- Creational patterns (Singleton, Factory, Builder)
- Behavioral patterns (Strategy, Observer)
- Structural patterns (POM, Decorator)
- Design pattern trade-offs

**Senior Focus:**
- When to use which pattern
- Anti-patterns to avoid
- Pattern composition
- SDET-specific patterns (Page Object Model, Factory for WebDriver)
    `
  },
  {
    id: 'solid-exceptions',
    title: 'SOLID & Exception Handling (10 Programs)',
    icon: '⚙️',
    content: `
## SOLID Principles & Exception Handling

SOLID principles for maintainable code and robust exception handling strategies.

**Programs Covered:**
- **Single Responsibility Principle (SRP):** Each class has ONE job
- **Open/Closed Principle (OCP):** Open for extension, closed for modification
- **Interface Segregation Principle (ISP):** Fat interfaces split into focused ones
- **Liskov Substitution Principle (LSP):** Subtypes are substitutable
- **Dependency Inversion Principle (DIP):** Depend on abstractions, not concretions
- **Custom Exceptions:** Checked & unchecked exception hierarchy
- **Exception Handling:** try-catch-finally-throw patterns
- **try-with-resources:** AutoCloseable for automatic resource management

**Key Concepts:**
- Exception hierarchy (Throwable → Exception → checked/unchecked)
- throw vs throws
- finally block semantics
- Resource cleanup patterns
- Exception handling best practices

**Senior Focus:**
- Custom exception design
- Exception propagation strategy
- Logging vs throwing
- Testing exception scenarios
    `
  },
  {
    id: 'multithreading-java8',
    title: 'Multithreading, Java 8 & Advanced (5+ Topics)',
    icon: '⚡',
    content: `
## Multithreading, Java 8, & Advanced Topics

Modern Java features including multithreading, streams, lambdas, and concurrency utilities.

**Programs Covered:**

### Multithreading:
- Thread & Runnable (3 ways to create threads)
- Synchronized keyword (prevent race conditions)
- Collections (HashMap, LinkedHashMap, TreeMap, ConcurrentHashMap)
- Thread pool with ExecutorService & Future

### Java 8 Features:
- **Streams API:** filter, map, reduce, collect operations
- **Lambda Expressions:** functional programming syntax
- **Optional:** null-safe value handling
- **Functional Interfaces:** Predicate, Function, BiFunction, Consumer, Supplier
- **Default & Static Interface Methods:** interface evolution
- **Method References:** :: operator for concise code

### Advanced Collections:
- List vs Set vs Queue distinction
- HashMap internal working & bucket resizing
- hashCode() & equals() contract
- ConcurrentHashMap for thread-safety

**Key Concepts:**
- Thread lifecycle & synchronization
- Locks & atomic operations
- Functional programming paradigms
- Stream pipeline optimization
- Lazy evaluation

**Senior Focus:**
- Deadlock prevention
- Performance tuning for concurrent systems
- Reactive streams concepts
- CompletableFuture for async operations
    `
  }
];
