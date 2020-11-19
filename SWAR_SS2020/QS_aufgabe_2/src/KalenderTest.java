import static org.junit.Assert.*;
import org.junit.*;

public class KalenderTest {

    Kalender testKalender;

    @Before
    public void init() {
        testKalender = new Kalender();
    }

    @Test
    public void testTagImJanuar(){
        init();
        assertTrue(testKalender.tagGültig(1,1));
        cleanUp();
    }

    @Test
    public void testTagImFebruar() {
        init();
        assertTrue(testKalender.tagGültig(1,2));
        cleanUp();
    }

    @Test
    public void testTagImJuni(){
        init();
        assertFalse(testKalender.tagGültig(1,6));
        cleanUp();
    }

    @Test
    public void testDatumUngueltig_1(){
        init();
        assertFalse(testKalender.tagGültig(0,1));
        cleanUp();
    }

    @Test
    public void testDatumUngueltig_2(){
        init();
        assertFalse(testKalender.tagGültig(1,0));
        cleanUp();
    }

    @Test
    public void testDatumUngueltig_3(){
        init();
        assertFalse(testKalender.tagGültig(32,1));
        cleanUp();
    }

    @Test
    public void testDatumUngueltig_4(){
        init();
        assertFalse(testKalender.tagGültig(31,2));
        cleanUp();
    }

    @Test
    public void testDatumUngueltig_5(){
        init();
        assertFalse(testKalender.tagGültig(30,2));
        cleanUp();
    }

    @After
    public void cleanUp() {
        testKalender = null;
    }

}