public class MainCalculator {
    public static void main(String[] args) {
        ICalculator calculator = new Calculator();
        System.out.println(calculator.add(5,5));
        System.out.println(calculator.subtract(5,5));
        System.out.println(calculator.multiply(5,5));
        System.out.println(calculator.divide(5,5));
    }
}
