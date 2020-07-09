public class ueben {
    public static void main(String[] args) {
        printYearsAndDays(581760);
    }

    public static void printYearsAndDays(long minutes) {
        if(minutes<0) {
            System.out.println("Invalid Value");
        } else {
            long days=minutes/(60*24);
            if(days==365) {
                days=0;
            } else if (days>365) {
                long holdDays= days/365;
                days=days-(365*holdDays);
            }
            long years=minutes/(365*24*60);
            System.out.println(minutes+" min = "+years+" y and "+days+" d");
        }
    }
}
