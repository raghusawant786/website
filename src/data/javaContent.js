// Java & OOP Programs - 90 unique programs across 7 categories
export const javaSections = [
  {
    id: 'numbers',
    title: 'Numbers (20 Programs)',
    icon: '🔢',
    examples: [
      {
        title: 'Odd or Even Number',
        code: String.raw`
public class OddEvenNumber {
    public static void main(String[] args) {
        int number = 10;

        if (number % 2 == 0) {
            System.out.println(number + " is even");
        } else {
            System.out.println(number + " is odd");
        }
    }
}`
      },
      {
        title: 'Prime Number Check',
        code: String.raw`
public class PrimeNumberCheck {
    public static void main(String[] args) {
        int number = 29;
        boolean isPrime = number > 1;

        for (int i = 2; i * i <= number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        System.out.println(number + " is prime: " + isPrime);
    }
}`
      },
      {
        title: 'Fibonacci Series',
        code: String.raw`
public class FibonacciSeries {
    public static void main(String[] args) {
        int terms = 10;
        int first = 0;
        int second = 1;

        for (int i = 0; i < terms; i++) {
            System.out.print(first + " ");
            int next = first + second;
            first = second;
            second = next;
        }
    }
}`
      },
      {
        title: 'Factorial',
        code: String.raw`
public class Factorial {
    public static void main(String[] args) {
        int number = 5;
        long factorial = 1;

        for (int i = 2; i <= number; i++) {
            factorial *= i;
        }

        System.out.println("Factorial: " + factorial);
    }
}`
      },
      {
        title: 'Reverse a Number',
        code: String.raw`
public class ReverseNumber {
    public static void main(String[] args) {
        int number = 12345;
        int reverse = 0;

        while (number != 0) {
            reverse = reverse * 10 + number % 10;
            number /= 10;
        }

        System.out.println("Reverse: " + reverse);
    }
}`
      },
      {
        title: 'Armstrong Number Check',
        code: String.raw`
public class ArmstrongNumber {
    public static void main(String[] args) {
        int number = 153;
        int original = number;
        int digits = String.valueOf(number).length();
        int sum = 0;

        while (number != 0) {
            int digit = number % 10;
            sum += Math.pow(digit, digits);
            number /= 10;
        }

        System.out.println(original + " is Armstrong: " + (sum == original));
    }
}`
      },
      {
        title: 'Palindrome Number',
        code: String.raw`
public class PalindromeNumber {
    public static void main(String[] args) {
        int number = 121;
        int original = number;
        int reverse = 0;

        while (number != 0) {
            reverse = reverse * 10 + number % 10;
            number /= 10;
        }

        System.out.println(original + " is palindrome: " + (original == reverse));
    }
}`
      },
      {
        title: 'Sum of Digits',
        code: String.raw`
public class SumOfDigits {
    public static void main(String[] args) {
        int number = 12345;
        int sum = 0;

        while (number != 0) {
            sum += number % 10;
            number /= 10;
        }

        System.out.println("Sum: " + sum);
    }
}`
      },
      {
        title: 'Count Digits',
        code: String.raw`
public class CountDigits {
    public static void main(String[] args) {
        int number = 12345;
        int count = 0;

        do {
            count++;
            number /= 10;
        } while (number != 0);

        System.out.println("Digits: " + count);
    }
}`
      },
      {
        title: 'Swap Two Numbers',
        code: String.raw`
public class SwapTwoNumbers {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;

        a = a + b;
        b = a - b;
        a = a - b;

        System.out.println("a = " + a + ", b = " + b);
    }
}`
      },
      {
        title: 'GCD of Two Numbers',
        code: String.raw`
public class GcdOfTwoNumbers {
    public static void main(String[] args) {
        int a = 24;
        int b = 36;

        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }

        System.out.println("GCD: " + a);
    }
}`
      },
      {
        title: 'Prime Numbers in Range',
        code: String.raw`
public class PrimeNumbersInRange {
    public static boolean isPrime(int number) {
        if (number <= 1) {
            return false;
        }
        for (int i = 2; i * i <= number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        for (int number = 1; number <= 50; number++) {
            if (isPrime(number)) {
                System.out.print(number + " ");
            }
        }
    }
}`
      },
      {
        title: 'Decimal to Binary',
        code: String.raw`
public class DecimalToBinary {
    public static void main(String[] args) {
        int number = 10;
        String binary = Integer.toBinaryString(number);
        System.out.println("Binary: " + binary);
    }
}`
      },
      {
        title: 'Perfect Number',
        code: String.raw`
public class PerfectNumber {
    public static void main(String[] args) {
        int number = 28;
        int sum = 0;

        for (int i = 1; i <= number / 2; i++) {
            if (number % i == 0) {
                sum += i;
            }
        }

        System.out.println(number + " is perfect: " + (sum == number));
    }
}`
      },
      {
        title: 'Leap Year Check',
        code: String.raw`
public class LeapYearCheck {
    public static void main(String[] args) {
        int year = 2024;
        boolean isLeapYear = (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
        System.out.println(year + " is leap year: " + isLeapYear);
    }
}`
      },
      {
        title: 'Sum of First N Natural Numbers',
        code: String.raw`
public class SumOfNaturalNumbers {
    public static void main(String[] args) {
        int n = 10;
        int sum = n * (n + 1) / 2;
        System.out.println("Sum: " + sum);
    }
}`
      },
      {
        title: 'Simple Calculator',
        code: String.raw`
public class SimpleCalculator {
    public static void main(String[] args) {
        double first = 20;
        double second = 10;
        char operator = '+';
        double result;

        switch (operator) {
            case '+':
                result = first + second;
                break;
            case '-':
                result = first - second;
                break;
            case '*':
                result = first * second;
                break;
            case '/':
                result = first / second;
                break;
            default:
                throw new IllegalArgumentException("Invalid operator");
        }

        System.out.println("Result: " + result);
    }
}`
      },
      {
        title: "Pascal's Triangle",
        code: String.raw`
public class PascalsTriangle {
    public static void main(String[] args) {
        int rows = 5;

        for (int i = 0; i < rows; i++) {
            int value = 1;
            for (int j = 0; j <= i; j++) {
                System.out.print(value + " ");
                value = value * (i - j) / (j + 1);
            }
            System.out.println();
        }
    }
}`
      },
      {
        title: 'Missing Number in Array',
        code: String.raw`
public class MissingNumberInArray {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 4, 5};
        int n = 5;
        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;

        for (int number : numbers) {
            actualSum += number;
        }

        System.out.println("Missing number: " + (expectedSum - actualSum));
    }
}`
      },
    ],
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

### Java Code Examples

\`\`\`java
import java.util.Arrays;

public class NumberPrograms {
    public static boolean isEven(int number) {
        return number % 2 == 0;
    }

    public static boolean isPrime(int number) {
        if (number <= 1) {
            return false;
        }
        if (number == 2) {
            return true;
        }
        if (number % 2 == 0) {
            return false;
        }
        for (int i = 3; i * i <= number; i += 2) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void printFibonacciIterative(int terms) {
        int first = 0;
        int second = 1;
        for (int i = 0; i < terms; i++) {
            System.out.print(first + " ");
            int next = first + second;
            first = second;
            second = next;
        }
    }

    public static int fibonacciRecursive(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }

    public static long factorialLoop(int number) {
        long result = 1;
        for (int i = 2; i <= number; i++) {
            result *= i;
        }
        return result;
    }

    public static long factorialRecursive(int number) {
        if (number <= 1) {
            return 1;
        }
        return number * factorialRecursive(number - 1);
    }

    public static int reverseNumber(int number) {
        int reverse = 0;
        while (number != 0) {
            reverse = reverse * 10 + number % 10;
            number /= 10;
        }
        return reverse;
    }

    public static boolean isArmstrong(int number) {
        int original = number;
        int digits = countDigits(number);
        int sum = 0;
        while (number != 0) {
            int digit = number % 10;
            sum += Math.pow(digit, digits);
            number /= 10;
        }
        return sum == original;
    }

    public static boolean isPalindrome(int number) {
        return number == reverseNumber(number);
    }

    public static int sumOfDigits(int number) {
        int sum = 0;
        while (number != 0) {
            sum += Math.abs(number % 10);
            number /= 10;
        }
        return sum;
    }

    public static int countDigits(int number) {
        if (number == 0) {
            return 1;
        }
        return String.valueOf(Math.abs(number)).length();
    }

    public static void swapWithoutTemp(int a, int b) {
        a = a + b;
        b = a - b;
        a = a - b;
        System.out.println("a = " + a + ", b = " + b);
    }

    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return Math.abs(a);
    }

    public static void printPrimesInRange(int start, int end) {
        for (int number = start; number <= end; number++) {
            if (isPrime(number)) {
                System.out.print(number + " ");
            }
        }
    }

    public static String decimalToBinary(int number) {
        return Integer.toBinaryString(number);
    }

    public static boolean isPerfectNumber(int number) {
        if (number <= 1) {
            return false;
        }
        int sum = 1;
        for (int i = 2; i * i <= number; i++) {
            if (number % i == 0) {
                sum += i;
                if (i != number / i) {
                    sum += number / i;
                }
            }
        }
        return sum == number;
    }

    public static boolean isLeapYear(int year) {
        return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
    }

    public static int sumOfNaturalNumbers(int n) {
        return n * (n + 1) / 2;
    }

    public static double calculate(double first, double second, char operator) {
        switch (operator) {
            case '+':
                return first + second;
            case '-':
                return first - second;
            case '*':
                return first * second;
            case '/':
                if (second == 0) {
                    throw new ArithmeticException("Cannot divide by zero");
                }
                return first / second;
            default:
                throw new IllegalArgumentException("Unsupported operator: " + operator);
        }
    }

    public static void printPascalsTriangle(int rows) {
        for (int i = 0; i < rows; i++) {
            int value = 1;
            for (int j = 0; j <= i; j++) {
                System.out.print(value + " ");
                value = value * (i - j) / (j + 1);
            }
            System.out.println();
        }
    }

    public static int findMissingNumber(int[] numbers, int n) {
        int expectedSum = n * (n + 1) / 2;
        int actualSum = Arrays.stream(numbers).sum();
        return expectedSum - actualSum;
    }

    public static void main(String[] args) {
        System.out.println("Is 10 even? " + isEven(10));
        System.out.println("Is 29 prime? " + isPrime(29));
        System.out.println("Factorial of 5: " + factorialLoop(5));
        System.out.println("Reverse of 12345: " + reverseNumber(12345));
        System.out.println("GCD of 24 and 36: " + gcd(24, 36));
        printPascalsTriangle(5);
    }
}
\`\`\`

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
    examples: [
      {
        title: 'Reverse a String',
        code: String.raw`
public class ReverseString {
    public static void main(String[] args) {
        String input = "automation";
        String reversed = new StringBuilder(input).reverse().toString();
        System.out.println("Reversed string: " + reversed);
    }
}`
      },
      {
        title: 'Reverse Each Word',
        code: String.raw`
public class ReverseEachWord {
    public static void main(String[] args) {
        String sentence = "Java coding practice";
        StringBuilder result = new StringBuilder();

        for (String word : sentence.split("\\s+")) {
            result.append(new StringBuilder(word).reverse()).append(" ");
        }

        System.out.println(result.toString().trim());
    }
}`
      },
      {
        title: 'Palindrome String',
        code: String.raw`
public class PalindromeString {
    public static void main(String[] args) {
        String input = "madam";
        String reversed = new StringBuilder(input).reverse().toString();

        if (input.equalsIgnoreCase(reversed)) {
            System.out.println(input + " is a palindrome");
        } else {
            System.out.println(input + " is not a palindrome");
        }
    }
}`
      },
      {
        title: 'Anagram Check',
        code: String.raw`
import java.util.Arrays;

public class AnagramCheck {
    public static void main(String[] args) {
        String first = "listen";
        String second = "silent";

        char[] firstArray = first.toLowerCase().toCharArray();
        char[] secondArray = second.toLowerCase().toCharArray();
        Arrays.sort(firstArray);
        Arrays.sort(secondArray);

        System.out.println(Arrays.equals(firstArray, secondArray));
    }
}`
      },
      {
        title: 'Count Vowels and Consonants',
        code: String.raw`
public class CountVowelsConsonants {
    public static void main(String[] args) {
        String input = "Automation Testing".toLowerCase();
        int vowels = 0;
        int consonants = 0;

        for (char ch : input.toCharArray()) {
            if (ch >= 'a' && ch <= 'z') {
                if ("aeiou".indexOf(ch) >= 0) {
                    vowels++;
                } else {
                    consonants++;
                }
            }
        }

        System.out.println("Vowels: " + vowels);
        System.out.println("Consonants: " + consonants);
    }
}`
      },
      {
        title: 'Find Duplicate Characters',
        code: String.raw`
import java.util.LinkedHashMap;
import java.util.Map;

public class DuplicateCharacters {
    public static void main(String[] args) {
        String input = "programming";
        Map<Character, Integer> countMap = new LinkedHashMap<>();

        for (char ch : input.toCharArray()) {
            countMap.put(ch, countMap.getOrDefault(ch, 0) + 1);
        }

        countMap.forEach((ch, count) -> {
            if (count > 1) {
                System.out.println(ch + " = " + count);
            }
        });
    }
}`
      },
      {
        title: 'Count Word Occurrences',
        code: String.raw`
import java.util.LinkedHashMap;
import java.util.Map;

public class CountWordOccurrences {
    public static void main(String[] args) {
        String sentence = "java is simple java is powerful";
        Map<String, Integer> wordCount = new LinkedHashMap<>();

        for (String word : sentence.split("\\s+")) {
            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
        }

        System.out.println(wordCount);
    }
}`
      },
      {
        title: 'Count Words',
        code: String.raw`
public class CountWords {
    public static void main(String[] args) {
        String sentence = "Java coding interview programs";
        String[] words = sentence.trim().split("\\s+");
        System.out.println("Word count: " + words.length);
    }
}`
      },
      {
        title: 'All Permutations of a String',
        code: String.raw`
public class StringPermutations {
    public static void printPermutations(String text, String answer) {
        if (text.isEmpty()) {
            System.out.println(answer);
            return;
        }

        for (int i = 0; i < text.length(); i++) {
            char ch = text.charAt(i);
            String remaining = text.substring(0, i) + text.substring(i + 1);
            printPermutations(remaining, answer + ch);
        }
    }

    public static void main(String[] args) {
        printPermutations("abc", "");
    }
}`
      },
      {
        title: 'Print Unique Characters',
        code: String.raw`
import java.util.LinkedHashSet;
import java.util.Set;

public class UniqueCharacters {
    public static void main(String[] args) {
        String input = "automation";
        Set<Character> unique = new LinkedHashSet<>();

        for (char ch : input.toCharArray()) {
            unique.add(ch);
        }

        System.out.println(unique);
    }
}`
      },
      {
        title: 'Remove Spaces',
        code: String.raw`
public class RemoveSpaces {
    public static void main(String[] args) {
        String input = "Java coding practice";
        String output = input.replaceAll("\\s+", "");
        System.out.println(output);
    }
}`
      },
      {
        title: 'Character Compression',
        code: String.raw`
public class CharacterCompression {
    public static void main(String[] args) {
        String input = "aaabbcccc";
        StringBuilder result = new StringBuilder();
        int count = 1;

        for (int i = 1; i <= input.length(); i++) {
            if (i < input.length() && input.charAt(i) == input.charAt(i - 1)) {
                count++;
            } else {
                result.append(input.charAt(i - 1)).append(count);
                count = 1;
            }
        }

        System.out.println(result);
    }
}`
      },
      {
        title: 'Separate Upper and Lowercase',
        code: String.raw`
public class SeparateUpperLower {
    public static void main(String[] args) {
        String input = "JaVaProGram";
        StringBuilder upper = new StringBuilder();
        StringBuilder lower = new StringBuilder();

        for (char ch : input.toCharArray()) {
            if (Character.isUpperCase(ch)) {
                upper.append(ch);
            } else if (Character.isLowerCase(ch)) {
                lower.append(ch);
            }
        }

        System.out.println("Uppercase: " + upper);
        System.out.println("Lowercase: " + lower);
    }
}`
      },
      {
        title: 'Separate Alpha and Numeric',
        code: String.raw`
public class SeparateAlphaNumeric {
    public static void main(String[] args) {
        String input = "abc123xyz45";
        StringBuilder alphabets = new StringBuilder();
        StringBuilder numbers = new StringBuilder();

        for (char ch : input.toCharArray()) {
            if (Character.isLetter(ch)) {
                alphabets.append(ch);
            } else if (Character.isDigit(ch)) {
                numbers.append(ch);
            }
        }

        System.out.println("Alphabets: " + alphabets);
        System.out.println("Numbers: " + numbers);
    }
}`
      },
      {
        title: 'Longest Substring Without Repeating',
        code: String.raw`
import java.util.HashMap;
import java.util.Map;

public class LongestSubstringWithoutRepeating {
    public static void main(String[] args) {
        String input = "abcabcbb";
        Map<Character, Integer> lastSeen = new HashMap<>();
        int start = 0;
        int maxLength = 0;

        for (int end = 0; end < input.length(); end++) {
            char ch = input.charAt(end);
            if (lastSeen.containsKey(ch) && lastSeen.get(ch) >= start) {
                start = lastSeen.get(ch) + 1;
            }
            lastSeen.put(ch, end);
            maxLength = Math.max(maxLength, end - start + 1);
        }

        System.out.println("Longest length: " + maxLength);
    }
}`
      },
      {
        title: 'Remove Special Characters',
        code: String.raw`
public class RemoveSpecialCharacters {
    public static void main(String[] args) {
        String input = "Java@123#Code!";
        String output = input.replaceAll("[^a-zA-Z0-9]", "");
        System.out.println(output);
    }
}`
      },
      {
        title: 'First Non-Repeated Character',
        code: String.raw`
import java.util.LinkedHashMap;
import java.util.Map;

public class FirstNonRepeatedCharacter {
    public static void main(String[] args) {
        String input = "swiss";
        Map<Character, Integer> countMap = new LinkedHashMap<>();

        for (char ch : input.toCharArray()) {
            countMap.put(ch, countMap.getOrDefault(ch, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : countMap.entrySet()) {
            if (entry.getValue() == 1) {
                System.out.println(entry.getKey());
                break;
            }
        }
    }
}`
      },
      {
        title: 'Max Occurring Character',
        code: String.raw`
import java.util.HashMap;
import java.util.Map;

public class MaxOccurringCharacter {
    public static void main(String[] args) {
        String input = "automation";
        Map<Character, Integer> countMap = new HashMap<>();
        char maxChar = input.charAt(0);
        int maxCount = 0;

        for (char ch : input.toCharArray()) {
            int count = countMap.getOrDefault(ch, 0) + 1;
            countMap.put(ch, count);
            if (count > maxCount) {
                maxCount = count;
                maxChar = ch;
            }
        }

        System.out.println(maxChar + " = " + maxCount);
    }
}`
      },
      {
        title: 'Double Each Character',
        code: String.raw`
public class DoubleEachCharacter {
    public static void main(String[] args) {
        String input = "java";
        StringBuilder result = new StringBuilder();

        for (char ch : input.toCharArray()) {
            result.append(ch).append(ch);
        }

        System.out.println(result);
    }
}`
      },
      {
        title: 'Swap Two Strings',
        code: String.raw`
public class SwapTwoStrings {
    public static void main(String[] args) {
        String first = "Hello";
        String second = "World";

        first = first + second;
        second = first.substring(0, first.length() - second.length());
        first = first.substring(second.length());

        System.out.println("First: " + first);
        System.out.println("Second: " + second);
    }
}`
      },
      {
        title: 'Print Even Indexed Characters',
        code: String.raw`
public class EvenIndexedCharacters {
    public static void main(String[] args) {
        String input = "automation";

        for (int i = 0; i < input.length(); i += 2) {
            System.out.print(input.charAt(i));
        }
    }
}`
      },
      {
        title: 'Simple Login',
        code: String.raw`
public class SimpleLogin {
    public static void main(String[] args) {
        String username = "admin";
        String password = "admin123";

        if ("admin".equals(username) && "admin123".equals(password)) {
            System.out.println("Login successful");
        } else {
            System.out.println("Invalid credentials");
        }
    }
}`
      },
    ],
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

### Java Code Examples

\`\`\`java
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class StringPrograms {
    public static String reverse(String text) {
        return new StringBuilder(text).reverse().toString();
    }

    public static String reverseEachWord(String sentence) {
        return Arrays.stream(sentence.split("\\\\s+"))
                .map(StringPrograms::reverse)
                .collect(Collectors.joining(" "));
    }

    public static boolean isPalindrome(String text) {
        String cleaned = text.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        return cleaned.equals(reverse(cleaned));
    }

    public static boolean isAnagram(String first, String second) {
        char[] firstArray = first.replaceAll("\\\\s+", "").toLowerCase().toCharArray();
        char[] secondArray = second.replaceAll("\\\\s+", "").toLowerCase().toCharArray();
        Arrays.sort(firstArray);
        Arrays.sort(secondArray);
        return Arrays.equals(firstArray, secondArray);
    }

    public static Map<Character, Integer> characterFrequency(String text) {
        Map<Character, Integer> frequency = new LinkedHashMap<>();
        for (char ch : text.toCharArray()) {
            frequency.put(ch, frequency.getOrDefault(ch, 0) + 1);
        }
        return frequency;
    }

    public static long countVowels(String text) {
        return text.toLowerCase()
                .chars()
                .filter(ch -> "aeiou".indexOf(ch) >= 0)
                .count();
    }

    public static String removeSpaces(String text) {
        return text.replaceAll("\\\\s+", "");
    }

    public static String compress(String text) {
        if (text == null || text.isEmpty()) {
            return text;
        }
        StringBuilder result = new StringBuilder();
        int count = 1;
        for (int i = 1; i <= text.length(); i++) {
            if (i < text.length() && text.charAt(i) == text.charAt(i - 1)) {
                count++;
            } else {
                result.append(text.charAt(i - 1)).append(count);
                count = 1;
            }
        }
        return result.toString();
    }

    public static int longestSubstringWithoutRepeating(String text) {
        Map<Character, Integer> lastSeen = new HashMap<>();
        int start = 0;
        int maxLength = 0;

        for (int end = 0; end < text.length(); end++) {
            char ch = text.charAt(end);
            if (lastSeen.containsKey(ch) && lastSeen.get(ch) >= start) {
                start = lastSeen.get(ch) + 1;
            }
            lastSeen.put(ch, end);
            maxLength = Math.max(maxLength, end - start + 1);
        }
        return maxLength;
    }

    public static Character firstNonRepeatedCharacter(String text) {
        Map<Character, Integer> frequency = characterFrequency(text);
        for (Map.Entry<Character, Integer> entry : frequency.entrySet()) {
            if (entry.getValue() == 1) {
                return entry.getKey();
            }
        }
        return null;
    }

    public static boolean login(String username, String password) {
        Predicate<String> notBlank = value -> value != null && !value.trim().isEmpty();
        return notBlank.test(username)
                && notBlank.test(password)
                && username.equals("admin")
                && password.equals("admin123");
    }

    public static void main(String[] args) {
        String text = "madam";
        System.out.println("Reverse: " + reverse(text));
        System.out.println("Palindrome: " + isPalindrome(text));
        System.out.println("Anagram: " + isAnagram("listen", "silent"));
        System.out.println("Frequency: " + characterFrequency("automation"));
        System.out.println("Compression: " + compress("aaabbcccc"));
    }
}
\`\`\`

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
    examples: [
      {
        title: 'Sort Array - Built-in',
        code: String.raw`
import java.util.Arrays;

public class BuiltInArraySort {
    public static void main(String[] args) {
        int[] numbers = {5, 2, 8, 1, 3};
        Arrays.sort(numbers);
        System.out.println(Arrays.toString(numbers));
    }
}`
      },
      {
        title: 'Selection Sort',
        code: String.raw`
import java.util.Arrays;

public class SelectionSort {
    public static void main(String[] args) {
        int[] numbers = {64, 25, 12, 22, 11};

        for (int i = 0; i < numbers.length - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < numbers.length; j++) {
                if (numbers[j] < numbers[minIndex]) {
                    minIndex = j;
                }
            }
            int temp = numbers[minIndex];
            numbers[minIndex] = numbers[i];
            numbers[i] = temp;
        }

        System.out.println(Arrays.toString(numbers));
    }
}`
      },
      {
        title: 'Bubble Sort',
        code: String.raw`
import java.util.Arrays;

public class BubbleSort {
    public static void main(String[] args) {
        int[] numbers = {5, 1, 4, 2, 8};

        for (int i = 0; i < numbers.length - 1; i++) {
            for (int j = 0; j < numbers.length - i - 1; j++) {
                if (numbers[j] > numbers[j + 1]) {
                    int temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
            }
        }

        System.out.println(Arrays.toString(numbers));
    }
}`
      },
      {
        title: 'Largest and Smallest',
        code: String.raw`
public class LargestSmallest {
    public static void main(String[] args) {
        int[] numbers = {10, 4, 25, 7, 1};
        int largest = numbers[0];
        int smallest = numbers[0];

        for (int number : numbers) {
            largest = Math.max(largest, number);
            smallest = Math.min(smallest, number);
        }

        System.out.println("Largest: " + largest);
        System.out.println("Smallest: " + smallest);
    }
}`
      },
      {
        title: 'Second Largest Element',
        code: String.raw`
public class SecondLargestElement {
    public static void main(String[] args) {
        int[] numbers = {10, 5, 20, 8, 20};
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for (int number : numbers) {
            if (number > largest) {
                secondLargest = largest;
                largest = number;
            } else if (number > secondLargest && number != largest) {
                secondLargest = number;
            }
        }

        System.out.println("Second largest: " + secondLargest);
    }
}`
      },
      {
        title: 'Remove Duplicates',
        code: String.raw`
import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Set;

public class RemoveDuplicates {
    public static void main(String[] args) {
        Integer[] numbers = {1, 2, 2, 3, 4, 4, 5};
        Set<Integer> uniqueNumbers = new LinkedHashSet<>(Arrays.asList(numbers));
        System.out.println(uniqueNumbers);
    }
}`
      },
      {
        title: 'Find Common Elements',
        code: String.raw`
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class CommonElements {
    public static void main(String[] args) {
        Set<Integer> first = new HashSet<>(Arrays.asList(1, 2, 3, 4));
        Set<Integer> second = new HashSet<>(Arrays.asList(3, 4, 5, 6));

        first.retainAll(second);
        System.out.println("Common elements: " + first);
    }
}`
      },
      {
        title: 'Merge Two Arrays',
        code: String.raw`
import java.util.Arrays;

public class MergeTwoArrays {
    public static void main(String[] args) {
        int[] first = {1, 2, 3};
        int[] second = {4, 5, 6};
        int[] merged = Arrays.copyOf(first, first.length + second.length);

        System.arraycopy(second, 0, merged, first.length, second.length);
        System.out.println(Arrays.toString(merged));
    }
}`
      },
      {
        title: 'Linear Search',
        code: String.raw`
public class LinearSearch {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40};
        int target = 30;
        int index = -1;

        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] == target) {
                index = i;
                break;
            }
        }

        System.out.println("Index: " + index);
    }
}`
      },
      {
        title: 'Sum Integers from Mixed Array',
        code: String.raw`
public class SumIntegersFromMixedArray {
    public static void main(String[] args) {
        Object[] values = {10, "Java", 20, true, 30};
        int sum = 0;

        for (Object value : values) {
            if (value instanceof Integer) {
                sum += (Integer) value;
            }
        }

        System.out.println("Sum: " + sum);
    }
}`
      },
      {
        title: 'Count Odd and Even',
        code: String.raw`
public class CountOddEven {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5, 6};
        int odd = 0;
        int even = 0;

        for (int number : numbers) {
            if (number % 2 == 0) {
                even++;
            } else {
                odd++;
            }
        }

        System.out.println("Odd: " + odd);
        System.out.println("Even: " + even);
    }
}`
      },
      {
        title: 'Non-Repeated Elements',
        code: String.raw`
import java.util.LinkedHashMap;
import java.util.Map;

public class NonRepeatedElements {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 2, 3, 4, 4, 5};
        Map<Integer, Integer> countMap = new LinkedHashMap<>();

        for (int number : numbers) {
            countMap.put(number, countMap.getOrDefault(number, 0) + 1);
        }

        countMap.forEach((number, count) -> {
            if (count == 1) {
                System.out.println(number);
            }
        });
    }
}`
      },
      {
        title: 'First and Last of ArrayList',
        code: String.raw`
import java.util.ArrayList;
import java.util.Arrays;

public class FirstLastArrayList {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>(Arrays.asList("Amit", "Ravi", "Neha"));
        System.out.println("First: " + names.get(0));
        System.out.println("Last: " + names.get(names.size() - 1));
    }
}`
      },
      {
        title: 'Find Minimum and Maximum',
        code: String.raw`
import java.util.Arrays;

public class MinMaxUsingStreams {
    public static void main(String[] args) {
        int[] numbers = {9, 4, 7, 1, 12};
        int min = Arrays.stream(numbers).min().orElseThrow();
        int max = Arrays.stream(numbers).max().orElseThrow();

        System.out.println("Min: " + min);
        System.out.println("Max: " + max);
    }
}`
      },
      {
        title: 'Comparable vs Comparator',
        code: String.raw`
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

class Student implements Comparable<Student> {
    String name;
    int marks;

    Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
    }

    public int compareTo(Student other) {
        return Integer.compare(this.marks, other.marks);
    }

    public String toString() {
        return name + " - " + marks;
    }
}

public class ComparableComparatorDemo {
    public static void main(String[] args) {
        List<Student> students = Arrays.asList(
                new Student("Ravi", 75),
                new Student("Amit", 90),
                new Student("Neha", 82)
        );

        students.sort(null);
        System.out.println("By marks: " + students);

        students.sort(Comparator.comparing(student -> student.name));
        System.out.println("By name: " + students);
    }
}`
      },
    ],
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

### Java Code Examples

\`\`\`java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class ArrayCollectionPrograms {
    public static void selectionSort(int[] numbers) {
        for (int i = 0; i < numbers.length - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < numbers.length; j++) {
                if (numbers[j] < numbers[minIndex]) {
                    minIndex = j;
                }
            }
            int temp = numbers[minIndex];
            numbers[minIndex] = numbers[i];
            numbers[i] = temp;
        }
    }

    public static void bubbleSort(int[] numbers) {
        for (int i = 0; i < numbers.length - 1; i++) {
            for (int j = 0; j < numbers.length - i - 1; j++) {
                if (numbers[j] > numbers[j + 1]) {
                    int temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
            }
        }
    }

    public static int secondLargest(int[] numbers) {
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;
        for (int number : numbers) {
            if (number > largest) {
                secondLargest = largest;
                largest = number;
            } else if (number > secondLargest && number != largest) {
                secondLargest = number;
            }
        }
        return secondLargest;
    }

    public static int linearSearch(int[] numbers, int target) {
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] == target) {
                return i;
            }
        }
        return -1;
    }

    public static List<Integer> removeDuplicates(List<Integer> numbers) {
        return new ArrayList<>(new LinkedHashSet<>(numbers));
    }

    public static Set<Integer> commonElements(List<Integer> first, List<Integer> second) {
        Set<Integer> lookup = new LinkedHashSet<>(first);
        lookup.retainAll(second);
        return lookup;
    }

    public static int[] mergeArrays(int[] first, int[] second) {
        int[] merged = Arrays.copyOf(first, first.length + second.length);
        System.arraycopy(second, 0, merged, first.length, second.length);
        return merged;
    }

    public static int sumIntegersFromMixedArray(Object[] values) {
        return Arrays.stream(values)
                .filter(Integer.class::isInstance)
                .map(Integer.class::cast)
                .mapToInt(Integer::intValue)
                .sum();
    }

    public static List<Integer> nonRepeatedElements(List<Integer> numbers) {
        return numbers.stream()
                .filter(number -> numbers.indexOf(number) == numbers.lastIndexOf(number))
                .collect(Collectors.toList());
    }

    public static void sortEmployeesByName(List<Employee> employees) {
        employees.sort(Comparator.comparing(Employee::getName));
    }

    static class Employee implements Comparable<Employee> {
        private final String name;
        private final int salary;

        Employee(String name, int salary) {
            this.name = name;
            this.salary = salary;
        }

        String getName() {
            return name;
        }

        @Override
        public int compareTo(Employee other) {
            return Integer.compare(this.salary, other.salary);
        }
    }

    public static void main(String[] args) {
        int[] numbers = {5, 1, 4, 2, 8};
        bubbleSort(numbers);
        System.out.println(Arrays.toString(numbers));
        System.out.println("Second largest: " + secondLargest(numbers));
        System.out.println(removeDuplicates(Arrays.asList(1, 2, 2, 3, 3, 4)));
    }
}
\`\`\`

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
    examples: [
      {
        title: 'Encapsulation',
        code: String.raw`
class BankAccount {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }
        balance += amount;
    }
}

public class EncapsulationDemo {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();
        account.deposit(5000);
        System.out.println("Balance: " + account.getBalance());
    }
}`
      },
      {
        title: 'Inheritance',
        code: String.raw`
class Vehicle {
    void start() {
        System.out.println("Vehicle started");
    }
}

class Car extends Vehicle {
    void playMusic() {
        System.out.println("Music started");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Car car = new Car();
        car.start();
        car.playMusic();
    }
}`
      },
      {
        title: 'Polymorphism',
        code: String.raw`
class Payment {
    void pay(double amount) {
        System.out.println("Paying " + amount);
    }
}

class CardPayment extends Payment {
    @Override
    void pay(double amount) {
        System.out.println("Paid by card: " + amount);
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        Payment payment = new CardPayment();
        payment.pay(1200);
    }
}`
      },
      {
        title: 'Abstraction',
        code: String.raw`
abstract class Report {
    abstract void generate();

    void printHeader() {
        System.out.println("Report Header");
    }
}

class PdfReport extends Report {
    void generate() {
        System.out.println("Generating PDF report");
    }
}

public class AbstractionDemo {
    public static void main(String[] args) {
        Report report = new PdfReport();
        report.printHeader();
        report.generate();
    }
}`
      },
      {
        title: 'Immutable Class',
        code: String.raw`
final class EmployeeId {
    private final String value;

    public EmployeeId(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}

public class ImmutableClassDemo {
    public static void main(String[] args) {
        EmployeeId employeeId = new EmployeeId("EMP-101");
        System.out.println(employeeId.getValue());
    }
}`
      },
      {
        title: 'String Pool & StringBuilder vs StringBuffer',
        code: String.raw`
public class StringPoolDemo {
    public static void main(String[] args) {
        String first = "Java";
        String second = "Java";
        String third = new String("Java");

        System.out.println(first == second);
        System.out.println(first == third);

        StringBuilder builder = new StringBuilder("Fast");
        builder.append(" mutable string");
        System.out.println(builder);

        StringBuffer buffer = new StringBuffer("Thread-safe");
        buffer.append(" mutable string");
        System.out.println(buffer);
    }
}`
      },
      {
        title: 'Generics',
        code: String.raw`
class Box<T> {
    private T value;

    public void setValue(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }
}

public class GenericsDemo {
    public static void main(String[] args) {
        Box<String> stringBox = new Box<>();
        stringBox.setValue("Java");
        System.out.println(stringBox.getValue());
    }
}`
      },
    ],
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

### Java Code Examples

\`\`\`java
interface Payable {
    double calculatePay();
}

abstract class Employee implements Payable {
    private final int id;
    private final String name;

    protected Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public abstract String getRole();
}

class FullTimeEmployee extends Employee {
    private final double monthlySalary;

    FullTimeEmployee(int id, String name, double monthlySalary) {
        super(id, name);
        this.monthlySalary = monthlySalary;
    }

    @Override
    public double calculatePay() {
        return monthlySalary;
    }

    @Override
    public String getRole() {
        return "Full Time Employee";
    }
}

final class ImmutableAddress {
    private final String city;
    private final String country;

    ImmutableAddress(String city, String country) {
        this.city = city;
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public String getCountry() {
        return country;
    }
}

class Box<T> {
    private T value;

    public void setValue(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }
}

public class OopCoreDemo {
    public static void printEmployee(Employee employee) {
        System.out.println(employee.getName() + " - " + employee.getRole());
        System.out.println("Pay: " + employee.calculatePay());
    }

    public static void main(String[] args) {
        Employee employee = new FullTimeEmployee(101, "Raghu", 75000);
        printEmployee(employee);

        ImmutableAddress address = new ImmutableAddress("Pune", "India");
        System.out.println(address.getCity());

        Box<String> box = new Box<>();
        box.setValue("Generic value");
        System.out.println(box.getValue());
    }
}
\`\`\`

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
    examples: [
      {
        title: 'Singleton Pattern',
        code: String.raw`
class DriverManagerSingleton {
    private static final DriverManagerSingleton INSTANCE = new DriverManagerSingleton();

    private DriverManagerSingleton() {
    }

    public static DriverManagerSingleton getInstance() {
        return INSTANCE;
    }
}

public class SingletonDemo {
    public static void main(String[] args) {
        DriverManagerSingleton first = DriverManagerSingleton.getInstance();
        DriverManagerSingleton second = DriverManagerSingleton.getInstance();
        System.out.println(first == second);
    }
}`
      },
      {
        title: 'Factory Pattern',
        code: String.raw`
interface Browser {
    void open();
}

class ChromeBrowser implements Browser {
    public void open() {
        System.out.println("Chrome opened");
    }
}

class FirefoxBrowser implements Browser {
    public void open() {
        System.out.println("Firefox opened");
    }
}

class BrowserFactory {
    static Browser createBrowser(String browserName) {
        if ("chrome".equalsIgnoreCase(browserName)) {
            return new ChromeBrowser();
        }
        if ("firefox".equalsIgnoreCase(browserName)) {
            return new FirefoxBrowser();
        }
        throw new IllegalArgumentException("Invalid browser");
    }
}

public class FactoryDemo {
    public static void main(String[] args) {
        Browser browser = BrowserFactory.createBrowser("chrome");
        browser.open();
    }
}`
      },
      {
        title: 'Builder Pattern',
        code: String.raw`
class ApiRequest {
    private final String method;
    private final String endpoint;
    private final String body;

    private ApiRequest(Builder builder) {
        this.method = builder.method;
        this.endpoint = builder.endpoint;
        this.body = builder.body;
    }

    static class Builder {
        private String method;
        private String endpoint;
        private String body;

        Builder method(String method) {
            this.method = method;
            return this;
        }

        Builder endpoint(String endpoint) {
            this.endpoint = endpoint;
            return this;
        }

        Builder body(String body) {
            this.body = body;
            return this;
        }

        ApiRequest build() {
            return new ApiRequest(this);
        }
    }
}

public class BuilderDemo {
    public static void main(String[] args) {
        ApiRequest request = new ApiRequest.Builder()
                .method("POST")
                .endpoint("/users")
                .body("{name: 'Raghu'}")
                .build();

        System.out.println(request);
    }
}`
      },
      {
        title: 'Page Object Model',
        code: String.raw`
class LoginPage {
    void enterUsername(String username) {
        System.out.println("Entered username: " + username);
    }

    void enterPassword(String password) {
        System.out.println("Entered password");
    }

    void clickLogin() {
        System.out.println("Clicked login button");
    }
}

public class PageObjectModelDemo {
    public static void main(String[] args) {
        LoginPage loginPage = new LoginPage();
        loginPage.enterUsername("admin");
        loginPage.enterPassword("admin123");
        loginPage.clickLogin();
    }
}`
      },
      {
        title: 'Strategy Pattern',
        code: String.raw`
interface ReportStrategy {
    void generate(String message);
}

class ConsoleReport implements ReportStrategy {
    public void generate(String message) {
        System.out.println("Console: " + message);
    }
}

class HtmlReport implements ReportStrategy {
    public void generate(String message) {
        System.out.println("<html>" + message + "</html>");
    }
}

public class StrategyDemo {
    public static void main(String[] args) {
        ReportStrategy strategy = new ConsoleReport();
        strategy.generate("Test passed");
    }
}`
      },
      {
        title: 'Observer Pattern',
        code: String.raw`
import java.util.ArrayList;
import java.util.List;

interface TestListener {
    void onTestFinish(String testName);
}

class TestRunner {
    private final List<TestListener> listeners = new ArrayList<>();

    void addListener(TestListener listener) {
        listeners.add(listener);
    }

    void finishTest(String testName) {
        for (TestListener listener : listeners) {
            listener.onTestFinish(testName);
        }
    }
}

public class ObserverDemo {
    public static void main(String[] args) {
        TestRunner runner = new TestRunner();
        runner.addListener(testName -> System.out.println("Finished: " + testName));
        runner.finishTest("LoginTest");
    }
}`
      },
    ],
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

### Java Code Examples

\`\`\`java
import java.util.ArrayList;
import java.util.List;

class DriverManagerSingleton {
    private static final DriverManagerSingleton INSTANCE = new DriverManagerSingleton();

    private DriverManagerSingleton() {
    }

    public static DriverManagerSingleton getInstance() {
        return INSTANCE;
    }
}

interface Browser {
    void open();
}

class ChromeBrowser implements Browser {
    public void open() {
        System.out.println("Opening Chrome");
    }
}

class FirefoxBrowser implements Browser {
    public void open() {
        System.out.println("Opening Firefox");
    }
}

class BrowserFactory {
    public static Browser createBrowser(String browserName) {
        if ("chrome".equalsIgnoreCase(browserName)) {
            return new ChromeBrowser();
        }
        if ("firefox".equalsIgnoreCase(browserName)) {
            return new FirefoxBrowser();
        }
        throw new IllegalArgumentException("Unsupported browser: " + browserName);
    }
}

class ApiRequest {
    private final String method;
    private final String endpoint;
    private final String body;

    private ApiRequest(Builder builder) {
        this.method = builder.method;
        this.endpoint = builder.endpoint;
        this.body = builder.body;
    }

    static class Builder {
        private String method;
        private String endpoint;
        private String body;

        Builder method(String method) {
            this.method = method;
            return this;
        }

        Builder endpoint(String endpoint) {
            this.endpoint = endpoint;
            return this;
        }

        Builder body(String body) {
            this.body = body;
            return this;
        }

        ApiRequest build() {
            return new ApiRequest(this);
        }
    }
}

interface ReportStrategy {
    void generate(String message);
}

class ConsoleReportStrategy implements ReportStrategy {
    public void generate(String message) {
        System.out.println("Console report: " + message);
    }
}

interface TestListener {
    void onTestFinished(String testName);
}

class TestRunner {
    private final List<TestListener> listeners = new ArrayList<>();

    void addListener(TestListener listener) {
        listeners.add(listener);
    }

    void finishTest(String testName) {
        listeners.forEach(listener -> listener.onTestFinished(testName));
    }
}

public class DesignPatternDemo {
    public static void main(String[] args) {
        Browser browser = BrowserFactory.createBrowser("chrome");
        browser.open();

        ApiRequest request = new ApiRequest.Builder()
                .method("POST")
                .endpoint("/users")
                .body("{name: 'Raghu'}")
                .build();

        ReportStrategy report = new ConsoleReportStrategy();
        report.generate("Login test passed");

        TestRunner runner = new TestRunner();
        runner.addListener(testName -> System.out.println("Finished: " + testName));
        runner.finishTest("LoginTest");
    }
}
\`\`\`

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
    examples: [
      {
        title: 'Single Responsibility Principle',
        code: String.raw`
class Invoice {
    double amount;

    Invoice(double amount) {
        this.amount = amount;
    }
}

class InvoicePrinter {
    void print(Invoice invoice) {
        System.out.println("Invoice amount: " + invoice.amount);
    }
}

public class SrpDemo {
    public static void main(String[] args) {
        Invoice invoice = new Invoice(2500);
        new InvoicePrinter().print(invoice);
    }
}`
      },
      {
        title: 'Open/Closed Principle',
        code: String.raw`
interface Discount {
    double apply(double amount);
}

class FestivalDiscount implements Discount {
    public double apply(double amount) {
        return amount * 0.90;
    }
}

public class OcpDemo {
    public static void main(String[] args) {
        Discount discount = new FestivalDiscount();
        System.out.println(discount.apply(1000));
    }
}`
      },
      {
        title: 'Interface Segregation Principle',
        code: String.raw`
interface Printable {
    void print();
}

interface Scannable {
    void scan();
}

class BasicPrinter implements Printable {
    public void print() {
        System.out.println("Printing document");
    }
}

public class IspDemo {
    public static void main(String[] args) {
        Printable printer = new BasicPrinter();
        printer.print();
    }
}`
      },
      {
        title: 'Liskov Substitution Principle',
        code: String.raw`
class Bird {
    void eat() {
        System.out.println("Bird is eating");
    }
}

class Sparrow extends Bird {
    void fly() {
        System.out.println("Sparrow is flying");
    }
}

public class LspDemo {
    public static void main(String[] args) {
        Bird bird = new Sparrow();
        bird.eat();
    }
}`
      },
      {
        title: 'Dependency Inversion Principle',
        code: String.raw`
interface MessageSender {
    void send(String message);
}

class EmailSender implements MessageSender {
    public void send(String message) {
        System.out.println("Email: " + message);
    }
}

class NotificationService {
    private final MessageSender sender;

    NotificationService(MessageSender sender) {
        this.sender = sender;
    }

    void notifyUser(String message) {
        sender.send(message);
    }
}

public class DipDemo {
    public static void main(String[] args) {
        NotificationService service = new NotificationService(new EmailSender());
        service.notifyUser("Build completed");
    }
}`
      },
      {
        title: 'Custom Checked Exception',
        code: String.raw`
class InvalidFileException extends Exception {
    InvalidFileException(String message) {
        super(message);
    }
}

public class CustomCheckedExceptionDemo {
    static void validateFile(String fileName) throws InvalidFileException {
        if (!fileName.endsWith(".txt")) {
            throw new InvalidFileException("Only .txt files are allowed");
        }
    }

    public static void main(String[] args) {
        try {
            validateFile("report.pdf");
        } catch (InvalidFileException exception) {
            System.out.println(exception.getMessage());
        }
    }
}`
      },
      {
        title: 'Custom Unchecked Exception',
        code: String.raw`
class InvalidAgeException extends RuntimeException {
    InvalidAgeException(String message) {
        super(message);
    }
}

public class CustomUncheckedExceptionDemo {
    static void validateAge(int age) {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 or above");
        }
    }

    public static void main(String[] args) {
        validateAge(20);
        System.out.println("Age is valid");
    }
}`
      },
      {
        title: 'Exception Handling',
        code: String.raw`
public class ExceptionHandlingDemo {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException exception) {
            System.out.println("Cannot divide by zero");
        } finally {
            System.out.println("Execution completed");
        }
    }
}`
      },
      {
        title: 'throw vs throws',
        code: String.raw`
public class ThrowThrowsDemo {
    static void checkNumber(int number) throws IllegalArgumentException {
        if (number < 0) {
            throw new IllegalArgumentException("Number cannot be negative");
        }
    }

    public static void main(String[] args) {
        checkNumber(10);
        System.out.println("Valid number");
    }
}`
      },
      {
        title: 'try-with-resources',
        code: String.raw`
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class TryWithResourcesDemo {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("input.txt"))) {
            System.out.println(reader.readLine());
        } catch (IOException exception) {
            System.out.println("File read failed: " + exception.getMessage());
        }
    }
}`
      },
    ],
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

### Java Code Examples

\`\`\`java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

interface NotificationSender {
    void send(String message);
}

class EmailSender implements NotificationSender {
    public void send(String message) {
        System.out.println("Email sent: " + message);
    }
}

class SmsSender implements NotificationSender {
    public void send(String message) {
        System.out.println("SMS sent: " + message);
    }
}

class NotificationService {
    private final NotificationSender sender;

    NotificationService(NotificationSender sender) {
        this.sender = sender;
    }

    public void notifyUser(String message) {
        sender.send(message);
    }
}

class InvalidAgeException extends RuntimeException {
    InvalidAgeException(String message) {
        super(message);
    }
}

class UserValidator {
    public void validateAge(int age) {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 or above");
        }
    }
}

public class SolidExceptionDemo {
    public static String readFirstLine(String filePath) throws IOException {
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            return reader.readLine();
        }
    }

    public static void main(String[] args) {
        NotificationService service = new NotificationService(new EmailSender());
        service.notifyUser("Build completed");

        try {
            new UserValidator().validateAge(16);
        } catch (InvalidAgeException exception) {
            System.out.println("Validation failed: " + exception.getMessage());
        } finally {
            System.out.println("Validation finished");
        }
    }
}
\`\`\`

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
    examples: [
      {
        title: 'Thread Class',
        code: String.raw`
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}

public class ThreadClassDemo {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
    }
}`
      },
      {
        title: 'Runnable Interface',
        code: String.raw`
public class RunnableDemo {
    public static void main(String[] args) {
        Runnable task = () -> System.out.println("Runnable is running");
        Thread thread = new Thread(task);
        thread.start();
    }
}`
      },
      {
        title: 'Synchronized Keyword',
        code: String.raw`
class Counter {
    private int count;

    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}

public class SynchronizedDemo {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();
        Thread first = new Thread(counter::increment);
        Thread second = new Thread(counter::increment);

        first.start();
        second.start();
        first.join();
        second.join();

        System.out.println(counter.getCount());
    }
}`
      },
      {
        title: 'HashMap, LinkedHashMap, TreeMap, ConcurrentHashMap',
        code: String.raw`
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.TreeMap;
import java.util.concurrent.ConcurrentHashMap;

public class MapTypesDemo {
    public static void main(String[] args) {
        Map<String, Integer> hashMap = new HashMap<>();
        Map<String, Integer> linkedHashMap = new LinkedHashMap<>();
        Map<String, Integer> treeMap = new TreeMap<>();
        Map<String, Integer> concurrentHashMap = new ConcurrentHashMap<>();

        hashMap.put("b", 2);
        linkedHashMap.put("a", 1);
        treeMap.put("c", 3);
        concurrentHashMap.put("safe", 100);

        System.out.println(hashMap);
        System.out.println(linkedHashMap);
        System.out.println(treeMap);
        System.out.println(concurrentHashMap);
    }
}`
      },
      {
        title: 'ExecutorService and Future',
        code: String.raw`
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class ExecutorServiceDemo {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(2);
        Future<String> result = executor.submit(() -> "Task completed");

        System.out.println(result.get());
        executor.shutdown();
    }
}`
      },
      {
        title: 'Streams API',
        code: String.raw`
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamsApiDemo {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

        List<Integer> evenNumbers = numbers.stream()
                .filter(number -> number % 2 == 0)
                .collect(Collectors.toList());

        System.out.println(evenNumbers);
    }
}`
      },
      {
        title: 'Lambda Expressions',
        code: String.raw`
import java.util.Arrays;
import java.util.List;

public class LambdaDemo {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Ravi", "Amit", "Neha");
        names.forEach(name -> System.out.println(name.toUpperCase()));
    }
}`
      },
      {
        title: 'Optional',
        code: String.raw`
import java.util.Optional;

public class OptionalDemo {
    public static void main(String[] args) {
        String value = null;
        String result = Optional.ofNullable(value)
                .orElse("Default value");

        System.out.println(result);
    }
}`
      },
      {
        title: 'Functional Interfaces',
        code: String.raw`
import java.util.function.Function;
import java.util.function.Predicate;

public class FunctionalInterfaceDemo {
    public static void main(String[] args) {
        Predicate<Integer> isEven = number -> number % 2 == 0;
        Function<String, Integer> length = text -> text.length();

        System.out.println(isEven.test(10));
        System.out.println(length.apply("Java"));
    }
}`
      },
      {
        title: 'Default and Static Interface Methods',
        code: String.raw`
interface TestReporter {
    default void printReport() {
        System.out.println("Default report");
    }

    static void printVersion() {
        System.out.println("Reporter v1");
    }
}

class HtmlReporter implements TestReporter {
}

public class InterfaceMethodDemo {
    public static void main(String[] args) {
        new HtmlReporter().printReport();
        TestReporter.printVersion();
    }
}`
      },
      {
        title: 'Method References',
        code: String.raw`
import java.util.Arrays;
import java.util.List;

public class MethodReferenceDemo {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Ravi", "Amit", "Neha");
        names.forEach(System.out::println);
    }
}`
      },
      {
        title: 'List vs Set vs Queue',
        code: String.raw`
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Queue;
import java.util.Set;

public class CollectionTypesDemo {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        Set<String> set = new HashSet<>();
        Queue<String> queue = new ArrayDeque<>();

        list.add("A");
        list.add("A");
        set.add("A");
        set.add("A");
        queue.add("A");

        System.out.println(list);
        System.out.println(set);
        System.out.println(queue.poll());
    }
}`
      },
      {
        title: 'hashCode and equals Contract',
        code: String.raw`
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

class Employee {
    private final int id;

    Employee(int id) {
        this.id = id;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Employee)) {
            return false;
        }
        Employee other = (Employee) obj;
        return id == other.id;
    }

    public int hashCode() {
        return Objects.hash(id);
    }
}

public class EqualsHashCodeDemo {
    public static void main(String[] args) {
        Set<Employee> employees = new HashSet<>();
        employees.add(new Employee(101));
        employees.add(new Employee(101));
        System.out.println(employees.size());
    }
}`
      },
    ],
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

### Java Code Examples

\`\`\`java
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.Callable;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.function.Predicate;
import java.util.stream.Collectors;

class Counter {
    private int value;

    public synchronized void increment() {
        value++;
    }

    public int getValue() {
        return value;
    }
}

public class Java8AdvancedDemo {
    public static void runnableExample() {
        Thread thread = new Thread(() -> System.out.println("Running in thread"));
        thread.start();
    }

    public static List<Integer> filterEvenNumbers(List<Integer> numbers) {
        Predicate<Integer> isEven = number -> number % 2 == 0;
        return numbers.stream()
                .filter(isEven)
                .collect(Collectors.toList());
    }

    public static int sumUsingStreams(List<Integer> numbers) {
        return numbers.stream()
                .mapToInt(Integer::intValue)
                .sum();
    }

    public static String optionalExample(String value) {
        return Optional.ofNullable(value)
                .map(String::trim)
                .filter(text -> !text.isEmpty())
                .orElse("default");
    }

    public static void executorServiceExample() throws Exception {
        ExecutorService executorService = Executors.newFixedThreadPool(2);
        Callable<String> task = () -> "Task completed";
        Future<String> result = executorService.submit(task);
        System.out.println(result.get());
        executorService.shutdown();
    }

    public static void concurrentMapExample() {
        Map<String, Integer> scores = new ConcurrentHashMap<>();
        scores.put("login", 1);
        scores.merge("login", 1, Integer::sum);
        System.out.println(scores);
    }

    public static void main(String[] args) throws Exception {
        runnableExample();
        System.out.println(filterEvenNumbers(Arrays.asList(1, 2, 3, 4, 5, 6)));
        System.out.println(sumUsingStreams(Arrays.asList(10, 20, 30)));
        System.out.println(optionalExample(null));
        executorServiceExample();
        concurrentMapExample();
    }
}
\`\`\`

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
