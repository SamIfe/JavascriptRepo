import java.util.Scanner;
public class Print{
	public static void main(String... arg){
	Scanner input = new Scanner(System.in);

	 System.out.println("Enter three integer: ");
		double number1 = input.nextDouble();
		double number2 = input.nextDouble();
		double number3 = input.nextDouble();

	double minimum = number1;
	if( number2 < minimum){
	minimum = number2;
	if( number3 < minimum);
	minimum = number3;

		}
	 System.out.printf("Minimum is %s%n ", minimum);

	}	

}
