public class Test {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        Example.main();
        Example.example();
    }

}

class Example {
    public static void main() {
    }

    public static void example() {
        System.out.println("Test for LSP and static method");
    }
}
