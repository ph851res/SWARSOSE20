import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class CalculatorTest {
    ICalculator calculator;

    @Before
    public void init() {
        calculator = new Calculator();
    }

    @After
    public void clean() {
         calculator = null;
    }

    @Test
    public void addFivePlusFive() {
        assertEquals(calculator.add(5, 5), 10);
    }

    @Test
    public void substractFiveMinusFive() {
        assertEquals(calculator.subtract(5,5), 0);
    }

    @Test
    public void multiplyFiveTimesFive() {
        assertEquals(calculator.multiply(5,5),25);
    }

    @Test
    public void divideFiveDividedByFive() {
        assertEquals(calculator.divide(5,5),1);
    }

    @Test
    public void divideThreeDividedBySix() {
        assertEquals(calculator.divide(9,6),1);
    }


}