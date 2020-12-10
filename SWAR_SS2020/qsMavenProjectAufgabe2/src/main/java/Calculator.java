public class Calculator implements ICalculator {

    public int add(int value_1, int value_2) {
        int result = value_1+value_2;
        return result;
    }

    public int subtract(int value_1, int value_2) {
        int result = value_1-value_2;
        return result;
    }

    public int multiply(int value_1, int value_2) {
        int result = value_1*value_2;
        return result;
    }

    public int divide (int value_1, int value_2) {
        int result = value_1/value_2;
        return result;
    }

}
